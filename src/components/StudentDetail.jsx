import { useState, useEffect, useRef } from "react";
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
  CheckCircle2,
  Circle,
} from "lucide-react";
import { db } from "../firebase/config";
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
} from "firebase/firestore";
import { upsertRegisteredUserLeaderboard, upsertManualStudentLeaderboard } from "../services/leaderboardService";
import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
  mergeHscResults,
  saveCachedHscResults,
  touchHscResultsSyncMeta,
} from "../services/hscResultsService";
import { createDailyAssignment, getCurriculumSignature, getDailyAssignmentCacheKey } from "../services/dailyAssignmentService";
import { touchStudentsSyncMeta } from "../services/studentService";
import { localCache } from "../services/localCacheService";
import { generateLearningRecommendations } from "../utils/analyticsUtils";
import { useToast } from "../context/ToastContext";
import { CURRICULUM_DATA } from "../constants/curriculumData";
import MathView, { toDisplayText } from "./MathView";
import HscScoreChart from "./HscScoreChart";
import HscTab from "./studentDetail/HscTab";
import CurriculumTab from "./studentDetail/CurriculumTab";
import WeeklyProgressTrackers from "./studentDetail/WeeklyProgressTrackers";
import ChallengeDetailModal from "./studentDetail/ChallengeDetailModal";
import BasicCalculationPanel from "./studentDetail/BasicCalculationPanel";
import DailyPracticeSettings from "./studentDetail/DailyPracticeSettings";
import ChallengeAnalyticsPanel from "./studentDetail/ChallengeAnalyticsPanel";
import ChallengePerformanceHero from "./studentDetail/ChallengePerformanceHero";
import CollapsibleSection from "./studentDetail/CollapsibleSection";
import SecretNotebookPanel from "./studentDetail/SecretNotebookPanel";
import ExamPrepPanel from "./studentDetail/ExamPrepPanel";
import EditStudentModal from "./studentDetail/EditStudentModal";
import ScheduleModal from "./studentDetail/ScheduleModal";
import StudentHeaderCard from "./studentDetail/StudentHeaderCard";
import StudentDashboardCard from "./studentDetail/StudentDashboardCard";
import ChallengeHistoryCard from "./ChallengeHistoryCard";
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
  "dailyPracticeConfig",
  "dailyQuestionCount",
  "calculationEnabled",
  "calcQuestionCount",
  "showHscGraph",
  "examPrepEnabled",
  "examPrepSelection",
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
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("curriculum");
  const [assignedChapters, setAssignedChapters] = useState([]);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [homeworkSessions, setHomeworkSessions] = useState([]);
  const [homeworkLoading, setHomeworkLoading] = useState(false);
  const [dailyPracticeConfig, setDailyPracticeConfig] = useState({ years: [], chapters: [] });

  const [booking, setBooking] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [sendingReport, setSendingReport] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscSaving, setHscSaving] = useState(false);
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
    role: "",
    assignedYear: ["Year 11"],
    assignedCourse: ["Advanced"],
    dailyQuestionCount: 10,
    calculationEnabled: true,
    showHscGraph: false,
    examPrepEnabled: false,
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
    if (!studentId) return;
    let cancelled = false;
    let unsubManual = null;

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
        examPrepSelection: data.examPrepSelection || { years: [], chapters: [] },
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
          try {
            const linked = await syncManualToRegistered(mSnap.id, mData);
            if (linked) return;
          } catch (err) {
            console.warn("Manual-to-registered curriculum sync skipped:", err);
          }
          applyStudentData(mSnap.id, "manual", mData);
        },
      );
    };

    const unsub = onSnapshot(doc(db, "users", studentId), async (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        // If loading a registered user directly, track their UID immediately
        if (!cancelled) setRegisteredUid(studentId);
        try {
          const linked = await syncRegisteredWithManual(snap.id, data);
          if (linked) return;
        } catch (err) {
          console.warn("Registered duplicate curriculum sync skipped:", err);
        }
        applyStudentData(snap.id, "users", data);
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

  useEffect(() => {
    if (!activeStudentId || !student?.id) return;

    // We must listen to both possible paths:
    // 1. The teacher's view collection (manual: students/, registered: users/)
    // 2. The actual Firebase Auth user's path (users/{registeredUid}) where challenge results are written
    // These can differ when a manual student (students/) has a linked registered account (users/)

    const statsMap = {}; // key: `${statCollection}:${id}` => stat object
    const updateStats = () => {
      const allStats = Object.values(statsMap);
      setDailyStats(sortStatsByDateDesc(allStats));
    };

    const buildListener = (colPath, statLabel) => {
      const unsubDaily = onSnapshot(
        collection(db, colPath, "daily_stats"),
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
        collection(db, colPath, "calc_stats"),
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

    const cleanups = [];

    // Always listen to the primary collection path
    cleanups.push(buildListener(`${activeStudentCollection}/${activeStudentId}`, 'primary'));

    // If challengeResultsUid is different from activeStudentId (manual student with linked registered account),
    // ALSO listen to users/{registeredUid} to capture challenge results written by the student app
    if (challengeResultsUid && challengeResultsUid !== activeStudentId) {
      console.log(`[StudentDetail] Dual-listen: also watching users/${challengeResultsUid} for challenge results`);
      cleanups.push(buildListener(`users/${challengeResultsUid}`, 'registered'));
    }

    return () => cleanups.forEach(fn => fn());
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

  // Fetch homework sessions — must be here, above ALL early returns (loading, !student)
  useEffect(() => {
    if (activeTab !== 'homework') return;
    if (!activeStudentId) return;
    setHomeworkLoading(true);
    const q = query(
      collection(db, 'sessions'),
      where('studentId', '==', activeStudentId),
    );
    getDocs(q).then((snap) => {
      const all = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((s) => s.homework || (s.learnedTopics && s.learnedTopics.length > 0))
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      setHomeworkSessions(all);
      setHomeworkLoading(false);
    }).catch(() => setHomeworkLoading(false));
  }, [activeTab, activeStudentId]);

  const handleUpdateProfile = async () => {
    try {
      const normalizedRole = editForm.role || "";
      await updateDoc(doc(db, activeStudentCollection, activeStudentId), {
        ...editForm,
        role: normalizedRole,
        status: "Active",
        updatedAt: serverTimestamp(),
      });
      updateLocalStudentProfileCache({
        ...editForm,
        role: normalizedRole,
        status: "Active",
      });
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

    // Update local state immediately for snappy UI
    setAssignedChapters(nextAssigned);
    setCompletedChapters(nextCompleted);

    try {
      await updateDoc(doc(db, activeStudentCollection, activeStudentId), {
        assignedChapters: nextAssigned,
        completedChapters: nextCompleted,
      });
      updateLocalStudentProfileCache({
        assignedChapters: nextAssigned,
        completedChapters: nextCompleted,
      });
      touchStudentListMeta();
    } catch (e) {
      console.error(e);
      // Optional: rollback on error?
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !activeStudentId) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onerror = () => {
      showToast("Error reading file.", "error");
      setUploading(false);
    };
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = () => {
        showToast("Error loading image.", "error");
        setUploading(false);
      };
      img.onload = async () => {
        try {
          const MAX_SIZE = 800; // stricter bounding box
          let w = img.width;
          let h = img.height;

          if (w > MAX_SIZE || h > MAX_SIZE) {
            if (w > h) {
              h = Math.round((h * MAX_SIZE) / w);
              w = MAX_SIZE;
            } else {
              w = Math.round((w * MAX_SIZE) / h);
              h = MAX_SIZE;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);

          // Iteratively compress until under ~800KB (base64 length < 1.1 million chars)
          let quality = 0.8;
          let url = canvas.toDataURL("image/jpeg", quality);
          while (url.length > 1100000 && quality > 0.1) {
            quality -= 0.1;
            url = canvas.toDataURL("image/jpeg", quality);
          }

          if (url.length > 1100000) {
            showToast(
              "Image is too large. Please try a smaller photo.",
              "warning",
            );
            setUploading(false);
            return;
          }

          await updateDoc(doc(db, activeStudentCollection, activeStudentId), { dreamImageUrl: url });
          touchStudentListMeta();
        } catch (err) {
          console.error(err);
          showToast("Failed to save image.", "error");
        } finally {
          setUploading(false);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
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

  const handleRecalculateXP = async () => {
    if (!student || !activeStudentId) return;
    if (
      !confirm(
        "Recalculate total XP and challenge count from history? This will overwrite the current totals.",
      )
    )
      return;

    try {
      setLoading(true);
      console.log(`Recalculating for ${activeStudentCollection}/${activeStudentId}`);

      // 1. Fetch all daily stats
      const dailySnap = await getDocs(
        collection(db, activeStudentCollection, activeStudentId, "daily_stats"),
      );
      const calcSnap = await getDocs(
        collection(db, activeStudentCollection, activeStudentId, "calc_stats"),
      );
      const hasCalculationTest = student.calculationEnabled !== false;
      const getFallbackXp = (data, type) => {
        const score = Number(data.score) || 0;
        const total = Number(data.total) || 0;
        if (total <= 0) return 0;
        const maxXp = type === "calc" ? 50 : hasCalculationTest ? 50 : 100;
        return Math.round((score / total) * maxXp);
      };

      let totalXP = 0;
      let challengesCompleted = 0;

      dailySnap.forEach((d) => {
        const data = d.data();
        // Be more flexible with score parsing
        const score = Number(data.score) || 0;
        if (data.completed || score > 0) {
          totalXP += Number(data.xpEarned) || getFallbackXp(data, "daily");
          challengesCompleted += 1;
        }
      });

      calcSnap.forEach((d) => {
        const data = d.data();
        const score = Number(data.score) || 0;
        if (data.completed || score > 0) {
          totalXP += Number(data.xpEarned) || getFallbackXp(data, "calc");
          challengesCompleted += 1;
        }
      });

      console.log(`Computed: XP=${totalXP}, Count=${challengesCompleted}`);

      await setDoc(
        doc(db, activeStudentCollection, activeStudentId),
        {
          totalXP,
          challengesCompleted,
        },
        { merge: true },
      );

      // Sync to Leaderboard
      try {
        const fullStudentData = { ...student, totalXP, challengesCompleted };
        if (student.source === 'manual') {
          await upsertManualStudentLeaderboard(activeStudentId, fullStudentData);
        } else {
          await upsertRegisteredUserLeaderboard(activeStudentId, fullStudentData);
        }
      } catch (lbErr) {
        console.warn('Leaderboard sync failed during recalculate:', lbErr);
      }

      showToast(
        `Success! Total XP: ${totalXP}, Challenges: ${challengesCompleted}`,
        "success",
      );
    } catch (err) {
      console.error("Recalculate error:", err);
      showToast("Recalculation failed: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const recalculateStudentTotals = async (colName = activeStudentCollection) => {
    const hasCalculationTest = student.calculationEnabled !== false;
    const getFallbackXp = (data, type) => {
      const score = Number(data.score) || 0;
      const total = Number(data.total) || 0;
      if (total <= 0) return 0;
      const maxXp = type === "calc" ? 50 : hasCalculationTest ? 50 : 100;
      return Math.round((score / total) * maxXp);
    };
    const includeStat = (data) =>
      data.completed || (Number(data.score) || 0) > 0;

    // Collect stats from both paths, deduplicating by doc ID so registered
    // students (whose results are written to users/{registeredUid}) aren't
    // under-counted when the primary and registered paths differ.
    const paths = [[colName, activeStudentId]];
    if (challengeResultsUid && challengeResultsUid !== activeStudentId) {
      paths.push(["users", challengeResultsUid]);
    }

    const mergedDaily = new Map();
    const mergedCalc = new Map();
    await Promise.all(paths.map(async ([col, uid]) => {
      const [dailySnap, calcSnap] = await Promise.all([
        getDocs(collection(db, col, uid, "daily_stats")),
        getDocs(collection(db, col, uid, "calc_stats")),
      ]);
      dailySnap.forEach((d) => { if (!mergedDaily.has(d.id)) mergedDaily.set(d.id, d.data()); });
      calcSnap.forEach((d) => { if (!mergedCalc.has(d.id)) mergedCalc.set(d.id, d.data()); });
    }));

    let totalXP = 0;
    let challengesCompleted = 0;

    mergedDaily.forEach((data) => {
      if (!includeStat(data)) return;
      totalXP += Number(data.xpEarned) || getFallbackXp(data, "daily");
      challengesCompleted += 1;
    });
    mergedCalc.forEach((data) => {
      if (!includeStat(data)) return;
      totalXP += Number(data.xpEarned) || getFallbackXp(data, "calc");
      challengesCompleted += 1;
    });

    await setDoc(
      doc(db, colName, activeStudentId),
      {
        totalXP,
        challengesCompleted,
      },
      { merge: true },
    );

    // Sync to Leaderboard
    try {
      const fullStudentData = { ...student, totalXP, challengesCompleted };
      if (student.source === 'manual') {
        await upsertManualStudentLeaderboard(activeStudentId, fullStudentData);
      } else {
        await upsertRegisteredUserLeaderboard(activeStudentId, fullStudentData);
      }
    } catch (lbErr) {
      console.warn('Leaderboard sync failed during totals update:', lbErr);
    }

    return { totalXP, challengesCompleted };
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
        "Are you sure you want to reset this challenge? This will delete the attempt and recalculate XP from the remaining history.",
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
      await deleteDoc(statRef);
      // Also delete from users/{registeredUid} if student used a different path
      if (syncUid !== activeStudentId) {
        await deleteDoc(doc(db, "users", syncUid, statCollection, stat.id)).catch(() => {});
      }

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
          subject: `${isDailyReset ? "Daily Challenge" : "Basic Calculation"} reset`,
          text: `Your teacher has reset your ${isDailyReset ? "Daily Challenge" : "Basic Calculation"} for ${stat.id}.`,
          metadata: {
            type: "challenge_reset",
            challengeType: isDailyReset ? "daily" : "calc",
            date: stat.id,
            resetVersion: Date.now(),
          },
        }),
      }).catch((err) => console.warn("Challenge reset notification failed:", err));

      const totals = await recalculateStudentTotals(activeStudentCollection);
      showToast(
        `Challenge reset. XP recalculated to ${totals.totalXP}. Removed ${deletedWorkingOutCount} saved working out item${deletedWorkingOutCount === 1 ? "" : "s"}.`,
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

  const renderTabContent = () => {
    switch (activeTab) {
      case "curriculum":
        return (
          <CurriculumTab
            styles={styles}
            assignedYears={assignedYears}
            chapters={chapters}
            assignedChapters={assignedChapters}
            completedChapters={completedChapters}
            onToggleChapter={handleToggleChapter}
          />
        );
      case "challenge":
        return (
          <div style={{ display: "grid", gap: "24px" }}>

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

            {/* ANALYTICS PANEL */}
            {studentAnalytics && (
              <ChallengeAnalyticsPanel
                studentAnalytics={studentAnalytics}
                dailyStats={dailyStats}
              />
            )}

            {/* SECRET NOTEBOOK PANEL */}
            <SecretNotebookPanel student={student} />

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

            <CollapsibleSection
              title="Challenge history"
              summary={`${dailyPracticeStats.length} daily · ${calculationStats.length} calc sessions`}
              badge={String(dailyPracticeStats.length + calculationStats.length)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div
                  className="section-title"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#94a3b8",
                    margin: 0,
                  }}
                >
                  CHALLENGE HISTORY
                </div>
                <button
                  onClick={handleRecalculateXP}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "#f5f3ff",
                    color: "#6366f1",
                    border: "1px solid #e0e7ff",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Recalculate XP
                </button>
                <button
                  onClick={async () => {
                    const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" });
                    const syncUid = challengeResultsUid || activeStudentId;
                    await handleResetChallenge({
                      id: todayStr,
                      studentId: syncUid,
                      challengeType: "daily",
                      statCollection: "daily_stats",
                    });
                  }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "#fff1f2",
                    color: "#e11d48",
                    border: "1px solid #ffe4e6",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                >
                  Force Reset Daily
                </button>
                <button
                  onClick={async () => {
                    const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" });
                    const syncUid = challengeResultsUid || activeStudentId;
                    await handleResetChallenge({
                      id: todayStr,
                      studentId: syncUid,
                      challengeType: "calc",
                      statCollection: "calc_stats",
                    });
                  }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    background: "#fff1f2",
                    color: "#e11d48",
                    border: "1px solid #ffe4e6",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                >
                  Force Reset Calc
                </button>
              </div>
              <div style={{ display: "grid", gap: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      color: "#64748b",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Daily Practice
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      color: "#94a3b8",
                    }}
                  >
                    {dailyPracticeStats.length}
                  </div>
                </div>
                {dailyPracticeStats.length > 0 ? (
                  dailyPracticeStats.map((stat) => (
                    <ChallengeHistoryCard
                      key={`${stat.statCollection || stat.challengeType || 'daily'}-${stat.id}`}
                      stat={stat}
                      onSelect={setSelectedChallenge}
                      onReset={handleResetChallenge}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px",
                      color: "#94a3b8",
                      fontWeight: 600,
                      background: "#f8fafc",
                      borderRadius: "18px",
                      border: "1px dashed #e2e8f0",
                    }}
                  >
                    No Daily Practice history yet.
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      color: "#92400e",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Basic Calculation
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      color: "#d97706",
                    }}
                  >
                    {calculationStats.length}
                  </div>
                </div>
                {calculationStats.length > 0 ? (
                  calculationStats.map((stat) => (
                    <ChallengeHistoryCard
                      key={`${stat.statCollection || stat.challengeType || 'calc'}-${stat.id}`}
                      stat={stat}
                      onSelect={setSelectedChallenge}
                      onReset={handleResetChallenge}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "24px",
                      color: "#b45309",
                      fontWeight: 700,
                      background: "#fffbeb",
                      borderRadius: "18px",
                      border: "1px dashed #fde68a",
                    }}
                  >
                    No Basic Calculation history yet.
                  </div>
                )}
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              title="Basic calculation"
              summary={student.calculationEnabled === false ? 'Disabled' : 'Timed calculation rounds'}
              badge={student.calculationEnabled === false ? 'Off' : 'On'}
              badgeTone={student.calculationEnabled === false ? 'amber' : 'green'}
            >
                <BasicCalculationPanel
                  styles={{ ...styles, card: {} }}
                  student={student}
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

            {/* EXAM PREP — same accordion shape as Basic calculation. The
                ENABLE/DISABLE toggle inside the panel controls the per-student
                flag, replacing the toggle that used to live in Edit Student. */}
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
                onUpdateSetting={handleUpdateCurriculumSetting}
              />
            </CollapsibleSection>
          </div>
        );
      case "homework":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <ClipboardList size={20} style={{ color: '#7c3aed' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>Homework History</h3>
            </div>
            {homeworkLoading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontWeight: 700 }}>Loading…</div>
            ) : homeworkSessions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontWeight: 700, background: '#f8fafc', borderRadius: '16px', border: '1px dashed #e2e8f0' }}>
                No homework recorded yet.
              </div>
            ) : (
              homeworkSessions.map((session) => {
                const done = session.isHomeworkCompleted === true;
                const hasPending = session.homework && !done;
                return (
                  <div key={session.id} style={{
                    background: '#fff',
                    borderRadius: '16px',
                    border: `1.5px solid ${done ? '#bbf7d0' : hasPending ? '#fde68a' : '#e2e8f0'}`,
                    padding: '18px 20px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                  }}>
                    {/* Header row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b' }}>
                        📅 {session.date || '—'}
                        {session.startTime && ` · ${session.startTime}`}
                      </span>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        fontSize: '0.72rem', fontWeight: 900, padding: '3px 10px', borderRadius: '999px',
                        background: done ? '#f0fdf4' : hasPending ? '#fffbeb' : '#f8fafc',
                        color: done ? '#15803d' : hasPending ? '#b45309' : '#64748b',
                        border: `1px solid ${done ? '#bbf7d0' : hasPending ? '#fde68a' : '#e2e8f0'}`,
                      }}>
                        {done ? <><CheckCircle2 size={12} /> Done</> : hasPending ? <><Circle size={12} /> Pending</> : 'No homework'}
                      </span>
                    </div>

                    {/* Topics covered */}
                    {Array.isArray(session.learnedTopics) && session.learnedTopics.length > 0 && (
                      <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Topics Covered</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {session.learnedTopics.map((t, i) => (
                            <span key={i} style={{ background: '#f5f3ff', color: '#6d28d9', fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>
                              {t.label || t.id || t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Homework text */}
                    {session.homework && (
                      <div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Homework</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                          {session.homework}
                        </div>
                      </div>
                    )}

                    {/* Score */}
                    {(session.homeworkScore !== undefined && session.homeworkScore !== '') && (
                      <div style={{ marginTop: '10px', fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>
                        Score: <span style={{ color: '#7c3aed' }}>{session.homeworkScore}{session.homeworkTotal ? ` / ${session.homeworkTotal}` : ''}</span>
                      </div>
                    )}

                    {/* Notes */}
                    {session.notes && (
                      <div style={{ marginTop: '10px', padding: '10px 12px', background: '#f8fafc', borderRadius: '10px', fontSize: '0.82rem', color: '#475569', fontWeight: 600, lineHeight: 1.5 }}>
                        📝 {session.notes}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        );
      case "hsc":
        return (
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
          />
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
        onEditProfile={() => setIsEditModalOpen(true)}
      />

      {/* 2. Dashboard & Progress */}
      <StudentDashboardCard
        styles={styles}
        student={student}
        uploading={uploading}
        fileInputRef={fileInputRef}
        onImageUpload={handleImageUpload}
        chapters={chapters}
        completedChapters={completedChapters}
        editingTerm={editingTerm}
        setEditingTerm={setEditingTerm}
        showToast={showToast}
        onUpdateCurriculumSetting={handleUpdateCurriculumSetting}
      />
      {/* 3-4. Weekly progress trackers */}
      <WeeklyProgressTrackers
        dailyStats={dailyStats}
        calculationEnabled={student?.calculationEnabled}
      />

      {/* 5. Navigation */}
      <div
        className="nav-tabs-mobile"
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setActiveTab("curriculum")}
          style={{
            ...styles.navBtn,
            ...(activeTab === "curriculum" ? styles.navBtnActive : {}),
          }}
        >
          <BookOpen size={18} /> Curriculum
        </button>
        <button
          onClick={() => setActiveTab("challenge")}
          style={{
            ...styles.navBtn,
            ...(activeTab === "challenge" ? styles.navBtnActive : {}),
          }}
        >
          <Trophy size={18} /> Challenge
        </button>
        <button
          onClick={() => setActiveTab("homework")}
          style={{
            ...styles.navBtn,
            ...(activeTab === "homework" ? styles.navBtnActive : {}),
          }}
        >
          <ClipboardList size={18} /> Homework
        </button>
        <button
          onClick={() => setActiveTab("hsc")}
          style={{
            ...styles.navBtn,
            ...(activeTab === "hsc" ? styles.navBtnActive : {}),
          }}
        >
          <FileText size={18} /> HSC
        </button>
        <button
          onClick={() => setIsScheduleModalOpen(true)}
          style={styles.navBtn}
        >
          <Calendar size={18} /> Add Schedule
        </button>
      </div>

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
