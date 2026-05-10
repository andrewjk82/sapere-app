import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIME_OPTIONS } from "../constants/timeOptions";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  BookOpen,
  MessageSquare,
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
  setDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { upsertRegisteredUserLeaderboard, upsertManualStudentLeaderboard } from "../services/leaderboardService";
import { useToast } from "../context/ToastContext";
import { CURRICULUM_DATA } from "../constants/curriculumData";
import MathView, { toDisplayText } from "./MathView";
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
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const { showToast } = useToast();
  const [dailyYearsOpen, setDailyYearsOpen] = useState(false);
  const [editingTerm, setEditingTerm] = useState(null);

  const handleUpdateDailyConfig = (newConfig) => {
    setDailyPracticeConfig(newConfig);
    const colName = student.source === "manual" ? "students" : "users";
    updateDoc(doc(db, colName, studentId), {
      dailyPracticeConfig: newConfig,
    }).catch(console.error);
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
    const unsub = onSnapshot(doc(db, "users", studentId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setStudent({ id: snap.id, source: "users", ...data });
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
        });
        setLoading(false);
      } else {
        const unsubManual = onSnapshot(
          doc(db, "students", studentId),
          (mSnap) => {
            if (mSnap.exists()) {
              const mData = mSnap.data();
              setStudent({ id: mSnap.id, source: "manual", ...mData });
              setAssignedChapters(mData.assignedChapters || []);
              setCompletedChapters(mData.completedChapters || []);
              setDailyPracticeConfig(mData.dailyPracticeConfig || { years: [], chapters: [] });

              setEditForm({
                name: mData.name || "",
                email: mData.email || "",
                phone: mData.phone || "",
                level: mData.level || mData.year || "",
                subject: mData.subject || mData.school || "",
                school: mData.school || "",
                year: mData.year || "",
                dreamJob: mData.dreamJob || "",
                address: mData.address || "",
                role: mData.role || "",
                assignedYear: Array.isArray(mData.assignedYear)
                  ? mData.assignedYear
                  : [
                      mData.assignedYear ||
                        mData.level ||
                        mData.year ||
                        "Year 11",
                    ],
                assignedCourse: Array.isArray(mData.assignedCourse)
                  ? mData.assignedCourse
                  : [mData.assignedCourse || "Advanced"],
                dailyQuestionCount: mData.dailyQuestionCount || 10,
                calculationEnabled: mData.calculationEnabled !== false,
              });
            }
            setLoading(false);
          },
        );
        return () => unsubManual();
      }
    });
    return () => unsub();
  }, [studentId]);

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;
    try {
      setSendingMessage(true);
      const response = await fetch("/api/send-notif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: studentId,
          email: student.email,
          subject: `Message from your Tutor`,
          text: messageText,
        }),
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        if ((data.pushSuccessCount || 0) > 0) {
          showToast("Message sent by email and push notification.", "success");
        } else if ((data.tokensFound || 0) === 0) {
          showToast(
            "Email sent, but no push device is connected for this student.",
            "warning",
            7000,
          );
        } else {
          showToast(
            "Email sent, but push notification failed. Ask the student to reconnect notifications.",
            "warning",
            7000,
          );
        }
        setMessageText("");
        setMessageOpen(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSendingMessage(false);
    }
  };

  useEffect(() => {
    if (!studentId || !student?.id) return;
    const colName = student.source === "manual" ? "students" : "users";
    let daily = [];
    let calc = [];
    const updateStats = () =>
      setDailyStats(sortStatsByDateDesc([...daily, ...calc]));
    const unsubDaily = onSnapshot(
      collection(db, colName, studentId, "daily_stats"),
      (snap) => {
        daily = snap.docs.map((d) => ({
          id: d.id,
          statCollection: "daily_stats",
          ...d.data(),
        }));
        updateStats();
      },
    );
    const unsubCalc = onSnapshot(
      collection(db, colName, studentId, "calc_stats"),
      (snap) => {
        calc = snap.docs.map((d) => ({
          id: d.id,
          statCollection: "calc_stats",
          ...d.data(),
        }));
        updateStats();
      },
    );
    return () => {
      unsubDaily();
      unsubCalc();
    };
  }, [studentId, student?.source, student?.id]);

  const handleUpdateProfile = async () => {
    try {
      const colName = student.source === "manual" ? "students" : "users";
      const normalizedRole = editForm.role || "";
      await updateDoc(doc(db, colName, studentId), {
        ...editForm,
        role: normalizedRole,
        status: "Active",
        updatedAt: serverTimestamp(),
      });
      setIsEditModalOpen(false);
      showToast("Profile updated successfully!", "success");
    } catch (e) {
      console.error(e);
      showToast("Failed to update profile", "error");
    }
  };

  const handleUpdateCurriculumSetting = async (field, value) => {
    try {
      const colName = student.source === "manual" ? "students" : "users";
      await updateDoc(doc(db, colName, studentId), { [field]: value });
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
      const colName = student.source === "manual" ? "students" : "users";
      await updateDoc(doc(db, colName, studentId), {
        assignedChapters: nextAssigned,
        completedChapters: nextCompleted,
      });
    } catch (e) {
      console.error(e);
      // Optional: rollback on error?
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !studentId) return;
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

          const colName = student.source === "manual" ? "students" : "users";
          await updateDoc(doc(db, colName, studentId), { dreamImageUrl: url });
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
          studentId,
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
          studentId,
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
    if (!student || !studentId) return;
    if (
      !confirm(
        "Recalculate total XP and challenge count from history? This will overwrite the current totals.",
      )
    )
      return;

    try {
      setLoading(true);
      const colName = student.source === "manual" ? "students" : "users";
      console.log(`Recalculating for ${colName}/${studentId}`);

      // 1. Fetch all daily stats
      const dailySnap = await getDocs(
        collection(db, colName, studentId, "daily_stats"),
      );
      const calcSnap = await getDocs(
        collection(db, colName, studentId, "calc_stats"),
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
        doc(db, colName, studentId),
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
          await upsertManualStudentLeaderboard(studentId, fullStudentData);
        } else {
          await upsertRegisteredUserLeaderboard(studentId, fullStudentData);
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

  const recalculateStudentTotals = async (colName) => {
    const dailySnap = await getDocs(
      collection(db, colName, studentId, "daily_stats"),
    );
    const calcSnap = await getDocs(
      collection(db, colName, studentId, "calc_stats"),
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
      doc(db, colName, studentId),
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
        await upsertManualStudentLeaderboard(studentId, fullStudentData);
      } else {
        await upsertRegisteredUserLeaderboard(studentId, fullStudentData);
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
      query(collection(db, "grading_queue"), where("userId", "==", studentId)),
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
      const colName = student.source === "manual" ? "students" : "users";
      const statCollection =
        stat.statCollection ||
        (stat.challengeType === "calc" ? "calc_stats" : "daily_stats");
      const statRef = doc(db, colName, studentId, statCollection, stat.id);

      let deletedWorkingOutCount = 0;
      try {
        deletedWorkingOutCount = await deleteWorkingOutForChallenge(stat);
      } catch (workingOutError) {
        console.warn(
          "Working out cleanup skipped:",
          workingOutError.code || workingOutError.message || workingOutError,
        );
      }

      await deleteDoc(statRef);
      const totals = await recalculateStudentTotals(colName);

      showToast(
        `Challenge reset. XP recalculated to ${totals.totalXP}. Removed ${deletedWorkingOutCount} saved working out item${deletedWorkingOutCount === 1 ? "" : "s"}.`,
        "success",
      );
    } catch (err) {
      console.error("Reset error:", err);
      showToast("Failed to reset challenge.", "error");
    }
  };

  const renderHistoryCard = (stat) => (
    <div
      key={`${stat.statCollection || stat.challengeType || "daily"}-${stat.id}`}
      onClick={() => setSelectedChallenge(stat)}
      style={{
        padding: "20px",
        borderRadius: "20px",
        border: "1px solid #f1f5f9",
        background: "#f8fafc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6366f1",
          }}
        >
          <Trophy size={20} />
        </div>
        <div>
          <div style={{ fontWeight: 800 }}>
            {stat.challengeType === "calc"
              ? "Basic Calculation"
              : "Daily Practice"}{" "}
            • {stat.id}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
            Score: {stat.score}/{stat.total}
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleResetChallenge(stat);
        }}
        style={{
          padding: "8px 16px",
          borderRadius: "10px",
          background: "#fff1f2",
          color: "#f43f5e",
          border: 0,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );

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
                  dailyPracticeStats.map(renderHistoryCard)
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
                  calculationStats.map(renderHistoryCard)
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
                          const colName =
                            student.source === "manual" ? "students" : "users";
                          updateDoc(doc(db, colName, studentId), {
                            assignedChapters: nextAssigned,
                            completedChapters: nextCompleted,
                          }).catch(console.error);
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
        <button style={styles.navBtn}>
          <MessageSquare size={18} /> Q&A
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

              {selectedChallenge.questions ? (
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
