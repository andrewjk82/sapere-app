import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIME_OPTIONS } from "../constants/timeOptions";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  BookOpen,
  FileText,
  Plus,
  Trash2,
  Trophy,
  Mail,
  Phone,
  Check,
  Clock,
  X,
  Target,
  ClipboardList,
  LayoutGrid,
  Settings as SettingsIcon,
} from "lucide-react";
import { db, auth } from "../firebase/config";
import {
  doc,
  updateDoc,
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
  limit,
  orderBy,
  documentId,
  deleteField,
  increment,
} from "firebase/firestore";

// Stat docs are date-keyed (YYYY-MM-DD) and grow by 1-2/day per student, so an
// unbounded subscription costs more reads every week. 60 recent docs ≈ 2 months
// of history — enough for every panel; XP recalculation still scans everything.
const STAT_HISTORY_LIMIT = 60;
import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
  mergeHscResults,
  saveCachedHscResults,
  touchHscResultsSyncMeta,
} from "../services/hscResultsService";
import { createDailyAssignment, fetchOrCreateDailyAssignment, getCurriculumSignature, getDailyAssignmentCacheKey } from "../services/dailyAssignmentService";
import { exportExactQuestionsPdf } from "../utils/exportPdf";
import { touchStudentsSyncMeta } from "../services/studentService";
import { localCache } from "../services/localCacheService";
import { generateLearningRecommendations } from "../utils/analyticsUtils";
import { useToast } from "../context/ToastContext";
import { CURRICULUM_DATA } from "../constants/curriculumData";
import MathView, { toDisplayText } from "./MathView";
import HscScoreChart from "./HscScoreChart";
import HscTab from "./studentDetail/HscTab";
import WeeklyProgressTrackers from "./studentDetail/WeeklyProgressTrackers";
import ChallengeDetailModal from "./studentDetail/ChallengeDetailModal";
import ExtraRoundsPanel from "./challenge/ExtraRoundsPanel";
import BasicCalculationPanel from "./studentDetail/BasicCalculationPanel";
import DailyPracticeSettings from "./studentDetail/DailyPracticeSettings";
import ChallengeAnalyticsPanel from "./studentDetail/ChallengeAnalyticsPanel";
import ChallengePerformanceHero from "./studentDetail/ChallengePerformanceHero";
import CollapsibleSection from "./studentDetail/CollapsibleSection";
import LearningOverview from "./studentDetail/LearningOverview";
import TermResultsCard from "./studentDetail/TermResultsCard";
import QuickSwitches from "./studentDetail/QuickSwitches";
import HomeworkTab from "./studentDetail/HomeworkTab";
import PracticeHistory from "./studentDetail/PracticeHistory";
import ProgressTab from "./studentDetail/ProgressTab";
import SecretNotebookPanel from "./studentDetail/SecretNotebookPanel";
import ExamPrepPanel from "./studentDetail/ExamPrepPanel";
import HscPastPaperPanel from "./studentDetail/HscPastPaperPanel";
import ScholarshipPanel from "./studentDetail/ScholarshipPanel";
import SpecialProgressPanel from "./studentDetail/SpecialProgressPanel";
import MistakeReview from "./studentDetail/MistakeReview";
import EditStudentModal from "./studentDetail/EditStudentModal";
import ScheduleModal from "./studentDetail/ScheduleModal";
import StudentHeaderCard from "./studentDetail/StudentHeaderCard";
import StudentDashboardCard from "./studentDetail/StudentDashboardCard";
import HomeworkSubmissionViewer from "./homework/HomeworkSubmissionViewer";
import { markHomeworkChecked } from "../services/homeworkService";
import useStudentSessions from "../hooks/useStudentSessions";
import { adjustXp } from "../services/xpService";
import { subscribeSessionHistory, resetSessionHistory } from "../services/teacherSessions";
import { courseTopics, deriveTopicStates, topicStatuses, summarize, byChapter } from "../utils/topicProgress";
import "./student-detail.css";

const ROLE_OPTIONS = [
  { value: "", label: "Not set" },
  { value: "student", label: "Student" },
  { value: "parent", label: "Parent" },
];

const getRoleLabel = (role) => {
  if (role === "student") return "Student";
  if (role === "parent") return "Parent";
  if (role === "admin") return "Admin";
  return "Role not set";
};

const toJsDate = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value?.toDate === "function") return value.toDate();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const isSameCalendarDay = (a, b) => {
  const dateA = toJsDate(a);
  const dateB = toJsDate(b);
  if (!dateA || !dateB) return false;
  return dateA.toISOString().slice(0, 10) === dateB.toISOString().slice(0, 10);
};

const sortStatsByDateDesc = (stats) =>
  [...stats].sort((a, b) => {
    const dateA = toJsDate(a.timestamp || a.completedAt || a.createdAt || a.id);
    const dateB = toJsDate(b.timestamp || b.completedAt || b.createdAt || b.id);
    return (dateB?.getTime() || 0) - (dateA?.getTime() || 0);
  });

const getTodayDateKey = () => new Date().toLocaleDateString("en-CA");
const getChallengeBootMetaId = (uid, date = getTodayDateKey()) => `challenge_boot_${uid}_${date}`;
const SCHEDULE_STUDENT_PROFILE_CACHE_VERSION = 1;
const STUDENT_LIST_CACHE_VERSION = 2;
const getScheduleStudentProfileCacheKey = (studentId) =>
  `schedule-student-profile:v${SCHEDULE_STUDENT_PROFILE_CACHE_VERSION}:${studentId}`;
const getStudentsCacheKey = (tutorId, isAdmin) =>
  `students:v${STUDENT_LIST_CACHE_VERSION}:${isAdmin ? "admin" : tutorId || "unknown"}`;

const normalizeEmail = (email) => (email || "").trim().toLowerCase();

const curriculumSyncFields = [
  "assignedYear",
  "assignedCourse",
  "assignedChapters",
  "completedChapters",
  "chapterDates",
  "dailyPracticeConfig",
  "dailyQuestionCount",
  "calculationEnabled",
  "calcQuestionCount",
  "showHscGraph",
  "examPrepEnabled",
  "scholarshipEnabled",
  "scholarshipExams",
  "scholarshipSubjects",
  "scholarshipTestDate",
  "scholarshipTestLabel",
  "examPrepSelection",
  "hscPastPaperEnabled",
  "hscPastPaperCount",
  "term1ExamDate",
  "term2ExamDate",
  "term3ExamDate",
  "term4ExamDate",
];

const pickDefinedCurriculumFields = (data = {}) =>
  curriculumSyncFields.reduce((acc, field) => {
    if (data[field] !== undefined) acc[field] = data[field];
    return acc;
  }, {});

const hasFieldDifferences = (current = {}, next = {}) =>
  Object.entries(next).some(([field, value]) => {
    try {
      return JSON.stringify(current[field]) !== JSON.stringify(value);
    } catch {
      return current[field] !== value;
    }
  });

