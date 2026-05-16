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
import { createDailyAssignment } from "../services/dailyAssignmentService";
import { touchStudentsSyncMeta } from "../services/studentService";
import { localCache } from "../services/localCacheService";
import { generateLearningRecommendations } from "../utils/analyticsUtils";
import { useToast } from "../context/ToastContext";
import { CURRICULUM_DATA } from "../constants/curriculumData";
import MathView, { toDisplayText } from "./MathView";
import HscScoreChart from "./HscScoreChart";
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

const getChallengeOptions = (question) =>
  Array.isArray(question?.options) ? question.options : [];

const getChallengeOptionText = (option) => toDisplayText(option);

const getChallengeOptionImage = (option) => {
  if (!option || typeof option !== "object") return "";
  return option.imageUrl || option.image || "";
};

const getWorkingOutPages = (result) => {
  if (Array.isArray(result?.workingOutPages) && result.workingOutPages.length > 0) {
    return result.workingOutPages.filter(Boolean);
  }
  return result?.workingOut ? [result.workingOut] : [];
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
  const [dailyPracticeConfig, setDailyPracticeConfig] = useState({ years: [], chapters: [] });

  const [booking, setBooking] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscSaving, setHscSaving] = useState(false);
  const [hscForm, setHscForm] = useState({
    examDate: getTodayDateKey(),
    paper: "",
    score: "",
    total: "100",
    notes: "",
  });
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const { showToast } = useToast();
  const [dailyYearsOpen, setDailyYearsOpen] = useState(false);
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
    if (activeStudentCollection === "users" && activeStudentId) {
      setDoc(doc(db, "sync_meta", getChallengeBootMetaId(activeStudentId)), {
        version: Date.now(),
        profileVersion: Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true }).catch(() => {});
    }
  };

  const handleUpdateDailyConfig = (newConfig) => {
    setDailyPracticeConfig(newConfig);
    updateDoc(doc(db, activeStudentCollection, activeStudentId), {
      dailyPracticeConfig: newConfig,
    })
      .then(() => {
        updateLocalStudentProfileCache({ dailyPracticeConfig: newConfig });
        touchStudentListMeta();
      })
      .catch(console.error);
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
  const [openDropdown, setOpenDropdown] = useState(null); // 'start' | 'end' | null
  const dropdownRef = useRef(null);

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

    (async () => {
      try {
        const snap = await getDoc(
          doc(
            db,
            activeStudentCollection,
            activeStudentId,
            statCollection,
            statId,
            "detail_snapshot",
            "main",
          ),
        );
        if (cancelled || !snap.exists()) return;
        const data = snap.data();
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
        console.warn("Calc detail snapshot load failed:", err.code || err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedChallenge, activeStudentCollection, activeStudentId]);

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

    let cancelled = false;
    (async () => {
      const loaded = await Promise.all(
        missingWorkingOut.map(async ({ idx }) => {
          try {
            const snap = await getDoc(
              doc(db, activeStudentCollection, activeStudentId, statCollection, statId, "working_out", String(idx)),
            );
            return snap.exists() ? { idx, data: snap.data() } : null;
          } catch (err) {
            console.warn(`Working out load failed for question ${idx}:`, err.code || err);
            return null;
          }
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
  }, [selectedChallenge, activeStudentCollection, activeStudentId]);

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

  const handleUpdateCurriculumSetting = async (field, value) => {
    try {
      await updateDoc(doc(db, activeStudentCollection, activeStudentId), { [field]: value });
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
    const dailySnap = await getDocs(
      collection(db, colName, activeStudentId, "daily_stats"),
    );
    const calcSnap = await getDocs(
      collection(db, colName, activeStudentId, "calc_stats"),
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

    const includeStat = (data) =>
      data.completed || (Number(data.score) || 0) > 0;
    dailySnap.forEach((d) => {
      const data = d.data();
      if (!includeStat(data)) return;
      totalXP += Number(data.xpEarned) || getFallbackXp(data, "daily");
      challengesCompleted += 1;
    });
    calcSnap.forEach((d) => {
      const data = d.data();
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
        await createDailyAssignment({
          uid: syncUid,
          studentProfile: student,
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

    try {
      setHscSaving(true);
      const docRef = await addDoc(collection(db, activeStudentCollection, activeStudentId, "hsc_results"), {
        examDate: hscForm.examDate,
        paper: hscForm.paper.trim(),
        score,
        total,
        percentage: Math.round((score / total) * 1000) / 10,
        notes: hscForm.notes.trim(),
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div style={styles.card} className="profile-card-mobile">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <div
                  className="section-title"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#94a3b8",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  ASSIGN CURRICULUM
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      background: "#f8fafc",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      border: "1px solid #f1f5f9",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>
                      YEAR:
                    </span>
                    <span style={{ fontWeight: 800, color: "#6366f1" }}>
                      {assignedYears.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "16px",
                }}
              >
                {chapters.map((ch) => {
                  const isAssigned = assignedChapters.includes(ch.id);
                  const isCompleted = completedChapters.includes(ch.id);
                  const status = isCompleted
                    ? "DONE"
                    : isAssigned
                      ? "ACTIVE"
                      : null;

                  return (
                    <div
                      key={ch.id}
                      onClick={() => handleToggleChapter(ch.id)}
                      style={{
                        padding: "16px 20px",
                        borderRadius: "16px",
                        border: "2px solid",
                        borderColor: isCompleted
                          ? "#22c55e"
                          : isAssigned
                            ? "#6366f1"
                            : "#f1f5f9",
                        background: isCompleted
                          ? "#f0fdf4"
                          : isAssigned
                            ? "#f5f3ff"
                            : "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "6px",
                            background: isCompleted
                              ? "#22c55e"
                              : isAssigned
                                ? "#6366f1"
                                : "#f1f5f9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                          }}
                        >
                          {(isAssigned || isCompleted) && <Check size={14} />}
                        </div>
                        {status && (
                          <span
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: 900,
                              padding: "4px 8px",
                              borderRadius: "6px",
                              background: isCompleted
                                ? "rgba(34,197,94,0.1)"
                                : "rgba(99,102,241,0.1)",
                              color: isCompleted ? "#166534" : "#4338ca",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {status}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: "0.9rem",
                          color: isCompleted
                            ? "#166534"
                            : isAssigned
                              ? "#4338ca"
                              : "#1e1b4b",
                        }}
                      >
                        {ch.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case "challenge":
        return (
          <div style={{ display: "grid", gap: "24px" }}>

            {/* ANALYTICS PANEL */}
            {studentAnalytics && (
              <div style={{ background: "white", borderRadius: "24px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(99,102,241,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #8b5cf6, #6366f1)", borderRadius: "2px" }} />
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#4c1d95", letterSpacing: "0.05em", textTransform: "uppercase" }}>Performance Analysis</div>
                  {studentAnalytics.trend !== "insufficient_data" && (
                    <span style={{
                      marginLeft: "auto", fontSize: "0.7rem", fontWeight: 800, borderRadius: "100px", padding: "3px 12px",
                      background: studentAnalytics.trend === "improving" ? "#d1fae5" : studentAnalytics.trend === "declining" ? "#fee2e2" : "#f1f5f9",
                      color: studentAnalytics.trend === "improving" ? "#065f46" : studentAnalytics.trend === "declining" ? "#991b1b" : "#475569",
                    }}>
                      {studentAnalytics.trend === "improving" ? "📈 Improving" : studentAnalytics.trend === "declining" ? "📉 Declining" : "➡ Stable"}
                    </span>
                  )}
                </div>

                {/* Stats row */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
                  {[
                    { label: "Overall Accuracy", value: `${studentAnalytics.overallAccuracy}%`, color: studentAnalytics.overallAccuracy >= 75 ? "#10b981" : studentAnalytics.overallAccuracy >= 50 ? "#f59e0b" : "#ef4444" },
                    { label: "Questions Done", value: studentAnalytics.totalQuestionsAttempted.toLocaleString(), color: "#6366f1" },
                    { label: "Sessions", value: dailyStats.length, color: "#8b5cf6" },
                  ].map(stat => (
                    <div key={stat.label} style={{ flex: "1 1 100px", background: "#f8fafc", borderRadius: "16px", padding: "14px 16px", border: "1px solid #e2e8f0" }}>
                      <div style={{ fontSize: "1.4rem", fontWeight: 900, color: stat.color }}>{stat.value}</div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Weak topics */}
                {studentAnalytics.weakTopics.length > 0 && (
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>⚠ Needs Attention</div>
                    {studentAnalytics.weakTopics.map(t => (
                      <div key={t.topicId} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#fff7ed", borderRadius: "12px", marginBottom: "6px", border: "1px solid #fed7aa" }}>
                        <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#92400e" }}>{t.label}</span>
                        <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#fef3c7", color: "#b45309", borderRadius: "100px", padding: "3px 10px" }}>{t.errorRate}% wrong</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Strong topics */}
                {studentAnalytics.strongTopics.length > 0 && (
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>✓ Strong Areas</div>
                    {studentAnalytics.strongTopics.map(t => (
                      <div key={t.topicId} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "#f0fdf4", borderRadius: "12px", marginBottom: "6px", border: "1px solid #bbf7d0" }}>
                        <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#14532d" }}>{t.label}</span>
                        <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#dcfce7", color: "#166534", borderRadius: "100px", padding: "3px 10px" }}>{100 - t.errorRate}% correct</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Recommendations */}
                {studentAnalytics.recommendations.length > 0 && (
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>📚 Study Recommendations</div>
                    {studentAnalytics.recommendations.map((rec, i) => (
                      <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: "#fafafe", borderRadius: "12px", marginBottom: "6px", border: "1px solid #e0e7ff", alignItems: "flex-start" }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: rec.priority === "high" ? "#ef4444" : rec.priority === "medium" ? "#f59e0b" : "#10b981" }} />
                        <div>
                          <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#1e1b4b", marginBottom: "2px" }}>{rec.title}</div>
                          <div style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>{rec.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SECRET NOTEBOOK PANEL */}
            {(() => {
              const snc = student.secretNoteCount || {};
              const mt = student.mistakeTags || {};
              const dailyN = Number(snc.daily) || 0;
              const calcN = Number(snc.calc) || 0;
              if (dailyN === 0 && calcN === 0) return null;
              const TAGS = [
                { id: "mistake", emoji: "🎨", label: "Simple mistake", color: "#0ea5e9" },
                { id: "concept", emoji: "🌀", label: "Concept gap", color: "#8b5cf6" },
                { id: "time", emoji: "⏰", label: "Ran out of time", color: "#f59e0b" },
                { id: "comprehension", emoji: "🧩", label: "Didn't understand", color: "#ef4444" },
              ];
              const merged = {};
              TAGS.forEach(t => {
                merged[t.id] = (Number(mt.daily?.[t.id]) || 0) + (Number(mt.calc?.[t.id]) || 0);
              });
              const totalTagged = Object.values(merged).reduce((a, b) => a + b, 0);
              return (
                <div style={{ background: "white", borderRadius: "24px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 4px 16px rgba(99,102,241,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                    <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #a78bfa, #ec4899)", borderRadius: "2px" }} />
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#6d28d9", letterSpacing: "0.05em", textTransform: "uppercase" }}>Secret Notebook</div>
                    <span style={{ marginLeft: "auto", fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8" }}>updated at last test</span>
                  </div>
                  {/* Counts */}
                  <div style={{ display: "flex", gap: "12px", marginBottom: totalTagged > 0 ? "18px" : 0 }}>
                    <div style={{ flex: 1, background: "#f5f3ff", borderRadius: "16px", padding: "14px 16px", border: "1px solid #ddd6fe" }}>
                      <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#7c3aed" }}>{dailyN}</div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Daily mistakes</div>
                    </div>
                    <div style={{ flex: 1, background: "#fffbeb", borderRadius: "16px", padding: "14px 16px", border: "1px solid #fde68a" }}>
                      <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#b45309" }}>{calcN}</div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginTop: "2px" }}>Calculation mistakes</div>
                    </div>
                  </div>
                  {/* Mistake tag breakdown */}
                  {totalTagged > 0 && (
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>Why mistakes happen</div>
                      {TAGS.filter(t => merged[t.id] > 0).sort((a, b) => merged[b.id] - merged[a.id]).map(t => {
                        const pct = Math.round((merged[t.id] / totalTagged) * 100);
                        return (
                          <div key={t.id} style={{ marginBottom: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#475569" }}>{t.emoji} {t.label}</span>
                              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: t.color }}>{merged[t.id]} · {pct}%</span>
                            </div>
                            <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                              <div style={{ width: `${pct}%`, height: "100%", background: t.color, borderRadius: "4px" }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* DAILY PRACTICE SETTINGS - Accordion Design */}
            <div style={styles.card} className="profile-card-mobile">
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "4px", height: "24px", background: "linear-gradient(to bottom, #10b981, #34d399)", borderRadius: "2px" }} />
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#064e3b", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Daily Practice Settings
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", background: "#ecfdf5", padding: "8px 14px", borderRadius: "20px", border: "1.5px solid #a7f3d0" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#059669", textTransform: "uppercase" }}>Daily:</span>
                  <input
                    type="number" min="1" max="50"
                    value={student.dailyQuestionCount || 10}
                    onChange={(e) => handleUpdateCurriculumSetting("dailyQuestionCount", Math.max(1, Math.min(50, parseInt(e.target.value, 10) || 10)))}
                    style={{ width: "54px", background: "white", border: "1.5px solid #6ee7b7", borderRadius: "12px", fontWeight: 900, color: "#047857", outline: "none", textAlign: "center", fontSize: "0.95rem", padding: "4px 0" }}
                  />
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669" }}>questions</span>
                </div>
              </div>

              {/* Summary Tags */}
              {(dailyPracticeConfig.years.length > 0 || dailyPracticeConfig.chapters.length > 0) && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px", padding: "12px 16px", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#065f46", textTransform: "uppercase", alignSelf: "center", marginRight: "4px" }}>Active:</span>
                  {dailyPracticeConfig.years.map(y => (
                    <span key={y} style={{ fontSize: "0.75rem", fontWeight: 700, background: "#10b981", color: "white", borderRadius: "100px", padding: "3px 10px" }}>{y} (All)</span>
                  ))}
                  {dailyPracticeConfig.chapters.length > 0 && (
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, background: "#34d399", color: "white", borderRadius: "100px", padding: "3px 10px" }}>{dailyPracticeConfig.chapters.length} chapter{dailyPracticeConfig.chapters.length > 1 ? "s" : ""} selected</span>
                  )}
                  <button onClick={() => handleUpdateDailyConfig({ years: [], chapters: [] })} style={{ fontSize: "0.7rem", fontWeight: 700, background: "none", border: "1px solid #86efac", color: "#059669", borderRadius: "100px", padding: "2px 10px", cursor: "pointer", marginLeft: "auto" }}>Clear All</button>
                </div>
              )}

              {/* Accordion Rows per Year */}
              <div style={{ display: "grid", gap: "8px" }}>
                {Object.entries(CURRICULUM_DATA)
                  .filter(([year]) => year.startsWith("Year"))
                  .map(([year, data]) => {
                    const isYearSelected = dailyPracticeConfig.years.includes(year);
                    const isExpanded = !isYearSelected && (dailyYearsOpen === year);

                    let chapters = [];
                    if (Array.isArray(data)) {
                      chapters = data;
                    } else {
                      Object.entries(data).forEach(([course, courseChapters]) => {
                        chapters = [...chapters, ...courseChapters.map(c => ({ ...c, _course: course }))];
                      });
                    }

                    const selectedChaptersInYear = chapters.filter(ch => dailyPracticeConfig.chapters.includes(ch.id));
                    const hasPartialSelection = !isYearSelected && selectedChaptersInYear.length > 0;

                    return (
                      <div key={year}>
                        {/* Year Row */}
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 16px",
                          borderRadius: isExpanded ? "12px 12px 0 0" : "12px",
                          background: isYearSelected ? "linear-gradient(135deg, #ecfdf5, #d1fae5)" : hasPartialSelection ? "#f0fdf4" : "#f8fafc",
                          border: `1.5px solid ${isYearSelected ? "#6ee7b7" : hasPartialSelection ? "#86efac" : "#e2e8f0"}`,
                          transition: "all 0.2s",
                          cursor: "pointer",
                        }}>
                          {/* Full-year checkbox */}
                          <div
                            onClick={(e) => { e.stopPropagation(); handleToggleDailyYear(year); }}
                            style={{
                              width: "20px", height: "20px", borderRadius: "6px", flexShrink: 0,
                              background: isYearSelected ? "#10b981" : "white",
                              border: `2px solid ${isYearSelected ? "#10b981" : "#cbd5e1"}`,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              color: "white", transition: "all 0.2s",
                            }}
                          >
                            {isYearSelected && <Check size={12} strokeWidth={4} />}
                          </div>

                          {/* Year label + partial count */}
                          <div
                            style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px" }}
                            onClick={() => setDailyYearsOpen(isExpanded ? null : year)}
                          >
                            <span style={{ fontWeight: 800, fontSize: "0.9rem", color: isYearSelected ? "#065f46" : "#374151" }}>{year}</span>
                            {hasPartialSelection && (
                              <span style={{ fontSize: "0.7rem", fontWeight: 700, background: "#d1fae5", color: "#059669", borderRadius: "100px", padding: "2px 8px" }}>
                                {selectedChaptersInYear.length}/{chapters.length}
                              </span>
                            )}
                            {isYearSelected && (
                              <span style={{ fontSize: "0.7rem", fontWeight: 700, background: "#10b981", color: "white", borderRadius: "100px", padding: "2px 8px" }}>All chapters</span>
                            )}
                          </div>

                          {/* Expand arrow */}
                          {!isYearSelected && (
                            <div
                              onClick={() => setDailyYearsOpen(isExpanded ? null : year)}
                              style={{ color: "#94a3b8", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", fontSize: "1rem", fontWeight: 900, lineHeight: 1 }}
                            >
                              ▾
                            </div>
                          )}
                        </div>

                        {/* Expanded Chapter Grid */}
                        {isExpanded && (
                          <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: "8px",
                            padding: "12px",
                            background: "#f8fafc",
                            border: "1.5px solid #e2e8f0",
                            borderTop: "none",
                            borderRadius: "0 0 12px 12px",
                          }}>
                            {chapters.map(ch => {
                              const isSel = dailyPracticeConfig.chapters.includes(ch.id);
                              return (
                                <div
                                  key={ch.id}
                                  onClick={() => handleToggleDailyChapter(ch.id)}
                                  style={{
                                    display: "flex", alignItems: "center", gap: "10px",
                                    padding: "10px 12px", borderRadius: "10px",
                                    background: isSel ? "#ecfdf5" : "white",
                                    border: `1.5px solid ${isSel ? "#34d399" : "#e2e8f0"}`,
                                    cursor: "pointer", transition: "all 0.15s",
                                  }}
                                >
                                  <div style={{
                                    width: "16px", height: "16px", borderRadius: "4px", flexShrink: 0,
                                    background: isSel ? "#10b981" : "transparent",
                                    border: `2px solid ${isSel ? "#10b981" : "#cbd5e1"}`,
                                    display: "flex", alignItems: "center", justifyContent: "center", color: "white",
                                  }}>
                                    {isSel && <Check size={10} strokeWidth={4} />}
                                  </div>
                                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: isSel ? "#065f46" : "#475569", lineHeight: 1.3 }}>
                                    {ch._course && <span style={{ opacity: 0.55, fontSize: "0.68rem", display: "block" }}>{ch._course}</span>}
                                    {ch.title}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div style={styles.card} className="profile-card-mobile">
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
                <div style={styles.card} className="profile-card-mobile">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "32px",
                      flexWrap: "wrap",
                      gap: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "4px",
                          height: "24px",
                          background:
                            "linear-gradient(to bottom, #6366f1, #818cf8)",
                          borderRadius: "2px",
                        }}
                      ></div>
                      <div
                        className="section-title"
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          color: "#1e1b4b",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        BASIC CALCULATION
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* Toggle Switch */}
                      <div
                        onClick={() =>
                          handleUpdateCurriculumSetting(
                            "calculationEnabled",
                            (student?.calculationEnabled ?? true) === false,
                          )
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          padding: "10px 20px",
                          borderRadius: "100px",
                          background:
                            (student?.calculationEnabled ?? true) !== false
                              ? "linear-gradient(135deg, #f5f3ff, #ede9fe)"
                              : "#f8fafc",
                          border: `1.5px solid ${(student?.calculationEnabled ?? true) !== false ? "#818cf8" : "#e2e8f0"}`,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow:
                            (student?.calculationEnabled ?? true) !== false
                              ? "0 4px 12px rgba(99,102,241,0.12)"
                              : "none",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "22px",
                            background:
                              (student?.calculationEnabled ?? true) !== false
                                ? "#6366f1"
                                : "#cbd5e1",
                            borderRadius: "20px",
                            position: "relative",
                            transition: "all 0.3s",
                          }}
                        >
                          <motion.div
                            animate={{
                              x:
                                (student?.calculationEnabled ?? true) !== false
                                  ? 20
                                  : 3,
                            }}
                            style={{
                              width: "16px",
                              height: "16px",
                              background: "white",
                              borderRadius: "50%",
                              position: "absolute",
                              top: "3px",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 900,
                            color:
                              (student?.calculationEnabled ?? true) !== false
                                ? "#4338ca"
                                : "#64748b",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {(student?.calculationEnabled ?? true) !== false
                            ? "ENABLED"
                            : "DISABLED"}
                        </span>
                      </div>

                      {/* Timer & Count Group */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background:
                            "linear-gradient(135deg, #fffbeb, #fff7ed)",
                          padding: "6px 8px",
                          borderRadius: "100px",
                          border: "1.5px solid #fbbf24",
                          boxShadow: "0 4px 15px rgba(245, 158, 11, 0.08)",
                          gap: "4px",
                        }}
                      >
                        {/* Timer Segment */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "4px 12px",
                          }}
                        >
                          <Clock size={16} color="#b45309" />
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 900,
                              color: "#b45309",
                              textTransform: "uppercase",
                            }}
                          >
                            Timer
                          </span>
                          <select
                            value={student.calcTimeLimit || 30}
                            onChange={(e) =>
                              handleUpdateCurriculumSetting(
                                "calcTimeLimit",
                                parseInt(e.target.value) || 30,
                              )
                            }
                            style={{
                              background: "white",
                              border: "1.5px solid #fcd34d",
                              borderRadius: "12px",
                              fontWeight: 900,
                              color: "#92400e",
                              outline: "none",
                              padding: "4px 10px",
                              fontSize: "0.95rem",
                              cursor: "pointer",
                              appearance: "none",
                              textAlign: "center",
                              minWidth: "65px",
                            }}
                          >
                            {[
                              30, 60, 90, 120, 150, 180, 210, 240, 270, 300,
                            ].map((s) => (
                              <option key={s} value={s}>
                                {s}s
                              </option>
                            ))}
                          </select>
                        </div>

                        <div
                          style={{
                            width: "1.5px",
                            height: "24px",
                            background: "rgba(180, 83, 9, 0.15)",
                            borderRadius: "1px",
                          }}
                        ></div>

                        {/* Count Segment */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "4px 12px",
                          }}
                        >
                          <Target size={16} color="#b45309" />
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 900,
                              color: "#b45309",
                              textTransform: "uppercase",
                            }}
                          >
                            Count
                          </span>
                          <input
                            type="number"
                            min="5"
                            max="50"
                            value={student.calcQuestionCount || 10}
                            onChange={(e) =>
                              handleUpdateCurriculumSetting(
                                "calcQuestionCount",
                                parseInt(e.target.value) || 10,
                              )
                            }
                            style={{
                              width: "50px",
                              background: "white",
                              border: "1.5px solid #fcd34d",
                              borderRadius: "12px",
                              fontWeight: 900,
                              color: "#92400e",
                              outline: "none",
                              textAlign: "center",
                              fontSize: "0.95rem",
                              padding: "4px 0",
                              transition: "all 0.2s",
                            }}
                            onFocus={(e) =>
                              (e.target.style.borderColor = "#d97706")
                            }
                            onBlur={(e) =>
                              (e.target.style.borderColor = "#fcd34d")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "16px",
                    }}
                  >
                    {(CURRICULUM_DATA["Basic Calculation"] || []).map(
                      (stage) => {
                        // Determine if all topics in stage are assigned
                        const stageTopicIds = stage.topics.map((t) => t.id);
                        const isFullyAssigned = stageTopicIds.every((id) =>
                          assignedChapters.includes(id),
                        );
                        const isPartiallyAssigned =
                          !isFullyAssigned &&
                          stageTopicIds.some((id) =>
                            assignedChapters.includes(id),
                          );

                        const toggleStage = () => {
                          const allInDone = stageTopicIds.every((id) =>
                            completedChapters.includes(id),
                          );
                          const allInActive = stageTopicIds.every((id) =>
                            assignedChapters.includes(id),
                          );

                          let nextAssigned = [...assignedChapters];
                          let nextCompleted = [...completedChapters];

                          if (!allInActive && !allInDone) {
                            // None -> All Active
                            stageTopicIds.forEach((id) => {
                              if (!nextAssigned.includes(id))
                                nextAssigned.push(id);
                              nextCompleted = nextCompleted.filter(
                                (cid) => cid !== id,
                              );
                            });
                          } else if (allInActive) {
                            // All Active -> All Done
                            stageTopicIds.forEach((id) => {
                              nextAssigned = nextAssigned.filter(
                                (aid) => aid !== id,
                              );
                              if (!nextCompleted.includes(id))
                                nextCompleted.push(id);
                            });
                          } else {
                            // All Done -> None
                            stageTopicIds.forEach((id) => {
                              nextAssigned = nextAssigned.filter(
                                (aid) => aid !== id,
                              );
                              nextCompleted = nextCompleted.filter(
                                (cid) => cid !== id,
                              );
                            });
                          }

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
                        };

                        return (
                          <div
                            key={stage.id}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              padding: "16px 20px",
                              borderRadius: "16px",
                              border: "2px solid",
                              borderColor: isFullyAssigned
                                ? "#d97706"
                                : isPartiallyAssigned
                                  ? "#fcd34d"
                                  : "#f1f5f9",
                              background: isFullyAssigned ? "#fffbeb" : "white",
                            }}
                          >
                            <div
                              onClick={toggleStage}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                                cursor: "pointer",
                              }}
                            >
                              <div
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "6px",
                                  background: isFullyAssigned
                                    ? "#d97706"
                                    : isPartiallyAssigned
                                      ? "#fcd34d"
                                      : "#f1f5f9",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "white",
                                }}
                              >
                                {(isFullyAssigned || isPartiallyAssigned) && (
                                  <Check size={14} />
                                )}
                              </div>
                              <div
                                style={{
                                  fontWeight: 800,
                                  fontSize: "1rem",
                                  color: "#92400e",
                                }}
                              >
                                {stage.title}
                              </div>
                            </div>

                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fill, minmax(200px, 1fr))",
                                gap: "8px",
                                paddingLeft: "40px",
                                marginTop: "8px",
                              }}
                            >
                              {stage.topics.map((topic) => {
                                const isTopicAssigned =
                                  assignedChapters.includes(topic.id);
                                const isTopicCompleted =
                                  completedChapters.includes(topic.id);
                                return (
                                  <div
                                    key={topic.id}
                                    onClick={() =>
                                      handleToggleChapter(topic.id)
                                    }
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                      cursor: "pointer",
                                      transition: "all 0.2s",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "4px",
                                        border: "2px solid",
                                        borderColor: isTopicCompleted
                                          ? "#22c55e"
                                          : isTopicAssigned
                                            ? "#6366f1"
                                            : "#d97706",
                                        background: isTopicCompleted
                                          ? "#22c55e"
                                          : isTopicAssigned
                                            ? "#6366f1"
                                            : "transparent",
                                      }}
                                    />
                                    <span
                                      style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        color: isTopicCompleted
                                          ? "#166534"
                                          : isTopicAssigned
                                            ? "#4338ca"
                                            : "#78350f",
                                        opacity:
                                          isTopicAssigned || isTopicCompleted
                                            ? 1
                                            : 0.5,
                                      }}
                                    >
                                      {topic.group}: {topic.title}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "hsc":
        return (
          <div style={{ display: "grid", gap: "24px" }}>
            <HscScoreChart hscRecords={hscRecords} />

            <div style={styles.card} className="profile-card-mobile">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "#7c3aed", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    HSC Exam Log
                  </div>
                  <h3 style={{ margin: "6px 0 0", fontSize: "1.5rem", color: "#1e1b4b" }}>
                    Trial papers and marks
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "999px", background: "#f5f3ff", color: "#6d28d9", fontWeight: 900 }}>
                  <FileText size={18} />
                  {hscRecords.length} record{hscRecords.length === 1 ? "" : "s"}
                </div>
              </div>

              <form
                onSubmit={handleSaveHscRecord}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(130px, 0.8fr) minmax(180px, 1.4fr) minmax(90px, 0.6fr) minmax(90px, 0.6fr) auto",
                  gap: "12px",
                  alignItems: "end",
                  padding: "16px",
                  borderRadius: "22px",
                  background: "#f8fafc",
                  border: "1px solid #eef2ff",
                  marginBottom: "24px",
                }}
              >
                <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
                  Date
                  <input
                    type="date"
                    value={hscForm.examDate}
                    onChange={(e) => setHscForm({ ...hscForm, examDate: e.target.value })}
                    style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 800, color: "#1e1b4b", outline: "none" }}
                  />
                </label>
                <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
                  Paper
                  <input
                    value={hscForm.paper}
                    onChange={(e) => setHscForm({ ...hscForm, paper: e.target.value })}
                    placeholder="e.g. 2023 HSC Paper 1"
                    style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 800, color: "#1e1b4b", outline: "none" }}
                  />
                </label>
                <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
                  Score
                  <input
                    type="number"
                    min="0"
                    value={hscForm.score}
                    onChange={(e) => setHscForm({ ...hscForm, score: e.target.value })}
                    style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
                  />
                </label>
                <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase" }}>
                  Out of
                  <input
                    type="number"
                    min="1"
                    value={hscForm.total}
                    onChange={(e) => setHscForm({ ...hscForm, total: e.target.value })}
                    style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 900, color: "#1e1b4b", outline: "none" }}
                  />
                </label>
                <button
                  type="submit"
                  disabled={hscSaving}
                  style={{
                    height: "45px",
                    padding: "0 18px",
                    borderRadius: "14px",
                    border: "none",
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    color: "white",
                    fontWeight: 900,
                    cursor: hscSaving ? "wait" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Plus size={17} />
                  {hscSaving ? "Saving" : "Add"}
                </button>
                <label style={{ display: "grid", gap: "6px", fontSize: "0.72rem", fontWeight: 900, color: "#64748b", textTransform: "uppercase", gridColumn: "1 / -1" }}>
                  Notes
                  <textarea
                    rows={3}
                    value={hscForm.notes}
                    onChange={(e) => setHscForm({ ...hscForm, notes: e.target.value })}
                    placeholder="Topics to review, exam conditions, paper section notes..."
                    style={{ padding: "12px", borderRadius: "14px", border: "1.5px solid #e2e8f0", fontWeight: 700, color: "#1e1b4b", outline: "none", resize: "vertical" }}
                  />
                </label>
              </form>

              <div style={{ display: "grid", gap: "12px" }}>
                {hscRecords.length > 0 ? hscRecords.map((record) => {
                  const percentage = Number(record.percentage ?? ((Number(record.score) / Number(record.total)) * 100));
                  return (
                    <div
                      key={record.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "110px minmax(0, 1fr) 90px auto",
                        gap: "16px",
                        alignItems: "center",
                        padding: "16px",
                        borderRadius: "18px",
                        background: "white",
                        border: "1px solid #eef2ff",
                        boxShadow: "0 10px 24px rgba(79,70,229,0.05)",
                      }}
                    >
                      <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#64748b" }}>{record.examDate}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 900, color: "#1e1b4b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{record.paper}</div>
                        {record.notes && <div style={{ marginTop: "4px", fontSize: "0.78rem", color: "#64748b", lineHeight: 1.45 }}>{record.notes}</div>}
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: 950, color: "#4f46e5", fontSize: "1.05rem" }}>{Number(record.score)}/{Number(record.total)}</div>
                        <div style={{ fontSize: "0.72rem", fontWeight: 900, color: "#7c3aed" }}>{Number.isFinite(percentage) ? percentage.toFixed(1) : "0.0"}%</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteHscRecord(record)}
                        aria-label={`Delete ${record.paper}`}
                        style={{ width: "42px", height: "42px", borderRadius: "12px", border: "none", background: "#fff1f2", color: "#e11d48", display: "grid", placeItems: "center", cursor: "pointer" }}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  );
                }) : (
                  <div style={{ padding: "30px", borderRadius: "20px", background: "#f8fafc", border: "1px dashed #cbd5e1", color: "#64748b", textAlign: "center", fontWeight: 800 }}>
                    No HSC papers recorded yet.
                  </div>
                )}
              </div>
            </div>
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
      <div style={styles.card} className="profile-card-mobile">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <button style={styles.backBtn} onClick={onBack}>
            <ChevronLeft size={24} />
          </button>
          <h1 className="student-name-title" style={{ margin: 0 }}>
            {student?.name ||
              (student?.firstName
                ? `${student.firstName} ${student.lastName || ""}`.trim()
                : null) ||
              student?.displayName ||
              "Student"}
          </h1>
          <span
            className="page-pill"
            style={{ background: "#e0e7ff", color: "#6366f1" }}
          >
            {(() => {
              const y = student?.year || student?.level;
              if (!y) return "No Grade";
              return String(y).toLowerCase().includes("year") ? y : `Year ${y}`;
            })()}
          </span>
          <span
            className="page-pill"
            style={{
              background: student?.role ? "#ecfdf5" : "#fff1f2",
              color: student?.role ? "#047857" : "#e11d48",
              border: `1px solid ${student?.role ? "#bbf7d0" : "#fecdd3"}`,
            }}
          >
            {getRoleLabel(student?.role)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#475569",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <Mail size={16} /> {student?.email || "No Email"}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Phone size={16} /> {student?.phone || "No Phone"}
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => setMessageOpen(true)}
              className="app-button"
              style={{
                padding: "8px 16px",
                borderRadius: "12px",
                background: "#f5f3ff",
                color: "#6366f1",
                fontWeight: 700,
                border: "1px solid #e0e7ff",
              }}
            >
              Message
            </button>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="app-button"
              style={{
                padding: "8px 16px",
                borderRadius: "12px",
                background: "#6366f1",
                color: "white",
                fontWeight: 700,
                border: 0,
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* 2. Dashboard & Progress */}
      <div
        className="stats-grid-mobile"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          margin: "24px 0",
        }}
      >
        <div style={styles.card} className="dashboard-preview-card">
          <div
            className="section-title"
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#94a3b8",
              marginBottom: "16px",
            }}
          >
            DASHBOARD PREVIEW
          </div>
          <div
            style={{
              ...styles.visionBoard,
              backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)), url('${student?.dreamImageUrl || "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200"}')`,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "1.2rem" }}>
              {student?.dreamJob || "Dream Career"}
            </div>
            <button
              disabled={uploading}
              onClick={() => fileInputRef.current.click()}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                padding: "4px 8px",
                borderRadius: "8px",
                background: "rgba(0,0,0,0.5)",
                border: 0,
                color: "white",
                fontSize: "0.7rem",
                cursor: uploading ? "wait" : "pointer",
              }}
            >
              {uploading ? "Uploading..." : "Change Image"}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ ...styles.card, flex: "none", padding: "24px" }}>
            <div
              className="section-title"
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#94a3b8",
                marginBottom: "16px",
              }}
            >
              ACADEMIC PROGRESS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {(() => {
                const currentChapterIds = new Set(chapters.map((ch) => ch.id));
                const uniqueCompleted = new Set(completedChapters);
                const completedInCurriculum = Array.from(uniqueCompleted).filter(
                  (id) => currentChapterIds.has(id),
                );

                const progressPct = Math.round(
                  (completedInCurriculum.length / (chapters.length || 1)) * 100,
                );
                const clampedPct = Math.min(progressPct, 100);

                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                        fontWeight: 800,
                      }}
                    >
                      <span style={{ fontSize: "0.9rem" }}>Curriculum</span>
                      <span style={{ color: "#6366f1", fontSize: "0.9rem" }}>{clampedPct}%</span>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        background: "#e2e8f0",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${clampedPct}%`,
                          height: "100%",
                          background: "#6366f1",
                        }}
                      ></div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* TERM RESULTS CARD */}
          <div style={{ ...styles.card, flex: "none", padding: "24px" }}>
            <div
              className="section-title"
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#94a3b8",
                marginBottom: "16px",
              }}
            >
              TERM RESULTS & REPORTS
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[1, 2, 3, 4].map(term => {
                const score = student?.[`term${term}Result`];
                const link = student?.[`term${term}Link`];
                const isEditing = editingTerm === term;
                
                return (
                  <div key={term} style={{ display: "flex", flexDirection: "column" }}>
                    {!isEditing ? (
                      <div 
                        style={{
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "space-between",
                          padding: "10px 16px",
                          borderRadius: "100px",
                          border: "2px solid #6366f1",
                          background: "white",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                        onClick={() => {
                          if (link) {
                            window.open(link, "_blank");
                          } else {
                            showToast("No report card available.", "warning");
                          }
                        }}
                      >
                        {/* Placeholder for perfect centering balance */}
                        <div style={{ width: "20px" }}></div>

                        <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1, justifyContent: "center" }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#6366f1" }}>Term {term}</span>
                          {score && (
                            <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#8b5cf6", marginLeft: "2px" }}>{score}</span>
                          )}
                        </div>

                        <button 
                          onClick={(e) => { e.stopPropagation(); setEditingTerm(term); }}
                          style={{ 
                            background: "none", border: "none", cursor: "pointer", 
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#94a3b8", padding: "2px", width: "20px", height: "20px" 
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </button>
                      </div>
                    ) : (
                      <div style={{ padding: "16px", borderRadius: "24px", border: "2px solid #e2e8f0", background: "#f8fafc", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "4px" }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#475569" }}>Edit Term {term}</span>
                          <button onClick={() => setEditingTerm(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: "4px" }}><X size={16} /></button>
                        </div>
                        <input
                          type="text"
                          placeholder="Score (Optional)"
                          value={score || ""}
                          onChange={(e) => handleUpdateCurriculumSetting(`term${term}Result`, e.target.value)}
                          style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }}
                        />
                        <input
                          type="url"
                          placeholder="Link (e.g. Google Drive)"
                          value={link || ""}
                          onChange={(e) => handleUpdateCurriculumSetting(`term${term}Link`, e.target.value)}
                          style={{ padding: "10px 14px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }}
                        />
                        <button 
                          onClick={() => setEditingTerm(null)}
                          style={{ padding: "10px", borderRadius: "12px", background: "#6366f1", color: "white", fontWeight: 700, border: "none", cursor: "pointer", marginTop: "4px", width: "100%" }}
                        >
                          Done
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Weekly Challenge Tracker */}
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "20px 24px",
          marginBottom: "24px",
          border: "1px solid rgba(167, 139, 250, 0.12)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#1e1b4b", display: "flex", alignItems: "center", gap: "8px" }}>
            <Trophy size={18} color="#6366f1" /> Weekly Challenge Progress
          </h3>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", background: "#f8fafc", padding: "4px 10px", borderRadius: "100px" }}>
            Current Week
          </span>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          {(() => {
            const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            const now = new Date();
            const currentDay = now.getDay(); // 0 is Sun, 1-6 is Mon-Sat
            const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
            
            return days.map((day, index) => {
              const date = new Date(now);
              date.setDate(now.getDate() + mondayOffset + index);
              const dateStr = date.toISOString().split("T")[0];
              
              // Find if there's a stat for this date (Filter for daily_stats only)
              const dayStat = dailyStats.find(s => s.statCollection === "daily_stats" && (s.id === dateStr || (s.timestamp && toJsDate(s.timestamp).toISOString().split("T")[0] === dateStr)));
              const isCompleted = !!dayStat;
              const score = dayStat?.score || 0;
              const total = dayStat?.total || 0;
              const isToday = isSameCalendarDay(new Date(), date);
              
              return (
                <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: isToday ? "#6366f1" : "#94a3b8", textTransform: "uppercase" }}>{day}</span>
                  <div 
                    style={{ 
                      width: "100%", 
                      height: "44px", 
                      borderRadius: "12px", 
                      background: isCompleted ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : (isToday ? "#eef2ff" : "#f8fafc"),
                      border: isToday ? "2px solid #6366f1" : "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      color: isCompleted ? "white" : "#cbd5e1",
                      transition: "all 0.3s ease",
                      boxShadow: isCompleted ? "0 4px 12px rgba(99, 102, 241, 0.2)" : "none"
                    }}
                  >
                    {isCompleted ? (
                      <>
                        <span style={{ fontSize: "0.85rem", fontWeight: 900 }}>{score}</span>
                        <div style={{ width: "12px", height: "2px", background: "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
                        <span style={{ fontSize: "0.6rem", fontWeight: 700, opacity: 0.8 }}>{total}</span>
                      </>
                    ) : (
                      <Check size={16} strokeWidth={3} />
                    )}
                  </div>
                  <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#cbd5e1" }}>{date.getDate()}</span>
                </div>
              );
            });
          })()}
        </div>
      </div>

      {/* 4. Basic Calculation Tracker (Conditional) */}
      {student?.calculationEnabled !== false && (
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "20px 24px",
            marginBottom: "24px",
            border: "1px solid rgba(245, 158, 11, 0.12)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#1e1b4b", display: "flex", alignItems: "center", gap: "8px" }}>
              <Target size={18} color="#f59e0b" /> Basic Calculation Progress
            </h3>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", background: "#fffbeb", padding: "4px 10px", borderRadius: "100px" }}>
              Mental Math
            </span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
            {(() => {
              const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
              const now = new Date();
              const currentDay = now.getDay();
              const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
              
              return days.map((day, index) => {
                const date = new Date(now);
                date.setDate(now.getDate() + mondayOffset + index);
                const dateStr = date.toISOString().split("T")[0];
                
                // Filter only calc_stats for this tracker
                const dayStat = dailyStats.find(s => s.statCollection === "calc_stats" && (s.id === dateStr || (s.timestamp && toJsDate(s.timestamp).toISOString().split("T")[0] === dateStr)));
                const isCompleted = !!dayStat;
                const score = dayStat?.score || 0;
                const total = dayStat?.total || 0;
                const isToday = isSameCalendarDay(new Date(), date);
                
                return (
                  <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, color: isToday ? "#f59e0b" : "#94a3b8", textTransform: "uppercase" }}>{day}</span>
                    <div 
                      style={{ 
                        width: "100%", 
                        height: "44px", 
                        borderRadius: "12px", 
                        background: isCompleted ? "linear-gradient(135deg, #f59e0b, #fbbf24)" : (isToday ? "#fffbeb" : "#f8fafc"),
                        border: isToday ? "2px solid #f59e0b" : "1px solid #f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        color: isCompleted ? "white" : "#cbd5e1",
                        transition: "all 0.3s ease",
                        boxShadow: isCompleted ? "0 4px 12px rgba(245, 158, 11, 0.2)" : "none"
                      }}
                    >
                      {isCompleted ? (
                        <>
                          <span style={{ fontSize: "0.85rem", fontWeight: 900 }}>{score}</span>
                          <div style={{ width: "12px", height: "2px", background: "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
                          <span style={{ fontSize: "0.6rem", fontWeight: 700, opacity: 0.8 }}>{total}</span>
                        </>
                      ) : (
                        <Check size={16} strokeWidth={3} />
                      )}
                    </div>
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#cbd5e1" }}>{date.getDate()}</span>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}

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
          <div
            className="app-modal"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={() => setIsEditModalOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                position: "relative",
                background: "white",
                padding: "40px",
                borderRadius: "32px",
                width: "100%",
                maxWidth: "600px",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <h2 style={{ fontWeight: 900, margin: 0, fontSize: "1.5rem" }}>
                  Edit Student Profile
                </h2>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  style={{
                    background: "#f1f5f9",
                    border: "none",
                    borderRadius: "10px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#64748b",
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: "grid", gap: "20px" }}>
                <div
                  style={{
                    padding: "18px",
                    borderRadius: "18px",
                    background: editForm.role ? "#f8fafc" : "#fff1f2",
                    border: `1px solid ${editForm.role ? "#e2e8f0" : "#fecdd3"}`,
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: editForm.role ? "#64748b" : "#e11d48",
                    }}
                  >
                    Account Role
                  </label>
                  <select
                    value={editForm.role}
                    onChange={(e) =>
                      setEditForm({ ...editForm, role: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "14px",
                      border: "1px solid #e2e8f0",
                      fontWeight: 800,
                      background: "white",
                      cursor: "pointer",
                      color: "#1e1b4b",
                    }}
                  >
                    {ROLE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {!editForm.role && (
                    <p
                      style={{
                        margin: "10px 0 0",
                        color: "#be123c",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      This account is missing a role. Set it to Student or
                      Parent so automations and lists can classify it correctly.
                    </p>
                  )}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                        color: "#64748b",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "14px",
                        border: "1px solid #e2e8f0",
                        fontWeight: 700,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                        color: "#64748b",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      value={editForm.phone}
                      onChange={(e) =>
                        setEditForm({ ...editForm, phone: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "14px",
                        borderRadius: "14px",
                        border: "1px solid #e2e8f0",
                        fontWeight: 700,
                      }}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    setEditForm({
                      ...editForm,
                      showHscGraph: !editForm.showHscGraph,
                    })
                  }
                  style={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "18px",
                    borderRadius: "18px",
                    background: editForm.showHscGraph ? "#f5f3ff" : "#f8fafc",
                    border: `1.5px solid ${editForm.showHscGraph ? "#c4b5fd" : "#e2e8f0"}`,
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 900, color: "#1e1b4b" }}>
                      Show HSC graph to student
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 700 }}>
                      Adds the HSC score trend to the top of the student Curriculum page.
                    </div>
                  </div>
                  <div
                    style={{
                      width: "48px",
                      height: "28px",
                      borderRadius: "999px",
                      background: editForm.showHscGraph ? "#7c3aed" : "#cbd5e1",
                      position: "relative",
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}
                  >
                    <motion.div
                      animate={{ x: editForm.showHscGraph ? 22 : 4 }}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "white",
                        position: "absolute",
                        top: "4px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.16)",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    School / Institution
                  </label>
                  <input
                    type="text"
                    value={editForm.school}
                    onChange={(e) =>
                      setEditForm({ ...editForm, school: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "14px",
                      border: "1px solid #e2e8f0",
                      fontWeight: 700,
                    }}
                  />
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "12px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    Assigned Year(s)
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    {Object.keys(CURRICULUM_DATA).map((y) => {
                      const isSelected = editForm.assignedYear.includes(y);
                      return (
                        <button
                          key={y}
                          type="button"
                          onClick={() => {
                            const next = isSelected
                              ? editForm.assignedYear.filter((val) => val !== y)
                              : [...editForm.assignedYear, y];
                            setEditForm({ ...editForm, assignedYear: next });
                          }}
                          style={{
                            padding: "8px 16px",
                            borderRadius: "12px",
                            border: "2px solid",
                            borderColor: isSelected ? "#6366f1" : "#e2e8f0",
                            background: isSelected ? "#f5f3ff" : "white",
                            color: isSelected ? "#6366f1" : "#64748b",
                            fontWeight: 800,
                            fontSize: "0.8rem",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          {y}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "12px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    Course Level(s)
                  </label>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {["Standard", "Advanced", "Extension 1", "Extension 2"].map(
                      (c) => {
                        const isSelected = editForm.assignedCourse.includes(c);
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => {
                              const next = isSelected
                                ? editForm.assignedCourse.filter(
                                    (val) => val !== c,
                                  )
                                : [...editForm.assignedCourse, c];
                              setEditForm({
                                ...editForm,
                                assignedCourse: next,
                              });
                            }}
                            style={{
                              padding: "8px 16px",
                              borderRadius: "12px",
                              border: "2px solid",
                              borderColor: isSelected ? "#818cf8" : "#e2e8f0",
                              background: isSelected ? "#f5f3ff" : "white",
                              color: isSelected ? "#4f46e5" : "#64748b",
                              fontWeight: 800,
                              fontSize: "0.8rem",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }}
                          >
                            {c}
                          </button>
                        );
                      },
                    )}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "12px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    Enrolled Subjects
                  </label>
                  <div style={{ display: "flex", gap: "16px" }}>
                    {["Maths", "English"].map((subj) => {
                      const isSelected = (editForm.subject || "").includes(
                        subj,
                      );
                      return (
                        <div
                          key={subj}
                          onClick={() => {
                            let current = (editForm.subject || "")
                              .split(",")
                              .map((s) => s.trim())
                              .filter((s) => s);
                            if (isSelected) {
                              current = current.filter((s) => s !== subj);
                            } else {
                              current.push(subj);
                            }
                            setEditForm({
                              ...editForm,
                              subject: current.join(", "),
                            });
                          }}
                          style={{
                            flex: 1,
                            padding: "12px",
                            borderRadius: "12px",
                            border: "2px solid",
                            borderColor: isSelected ? "#6366f1" : "#e2e8f0",
                            background: isSelected ? "#f5f3ff" : "white",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          <div
                            style={{
                              width: "18px",
                              height: "18px",
                              borderRadius: "4px",
                              border: "2px solid",
                              borderColor: isSelected ? "#6366f1" : "#cbd5e1",
                              background: isSelected
                                ? "#6366f1"
                                : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                            }}
                          >
                            {isSelected && <Check size={12} />}
                          </div>
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              color: isSelected ? "#6366f1" : "#475569",
                            }}
                          >
                            {subj}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    Dream Career / Goal
                  </label>
                  <input
                    type="text"
                    value={editForm.dreamJob}
                    onChange={(e) =>
                      setEditForm({ ...editForm, dreamJob: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "14px",
                      border: "1px solid #e2e8f0",
                      fontWeight: 700,
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    Address
                  </label>
                  <textarea
                    value={editForm.address}
                    onChange={(e) =>
                      setEditForm({ ...editForm, address: e.target.value })
                    }
                    style={{
                      width: "100%",
                      height: "80px",
                      padding: "14px",
                      borderRadius: "14px",
                      border: "1px solid #e2e8f0",
                      fontWeight: 700,
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  onClick={handleUpdateProfile}
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "20px",
                    background: "#6366f1",
                    color: "white",
                    border: 0,
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    marginTop: "12px",
                  }}
                >
                  Save All Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Schedule Modal */}
        {isScheduleModalOpen && (
          <div
            className="app-modal"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={() => {
                setIsScheduleModalOpen(false);
                setOpenDropdown(null);
              }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{
                position: "relative",
                background: "white",
                borderRadius: "32px",
                width: "100%",
                maxWidth: "500px",
                overflow: "visible",
                boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
              }}
            >
              {/* Purple Header */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  padding: "32px",
                  color: "white",
                  position: "relative",
                  borderRadius: "32px 32px 0 0",
                }}
              >
                <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900 }}>
                  Schedule Lesson
                </h2>
                <p style={{ margin: "8px 0 0", opacity: 0.9, fontWeight: 500 }}>
                  Create a new session for a student
                </p>
                <button
                  onClick={() => setIsScheduleModalOpen(false)}
                  style={{
                    position: "absolute",
                    top: 32,
                    right: 32,
                    background: "rgba(255,255,255,0.2)",
                    border: "none",
                    borderRadius: "12px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: "32px", display: "grid", gap: "24px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      color: "#94a3b8",
                      textTransform: "uppercase",
                    }}
                  >
                    STUDENT
                  </label>
                  <div
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      background: "#f8fafc",
                      fontWeight: 700,
                      color: "#1e293b",
                    }}
                  >
                    {student.name || "Student"}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      color: "#94a3b8",
                      textTransform: "uppercase",
                    }}
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={sessionForm.focus}
                    onChange={(e) =>
                      setSessionForm({ ...sessionForm, focus: e.target.value })
                    }
                    placeholder="e.g. Mathematics"
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      fontWeight: 700,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      color: "#94a3b8",
                      textTransform: "uppercase",
                    }}
                  >
                    DATE
                  </label>
                  <input
                    type="date"
                    value={sessionForm.date}
                    onChange={(e) =>
                      setSessionForm({ ...sessionForm, date: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      fontWeight: 700,
                      outline: "none",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {["start", "end"].map((field) => (
                    <div key={field} style={{ position: "relative" }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          color: "#94a3b8",
                          textTransform: "uppercase",
                        }}
                      >
                        {field === "start" ? "START TIME" : "END TIME"}
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(openDropdown === field ? null : field)
                        }
                        style={{
                          width: "100%",
                          padding: "16px",
                          borderRadius: "16px",
                          border: `1px solid ${openDropdown === field ? "#6366f1" : "#e2e8f0"}`,
                          background: "white",
                          fontWeight: 700,
                          outline: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "#1e293b",
                          fontSize: "1rem",
                        }}
                      >
                        {sessionForm[field]}
                        <span
                          style={{
                            color: "#94a3b8",
                            fontSize: "0.7rem",
                            marginLeft: "4px",
                          }}
                        >
                          ▼
                        </span>
                      </button>
                      {openDropdown === field && (
                        <div
                          ref={dropdownRef}
                          style={{
                            position: "absolute",
                            bottom: "calc(100% + 4px)",
                            left: 0,
                            right: 0,
                            background: "white",
                            border: "1px solid #e2e8f0",
                            borderRadius: "16px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                            zIndex: 9999,
                            maxHeight: "260px",
                            overflowY: "auto",
                          }}
                        >
                          {TIME_OPTIONS.map((t) => (
                            <div
                              key={t}
                              ref={
                                sessionForm[field] === t
                                  ? (el) =>
                                      el &&
                                      el.scrollIntoView({ block: "center" })
                                  : null
                              }
                              onClick={() => {
                                setSessionForm({ ...sessionForm, [field]: t });
                                setOpenDropdown(null);
                              }}
                              style={{
                                padding: "12px 16px",
                                cursor: "pointer",
                                fontWeight:
                                  sessionForm[field] === t ? 800 : 600,
                                background:
                                  sessionForm[field] === t
                                    ? "#ede9fe"
                                    : "transparent",
                                color:
                                  sessionForm[field] === t
                                    ? "#6366f1"
                                    : "#1e293b",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                              onMouseEnter={(e) => {
                                if (sessionForm[field] !== t)
                                  e.currentTarget.style.background = "#f8fafc";
                              }}
                              onMouseLeave={(e) => {
                                if (sessionForm[field] !== t)
                                  e.currentTarget.style.background =
                                    "transparent";
                              }}
                            >
                              {t}
                              {sessionForm[field] === t && (
                                <span style={{ color: "#6366f1" }}>✓</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={sessionForm.recurring}
                    onChange={(e) =>
                      setSessionForm({
                        ...sessionForm,
                        recurring: e.target.checked,
                      })
                    }
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                  <span style={{ fontWeight: 700, color: "#475569" }}>
                    Recurring Weekly
                  </span>
                </label>

                <button
                  onClick={handleBookSession}
                  disabled={booking}
                  style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "20px",
                    background: "linear-gradient(to right, #6366f1, #818cf8)",
                    color: "white",
                    border: 0,
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)",
                    marginTop: "8px",
                  }}
                >
                  {booking ? "Creating..." : "Create Session"}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {selectedChallenge && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
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
              onClick={() => setSelectedChallenge(null)}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(15,23,42,0.6)",
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "700px",
                maxHeight: "85vh",
                backgroundColor: "#fff",
                borderRadius: "24px",
                overflowY: "auto",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
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
                  <h2
                    style={{
                      margin: "0 0 4px",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                    }}
                  >
                    Challenge Details
                  </h2>
                  <p style={{ margin: 0, color: "#64748b", fontWeight: 600 }}>
                    {selectedChallenge.challengeType === "calc"
                      ? "Basic Calculation"
                      : "Daily Practice"}{" "}
                    • {selectedChallenge.id} • Score: {selectedChallenge.score}/
                    {selectedChallenge.total}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedChallenge(null)}
                  style={{
                    background: "#f1f5f9",
                    border: "none",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#64748b",
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {selectedChallenge.hasDetailSnapshot && !selectedChallenge.detailSnapshotLoaded && !(Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0) ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#64748b",
                    background: "#f8fafc",
                    borderRadius: "16px",
                    border: "2px dashed #e2e8f0",
                  }}
                >
                  <div className="app-spinner" style={{ margin: "0 auto 16px" }}></div>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: "1.05rem" }}>
                    Loading detailed results...
                  </p>
                </div>
              ) : Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {selectedChallenge.questions.map((q, idx) => {
                    const result = selectedChallenge.answerResults?.[idx];
                    const userAnswer =
                      result?.selectedAnswer ??
                      (selectedChallenge.userAnswers
                        ? selectedChallenge.userAnswers[idx]
                        : null);
                    const options = getChallengeOptions(q);
                    const correctOptionText =
                      q.isManual && q.answer !== undefined
                        ? getChallengeOptionText(
                            options[parseInt(q.answer, 10)],
                          )
                        : String(q.answer ?? "");
                    const isCorrect =
                      result?.correct ??
                      String(userAnswer) ===
                        String(correctOptionText || q.answer);
                    const questionText = toDisplayText(
                      q.text || q.question,
                      "Question text unavailable",
                    );
                    return (
                      <div
                        key={idx}
                        style={{
                          padding: "20px",
                          borderRadius: "16px",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 800,
                            marginBottom: "16px",
                            color: "#1e293b",
                            fontSize: "1.05rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {idx + 1}. <MathView content={questionText} />
                        </div>

                        {/* Display Working Out / Handwritten notes */}
                        {(() => {
                          const workingOutPages = getWorkingOutPages(result);
                          if (workingOutPages.length === 0) return null;
                          return (
                            <div
                              style={{
                                marginBottom: "16px",
                                borderRadius: "16px",
                                overflow: "hidden",
                                border: "1px solid #e2e8f0",
                                background: "#fff",
                              }}
                            >
                              <button
                                onClick={() =>
                                  setWorkingOutPreview({
                                    pages: workingOutPages,
                                    page: 0,
                                    title: `Question ${idx + 1} Working Out`,
                                  })
                                }
                                style={{
                                  width: "100%",
                                  padding: "8px 12px",
                                  background: "#f8fafc",
                                  border: "none",
                                  borderBottom: "1px solid #e2e8f0",
                                  fontSize: "0.7rem",
                                  fontWeight: 800,
                                  color: "#6366f1",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                  textAlign: "left",
                                  cursor: "pointer",
                                }}
                              >
                                Working Out{" "}
                                {workingOutPages.length > 1
                                  ? `• ${workingOutPages.length} pages`
                                  : "• Click to enlarge"}
                              </button>
                              <button
                                onClick={() =>
                                  setWorkingOutPreview({
                                    pages: workingOutPages,
                                    page: 0,
                                    title: `Question ${idx + 1} Working Out`,
                                  })
                                }
                                style={{
                                  width: "100%",
                                  border: "none",
                                  padding: 0,
                                  background: "#fff",
                                  cursor: "zoom-in",
                                }}
                              >
                                <img
                                  src={workingOutPages[0]}
                                  alt="Student Working Out"
                                  style={{
                                    width: "100%",
                                    maxHeight: "400px",
                                    objectFit: "contain",
                                    background: "#fff",
                                    display: "block",
                                  }}
                                />
                              </button>
                            </div>
                          );
                        })()}

                        {q.questionImage && (
                          <img
                            src={q.questionImage}
                            alt="Question"
                            style={{
                              width: "100%",
                              maxHeight: "180px",
                              objectFit: "contain",
                              margin: "0 0 16px",
                              borderRadius: "14px",
                              background: "#fff",
                            }}
                          />
                        )}
                        {options.length === 0 ? (
                          <div style={{ display: "grid", gap: "10px" }}>
                            <div
                              style={{
                                padding: "12px 16px",
                                borderRadius: "12px",
                                background: isCorrect ? "#dcfce7" : "#fee2e2",
                                border: `1px solid ${isCorrect ? "#22c55e" : "#ef4444"}`,
                                color: isCorrect ? "#166534" : "#991b1b",
                                fontWeight: 800,
                              }}
                            >
                              Student Answer:{" "}
                              <MathView
                                content={String(userAnswer ?? "No answer")}
                              />
                            </div>
                            {!isCorrect && (
                              <div
                                style={{
                                  padding: "12px 16px",
                                  borderRadius: "12px",
                                  background: "#dcfce7",
                                  border: "1px solid #22c55e",
                                  color: "#166534",
                                  fontWeight: 800,
                                }}
                              >
                                Correct Answer:{" "}
                                <MathView content={String(q.answer ?? "")} />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div style={{ display: "grid", gap: "8px" }}>
                            {options.map((opt, i) => {
                              const optText = getChallengeOptionText(opt);
                              const optImage = getChallengeOptionImage(opt);
                              const isCorrectChoice = q.isManual
                                ? String(i) === String(q.answer)
                                : String(optText) === String(q.answer);
                              const isUserChoice =
                                String(optText) === String(userAnswer);
                              let bg = "white";
                              let border = "1px solid #cbd5e1";
                              let color = "#475569";
                              if (isCorrectChoice) {
                                bg = "#dcfce7";
                                border = "1px solid #22c55e";
                                color = "#166534";
                              } else if (isUserChoice && !isCorrect) {
                                bg = "#fee2e2";
                                border = "1px solid #ef4444";
                                color = "#991b1b";
                              }
                              return (
                                <div
                                  key={i}
                                  style={{
                                    padding: "12px 16px",
                                    borderRadius: "12px",
                                    background: bg,
                                    border: border,
                                    color: color,
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                      minWidth: 0,
                                    }}
                                  >
                                    {optImage && (
                                      <img
                                        src={optImage}
                                        alt=""
                                        style={{
                                          width: "44px",
                                          height: "44px",
                                          objectFit: "contain",
                                          borderRadius: "8px",
                                          background: "#fff",
                                        }}
                                      />
                                    )}
                                    <MathView content={optText} />
                                  </span>
                                  {isCorrectChoice && (
                                    <Check
                                      size={18}
                                      style={{
                                        color: "#166534",
                                        flexShrink: 0,
                                      }}
                                    />
                                  )}
                                  {isUserChoice && !isCorrect && (
                                    <X
                                      size={18}
                                      style={{
                                        color: "#991b1b",
                                        flexShrink: 0,
                                      }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {q.solution && (
                          <div
                            style={{
                              marginTop: "14px",
                              padding: "12px 14px",
                              borderRadius: "12px",
                              background: "#eef2ff",
                              color: "#475569",
                              fontWeight: 700,
                              lineHeight: 1.5,
                            }}
                          >
                            <MathView content={q.solution} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#94a3b8",
                    background: "#f8fafc",
                    borderRadius: "16px",
                    border: "2px dashed #e2e8f0",
                  }}
                >
                  <Trophy
                    size={48}
                    style={{ opacity: 0.2, margin: "0 auto 16px" }}
                  />
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "1.1rem" }}>
                    Detailed history not available.
                  </p>
                  <p style={{ margin: "8px 0 0", fontSize: "0.9rem" }}>
                    This challenge was completed before detailed tracking was
                    enabled.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
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