const StudentDetail = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [assignedChapters, setAssignedChapters] = useState([]);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [homeworkSessions, setHomeworkSessions] = useState([]);
  const [homeworkLoading, setHomeworkLoading] = useState(false);
  const [homeworkError, setHomeworkError] = useState(false);
  const [homeworkTry, setHomeworkTry] = useState(0);
  const [viewHomeworkId, setViewHomeworkId] = useState(null);
  const [dailyPracticeConfig, setDailyPracticeConfig] = useState({ years: [], chapters: [] });

  const [booking, setBooking] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [sendingReport, setSendingReport] = useState(false);
  const [sendingParentReport, setSendingParentReport] = useState(false);
  // Parent contact lives in parent_contacts/{uid} (admin-only in firestore.rules), never on the student's own doc.
  const [parentContact, setParentContact] = useState({ parentEmail: "", parentExtraEmails: [], parentLang: "en" });
  const [exportingDailyPdf, setExportingDailyPdf] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscSaving, setHscSaving] = useState(false);
  const [hscTypeStats, setHscTypeStats] = useState(null); // null = not loaded yet
  const [hscForm, setHscForm] = useState({
    examDate: getTodayDateKey(),
    paper: "",
    score: "",
    total: "100",
    notes: "",
    topics: { Algebra: "", Calculus: "", Statistics: "", Trigonometry: "" },
  });
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const { showToast } = useToast();
  const [editingTerm, setEditingTerm] = useState(null);
  // registeredUid tracks the Firebase Auth UID (users/ collection) of the student.
  // A student may be loaded as 'manual' (students/ collection) but when they actually
  // log in and take challenges, results are written to users/{uid}/. We must read both.
  const [registeredUid, setRegisteredUid] = useState(null);
  const activeStudentId = student?.id || studentId;
  const activeStudentCollection = student?.source === "manual" ? "students" : "users";
  // The UID that challenge results are actually written to:
  const challengeResultsUid = registeredUid || (activeStudentCollection === 'users' ? activeStudentId : null);
  const updateLocalStudentProfileCache = (patch = {}) => {
    if (!activeStudentId) return;
    const savedAt = Date.now();
    const nextProfile = {
      ...(student || {}),
      id: activeStudentId,
      source: activeStudentCollection === "students" ? "manual" : "registered",
      ...patch,
    };

    localCache.set(getScheduleStudentProfileCacheKey(activeStudentId), {
      savedAt,
      profile: nextProfile,
    });

    const updateListCache = (cacheKey) => {
      const cached = localCache.get(cacheKey);
      if (!Array.isArray(cached?.students)) return;
      const nextStudents = cached.students.map((item) => {
        const sameId = item.id === activeStudentId || item.linkedManualStudentId === activeStudentId;
        const sameEmail = normalizeEmail(item.email) && normalizeEmail(item.email) === normalizeEmail(nextProfile.email);
        return sameId || sameEmail ? { ...item, ...patch } : item;
      });
      localCache.set(cacheKey, {
        ...cached,
        savedAt,
        students: nextStudents,
      });
    };

    updateListCache(getStudentsCacheKey(student?.tutorId, true));
    if (student?.tutorId) updateListCache(getStudentsCacheKey(student.tutorId, false));
  };
  const touchStudentListMeta = () => {
    touchStudentsSyncMeta(student?.tutorId, true).catch(() => {});
    if (student?.tutorId) touchStudentsSyncMeta(student.tutorId, false).catch(() => {});
    // Bump the registered user's sync_meta/{bootDocId} doc so the student
    // app's onSnapshot listener picks up the teacher's change and refreshes
    // its cached studentProfile. Without this the student keeps using a
    // stale local profile (e.g. old dailyQuestionCount, old examPrepEnabled).
    const bumpTargets = new Set();
    if (activeStudentCollection === "users" && activeStudentId) bumpTargets.add(activeStudentId);
    // For manual student records that are linked to a registered account,
    // also bump the registered user's doc — that's the one the student app
    // actually subscribes to.
    if (challengeResultsUid) bumpTargets.add(challengeResultsUid);
    bumpTargets.forEach((uid) => {
      setDoc(doc(db, "sync_meta", getChallengeBootMetaId(uid)), {
        version: Date.now(),
        profileVersion: Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true }).catch(() => {});
    });
  };

  const handleUpdateDailyConfig = (newConfig) => {
    setDailyPracticeConfig(newConfig);
    // Write to the teacher's record AND mirror to the linked registered
    // account (users/{registeredUid}) — that is the doc the student's app
    // reads dailyPracticeConfig from when generating the daily challenge.
    const targets = [doc(db, activeStudentCollection, activeStudentId)];
    if (challengeResultsUid && challengeResultsUid !== activeStudentId) {
      targets.push(doc(db, "users", challengeResultsUid));
    }
    Promise.all(
      targets.map((ref) =>
        updateDoc(ref, { dailyPracticeConfig: newConfig }).catch((e) =>
          console.warn("daily config write failed:", e?.code || e),
        ),
      ),
    ).then(async () => {
      updateLocalStudentProfileCache({ dailyPracticeConfig: newConfig });
      touchStudentListMeta();

      // Invalidate today's daily assignment for the student if the new config
      // produces a different curriculum signature — so the student gets fresh
      // questions matching the updated settings next time they open the challenge.
      const studentUid = challengeResultsUid;
      if (!studentUid) return;
      const today = new Date().toLocaleDateString("en-CA");
      const assignmentRef = doc(db, "users", studentUid, "daily_assignments", today);
      try {
        const snap = await getDoc(assignmentRef);
        if (!snap.exists()) return;
        const existing = snap.data();
        // Only invalidate "open" assignments — never touch started/completed ones.
        if (existing.status !== "open") return;
        const updatedProfile = { ...(student || {}), dailyPracticeConfig: newConfig };
        const newSig = getCurriculumSignature(updatedProfile);
        if (existing.curriculumSignature !== newSig) {
          // Delete so fetchOrCreateDailyAssignment regenerates with new settings.
          await deleteDoc(assignmentRef);
          localCache.remove(getDailyAssignmentCacheKey(studentUid, today));
          console.log("[StudentDetail] Today's open assignment invalidated — new dailyPracticeConfig applied.");
        }
      } catch (e) {
        console.warn("Failed to invalidate daily assignment:", e?.code || e);
      }
    });
  };

  const handleToggleDailyYear = (year) => {
    const isSelected = dailyPracticeConfig.years.includes(year);
    let nextYears = isSelected
      ? dailyPracticeConfig.years.filter((y) => y !== year)
      : [...dailyPracticeConfig.years, year];
    
    // If selecting a year, we can clear individual chapters for that year to keep it clean
    let nextChapters = dailyPracticeConfig.chapters;
    if (!isSelected) {
      // Find chapters for this year
      let chaptersForYear = [];
      const yearData = CURRICULUM_DATA[year];
      if (Array.isArray(yearData)) {
        chaptersForYear = yearData.map(c => c.id);
      } else if (yearData) {
        Object.values(yearData).forEach(courseChapters => {
          chaptersForYear = [...chaptersForYear, ...courseChapters.map(c => c.id)];
        });
      }
      nextChapters = nextChapters.filter(cid => !chaptersForYear.includes(cid));
    }

    handleUpdateDailyConfig({
      ...dailyPracticeConfig,
      years: nextYears,
      chapters: nextChapters
    });
  };

  const handleToggleDailyChapter = (chapterId) => {
    const isSelected = dailyPracticeConfig.chapters.includes(chapterId);
    const nextChapters = isSelected
      ? dailyPracticeConfig.chapters.filter((cid) => cid !== chapterId)
      : [...dailyPracticeConfig.chapters, chapterId];
    
    handleUpdateDailyConfig({
      ...dailyPracticeConfig,
      chapters: nextChapters
    });
  };

  const [sessionForm, setSessionForm] = useState({
    date: new Date().toISOString().split("T")[0],
    focus: "",
    start: "10:00 AM",
    end: "11:30 AM",
    recurring: false,
  });

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    subject: "",
    school: "",
    year: "",
    dreamJob: "",
    address: "",
    parentEmail: "",
    parentExtraEmails: [],
    parentLang: "en",
    role: "",
    assignedYear: ["Year 11"],
    assignedCourse: ["Advanced"],
    dailyQuestionCount: 10,
    calculationEnabled: true,
    showHscGraph: false,
    examPrepEnabled: false,
    scholarshipEnabled: false,
    scholarshipExams: null,
    scholarshipSubjects: null,
    scholarshipTestDate: "",
    scholarshipTestLabel: "",
    hscPastPaperEnabled: false,
    hscPastPaperCount: 3,
    schoolSubjectRank: "",
    internalRank: "",
    internalTotal: "",
    hscSubject: "",
  });

  const styles = {
    card: {
      padding: "32px",
      borderRadius: "32px",
      background: "white",
      border: "1px solid rgba(167, 139, 250, 0.15)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
    },
    backBtn: {
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      border: "1px solid rgba(167, 139, 250, 0.2)",
      background: "white",
      color: "#6366f1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    navBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      padding: "20px",
      background: "white",
      border: "2px solid rgba(167, 139, 250, 0.1)",
      borderRadius: "20px",
      color: "#64748b",
      fontWeight: 700,
      cursor: "pointer",
      transition: "all 0.2s ease",
      flex: 1,
    },
    navBtnActive: {
      borderColor: "#6366f1",
      color: "#6366f1",
      boxShadow: "0 10px 20px rgba(99, 102, 241, 0.1)",
    },
    visionBoard: {
      borderRadius: "24px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#f1f5f9",
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      padding: "24px",
      color: "white",
      overflow: "hidden",
      flex: 1,
      minHeight: "200px",
    },
  };

  useEffect(() => {
    if (!challengeResultsUid) return undefined;
    let cancelled = false;
    getDoc(doc(db, "parent_contacts", challengeResultsUid)).then((snap) => {
      if (cancelled) return;
      const d = snap.exists() ? snap.data() : {};
      const contact = { parentEmail: d.parentEmail || "", parentExtraEmails: Array.isArray(d.parentExtraEmails) ? d.parentExtraEmails : [], parentLang: d.parentLang === "ko" ? "ko" : "en" };
      setParentContact(contact);
      setEditForm((f) => ({ ...f, ...contact }));
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [challengeResultsUid]);

  useEffect(() => {
    if (!studentId) return;
    let cancelled = false;
    let unsubManual = null;
    let shown = false;

    // The page opens on the student's own document. The manual↔registered link needs one-off reads and writes, which
    // on the iPad app can stay unanswered for ever, so on first open it runs behind the page instead of before it.
    const showThenLink = async (id, source, data, link) => {
      const run = () => link().catch((err) => { console.warn("Duplicate record sync skipped:", err); return false; });
      if (!shown) {
        shown = true;
        applyStudentData(id, source, data);
        run();
        return;
      }
      if (!(await run())) applyStudentData(id, source, data);
    };

    const applyStudentData = (id, source, data, extra = {}) => {
      if (cancelled) return;
      setStudent({ id, source, ...data, ...extra });
      setAssignedChapters(data.assignedChapters || []);
      setCompletedChapters(data.completedChapters || []);
      setDailyPracticeConfig(data.dailyPracticeConfig || { years: [], chapters: [] });

      setEditForm({
        name: data.name || data.firstName || "",
        email: data.email || "",
        phone: data.phone || "",
        level: data.level || data.year || "",
        subject: data.subject || data.school || "",
        school: data.school || "",
        year: data.year || "",
        dreamJob: data.dreamJob || "",
        address: data.address || "",
        role: data.role || "",
        assignedYear: Array.isArray(data.assignedYear)
          ? data.assignedYear
          : [data.assignedYear || data.level || data.year || "Year 11"],
        assignedCourse: Array.isArray(data.assignedCourse)
          ? data.assignedCourse
          : [data.assignedCourse || "Advanced"],
        dailyQuestionCount: data.dailyQuestionCount || 10,
        calculationEnabled: data.calculationEnabled !== false,
        showHscGraph: data.showHscGraph === true,
        examPrepEnabled: data.examPrepEnabled === true,
        scholarshipEnabled: data.scholarshipEnabled === true,
        scholarshipExams: Array.isArray(data.scholarshipExams) ? data.scholarshipExams : null,
        scholarshipSubjects: data.scholarshipSubjects && typeof data.scholarshipSubjects === "object" ? data.scholarshipSubjects : null,
        scholarshipTestDate: typeof data.scholarshipTestDate === "string" ? data.scholarshipTestDate : "",
        scholarshipTestLabel: typeof data.scholarshipTestLabel === "string" ? data.scholarshipTestLabel : "",
        examPrepSelection: data.examPrepSelection || { years: [], chapters: [] },
        hscPastPaperEnabled: data.hscPastPaperEnabled === true,
        hscPastPaperCount: data.hscPastPaperCount || 3,
        schoolSubjectRank: data.schoolSubjectRank || "",
        internalRank: data.internalRank || "",
        internalTotal: data.internalTotal || "",
        hscSubject: data.hscSubject || "",
      });
      setLoading(false);
    };

    const copyManualHscResultsToRegistered = async (manualId, userId) => {
      const manualHscSnap = await getDocs(collection(db, "students", manualId, "hsc_results"));
      if (manualHscSnap.empty || cancelled) return;

      await Promise.all(
        manualHscSnap.docs.map((record) =>
          setDoc(
            doc(db, "users", userId, "hsc_results", record.id),
            record.data(),
            { merge: true },
          ),
        ),
      );
    };

    const syncManualToRegistered = async (manualId, manualData) => {
      const email = normalizeEmail(manualData.email);
      if (!email) return false;

      const userSnap = await getDocs(
        query(collection(db, "users"), where("email", "==", email), limit(1)),
      );
      if (userSnap.empty || cancelled) return false;

      const userDoc = userSnap.docs[0];
      if (userDoc.id === manualId) return false;
      const syncData = pickDefinedCurriculumFields(manualData);
      const mergedData = {
        ...userDoc.data(),
        ...syncData,
      };

      if (Object.keys(syncData).length > 0 && hasFieldDifferences(userDoc.data(), syncData)) {
        await setDoc(
          doc(db, "users", userDoc.id),
          { ...syncData, linkedManualStudentId: manualId, updatedAt: serverTimestamp() },
          { merge: true },
        );
      }
      await copyManualHscResultsToRegistered(manualId, userDoc.id);

      applyStudentData(userDoc.id, "users", mergedData, {
        linkedManualStudentId: manualId,
        manualProfile: manualData,
      });
      return true;
    };

    const syncRegisteredWithManual = async (userId, userData) => {
      const email = normalizeEmail(userData.email);
      if (!email) return false;

      const manualSnap = await getDocs(
        query(collection(db, "students"), where("email", "==", email), limit(1)),
      );
      if (manualSnap.empty || cancelled) return false;

      const manualDoc = manualSnap.docs[0];
      const manualData = manualDoc.data();
      const syncData = pickDefinedCurriculumFields(manualData);
      const mergedData = {
        ...userData,
        ...syncData,
      };

      if (Object.keys(syncData).length > 0 && hasFieldDifferences(userData, syncData)) {
        await setDoc(
          doc(db, "users", userId),
          { ...syncData, linkedManualStudentId: manualDoc.id, updatedAt: serverTimestamp() },
          { merge: true },
        );
      }
      await copyManualHscResultsToRegistered(manualDoc.id, userId);

      applyStudentData(userId, "users", mergedData, {
        linkedManualStudentId: manualDoc.id,
        manualProfile: manualData,
      });
      // This userId is a real Firebase Auth UID - save it so stats listener can read from users/
      if (!cancelled) setRegisteredUid(userId);
      return true;
    };

    const loadManualStudent = () => {
      if (unsubManual) return;
      unsubManual = onSnapshot(
        doc(db, "students", studentId),
        async (mSnap) => {
          if (!mSnap.exists()) {
            if (!cancelled) {
              setStudent(null);
              setLoading(false);
            }
            return;
          }

          const mData = mSnap.data();
          await showThenLink(mSnap.id, "manual", mData, () => syncManualToRegistered(mSnap.id, mData));
        },
      );
    };

    const unsub = onSnapshot(doc(db, "users", studentId), async (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        // If loading a registered user directly, track their UID immediately
        if (!cancelled) setRegisteredUid(studentId);
        await showThenLink(snap.id, "users", data, () => syncRegisteredWithManual(snap.id, data));
      } else {
        loadManualStudent();
      }
    });
    return () => {
      cancelled = true;
      unsub();
      unsubManual?.();
    };
  }, [studentId]);

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;
    try {
      setSendingMessage(true);
      const response = await fetch("/api/send-notif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: activeStudentId,
          email: student.email,
          subject: `Message from your Tutor`,
          text: messageText,
        }),
      });

      const data = await response.json().catch(() => ({}));
      console.log('[send-notif] API response:', JSON.stringify(data, null, 2));
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      const pushOk = (data.pushSuccessCount || 0) > 0;
      const emailOk = data.emailSent;

      // DEBUG: show diagnostic info directly so we can identify the issue
      showToast(
        `[DEBUG] admin=${data.adminConfigured} matched=${data.matchedBy} saved=${data.notificationHistorySaved} tokens=${data.tokensFound} push=${data.pushSuccessCount} email=${data.emailSent}`,
        "info",
        15000
      );

      if (pushOk && emailOk) {
        showToast("Message sent by email and push notification.", "success");
      } else if (pushOk) {
        showToast("Push notification sent. (Email not configured on server.)", "success");
      } else if (emailOk) {
        if (!data.adminConfigured) {
          showToast("Email sent. (Push requires Firebase credentials on server — check Vercel env vars.)", "warning", 8000);
        } else if ((data.tokensFound || 0) === 0) {
          showToast("Email sent. Student hasn't enabled push notifications in the app yet.", "info", 6000);
        } else {
          showToast("Email sent, but push delivery failed. Ask student to tap 'Reconnect this device' in Settings.", "warning", 7000);
        }
      } else {
        showToast(
          !data.adminConfigured
            ? "Message could not be sent — server is not fully configured. Contact admin."
            : "Message could not be sent. Check student email and try again.",
          "error",
          8000
        );
      }
      setMessageText("");
      setMessageOpen(false);
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSendingMessage(false);
    }
  };

  // Generate & email this week's learning report on demand.
  const handleSendReport = async () => {
    const reportUid = challengeResultsUid;
    if (!reportUid) {
      showToast(
        "Weekly reports are only available for registered students (this profile has no linked account).",
        "warning",
        7000,
      );
      return;
    }
    try {
      setSendingReport(true);
      const response = await fetch("/api/send-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: reportUid }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Failed to send report");
      }
      if (data.success) {
        showToast(`Weekly report sent to ${data.email}.`, "success");
      } else {
        showToast(`Report not sent: ${data.emailError || "unknown error"}`, "error", 7000);
      }
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSendingReport(false);
    }
  };

  // Email this week's report to the student's parent, in the language saved on the profile (or the one picked).
  const handleSendParentReport = async (lang) => {
    const reportUid = challengeResultsUid;
    if (!reportUid) {
      showToast("Parent reports are only available for registered students (this profile has no linked account).", "warning", 7000);
      return;
    }
    if (![parentContact.parentEmail, ...(parentContact.parentExtraEmails || [])].some((e) => (e || "").trim())) {
      showToast("No parent email saved. Add it in Edit profile first.", "warning", 7000);
      return;
    }
    try {
      setSendingParentReport(true);
      const idToken = await auth.currentUser?.getIdToken();
      const response = await fetch("/api/send-parent-report", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${idToken}` },
        body: JSON.stringify({ studentId: reportUid, lang }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Failed to send parent report");
      if (data.success) {
        showToast(`Parent report (${lang === "ko" ? "한국어" : "English"}) sent to ${data.email}.${data.failed?.length ? ` Not sent: ${data.failed.join(", ")}` : ""}`, data.failed?.length ? "warning" : "success", data.failed?.length ? 9000 : 3000);
      } else {
        showToast(`Parent report not sent: ${data.emailError || "unknown error"}`, "error", 7000);
      }
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSendingParentReport(false);
    }
  };

  // Print-friendly PDF of a student's Daily Challenge — for students who
  // struggle doing it online. Pulls the SAME question set fetchOrCreateDailyAssignment
  // would hand the student (creating today's assignment if it doesn't exist
  // yet — safe/idempotent, mirrors what opening Daily Challenge does), then
  // prints it as two PDFs: the question paper (no answers) + an answer key.
  const handleExportDailyPdf = async () => {
    const uid = challengeResultsUid;
    if (!uid) {
      showToast(
        "Daily Challenge PDF is only available for registered students (this profile has no linked account).",
        "warning",
        7000,
      );
      return;
    }
    try {
      setExportingDailyPdf(true);
      const assignment = await fetchOrCreateDailyAssignment({ uid, studentProfile: student });
      if (!assignment?.questions?.length) {
        showToast("No Daily Challenge questions available to print for this student.", "error");
        return;
      }
      const yearLabel = Array.isArray(student?.assignedYear)
        ? student.assignedYear[0]
        : (student?.assignedYear || student?.year || "");
      const courseLabel = Array.isArray(student?.assignedCourse)
        ? student.assignedCourse[0]
        : student?.assignedCourse;
      const dateLabel = new Date(`${assignment.date}T00:00:00`).toLocaleDateString("en-AU", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      });
      exportExactQuestionsPdf(
        assignment.questions,
        {
          chapterTitle: "Daily Challenge",
          topicTitle: dateLabel,
          year: yearLabel,
          course: courseLabel || "",
        },
        { bothVersions: true },
      );
    } catch (e) {
      console.error("Daily Challenge PDF export failed:", e);
      showToast("Failed to generate PDF: " + (e?.message || "unknown error"), "error");
    } finally {
      setExportingDailyPdf(false);
    }
  };

  useEffect(() => {
    if (!activeStudentId || !student?.id) return undefined;

    // We must listen to both possible paths:
    // 1. The teacher's view collection (manual: students/, registered: users/)
    // 2. The actual Firebase Auth user's path (users/{registeredUid}) where challenge results are written
    // These can differ when a manual student (students/) has a linked registered account (users/)
    // P1: pause listeners while the tab is hidden.

    const statsMap = {}; // key: `${statCollection}:${id}` => stat object
    const updateStats = () => {
      const allStats = Object.values(statsMap);
      setDailyStats(sortStatsByDateDesc(allStats));
    };

    const buildListener = (colPath, statLabel) => {
      const unsubDaily = onSnapshot(
        query(collection(db, colPath, "daily_stats"), orderBy("date", "desc"), limit(STAT_HISTORY_LIMIT)),
        (snap) => {
          snap.docs.forEach((d) => {
            const key = `daily_stats:${d.id}`;
            statsMap[key] = { id: d.id, statCollection: "daily_stats", ...d.data() };
          });
          // Remove deleted docs from this source
          const liveIds = new Set(snap.docs.map(d => `daily_stats:${d.id}`));
          Object.keys(statsMap).forEach(k => {
            if (k.startsWith('daily_stats:') && statsMap[k]._source === statLabel && !liveIds.has(k)) {
              delete statsMap[k];
            }
          });
          // Tag source for cleanup
          snap.docs.forEach(d => { statsMap[`daily_stats:${d.id}`]._source = statLabel; });
          updateStats();
        },
        (err) => console.warn(`daily_stats listener error (${statLabel}):`, err?.code)
      );
      const unsubCalc = onSnapshot(
        query(collection(db, colPath, "calc_stats"), orderBy("date", "desc"), limit(STAT_HISTORY_LIMIT)),
        (snap) => {
          snap.docs.forEach((d) => {
            const key = `calc_stats:${d.id}`;
            statsMap[key] = { id: d.id, statCollection: "calc_stats", ...d.data() };
          });
          const liveIds = new Set(snap.docs.map(d => `calc_stats:${d.id}`));
          Object.keys(statsMap).forEach(k => {
            if (k.startsWith('calc_stats:') && statsMap[k]._source === statLabel && !liveIds.has(k)) {
              delete statsMap[k];
            }
          });
          snap.docs.forEach(d => { statsMap[`calc_stats:${d.id}`]._source = statLabel; });
          updateStats();
        },
        (err) => console.warn(`calc_stats listener error (${statLabel}):`, err?.code)
      );
      return () => { unsubDaily(); unsubCalc(); };
    };

    let cleanups = [];
    let cancelled = false;

    const detach = () => {
      cleanups.forEach((fn) => { try { fn(); } catch { /* */ } });
      cleanups = [];
    };

    const attach = () => {
      detach();
      if (cancelled || document.visibilityState === 'hidden') return;

      // Always listen to the primary collection path
      cleanups.push(buildListener(`${activeStudentCollection}/${activeStudentId}`, 'primary'));

      // If challengeResultsUid is different from activeStudentId (manual student with linked registered account),
      // ALSO listen to users/{registeredUid} to capture challenge results written by the student app
      if (challengeResultsUid && challengeResultsUid !== activeStudentId) {
        console.log(`[StudentDetail] Dual-listen: also watching users/${challengeResultsUid} for challenge results`);
        cleanups.push(buildListener(`users/${challengeResultsUid}`, 'registered'));
      }
    };

    attach();
    const onVis = () => {
      if (document.visibilityState === 'hidden') detach();
      else attach();
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVis);
      detach();
    };
  }, [activeStudentCollection, activeStudentId, student?.id, challengeResultsUid]);


  useEffect(() => {
    if (!selectedChallenge || !activeStudentId) return;
    if (!selectedChallenge.hasDetailSnapshot || selectedChallenge.detailSnapshotLoaded) return;
    if (Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0) return;

    let cancelled = false;
    const statId = selectedChallenge.id;
    if (!statId) return;
    const statCollection =
      selectedChallenge.statCollection ||
      (selectedChallenge.challengeType === "calc" ? "calc_stats" : "daily_stats");

    // The challenge record may have come from the teacher's collection
    // (students/ or users/) OR from the linked registered account
    // (users/{registeredUid}) — the stats listener tags each with `_source`.
    // The detail snapshot lives next to wherever the record was written, so
    // we must read from the SAME path. We try the source-appropriate path
    // first, then fall back to the other so older / mistagged records still
    // resolve.
    const candidatePaths = [];
    const primaryPath = [activeStudentCollection, activeStudentId];
    const registeredPath = challengeResultsUid ? ["users", challengeResultsUid] : null;
    if (selectedChallenge._source === "registered" && registeredPath) {
      candidatePaths.push(registeredPath, primaryPath);
    } else {
      candidatePaths.push(primaryPath);
      if (registeredPath && registeredPath[1] !== activeStudentId) {
        candidatePaths.push(registeredPath);
      }
    }

    (async () => {
      // Always resolve the loading state — otherwise the modal spinner hangs
      // forever when the detail snapshot is missing or the read fails.
      const markLoaded = () => setSelectedChallenge((prev) =>
        prev && prev.id === statId ? { ...prev, detailSnapshotLoaded: true } : prev,
      );
      try {
        let data = null;
        for (const [coll, id] of candidatePaths) {
          const snap = await getDoc(
            doc(db, coll, id, statCollection, statId, "detail_snapshot", "main"),
          );
          if (cancelled) return;
          if (snap.exists()) { data = snap.data(); break; }
        }
        if (!data) {
          // Flag said a snapshot exists but no document was found on any
          // path (e.g. the detail save failed after the quiz). Stop the spinner.
          markLoaded();
          return;
        }
        setSelectedChallenge((prev) => {
          if (!prev || prev.id !== statId) return prev;
          return {
            ...prev,
            questions: data.questions || [],
            userAnswers: data.userAnswers || [],
            answerResults: data.answerResults || [],
            detailSnapshotLoaded: true,
          };
        });
      } catch (err) {
        console.warn("Detail snapshot load failed:", err.code || err);
        if (!cancelled) markLoaded();
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedChallenge, activeStudentCollection, activeStudentId, challengeResultsUid]);

  useEffect(() => {
    if (!selectedChallenge || !activeStudentId) return;
    const results = Array.isArray(selectedChallenge.answerResults) ? selectedChallenge.answerResults : [];
    const statCollection =
      selectedChallenge.statCollection ||
      (selectedChallenge.challengeType === "calc" ? "calc_stats" : "daily_stats");
    const statId = selectedChallenge.id;
    if (!statId) return;

    const missingWorkingOut = results
      .map((result, idx) => ({ result, idx }))
      .filter(({ result }) =>
        result?.hasWorkingOut &&
        !result.workingOut &&
        !(Array.isArray(result.workingOutPages) && result.workingOutPages.length > 0),
      );
    if (missingWorkingOut.length === 0) return;

    // Working-out images sit next to the challenge record — use the same
    // source path the record came from (see detail-snapshot effect above).
    const woPrimary = [activeStudentCollection, activeStudentId];
    const woRegistered = challengeResultsUid ? ["users", challengeResultsUid] : null;
    const woCandidates = [];
    if (selectedChallenge._source === "registered" && woRegistered) {
      woCandidates.push(woRegistered, woPrimary);
    } else {
      woCandidates.push(woPrimary);
      if (woRegistered && woRegistered[1] !== activeStudentId) woCandidates.push(woRegistered);
    }

    let cancelled = false;
    (async () => {
      const loaded = await Promise.all(
        missingWorkingOut.map(async ({ idx }) => {
          for (const [coll, id] of woCandidates) {
            try {
              const snap = await getDoc(
                doc(db, coll, id, statCollection, statId, "working_out", String(idx)),
              );
              if (snap.exists()) return { idx, data: snap.data() };
            } catch (err) {
              console.warn(`Working out load failed for question ${idx}:`, err.code || err);
            }
          }
          return null;
        }),
      );
      if (cancelled) return;
      const byIdx = loaded.filter(Boolean).reduce((acc, item) => {
        acc[item.idx] = {
          workingOut: item.data.workingOut || null,
          workingOutPages: item.data.workingOutPages || [],
        };
        return acc;
      }, {});
      if (Object.keys(byIdx).length === 0) return;
      setSelectedChallenge((prev) => {
        if (!prev || prev.id !== statId) return prev;
        const nextResults = Array.isArray(prev.answerResults) ? [...prev.answerResults] : [];
        Object.entries(byIdx).forEach(([idx, data]) => {
          nextResults[Number(idx)] = {
            ...(nextResults[Number(idx)] || {}),
            ...data,
          };
        });
        return { ...prev, answerResults: nextResults };
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedChallenge, activeStudentCollection, activeStudentId, challengeResultsUid]);

  useEffect(() => {
    if (!activeStudentId || !student?.id) return;
    const cached = loadCachedHscResults(activeStudentCollection, activeStudentId);
    if (cached.records.length > 0) setHscRecords(cached.records);
    let cancelled = false;
    fetchHscResultsIncremental(activeStudentCollection, activeStudentId)
      .then(({ records }) => {
        if (!cancelled) setHscRecords(records);
      })
      .catch((err) => {
        console.error("HSC records fetch error:", err);
        if (!cancelled && cached.records.length === 0) setHscRecords([]);
      });
    return () => {
      cancelled = true;
    };
  }, [activeStudentCollection, activeStudentId, student?.id]);

  // Load HSC type stats when exam prep is enabled (1 doc read — no scanning)
  // hsc_type_stats lives under users/{uid} only — use challengeResultsUid which
  // resolves to the registered uid for both manual and registered students.
  useEffect(() => {
    if (!student?.showHscGraph || !challengeResultsUid || hscTypeStats !== null) return;
    let cancelled = false;
    getDoc(doc(db, 'users', challengeResultsUid, 'hsc_type_stats', 'main'))
      .then(snap => { if (!cancelled) setHscTypeStats(snap.exists() ? snap.data() : {}); })
      .catch(() => { if (!cancelled) setHscTypeStats({}); });
    return () => { cancelled = true; };
  }, [challengeResultsUid, student?.showHscGraph, hscTypeStats]);

  // Fetch homework sessions — must be here, above ALL early returns (loading, !student)
  useEffect(() => {
    if (activeTab !== 'homework') return;
    if (!activeStudentId) return;
    setHomeworkLoading(true);
    setHomeworkError(false);
    let received = false;
    return subscribeSessionHistory('studentId', activeStudentId, ({ docs }) => {
      received = true;
      setHomeworkSessions(docs
        .filter((s) => s.homework || (s.learnedTopics && s.learnedTopics.length > 0))
        .sort((a, b) => (b.date || '').localeCompare(a.date || '')));
      setHomeworkLoading(false);
      setHomeworkError(false);
    }, () => {
      if (!received) { setHomeworkError(true); setHomeworkLoading(false); }
    });
  }, [activeTab, activeStudentId, homeworkTry]);

  // Progress by topic, worked out from the lessons (same rule as the Class page: taught → homework checked →
  // mistakes reviewed = done; the teacher's own Done / Not done always wins).
  const progressSessions = useStudentSessions(activeStudentId);
  const topicProgress = useMemo(() => {
    const derived = progressSessions ? deriveTopicStates(progressSessions, new Date().toLocaleDateString('en-CA')) : new Map();
    const statusesFor = (topics) => topicStatuses(topics, derived, { completed: completedChapters, overrides: student?.progressOverrides || {} });
    // The total follows the course being taught; chapter bars also keep the assigned year's chapters.
    const current = statusesFor(courseTopics(student || {}, progressSessions || []).topics);
    const assigned = statusesFor(courseTopics(student || {}).topics);
    return { loaded: Boolean(progressSessions), sum: summarize(current), chapters: { ...byChapter(assigned), ...byChapter(current) } };
  }, [student, progressSessions, completedChapters]);

  // Toggle a homework session's completed flag (teacher checks off HW as done).
  const toggleHomeworkComplete = async (session) => {
    if (!session?.id) return;
    const next = !(session.isHomeworkCompleted === true);
    // Optimistic update so the UI responds instantly.
    setHomeworkSessions((prev) => prev.map((s) => s.id === session.id ? { ...s, isHomeworkCompleted: next } : s));
    try {
      if (next && session.homeworkStatus === 'submitted') {
        // Submitted online: close the submission too (starts the originals retention timer).
        await markHomeworkChecked(session.id, null, {
          studentId: challengeResultsUid,
          topics: (session.learnedTopics || []).map((t) => ({ id: t?.id, label: t?.label || t?.title || t?.id })),
        });
        setHomeworkSessions((prev) => prev.map((s) => s.id === session.id ? { ...s, homeworkStatus: 'checked' } : s));
      } else {
        await updateDoc(doc(db, 'sessions', session.id), {
          isHomeworkCompleted: next,
          homeworkCompletedAt: next ? new Date().toISOString() : null,
        });
      }
      showToast(next ? 'Homework marked as completed.' : 'Homework set back to pending.', 'success');
    } catch (err) {
      // Revert on failure.
      setHomeworkSessions((prev) => prev.map((s) => s.id === session.id ? { ...s, isHomeworkCompleted: !next } : s));
      showToast('Failed to update homework status.', 'error');
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const normalizedRole = editForm.role || "";
      // Parent contact details are kept out of the student's own document.
      const { parentEmail, parentExtraEmails, parentLang, ...profileFields } = editForm;
      await updateDoc(doc(db, activeStudentCollection, activeStudentId), {
        ...profileFields,
        role: normalizedRole,
        status: "Active",
        updatedAt: serverTimestamp(),
      });
      updateLocalStudentProfileCache({
        ...profileFields,
        role: normalizedRole,
        status: "Active",
      });
      if (challengeResultsUid) {
        const contact = { parentEmail: (parentEmail || "").trim(), parentExtraEmails: (parentExtraEmails || []).map((e) => e.trim()).filter(Boolean), parentLang: parentLang === "ko" ? "ko" : "en" };
        await setDoc(doc(db, "parent_contacts", challengeResultsUid), { ...contact, updatedAt: serverTimestamp() }, { merge: true });
        setParentContact(contact);
      }
      touchStudentListMeta();
      setIsEditModalOpen(false);
      showToast("Profile updated successfully!", "success");
    } catch (e) {
      console.error(e);
      showToast("Failed to update profile", "error");
    }
  };

  const handleUpdateHscModeration = async (fields) => {
    try {
      await updateDoc(doc(db, activeStudentCollection, activeStudentId), {
        ...fields,
        updatedAt: serverTimestamp(),
      });
      setStudent((prev) => ({ ...prev, ...fields }));
      updateLocalStudentProfileCache({ ...fields });
    } catch (e) {
      console.error(e);
      showToast("Failed to save moderation data", "error");
    }
  };

  const handleUpdateCurriculumSetting = async (field, value) => {
    // Write to BOTH the teacher's record and the linked registered account
    // (users/{registeredUid}) so the student app — which reads its profile
    // from users/{uid} — sees the change. Without this mirror, fields like
    // dailyQuestionCount or examPrepEnabled would only update on the
    // teacher's manual record and never reach the student.
    const targets = [doc(db, activeStudentCollection, activeStudentId)];
    if (challengeResultsUid && challengeResultsUid !== activeStudentId) {
      targets.push(doc(db, "users", challengeResultsUid));
    }
    try {
      await Promise.all(
        targets.map((ref) =>
          updateDoc(ref, { [field]: value }).catch((e) => {
            // Mirror is best-effort: log and continue rather than failing
            // the whole write if the registered doc isn't writable.
            console.warn("curriculum setting mirror failed:", e?.code || e);
          })
        )
      );
      updateLocalStudentProfileCache({ [field]: value });
      touchStudentListMeta();
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleChapter = async (chapterId) => {
    // Use the latest values from the existing state
    const isAssigned = assignedChapters.includes(chapterId);
    const isCompleted = completedChapters.includes(chapterId);

    let nextAssigned = [...assignedChapters];
    let nextCompleted = [...completedChapters];

    if (!isAssigned && !isCompleted) {
      // Unassigned -> Active
      nextAssigned.push(chapterId);
    } else if (isAssigned && !isCompleted) {
      // Active -> Done
      nextAssigned = nextAssigned.filter((id) => id !== chapterId);
      nextCompleted.push(chapterId);
    } else {
      // Done -> Unassigned
      nextCompleted = nextCompleted.filter((id) => id !== chapterId);
      nextAssigned = nextAssigned.filter((id) => id !== chapterId); // Safety
    }

    // Record when each chapter was assigned / completed — the Learning path forecast
    // measures the student's pace from these dates.
    // eslint-disable-next-line react-hooks/purity -- event handler, not render
    const nowMs = Date.now();
    const nextDates = { ...(student?.chapterDates || {}) };
    if (nextCompleted.includes(chapterId)) {
      nextDates[chapterId] = { ...(nextDates[chapterId] || {}), completedAt: nowMs };
    } else if (nextAssigned.includes(chapterId)) {
      nextDates[chapterId] = { assignedAt: nowMs };
    } else {
      delete nextDates[chapterId];
    }

    // Update local state immediately for snappy UI
    setAssignedChapters(nextAssigned);
    setCompletedChapters(nextCompleted);
    setStudent((prev) => (prev ? { ...prev, chapterDates: nextDates } : prev));

    try {
      await updateDoc(doc(db, activeStudentCollection, activeStudentId), {
        assignedChapters: nextAssigned,
        completedChapters: nextCompleted,
        chapterDates: nextDates,
      });
      updateLocalStudentProfileCache({
        assignedChapters: nextAssigned,
        completedChapters: nextCompleted,
        chapterDates: nextDates,
      });
      touchStudentListMeta();
    } catch (e) {
      console.error(e);
      // Optional: rollback on error?
    }
  };

  const handleBookSession = async () => {
    if (!sessionForm.focus || !sessionForm.date) {
      showToast("Please fill in subject and date.", "warning");
      return;
    }
    try {
      setBooking(true);
      const count = sessionForm.recurring ? 52 : 1;
      const baseDate = new Date(sessionForm.date + "T12:00:00");
      const sessionsToCreate = [];
      const groupId = `series_${Date.now()}`;

      for (let i = 0; i < count; i++) {
        const nextDate = new Date(baseDate);
        nextDate.setDate(baseDate.getDate() + i * 7);
        const year = nextDate.getFullYear();
        const month = String(nextDate.getMonth() + 1).padStart(2, "0");
        const day = String(nextDate.getDate()).padStart(2, "0");

        sessionsToCreate.push({
          studentId: activeStudentId,
          studentName: student.name || student.firstName || "Student",
          studentEmail: student.email || "",
          date: `${year}-${month}-${day}`,
          subject: sessionForm.focus,
          startTime: sessionForm.start,
          endTime: sessionForm.end,
          recurring: sessionForm.recurring,
          groupId: sessionForm.recurring ? groupId : null,
          status: "Scheduled",
          createdAt: serverTimestamp(),
        });
      }

      await Promise.all(
        sessionsToCreate.map((s) => addDoc(collection(db, "sessions"), s)),
      );

      const firstSession = sessionsToCreate[0];
      fetch("/api/send-notif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: activeStudentId,
          email: student.email || "",
          subject: "Your schedule has been updated",
          text: `Your ${firstSession.subject} session has been scheduled for ${firstSession.date} at ${firstSession.startTime}.`,
        }),
      }).catch((err) => console.warn("Schedule notification failed:", err));

      showToast("Session booked successfully!", "success");
      setIsScheduleModalOpen(false);
      setSessionForm((prev) => ({ ...prev, focus: "" }));
    } catch (e) {
      console.error(e);
      showToast("Booking failed.", "error");
    } finally {
      setBooking(false);
    }
  };

  // ── Manual XP adjustment (add or subtract a fixed amount) ──────────────
  const handleAdjustXP = async () => {
    const raw = window.prompt(`Manually adjust XP for ${student?.name || student?.firstName || 'this student'}.\nEnter a number (positive to add, negative to subtract):`);
    if (raw === null) return; // cancelled
    const delta = parseInt(raw, 10);
    if (isNaN(delta) || delta === 0) { alert('Invalid number — nothing changed.'); return; }
    if (!confirm(`${delta > 0 ? 'Add' : 'Remove'} ${Math.abs(delta)} XP ${delta > 0 ? 'to' : 'from'} ${student?.name || student?.firstName}?`)) return;
    try {
      setLoading(true);
      const { applied, total } = await adjustXp(challengeResultsUid || activeStudentId, delta);
      showToast(`XP adjusted: ${total - applied} → ${total} (${applied > 0 ? '+' : ''}${applied})`, 'success');
    } catch (err) {
      showToast('XP adjustment failed: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  };


  const deleteWorkingOutForChallenge = async (stat) => {
    const questionIds = new Set([
      ...(stat.questions || []).map((q) => q?.id).filter(Boolean),
      ...(stat.answerResults || [])
        .map((result) => result?.questionId)
        .filter(Boolean),
    ]);
    const challengeType = stat.challengeType || "daily";
    const challengeDate =
      stat.timestamp || stat.completedAt || stat.createdAt || stat.id;
    const gradingSnap = await getDocs(
      query(collection(db, "grading_queue"), where("userId", "==", activeStudentId)),
    );

    const docsToDelete = gradingSnap.docs.filter((item) => {
      const data = item.data();
      const typeMatches =
        !data.challengeType || data.challengeType === challengeType;
      const questionMatches =
        data.questionId && questionIds.has(data.questionId);
      const dateMatches = isSameCalendarDay(data.submittedAt, challengeDate);

      return typeMatches && (questionMatches || dateMatches);
    });

    await Promise.all(docsToDelete.map((item) => deleteDoc(item.ref)));
    return docsToDelete.length;
  };

  const handleResetChallenge = async (stat) => {
    if (
      !confirm(
        "Reset this challenge? The attempt is deleted and only the XP earned in it is taken back.",
      )
    )
      return;

    try {
      const statCollection =
        stat.statCollection ||
        (stat.challengeType === "calc" ? "calc_stats" : "daily_stats");
      const isDailyReset = statCollection !== "calc_stats" && stat.challengeType !== "calc";
      const syncUid = challengeResultsUid || activeStudentId;

      // Step 1: Write sync_meta FIRST so student app listener fires immediately.
      // IMPORTANT: setDoc + merge:true does NOT support dot-notation nested field updates.
      // "status.daily" would be saved as a literal top-level key, leaving the existing
      // nested `status.daily: "completed"` field untouched. We must use updateDoc for
      // the nested status field after ensuring the document exists with setDoc.
      const syncMetaRef = doc(db, "sync_meta", getChallengeBootMetaId(syncUid, stat.id));
      const resetField = isDailyReset ? "daily" : "calc";
      const resetTimeField = isDailyReset ? "dailyResetAt" : "calcResetAt";

      await setDoc(syncMetaRef, {
        version: Date.now(),
        statusVersion: Date.now(),
        updatedAt: serverTimestamp(),
        [resetTimeField]: new Date().toISOString(),
        resetBy: "teacher",
      }, { merge: true });

      // updateDoc correctly interprets dot-notation as a nested field path,
      // updating only status.daily (or status.calc) without clobbering the other.
      await updateDoc(syncMetaRef, {
        [`status.${resetField}`]: "open",
      });


      // Step 2: Delete stat docs from both possible paths
      let deletedWorkingOutCount = 0;
      try {
        deletedWorkingOutCount = await deleteWorkingOutForChallenge(stat);
      } catch (workingOutError) {
        console.warn(
          "Working out cleanup skipped:",
          workingOutError.code || workingOutError.message || workingOutError,
        );
      }
      const statRef = doc(db, activeStudentCollection, activeStudentId, statCollection, stat.id);
      // Read the xpEarned from the stat doc BEFORE deleting so we can deduct it precisely
      // instead of wiping the whole totalXP with a full recalculation (which would lose
      // Secret Note XP and manual bonus XP that live only on the user doc).
      // The student's own account holds the attempt and the XP; a linked manual record is only the teacher's copy.
      const ownSnap = await getDoc(doc(db, "users", syncUid, statCollection, stat.id));
      const statSnap = ownSnap.exists() ? ownSnap : await getDoc(statRef);
      const statData = statSnap.data() || {};
      // Only this attempt's own XP (extra rounds of the day keep theirs).
      const statXpEarned = Math.max(0, Number(statData.xpEarned) || 0);
      // Archive the original attempt before deleting it — a reset must never make a
      // score unrecoverable. Archived under the same student doc so it survives even
      // if the student is later deleted independently.
      if (statSnap.exists()) {
        await setDoc(
          doc(db, activeStudentCollection, activeStudentId, "reset_archive", `${statCollection}_${stat.id}_${Date.now()}`),
          {
            ...statSnap.data(),
            archivedFrom: statCollection,
            archivedDocId: stat.id,
            archivedAt: new Date().toISOString(),
            archivedBy: "teacher-reset",
          },
        ).catch((archiveErr) => console.warn("Reset archive write failed:", archiveErr));
      }
      await deleteDoc(statRef);
      // Also delete from users/{registeredUid} if student used a different path
      if (syncUid !== activeStudentId) {
        await deleteDoc(doc(db, "users", syncUid, statCollection, stat.id)).catch(() => {});
      }
      // Drop the day from the student's recentPractice summary (utils/recentPractice), which their Dashboard and
      // FlameBuddy read instead of the stat docs — otherwise the reset day would still show as done.
      updateDoc(doc(db, "users", syncUid), {
        [`recentPractice.${isDailyReset ? "daily" : "calc"}.${stat.id}`]: deleteField(),
      }).catch((e) => console.warn("recentPractice reset skipped:", e?.code || e));

      // Step 3: Recreate daily assignment if needed
      if (isDailyReset) {
        // Merge the current dailyPracticeConfig state so the reset always
        // generates questions using the teacher's latest settings.
        const profileForReset = { ...student, dailyPracticeConfig };
        await createDailyAssignment({
          uid: syncUid,
          studentProfile: profileForReset,
          dateKey: stat.id,
          questionCount: student?.dailyQuestionCount || stat.questionCount || stat.total || 10,
          generatedBy: "teacher-reset",
          forceVersion: Date.now(),
        }).catch(e => console.warn("createDailyAssignment skipped:", e));
      }

      // Step 4: Update admin summary
      await setDoc(doc(db, 'admin_daily_summary', stat.id), {
        students: {
          [syncUid]: {
            done: false,
            [isDailyReset ? 'dailyDone' : 'calcDone']: false,
            [isDailyReset ? 'dailyEnded' : 'calcEnded']: false,
            [isDailyReset ? 'dailyStatus' : 'calcStatus']: 'open',
          }
        }
      }, { merge: true });

      fetch("/api/send-notif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: syncUid,
          email: student.email || "",
          subject: `${isDailyReset ? "Daily Challenge" : "Daily Calculation"} reset`,
          text: `Your teacher has reset your ${isDailyReset ? "Daily Challenge" : "Daily Calculation"} for ${stat.id}.`,
          metadata: {
            type: "challenge_reset",
            challengeType: isDailyReset ? "daily" : "calc",
            date: stat.id,
            resetVersion: Date.now(),
          },
        }),
      }).catch((err) => console.warn("Challenge reset notification failed:", err));

      // Step 5: take back exactly what THIS attempt earned, and nothing else. An unfinished attempt earned nothing,
      // so XP is left alone. (It used to fall back to a full recalculation, which took XP from before the last season
      // reset off the current total again, every time.)
      let removedXP = 0;
      let finalXP = null;
      if (statXpEarned > 0) {
        const userSnap = await getDoc(doc(db, "users", syncUid));
        const id = userSnap.exists() ? syncUid : activeStudentId;
        const done = Number(userSnap.data()?.challengesCompleted) || 0;
        const result = await adjustXp(id, -statXpEarned, {
          extra: statData.completed && done > 0 ? { challengesCompleted: increment(-1) } : {},
        });
        removedXP = -result.applied;
        finalXP = result.total;
      }
      showToast(
        `Challenge reset. ${removedXP > 0 ? `−${removedXP} XP (now ${finalXP}).` : "No XP was earned in it, so XP is unchanged."} Removed ${deletedWorkingOutCount} working out item${deletedWorkingOutCount === 1 ? "" : "s"}.`,
        "success",
      );
    } catch (err) {
      console.error("Reset error:", err);
      showToast("Failed to reset challenge.", "error");
    }
  };

  const handleSaveHscRecord = async (e) => {
    e.preventDefault();
    if (!hscForm.examDate || !hscForm.paper.trim()) {
      showToast("Please enter the exam date and paper.", "warning");
      return;
    }
    const score = Number(hscForm.score);
    const total = Number(hscForm.total);
    if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) {
      showToast("Please enter a valid score and total.", "warning");
      return;
    }

    // Per-topic breakdown — keep only topics the teacher filled in.
    const topics = Object.entries(hscForm.topics || {})
      .map(([name, raw]) => ({ name, pct: Number(raw) }))
      .filter((t) => t.name && Number.isFinite(t.pct) && String(hscForm.topics[t.name]).trim() !== "");

    try {
      setHscSaving(true);
      const docRef = await addDoc(collection(db, activeStudentCollection, activeStudentId, "hsc_results"), {
        examDate: hscForm.examDate,
        paper: hscForm.paper.trim(),
        score,
        total,
        percentage: Math.round((score / total) * 1000) / 10,
        notes: hscForm.notes.trim(),
        topics,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      await touchHscResultsSyncMeta(activeStudentCollection, activeStudentId).catch(() => {});
      touchStudentListMeta();
      const nowMs = Date.now();
      const localRecord = {
        id: docRef.id,
        examDate: hscForm.examDate,
        paper: hscForm.paper.trim(),
        score,
        total,
        percentage: Math.round((score / total) * 1000) / 10,
        notes: hscForm.notes.trim(),
        topics,
        createdAtMs: nowMs,
        updatedAtMs: nowMs,
      };
      const cached = loadCachedHscResults(activeStudentCollection, activeStudentId);
      const merged = mergeHscResults(cached.records, [localRecord]);
      saveCachedHscResults(activeStudentCollection, activeStudentId, merged, Math.max(cached.lastSyncMs, nowMs));
      setHscRecords(merged);
      setHscForm({
        examDate: getTodayDateKey(),
        paper: "",
        score: "",
        total: "100",
        notes: "",
        topics: { Algebra: "", Calculus: "", Statistics: "", Trigonometry: "" },
      });
      showToast("HSC result saved.", "success");
    } catch (err) {
      console.error("HSC save error:", err);
      showToast("Failed to save HSC result.", "error");
    } finally {
      setHscSaving(false);
    }
  };

  const handleDeleteHscRecord = async (record) => {
    if (!confirm(`Delete ${record.paper || "this HSC result"}?`)) return;
    try {
      const nowMs = Date.now();
      await updateDoc(doc(db, activeStudentCollection, activeStudentId, "hsc_results", record.id), {
        isDeleted: true,
        updatedAt: serverTimestamp(),
      });
      await touchHscResultsSyncMeta(activeStudentCollection, activeStudentId).catch(() => {});
      touchStudentListMeta();
      const cached = loadCachedHscResults(activeStudentCollection, activeStudentId);
      const merged = mergeHscResults(cached.records, [{ ...record, isDeleted: true, updatedAtMs: nowMs }]);
      saveCachedHscResults(activeStudentCollection, activeStudentId, merged, Math.max(cached.lastSyncMs, nowMs));
      setHscRecords(merged);
      showToast("HSC result deleted.", "success");
    } catch (err) {
      console.error("HSC delete error:", err);
      showToast("Failed to delete HSC result.", "error");
    }
  };



  if (loading)
    return (
      <div className="app-loading">
        <div className="app-spinner"></div>
      </div>
    );
  if (!student) return <div className="app-empty">Student not found.</div>;

  const dailyPracticeStats = dailyStats.filter(
    (stat) =>
      stat.challengeType !== "calc" && stat.statCollection !== "calc_stats",
  );
  const calculationStats = dailyStats.filter(
    (stat) =>
      stat.challengeType === "calc" || stat.statCollection === "calc_stats",
  );

  const studentAnalytics = dailyStats.length > 0
    ? generateLearningRecommendations(dailyPracticeStats, calculationStats)
    : null;

  const assignedYears = (Array.isArray(student.assignedYear)
    ? student.assignedYear
    : [student.assignedYear || "Year 11"]).filter(y => typeof y === 'string' && y.startsWith('Year '));
  const assignedCourses = Array.isArray(student.assignedCourse)
    ? student.assignedCourse
    : [student.assignedCourse || "Advanced"];

  let chapters = [];
  assignedYears.forEach((year) => {
    const yearData = CURRICULUM_DATA[year];
    if (!yearData) return;
    if (Array.isArray(yearData)) {
      chapters = [...chapters, ...yearData];
    } else {
      assignedCourses.forEach((course) => {
        if (yearData[course]) {
          chapters = [...chapters, ...yearData[course]];
        }
      });
    }
  });
  // Deduplicate
  const uniqueChapters = [];
  const seenIds = new Set();
  chapters.forEach((ch) => {
    if (!seenIds.has(ch.id)) {
      uniqueChapters.push(ch);
      seenIds.add(ch.id);
    }
  });
  chapters = uniqueChapters;

  const todayKeyForHw = new Date().toLocaleDateString("en-CA");
  const openHomeworkCount = (progressSessions || []).filter((x) => String(x.homework || "").trim()
    && !["checked", "excused", "deleted", "submitted"].includes(x.homeworkStatus) && x.isHomeworkCompleted !== true
    && (x.date || "") < todayKeyForHw).length;

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div style={{ display: "grid", gap: "24px" }}>
            <LearningOverview
              student={student}
              dailyStats={dailyStats}
              sessions={progressSessions}
              topicProgress={topicProgress}
              onGoTab={setActiveTab}
            />
            {/* PERFORMANCE HERO — snapshot of accuracy, insight and key counters */}
            {studentAnalytics && (
              <ChallengePerformanceHero
                studentAnalytics={studentAnalytics}
                dailyStats={dailyStats}
                dailyPracticeStats={dailyPracticeStats}
                calculationStats={calculationStats}
                dailyPracticeConfig={dailyPracticeConfig}
              />
            )}

            {/* 2. Dashboard & Progress */}
      <StudentDashboardCard
        styles={styles}
        student={student}
        chapters={chapters}
        completedChapters={completedChapters}
        topicProgress={topicProgress}
      />
      {/* 3-4. Weekly progress trackers */}
      <WeeklyProgressTrackers
        dailyStats={dailyStats}
        calculationEnabled={student?.calculationEnabled}
      />

          </div>
        );
      case "curriculum":
        return (
          <ProgressTab
            student={student}
            collectionName={activeStudentCollection}
            studentDocId={activeStudentId}
            chapters={chapters}
            assignedYears={assignedYears}
            assignedChapters={assignedChapters}
            completedChapters={completedChapters}
            sessions={progressSessions}
            onToggleChapter={handleToggleChapter}
          />
        );
      case "challenge":
        return (
          <div style={{ display: "grid", gap: "24px" }}>
            <PracticeHistory
              dailyPracticeStats={dailyPracticeStats}
              calculationStats={calculationStats}
              calculationEnabled={student?.calculationEnabled}
              onSelect={setSelectedChallenge}
              onReset={handleResetChallenge}
              renderExtra={(stat) => <ExtraRoundsPanel uid={challengeResultsUid} date={stat.id} summary={stat.extraSummary} />}
            />

            {/* ANALYTICS PANEL */}
            {studentAnalytics && (
              <ChallengeAnalyticsPanel
                studentAnalytics={studentAnalytics}
                dailyStats={dailyStats}
              />
            )}

            {/* SECRET NOTEBOOK PANEL */}
            <SecretNotebookPanel student={student} />
          </div>
        );
      case "settings":
        return (
          <div style={{ display: "grid", gap: "24px" }}>
            <QuickSwitches student={student} onUpdateSetting={handleUpdateCurriculumSetting} />
            {/* DAILY PRACTICE SETTINGS - Accordion Design */}
            <CollapsibleSection
              title="Daily practice settings"
              summary={`${student.dailyQuestionCount || 10} questions per day`}
              badge="Active"
              badgeTone="green"
            >
              <DailyPracticeSettings
                styles={{ ...styles, card: {} }}
                student={student}
                dailyPracticeConfig={dailyPracticeConfig}
                onUpdateCurriculumSetting={handleUpdateCurriculumSetting}
                onUpdateDailyConfig={handleUpdateDailyConfig}
                onToggleDailyYear={handleToggleDailyYear}
                onToggleDailyChapter={handleToggleDailyChapter}
              />
            </CollapsibleSection>

            {[student.calculationEnabled === false && "Daily Calculation", student.examPrepEnabled !== true && "Exam prep", student.scholarshipEnabled !== true && "Special tests", student.hscPastPaperEnabled !== true && "HSC past paper questions"].filter(Boolean).length > 0 && (
              <p className="sd-muted" style={{ margin: 0, fontSize: "0.85rem" }}>
                Off: {[student.calculationEnabled === false && "Daily Calculation", student.examPrepEnabled !== true && "Exam prep", student.scholarshipEnabled !== true && "Special tests", student.hscPastPaperEnabled !== true && "HSC past paper questions"].filter(Boolean).join(", ")}. Turn one on in Features above to see its options.
              </p>
            )}
            {student.calculationEnabled !== false && (
            <CollapsibleSection
              title="Daily Calculation"
              summary={student.calculationEnabled === false ? 'Disabled' : 'Timed calculation rounds'}
              badge={student.calculationEnabled === false ? 'Off' : 'On'}
              badgeTone={student.calculationEnabled === false ? 'amber' : 'green'}
            >
                <BasicCalculationPanel
                  styles={{ ...styles, card: {} }}
                  student={student}
                  calcProgressUid={challengeResultsUid}
                  assignedChapters={assignedChapters}
                  completedChapters={completedChapters}
                  onUpdateSetting={handleUpdateCurriculumSetting}
                  onToggleChapter={handleToggleChapter}
                  onToggleStage={(nextAssigned, nextCompleted) => {
                    setAssignedChapters(nextAssigned);
                    setCompletedChapters(nextCompleted);
                    updateDoc(doc(db, activeStudentCollection, activeStudentId), {
                      assignedChapters: nextAssigned,
                      completedChapters: nextCompleted,
                    })
                      .then(() => {
                        updateLocalStudentProfileCache({
                          assignedChapters: nextAssigned,
                          completedChapters: nextCompleted,
                        });
                        touchStudentListMeta();
                      })
                      .catch(console.error);
                  }}
                />
            </CollapsibleSection>
            )}

            {/* EXAM PREP — same accordion shape as Basic calculation. The
                ENABLE/DISABLE toggle inside the panel controls the per-student
                flag, replacing the toggle that used to live in Edit Student. */}
            {student.examPrepEnabled === true && (
            <CollapsibleSection
              title="Exam prep"
              summary={student.examPrepEnabled === true ? '15-question random rounds · no daily limit' : 'Disabled'}
              badge={student.examPrepEnabled === true ? 'On' : 'Off'}
              badgeTone={student.examPrepEnabled === true ? 'green' : 'amber'}
            >
              <ExamPrepPanel
                styles={{ ...styles, card: {} }}
                student={student}
                studentId={studentId}
                statsUid={challengeResultsUid}
                onUpdateSetting={handleUpdateCurriculumSetting}
              />

            </CollapsibleSection>
            )}

            {student.scholarshipEnabled === true && (
            <CollapsibleSection
              title="Special tests"
              summary={student.scholarshipEnabled === true ? 'OC · Selective · Scholarship pages' : 'Disabled'}
              badge={student.scholarshipEnabled === true ? 'On' : 'Off'}
              badgeTone={student.scholarshipEnabled === true ? 'green' : 'amber'}
            >
              <ScholarshipPanel
                styles={{ ...styles, card: {} }}
                student={student}
                onUpdateSetting={handleUpdateCurriculumSetting}
              />
            </CollapsibleSection>
            )}

            {student.hscPastPaperEnabled === true && (
            <CollapsibleSection
              title="HSC past paper questions"
              summary={student.hscPastPaperEnabled === true ? `+${student.hscPastPaperCount || 3} questions per Daily Challenge` : 'Disabled'}
              badge={student.hscPastPaperEnabled === true ? 'On' : 'Off'}
              badgeTone={student.hscPastPaperEnabled === true ? 'green' : 'amber'}
            >
              <HscPastPaperPanel
                styles={{ ...styles, card: {} }}
                student={student}
                onUpdateSetting={handleUpdateCurriculumSetting}
              />
            </CollapsibleSection>
            )}

            <section className="sd-tile">
              <h3 className="sd-h">XP <small>{`${Number(student.totalXP) || 0} XP`}</small></h3>
              <div className="sd-setting-row">
                <span>Adjust XP<small>add or take away XP by hand</small></span>
                <button type="button" className="sd-btn sd-btn--soft" onClick={handleAdjustXP}>± Adjust</button>
              </div>
            </section>

            <section className="sd-tile sd-danger">
              <h3 className="sd-h">Reset <small>can’t be undone · asks to confirm</small></h3>
              <div className="sd-setting-row">
                <span>Force reset today’s Daily Challenge<small>clears today’s result so the student can do it again</small></span>
                <button type="button" className="sd-btn sd-btn--warn" onClick={async () => {
                  const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" });
                  const syncUid = challengeResultsUid || activeStudentId;
                  await handleResetChallenge({ id: todayStr, studentId: syncUid, challengeType: "daily", statCollection: "daily_stats" });
                }}>Reset</button>
              </div>
              <div className="sd-setting-row">
                <span>Force reset today’s Daily Calculation<small>clears today’s result so the student can do it again</small></span>
                <button type="button" className="sd-btn sd-btn--warn" onClick={async () => {
                  const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" });
                  const syncUid = challengeResultsUid || activeStudentId;
                  await handleResetChallenge({ id: todayStr, studentId: syncUid, challengeType: "calc", statCollection: "calc_stats" });
                }}>Reset</button>
              </div>
              <p className="sd-muted" style={{ margin: "10px 0 0", fontSize: "0.82rem" }}>Secret Notebook reset is in Practice → Secret Notebook.</p>
            </section>
          </div>
        );
      case "special":
        return <SpecialProgressPanel student={student} />;
      case "homework":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <HomeworkTab
              sessions={homeworkSessions}
              loading={homeworkLoading}
              error={homeworkError}
              onRetry={() => { resetSessionHistory('studentId', activeStudentId); setHomeworkTry((n) => n + 1); }}
              onToggleComplete={toggleHomeworkComplete}
              onView={setViewHomeworkId}
            />
            {viewHomeworkId && (
              <HomeworkSubmissionViewer
                sessionId={viewHomeworkId}
                mode="teacher"
                onClose={() => setViewHomeworkId(null)}
                onChecked={(id) => setHomeworkSessions((prev) => prev.map((s) => s.id === id ? { ...s, homeworkStatus: 'checked', isHomeworkCompleted: true } : s))}
              />
            )}
          </div>
        );
      case "hsc":
        return (
          <div style={{ display: "grid", gap: "24px" }}>
          <TermResultsCard
            student={student}
            editingTerm={editingTerm}
            setEditingTerm={setEditingTerm}
            showToast={showToast}
            onUpdateCurriculumSetting={handleUpdateCurriculumSetting}
          />
          <HscTab
            hscRecords={hscRecords}
            styles={styles}
            hscForm={hscForm}
            setHscForm={setHscForm}
            hscSaving={hscSaving}
            onSaveRecord={handleSaveHscRecord}
            onDeleteRecord={handleDeleteHscRecord}
            student={student}
            onUpdateModeration={handleUpdateHscModeration}
            hscTypeStats={hscTypeStats}
          />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="student-detail-container"
    >
      {/* 1. Header Card */}
      <StudentHeaderCard
        styles={styles}
        student={student}
        onBack={onBack}
        onOpenMessage={() => setMessageOpen(true)}
        onSendReport={handleSendReport}
        sendingReport={sendingReport}
        onSendParentReport={handleSendParentReport}
        sendingParentReport={sendingParentReport}
        onExportDailyPdf={handleExportDailyPdf}
        exportingDailyPdf={exportingDailyPdf}
        onEditProfile={() => setIsEditModalOpen(true)}
        extraActions={(
          <MistakeReview student={student} />
        )}
      />

      {/* 5. Navigation */}
      <nav className="sd-tabs" aria-label="Student sections">
        {[
          ["overview", LayoutGrid, "Overview"],
          ["curriculum", BookOpen, "Progress"],
          ["challenge", Trophy, "Practice"],
          ["homework", ClipboardList, "Homework"],
          ["hsc", FileText, "Results"],
          ...((student?.scholarshipEnabled === true || Object.keys(student?.specialWeekly || {}).length > 0)
            ? [["special", Target, "Special tests"]] : []),
        ].map(([key, Icon, label]) => (
          <button key={key} type="button" className={`sd-tab${activeTab === key ? " is-on" : ""}`} aria-current={activeTab === key ? "page" : undefined} onClick={() => setActiveTab(key)}>
            <Icon size={17} /> {label}
            {key === "homework" && openHomeworkCount > 0 && <span className="sd-tab-count">{openHomeworkCount}</span>}
          </button>
        ))}
        <span className="sd-tab-gap" />
        <button type="button" className="sd-tab sd-tab--action" onClick={() => setIsScheduleModalOpen(true)}>
          <Calendar size={17} /> Add lesson
        </button>
        <button type="button" className={`sd-tab${activeTab === "settings" ? " is-on" : ""}`} aria-current={activeTab === "settings" ? "page" : undefined} onClick={() => setActiveTab("settings")}>
          <SettingsIcon size={17} /> Settings
        </button>
      </nav>

      {/* 4. Content */}
      {renderTabContent()}

      {/* 5. Modals */}
      <AnimatePresence>
        {messageOpen && (
          <div
            className="app-modal"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMessageOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
              }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                position: "relative",
                background: "white",
                padding: "32px",
                borderRadius: "32px",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <h3
                    style={{ fontWeight: 900, margin: 0, fontSize: "1.2rem" }}
                  >
                    Message to {student?.name || "Student"}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.75rem",
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    Sent via Email & Push Notification
                  </p>
                </div>
                <button
                  onClick={() => setMessageOpen(false)}
                  style={{
                    background: "#f1f5f9",
                    border: "none",
                    borderRadius: "10px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#64748b",
                  }}
                >
                  <X size={18} />
                </button>
              </div>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message here..."
                style={{
                  width: "100%",
                  height: "160px",
                  padding: "20px",
                  borderRadius: "20px",
                  border: "2px solid #f1f5f9",
                  marginBottom: "24px",
                  outline: "none",
                  fontSize: "1rem",
                  resize: "none",
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={sendingMessage || !messageText.trim()}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "16px",
                  background: "#6366f1",
                  color: "white",
                  fontWeight: 800,
                  border: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {sendingMessage ? (
                  "Sending..."
                ) : (
                  <>
                    <Check size={18} /> Send Message
                  </>
                )}
              </button>
            </motion.div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <EditStudentModal
            editForm={editForm}
            setEditForm={setEditForm}
            roleOptions={ROLE_OPTIONS}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleUpdateProfile}
          />
        )}

        {/* Schedule Modal */}
        {isScheduleModalOpen && (
          <ScheduleModal
            student={student}
            sessionForm={sessionForm}
            setSessionForm={setSessionForm}
            booking={booking}
            onClose={() => setIsScheduleModalOpen(false)}
            onBook={handleBookSession}
          />
        )}

        {selectedChallenge && (
          <ChallengeDetailModal
            selectedChallenge={selectedChallenge}
            onClose={() => setSelectedChallenge(null)}
            setWorkingOutPreview={setWorkingOutPreview}
          />
        )}

        <AnimatePresence>
          {workingOutPreview && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 100000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setWorkingOutPreview(null)}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(15,23,42,0.88)",
                  backdropFilter: "blur(10px)",
                }}
              />
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                style={{
                  position: "relative",
                  width: "min(94vw, 1100px)",
                  height: "min(88vh, 820px)",
                  background: "#fff",
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    padding: "14px 18px",
                    borderBottom: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ fontWeight: 900, color: "#1e293b" }}>
                    {workingOutPreview.title}{" "}
                    <span style={{ color: "#64748b", fontWeight: 800 }}>
                      • Page {workingOutPreview.page + 1}/
                      {workingOutPreview.pages.length}
                    </span>
                  </div>
                  <button
                    onClick={() => setWorkingOutPreview(null)}
                    style={{
                      border: "none",
                      background: "#e2e8f0",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#475569",
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
                <div
                  style={{
                    flex: 1,
                    minHeight: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f1f5f9",
                    position: "relative",
                    padding: "16px",
                  }}
                >
                  {workingOutPreview.pages.length > 1 && (
                    <button
                      onClick={() =>
                        setWorkingOutPreview((prev) => ({
                          ...prev,
                          page: Math.max(0, prev.page - 1),
                        }))
                      }
                      disabled={workingOutPreview.page === 0}
                      style={{
                        position: "absolute",
                        left: "16px",
                        zIndex: 2,
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "none",
                        background:
                          workingOutPreview.page === 0 ? "#e2e8f0" : "#fff",
                        color:
                          workingOutPreview.page === 0 ? "#94a3b8" : "#4f46e5",
                        boxShadow: "0 10px 24px rgba(15,23,42,0.12)",
                        cursor:
                          workingOutPreview.page === 0
                            ? "not-allowed"
                            : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ChevronLeft size={24} />
                    </button>
                  )}
                  <img
                    src={workingOutPreview.pages[workingOutPreview.page]}
                    alt="Working out page"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      background: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0 18px 48px rgba(15,23,42,0.14)",
                    }}
                  />
                  {workingOutPreview.pages.length > 1 && (
                    <button
                      onClick={() =>
                        setWorkingOutPreview((prev) => ({
                          ...prev,
                          page: Math.min(
                            prev.pages.length - 1,
                            prev.page + 1,
                          ),
                        }))
                      }
                      disabled={
                        workingOutPreview.page ===
                        workingOutPreview.pages.length - 1
                      }
                      style={{
                        position: "absolute",
                        right: "16px",
                        zIndex: 2,
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "none",
                        background:
                          workingOutPreview.page ===
                          workingOutPreview.pages.length - 1
                            ? "#e2e8f0"
                            : "#fff",
                        color:
                          workingOutPreview.page ===
                          workingOutPreview.pages.length - 1
                            ? "#94a3b8"
                            : "#4f46e5",
                        boxShadow: "0 10px 24px rgba(15,23,42,0.12)",
                        cursor:
                          workingOutPreview.page ===
                          workingOutPreview.pages.length - 1
                            ? "not-allowed"
                            : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ChevronRight size={24} />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </motion.div>
  );
};

export default StudentDetail;
