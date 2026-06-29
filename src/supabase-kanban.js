import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zzannmvjybpknetszqpb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YW5ubXZqeWJwa25ldHN6cXBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NDA4MTAsImV4cCI6MjA5MzExNjgxMH0.MvZi6BG896cfzz30eUOC7lWmRncIjCSZiABJUA-tMfA";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const columns = [
  { id: "plan", dayTr: "Pazartesi", dayEn: "Monday", titleTr: "Strateji & Planlama", titleEn: "Strategy & Planning", phaseTr: "Planla", phaseEn: "Plan", tone: "tone-blue" },
  { id: "start", dayTr: "Salı", dayEn: "Tuesday", titleTr: "Üretim Başlangıcı", titleEn: "Production Kickoff", phaseTr: "Üret", phaseEn: "Produce", tone: "tone-gold" },
  { id: "production", dayTr: "Çarşamba", dayEn: "Wednesday", titleTr: "İçerik Üretimi", titleEn: "Content Production", phaseTr: "Üret", phaseEn: "Produce", tone: "tone-orange" },
  { id: "approval", dayTr: "Perşembe", dayEn: "Thursday", titleTr: "Onay & Hazırlık", titleEn: "Approval & Prep", phaseTr: "Hazırla", phaseEn: "Prepare", tone: "tone-violet" },
  { id: "publish", dayTr: "Cuma", dayEn: "Friday", titleTr: "Yayın Başlangıcı", titleEn: "Publishing Start", phaseTr: "Yayınla", phaseEn: "Publish", tone: "tone-rose" },
  { id: "live", dayTr: "Cumartesi", dayEn: "Saturday", titleTr: "Canlı Operasyon", titleEn: "Live Operations", phaseTr: "Canlı Yönet", phaseEn: "Live Desk", tone: "tone-red" },
  { id: "analysis", dayTr: "Pazar", dayEn: "Sunday", titleTr: "Analiz & Optimizasyon", titleEn: "Analysis & Optimization", phaseTr: "Analiz Et", phaseEn: "Analyze", tone: "tone-green" },
];

const priorities = [
  { id: "low", labelTr: "Az", labelEn: "Low" },
  { id: "medium", labelTr: "Orta", labelEn: "Medium" },
  { id: "high", labelTr: "Yüksek", labelEn: "High" },
  { id: "urgent", labelTr: "Acil", labelEn: "Urgent" },
];

const progressStates = [
  { id: "ongoing", labelTr: "Devam ediyor", labelEn: "Ongoing" },
  { id: "completed", labelTr: "Tamamlandı", labelEn: "Completed" },
];

const i18n = {
  en: {
    authKicker: "THF Media Team • Secure Operations Hub",
    authHeadlineSub: "Coordinate every media operation.",
    authCopy: "Sign in to manage campaign tasks, match-week assets, calendar milestones and team assignments from one professional workspace.",
    accessTitle: "Workspace Access",
    loginTab: "Login",
    registerTab: "Register",
    emailLabel: "Email",
    passwordLabel: "Password",
    loginButton: "Login",
    nameLabel: "Full name",
    roleLabel: "Role",
    rolePlaceholder: "Video Editor",
    registerButton: "Create Account",
    appKicker: "THF Media Team • Integrated Event Workflow",
    appHeadlineSub: "Plan. Produce. Publish. Report.",
    appCopy: "A professional command center for content production, approvals, live operations, team assignments, files, voice notes and calendar-based delivery.",
    currentUser: "Active user",
    logout: "Logout",
    calendarLabel: "Calendar",
    weekdayMon: "Mon",
    weekdayTue: "Tue",
    weekdayWed: "Wed",
    weekdayThu: "Thu",
    weekdayFri: "Fri",
    weekdaySat: "Sat",
    weekdaySun: "Sun",
    activeView: "Active view",
    allButton: "All",
    newTaskButton: "+ Task",
    cardDetail: "Card detail",
    closeModal: "Close",
    titleLabel: "Title",
    taskTitlePlaceholder: "Saturday reels package",
    descriptionLabel: "Description",
    taskDescPlaceholder: "Short note, content target or delivery criteria",
    dateLabel: "Date",
    deadlineLabel: "Deadline",
    priorityLabel: "Priority",
    progressLabel: "Status",
    assigneesLabel: "Assignees",
    uploadFile: "Upload file",
    voiceNote: "Voice note",
    voiceReady: "Ready",
    recordStart: "Start Recording",
    recordStop: "Stop Recording",
    recorded: "Saved",
    recording: "Recording",
    micNeeded: "Microphone permission required",
    clearButton: "Clear",
    deleteButton: "Delete",
    deleteConfirm: "Delete this task?",
    removeAsset: "Remove",
    removeAssetConfirm: "Remove this item?",
    notesTitle: "Notes",
    notePlaceholder: "Add a note",
    addNoteButton: "Add Note",
    noNotes: "No notes yet.",
    taskUpdatedNotificationTitle: "Task updated",
    saveButton: "Save",
    teamLabel: "Team",
    defineUser: "Define User",
    userPlaceholder: "Full name / role",
    addButton: "Add",
    allPipeline: "All Pipeline",
    cardView: "Cards",
    listView: "List",
    noTasks: "No tasks in this column.",
    noDescription: "No description",
    unassigned: "Unassigned",
    undated: "Undated",
    files: "files",
    voice: "voice",
    due: "Due",
    browserNotifications: "Browser alerts enabled",
    browserNotificationsBlocked: "Browser alerts blocked",
    assignedNotificationTitle: "New task assigned",
    newTask: "New Task",
    editTask: "Edit Task",
    filesTitle: "Files",
    voiceTitle: "Voice Notes",
    googleMeetTitle: "Google Meet",
    googleMeetReady: "Ready",
    connectGoogle: "Connect Google",
    disconnectGoogle: "Disconnect Google",
    googleConnected: "Google connected",
    googleDisconnected: "Google disconnected",
    createMeet: "Create Meet",
    creatingMeet: "Creating Meet...",
    updateMeet: "Update Meet",
    updatingMeet: "Updating Meet...",
    deleteMeet: "Delete Meet",
    deletingMeet: "Deleting Meet...",
    meetingDateLabel: "Meeting date",
    meetingStartLabel: "Start time",
    meetingEndLabel: "End time",
    joinMeet: "Join Meet",
    meetCreated: "Meet link created.",
    meetUpdated: "Meet updated.",
    meetDeleted: "Meet deleted.",
    meetSaveFirst: "Save the task first.",
    noFiles: "No files yet.",
    noVoices: "No voice notes yet.",
    fileFallback: "File",
    voiceFallback: "Voice note",
    teamFallback: "Team",
    loadingLogin: "Signing in...",
    loadingRegister: "Creating account...",
    loggingOut: "Logging out...",
    confirmEmail: "Account created. If email confirmation is enabled in Supabase, confirm your email and then log in.",
    adminNotified: "Account created. Confirm your email, then wait for admin approval.",
    dbError: "Database could not be read",
    pendingKicker: "EHF EURO 2026 WORKFLOW",
    pendingTitle: "Access pending approval.",
    pendingCopy: "Your account has been created. An administrator must approve your access before you can view the workflow.",
    adminLabel: "Admin",
    approvalTitle: "User Approvals",
    approveButton: "Approve",
    noPendingUsers: "No users pending approval.",
    profileLabel: "Profile",
    profileTitle: "Profile Settings",
    profilePhoto: "Profile photo",
    changePhoto: "Change",
    removePhoto: "Remove",
    newPassword: "New password",
    saving: "Saving...",
    profileSaved: "Profile updated.",
    saveTimeout: "Save request timed out. Please try again.",
    adminPageTitle: "Admin Panel",
    notificationsLabel: "Notifications",
    notificationsTitle: "Notifications",
    noNotifications: "No notifications yet.",
    markRead: "Mark read",
    notificationDelete: "Delete",
    deadlineTomorrowTitle: "Deadline tomorrow",
    deadlineTomorrowBody: "is due tomorrow.",
    assignedNotice: "Assigned to you",
    activityNotice: "Task activity",
    activityTaskUpdated: "updated the task",
    activityNoteAdded: "added a note",
    activityNoteUpdated: "edited a note",
    activityNoteDeleted: "deleted a note",
    activityFileAdded: "added a file",
    activityFileDeleted: "deleted a file",
    activityVoiceAdded: "added a voice note",
    activityVoiceDeleted: "deleted a voice note",
    editNote: "Edit",
    deleteNote: "Delete",
    editNotePrompt: "Edit note",
    deleteNoteConfirm: "Delete this note?",
    footerCredit: "Copyright 2026 • Designed by THF Media Team. This workflow application was created by the THF Media Team.",
  },
  tr: {
    authKicker: "THF Medya Ekibi • Güvenli Operasyon Merkezi",
    authHeadlineSub: "Tüm medya operasyonunu koordine et.",
    authCopy: "Kampanya görevlerini, maç haftası varlıklarını, takvim kilometre taşlarını ve ekip atamalarını tek profesyonel çalışma alanından yönet.",
    accessTitle: "Çalışma Alanı Girişi",
    loginTab: "Giriş",
    registerTab: "Üyelik",
    emailLabel: "E-posta",
    passwordLabel: "Şifre",
    loginButton: "Giriş Yap",
    nameLabel: "Ad Soyad",
    roleLabel: "Rol",
    rolePlaceholder: "Video Editör",
    registerButton: "Üye Ol",
    appKicker: "THF Medya Ekibi • Entegre Etkinlik Workflow",
    appHeadlineSub: "Planla. Üret. Yayınla. Raporla.",
    appCopy: "İçerik üretimi, onaylar, canlı operasyon, ekip atamaları, dosyalar, ses notları ve takvim bazlı teslimler için profesyonel yönetim ekranı.",
    currentUser: "Aktif kullanıcı",
    logout: "Çıkış",
    calendarLabel: "Takvim",
    weekdayMon: "Pzt",
    weekdayTue: "Sal",
    weekdayWed: "Çar",
    weekdayThu: "Per",
    weekdayFri: "Cum",
    weekdaySat: "Cmt",
    weekdaySun: "Paz",
    activeView: "Aktif görünüm",
    allButton: "Tümü",
    newTaskButton: "+ Görev",
    cardDetail: "Kart detayı",
    closeModal: "Kapat",
    titleLabel: "Başlık",
    taskTitlePlaceholder: "Cumartesi reels paketi",
    descriptionLabel: "Açıklama",
    taskDescPlaceholder: "Kısa not, içerik hedefi veya teslim kriteri",
    dateLabel: "Tarih",
    deadlineLabel: "Deadline",
    priorityLabel: "Öncelik",
    progressLabel: "Durum",
    assigneesLabel: "Kullanıcılar",
    uploadFile: "Dosya yükle",
    voiceNote: "Sesli not",
    voiceReady: "Hazır",
    recordStart: "Kayda Başla",
    recordStop: "Kaydı Bitir",
    recorded: "Kaydedildi",
    recording: "Kayıt alınıyor",
    micNeeded: "Mikrofon izni gerekli",
    clearButton: "Temizle",
    deleteButton: "Sil",
    deleteConfirm: "Bu görev silinsin mi?",
    removeAsset: "Sil",
    removeAssetConfirm: "Bu kayıt silinsin mi?",
    notesTitle: "Notlar",
    notePlaceholder: "Not ekle",
    addNoteButton: "Not Ekle",
    noNotes: "Henüz not yok.",
    taskUpdatedNotificationTitle: "Görev güncellendi",
    saveButton: "Kaydet",
    teamLabel: "Ekip",
    defineUser: "Kullanıcı Tanımla",
    userPlaceholder: "Ad Soyad / rol",
    addButton: "Ekle",
    allPipeline: "Tüm Pipeline",
    cardView: "Kart",
    listView: "Liste",
    noTasks: "Bu kolonda görev yok.",
    noDescription: "Açıklama yok",
    unassigned: "Atanmadı",
    undated: "Tarihsiz",
    files: "dosya",
    voice: "ses",
    due: "Deadline",
    browserNotifications: "Browser bildirimleri açık",
    browserNotificationsBlocked: "Browser bildirimleri kapalı",
    assignedNotificationTitle: "Yeni görev atandı",
    newTask: "Yeni Görev",
    editTask: "Görevi Düzenle",
    filesTitle: "Dosyalar",
    voiceTitle: "Sesli Notlar",
    googleMeetTitle: "Google Meet",
    googleMeetReady: "Hazır",
    connectGoogle: "Google'a Bağlan",
    disconnectGoogle: "Bağlantıyı Kes",
    googleConnected: "Google bağlı",
    googleDisconnected: "Google bağlantısı yok",
    createMeet: "Meet Oluştur",
    creatingMeet: "Meet oluşturuluyor...",
    updateMeet: "Meet Güncelle",
    updatingMeet: "Meet güncelleniyor...",
    deleteMeet: "Meet Sil",
    deletingMeet: "Meet siliniyor...",
    meetingDateLabel: "Toplantı tarihi",
    meetingStartLabel: "Başlangıç",
    meetingEndLabel: "Bitiş",
    joinMeet: "Meet'e Katıl",
    meetCreated: "Meet linki oluşturuldu.",
    meetUpdated: "Meet güncellendi.",
    meetDeleted: "Meet silindi.",
    meetSaveFirst: "Önce görevi kaydet.",
    noFiles: "Henüz dosya yok.",
    noVoices: "Henüz sesli not yok.",
    fileFallback: "Dosya",
    voiceFallback: "Sesli not",
    teamFallback: "Ekip",
    loadingLogin: "Giriş yapılıyor...",
    loadingRegister: "Üyelik oluşturuluyor...",
    loggingOut: "Çıkış yapılıyor...",
    confirmEmail: "Üyelik oluşturuldu. Supabase email onayı açıksa e-postanı onaylayıp giriş yap.",
    adminNotified: "Üyelik oluşturuldu. E-postanı onayla; ardından admin onayını bekle.",
    dbError: "Database okunamadı",
    pendingKicker: "EHF EURO 2026 WORKFLOW",
    pendingTitle: "Erişim admin onayı bekliyor.",
    pendingCopy: "Hesabın oluşturuldu. Workflow ekranına erişebilmen için bir adminin hesabını onaylaması gerekiyor.",
    adminLabel: "Admin",
    approvalTitle: "Kullanıcı Onayları",
    approveButton: "Onayla",
    noPendingUsers: "Onay bekleyen kullanıcı yok.",
    profileLabel: "Profil",
    profileTitle: "Profil Ayarları",
    profilePhoto: "Profil fotoğrafı",
    changePhoto: "Değiştir",
    removePhoto: "Sil",
    newPassword: "Yeni şifre",
    saving: "Kaydediliyor...",
    profileSaved: "Profil güncellendi.",
    saveTimeout: "Kaydetme isteği zaman aşımına uğradı. Lütfen tekrar dene.",
    adminPageTitle: "Admin Paneli",
    notificationsLabel: "Bildirimler",
    notificationsTitle: "Bildirimler",
    noNotifications: "Henüz bildirim yok.",
    markRead: "Okundu",
    notificationDelete: "Sil",
    deadlineTomorrowTitle: "Deadline yarın",
    deadlineTomorrowBody: "görevinin deadline tarihi yarın.",
    assignedNotice: "Sana atandı",
    activityNotice: "Görev aktivitesi",
    activityTaskUpdated: "görevi güncelledi",
    activityNoteAdded: "not ekledi",
    activityNoteUpdated: "notu düzenledi",
    activityNoteDeleted: "notu sildi",
    activityFileAdded: "dosya ekledi",
    activityFileDeleted: "dosyayı sildi",
    activityVoiceAdded: "sesli not ekledi",
    activityVoiceDeleted: "sesli notu sildi",
    editNote: "Düzenle",
    deleteNote: "Sil",
    editNotePrompt: "Notu düzenle",
    deleteNoteConfirm: "Bu not silinsin mi?",
    footerCredit: "Copyright 2026 • THF Media Team tarafından tasarlanmıştır. Bu workflow uygulaması THF Medya Ekibi tarafından hazırlanmıştır.",
  },
};

const importedTasks = [
  ["2026-03-02", "Championship announcement post (Graphic animation) v1 + Social ads", "publish", "Mar"],
  ["2026-03-11", "Championship announcement post (Graphic animation) v2 + Social ads", "publish", "Mar"],
  ["2026-03-16", "Championship announcement post (Graphic animation) v3 + Social ads", "publish", "Mar"],
  ["2026-03-27", "Championship announcement post (Graphic animation) v4 + Social ads", "publish", "Mar"],
  ["2026-04-03", "Championship announcement post (Graphic animation) v5 + Social ads", "publish", "Apr"],
  ["2026-04-07", "Q&A with athletes v1", "plan", "Apr"],
  ["2026-04-16", "Championship announcement post (Graphic animation) v6 + Social ads", "publish", "Apr"],
  ["2026-04-22", "Q&A with athletes v2", "plan", "Apr"],
  ["2026-05-04", "Official promotional video", "production", "May"],
  ["2026-05-11", "Official mascot", "plan", "May"],
  ["2026-05-18", "Ticket sales announcement", "publish", "May"],
  ["2026-05-29", "Ticket giveaway", "publish", "May"],
  ["2026-06-05", "Influencer video v1", "production", "Jun"],
  ["2026-06-10", "Influencer video v2", "production", "Jun"],
  ["2026-06-19", "Volunteer announcement", "publish", "Jun"],
  ["2026-06-24", "Influencer video v3", "production", "Jun"],
  ["2026-07-03", "Content about handball events in Antalya", "production", "Jul"],
  ["2026-07-07", "Content about handball events in Antalya", "production", "Jul"],
  ["2026-07-17", "Content about handball events in Antalya", "production", "Jul"],
  ["2026-07-22", "Content about handball events in Antalya", "production", "Jul"],
  ["2026-09-04", "Official song announcement", "publish", "Sep"],
  ["2026-09-07", "The mascot's school visit", "publish", "Sep"],
  ["2026-09-18", "The mascot's shopping mall visit", "publish", "Sep"],
  ["2026-09-23", "The mascot's Antalya Sports Hall visit", "live", "Sep"],
  ["2026-10-02", "Turkey National Team's player's talks at school", "publish", "Oct"],
  ["2026-10-16", "Turkey National Team's player's talks at school", "publish", "Oct"],
  ["2026-11-02", "Content for visuals prepared in Antalya regarding the European Championship.", "production", "Nov"],
  ["2026-11-20", "Content for visuals prepared in Antalya regarding the European Championship.", "production", "Nov"],
];

let session = null;
let currentProfile = null;
let profiles = [];
let tasks = [];
let activities = [];
let selectedTaskId = "";
let activeColumn = "all";
let pipelineView = localStorage.getItem("workflow-pipeline-view") || "cards";
let calendarMonth = currentMonthKey();
let lang = localStorage.getItem("workflow-language") || "en";
let pendingFiles = [];
let pendingVoices = [];
let draftTaskDefaults = {};
let recorder = null;
let recordedChunks = [];
let notificationBaselineReady = false;
let activityBaselineReady = false;
let dataChannel = null;
let taskFingerprints = new Map();
let recentLocalEdits = new Set();
let profilePhotoMarkedForRemoval = false;
let profilePreviewObjectUrl = "";
let googleConnected = null;

const authScreen = document.getElementById("auth-screen");
const pendingScreen = document.getElementById("pending-screen");
const appScreen = document.getElementById("app-screen");
const authMessage = document.getElementById("auth-message");
const board = document.getElementById("kanban-board");
const taskForm = document.getElementById("task-form");
const userForm = document.getElementById("user-form");
const recordButton = document.getElementById("record-button");
const voiceStatus = document.getElementById("voice-status");
const taskModal = document.getElementById("task-modal");
const profileModal = document.getElementById("profile-modal");
const adminModal = document.getElementById("admin-modal");
const notificationsModal = document.getElementById("notifications-modal");
const profileButton = document.getElementById("profile-button");
const adminPageButton = document.getElementById("admin-page-button");
const notificationButton = document.getElementById("notification-button");
const profileForm = document.getElementById("profile-form");

boot();

async function boot() {
  const { data } = await supabase.auth.getSession();
  session = data.session;
  wireEvents();
  applyI18n();
  await renderShell();
  setInterval(refreshData, 15000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshData();
  });

  supabase.auth.onAuthStateChange(async (_event, nextSession) => {
    session = nextSession;
    await renderShell();
  });
}

function wireEvents() {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      lang = lang === "en" ? "tr" : "en";
      localStorage.setItem("workflow-language", lang);
      applyI18n();
      renderAll();
    });
  });
  document.getElementById("login-tab").addEventListener("click", () => setAuthMode("login"));
  document.getElementById("register-tab").addEventListener("click", () => setAuthMode("register"));
  document.getElementById("login-form").addEventListener("submit", login);
  document.getElementById("register-form").addEventListener("submit", register);
  document.getElementById("logout-button").addEventListener("click", logout);
  document.getElementById("pending-logout-button").addEventListener("click", logout);
  document.getElementById("new-task-button").addEventListener("click", () => openNewTask());
  document.getElementById("clear-button").addEventListener("click", () => {
    selectedTaskId = "";
    pendingFiles = [];
    pendingVoices = [];
    draftTaskDefaults = {};
    taskForm.reset();
    renderEditor();
  });
  document.getElementById("delete-task-button").addEventListener("click", deleteSelectedTask);
  document.getElementById("close-task-modal").addEventListener("click", closeTaskModal);
  document.getElementById("task-modal-backdrop").addEventListener("click", closeTaskModal);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!taskModal.classList.contains("app-hidden")) closeTaskModal();
    document.querySelectorAll(".panel-modal:not(.app-hidden)").forEach(closePanel);
  });
  document.getElementById("calendar-prev").addEventListener("click", () => moveCalendarMonth(-1));
  document.getElementById("calendar-next").addEventListener("click", () => moveCalendarMonth(1));
  document.getElementById("task-files").addEventListener("change", (event) => {
    pendingFiles = Array.from(event.target.files || []);
    renderAssets(getSelectedTask());
  });
  document.querySelectorAll("[data-view-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      pipelineView = button.dataset.viewMode;
      localStorage.setItem("workflow-pipeline-view", pipelineView);
      renderBoard();
    });
  });
  document.getElementById("asset-list").addEventListener("click", handleAssetAction);
  document.getElementById("connect-google-button").addEventListener("click", connectGoogle);
  document.getElementById("disconnect-google-button").addEventListener("click", disconnectGoogle);
  document.getElementById("create-meet-button").addEventListener("click", createGoogleMeet);
  document.getElementById("update-meet-button").addEventListener("click", () => createGoogleMeet("update"));
  document.getElementById("delete-meet-button").addEventListener("click", deleteGoogleMeet);
  document.getElementById("add-note-button").addEventListener("click", addTaskNote);
  document.getElementById("note-list").addEventListener("click", handleNoteAction);
  document.getElementById("task-date").addEventListener("change", (event) => {
    if (activeColumn === "all") {
      document.getElementById("task-column").value = columnFromDate(event.target.value);
    }
  });
  taskForm.addEventListener("submit", saveTask);
  userForm.addEventListener("submit", addProfile);
  profileForm.addEventListener("submit", saveProfile);
  document.getElementById("change-profile-photo").addEventListener("click", () => document.getElementById("profile-photo").click());
  document.getElementById("remove-profile-photo").addEventListener("click", removeProfilePhotoPreview);
  document.getElementById("profile-photo").addEventListener("change", updateProfilePhotoPreview);
  document.getElementById("approval-list").addEventListener("click", approveUser);
  profileButton.addEventListener("click", openProfileModal);
  adminPageButton.addEventListener("click", () => openPanel(adminModal));
  notificationButton.addEventListener("click", () => {
    renderNotifications();
    openPanel(notificationsModal);
  });
  document.getElementById("notification-list").addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-notification]");
    if (deleteButton) {
      deleteNotification(deleteButton.dataset.deleteNotification);
      renderNotifications();
      return;
    }
    const button = event.target.closest("[data-notification-task]");
    if (!button) return;
    markNotificationRead(button.dataset.notificationId);
    selectedTaskId = button.dataset.notificationTask;
    pendingFiles = [];
    pendingVoices = [];
    renderEditor();
    closePanel(notificationsModal);
    openTaskModal();
  });
  document.querySelectorAll("[data-close-panel]").forEach((button) => {
    button.addEventListener("click", (event) => closePanel(event.target.closest(".panel-modal")));
  });
  recordButton.addEventListener("click", toggleRecording);
  board.addEventListener("click", handleBoardClick);
  board.addEventListener("keydown", handleBoardKeydown);
  board.addEventListener("dragstart", handleDragStart);
  board.addEventListener("dragover", (event) => {
    if (event.target.closest("[data-drop-column]")) event.preventDefault();
  });
  board.addEventListener("drop", handleDrop);
  document.getElementById("calendar-grid").addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-calendar-add]");
    if (addButton) {
      openNewTask({ date: addButton.dataset.calendarAdd });
      return;
    }
    const button = event.target.closest("[data-calendar-task]");
    if (!button) return;
    selectedTaskId = button.dataset.calendarTask;
    pendingFiles = [];
    pendingVoices = [];
    renderEditor();
    openTaskModal();
  });
}

function openNewTask(defaults = {}) {
  selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
  draftTaskDefaults = defaults;
  renderEditor();
  openTaskModal();
  document.getElementById("task-title").focus();
}

async function login(event) {
  event.preventDefault();
  setAuthMessage(t("loadingLogin"));
  selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
  const { error } = await supabase.auth.signInWithPassword({
    email: document.getElementById("login-email").value.trim(),
    password: document.getElementById("login-password").value,
  });
  if (error) setAuthMessage(error.message);
}

async function logout() {
  setAuthMessage(t("loggingOut"));
  await supabase.auth.signOut({ scope: "local" });
  session = null;
  currentProfile = null;
  profiles = [];
  tasks = [];
  activities = [];
  selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
  notificationBaselineReady = false;
  activityBaselineReady = false;
  taskFingerprints = new Map();
  recentLocalEdits = new Set();
  closeTaskModal();
  document.querySelectorAll(".panel-modal:not(.app-hidden)").forEach(closePanel);
  if (dataChannel) {
    supabase.removeChannel(dataChannel);
    dataChannel = null;
  }
  taskForm.reset();
  renderShell();
}

async function register(event) {
  event.preventDefault();
  setAuthMessage(t("loadingRegister"));
  const fullName = document.getElementById("register-name").value.trim();
  const role = document.getElementById("register-role").value.trim();
  const { data, error } = await supabase.auth.signUp({
    email: document.getElementById("register-email").value.trim(),
    password: document.getElementById("register-password").value,
    options: { data: { full_name: fullName, role } },
  });

  if (error) {
    setAuthMessage(error.message);
    return;
  }

  if (data.user) {
    await supabase
      .from("profiles")
      .upsert(
        { auth_user_id: data.user.id, full_name: fullName, role, approval_status: "pending", is_admin: false },
        { onConflict: "auth_user_id" },
      );
  }

  setAuthMessage(data.session ? t("adminNotified") : t("confirmEmail"));
}

async function renderShell() {
  authScreen.classList.toggle("app-hidden", Boolean(session));
  pendingScreen.classList.add("app-hidden");
  appScreen.classList.toggle("app-hidden", !session);
  if (!session) {
    currentProfile = null;
    profiles = [];
    tasks = [];
    activities = [];
    selectedTaskId = "";
    setAuthMessage("");
    return;
  }

  await ensureProfile();
  if (currentProfile?.approval_status !== "approved") {
    authScreen.classList.add("app-hidden");
    appScreen.classList.add("app-hidden");
    pendingScreen.classList.remove("app-hidden");
    applyI18n();
    return;
  }
  requestBrowserNotifications();
  await seedImportedTasks();
  await loadData();
  subscribeDataChanges();
  document.getElementById("current-user-label").textContent =
    `${currentProfile?.full_name || session.user.email} • ${currentProfile?.role || t("teamFallback")}`;
  renderProfileShell();
  renderAll();
}

function subscribeDataChanges() {
  if (dataChannel) return;
  dataChannel = supabase
    .channel("workflow-data")
    .on("postgres_changes", { event: "*", schema: "public", table: "tasks" }, refreshData)
    .on("postgres_changes", { event: "*", schema: "public", table: "task_assignees" }, refreshData)
    .on("postgres_changes", { event: "*", schema: "public", table: "task_files" }, refreshData)
    .on("postgres_changes", { event: "*", schema: "public", table: "voice_notes" }, refreshData)
    .on("postgres_changes", { event: "*", schema: "public", table: "task_notes" }, refreshData)
    .on("postgres_changes", { event: "*", schema: "public", table: "task_activity" }, refreshData)
    .on("postgres_changes", { event: "*", schema: "public", table: "profiles" }, refreshData)
    .subscribe();
}

async function refreshData() {
  if (!session || currentProfile?.approval_status !== "approved") return;
  await loadData();
  renderAll();
}

async function ensureProfile() {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("auth_user_id", session.user.id)
    .maybeSingle();
  if (data) {
    currentProfile = data;
    return;
  }
  const meta = session.user.user_metadata || {};
  const fallback = {
    auth_user_id: session.user.id,
    full_name: meta.full_name || session.user.email,
    role: meta.role || t("teamFallback"),
    approval_status: "pending",
    is_admin: false,
  };
  const { data: inserted } = await supabase
    .from("profiles")
    .upsert(fallback, { onConflict: "auth_user_id" })
    .select("*")
    .single();
  currentProfile = inserted || fallback;
}

async function seedImportedTasks() {
  const rows = importedTasks.map(([date, title, column, sheet]) => ({
    title,
    description: `${title}\nKaynak: EHF Women's Euro 2026.xlsx / ${sheet}`,
    status: column,
    task_date: date,
    deadline_date: date,
    priority: "medium",
    import_key: `${date}|${title}`,
    created_by: session.user.id,
  }));
  await supabase.from("tasks").upsert(rows, { onConflict: "import_key", ignoreDuplicates: true });
}

async function loadData() {
  const [profileResult, taskResult, assigneeResult, fileResult, voiceResult, noteResult, activityResult] = await Promise.all([
    supabase.from("profiles").select("*").order("full_name"),
    supabase.from("tasks").select("*").order("task_date", { ascending: true, nullsFirst: false }),
    supabase.from("task_assignees").select("*"),
    supabase.from("task_files").select("*"),
    supabase.from("voice_notes").select("*"),
    supabase.from("task_notes").select("*").order("created_at", { ascending: false }),
    supabase.from("task_activity").select("*").order("created_at", { ascending: false }).limit(120),
  ]);

  if (taskResult.error) {
    setAuthMessage(`${t("dbError")}: ${taskResult.error.message}`);
    return;
  }

  profiles = profileResult.data || [];
  currentProfile = profiles.find((profile) => profile.auth_user_id === session.user.id) || currentProfile;
  const assigneesByTask = groupBy(assigneeResult.data || [], "task_id");
  const filesByTask = groupBy(fileResult.data || [], "task_id");
  const voicesByTask = groupBy(voiceResult.data || [], "task_id");
  const notesByTask = groupBy(noteResult.data || [], "task_id");
  tasks = (taskResult.data || []).map((task) => ({
    id: task.id,
    column: task.status === "post" ? "live" : task.status,
    title: task.title,
    desc: task.description || "",
    date: task.task_date || "",
    deadline: task.deadline_date || "",
    googleMeetUrl: task.google_meet_url || "",
    googleEventId: task.google_event_id || "",
    googleCalendarId: task.google_calendar_id || "",
    googleMeetStart: task.google_meet_start || "",
    googleMeetEnd: task.google_meet_end || "",
    priority: task.priority || "medium",
    progress: task.progress_status || "ongoing",
    createdBy: task.created_by || "",
    assignees: defaultAssignees((assigneesByTask[task.id] || []).map((row) => row.user_id)),
    files: filesByTask[task.id] || [],
    voices: voicesByTask[task.id] || [],
    notes: notesByTask[task.id] || [],
  }));
  activities = activityResult.data || [];
  notifyAssignedTaskChanges();
  notifyDeadlineReminders();
  notifyActivityChanges();
}

function renderAll() {
  const isTaskEditorOpen = !taskModal.classList.contains("app-hidden");
  applyI18n();
  if (!isTaskEditorOpen) renderSelectors();
  renderUsers();
  renderBoard();
  renderCalendar();
  renderAdminPanel();
  renderProfileShell();
  renderNotifications();
}

function renderSelectors() {
  document.getElementById("task-priority").innerHTML = priorities
    .map((priority) => `<option value="${priority.id}">${priorityLabel(priority.id)}</option>`)
    .join("");
  document.getElementById("task-progress").innerHTML = progressStates
    .map((progress) => `<option value="${progress.id}">${progressLabel(progress.id)}</option>`)
    .join("");
  renderAssigneeChecklist(getSelectedTask()?.assignees || []);
}

function renderUsers() {
  document.getElementById("user-list").innerHTML = profiles
    .map((profile) => `<span class="user-pill">${escapeHtml(profile.full_name)} / ${escapeHtml(profile.role || t("teamFallback"))}</span>`)
    .join("");
}

function renderAssigneeChecklist(assignees = []) {
  const selected = new Set(defaultAssignees(assignees));
  document.getElementById("assignee-list").innerHTML = profiles
    .map(
      (profile) => `
        <label class="assignee-option">
          <input type="checkbox" value="${profile.id}" ${selected.has(profile.id) ? "checked" : ""} />
          ${renderAvatar(profile)}
          <span>
            <strong>${escapeHtml(profile.full_name)}</strong>
            <small>${escapeHtml(profile.role || t("teamFallback"))}</small>
          </span>
        </label>
      `,
    )
    .join("");
}

function renderAdminPanel() {
  const list = document.getElementById("approval-list");
  const isAdmin = Boolean(currentProfile?.is_admin);
  adminPageButton.classList.toggle("app-hidden", !isAdmin);
  if (!isAdmin) closePanel(adminModal);
  if (!isAdmin) return;

  const pending = profiles.filter((profile) => profile.approval_status === "pending" && profile.auth_user_id);
  list.innerHTML = pending.length
    ? pending
        .map(
          (profile) => `
            <div class="approval-row">
              <div>
                <strong>${escapeHtml(profile.full_name)}</strong>
                <span>${escapeHtml(profile.role || t("teamFallback"))}</span>
              </div>
              <button class="primary-button" type="button" data-approve-user="${profile.id}">${t("approveButton")}</button>
            </div>
          `,
        )
        .join("")
    : `<p class="empty-note">${t("noPendingUsers")}</p>`;
}

function renderBoard() {
  activeColumn = "all";
  document.getElementById("active-view-title").textContent = t("allPipeline");
  document.querySelectorAll("[data-view-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewMode === pipelineView);
  });
  board.classList.toggle("all-fit", pipelineView === "cards");
  board.classList.toggle("list-view", pipelineView === "list");
  if (pipelineView === "list") {
    board.innerHTML = renderPipelineTable();
    return;
  }
  board.innerHTML = columns
    .map((column) => {
      const columnTasks = tasks.filter((task) => task.column === column.id);
      return `
        <section class="kanban-column" data-column="${column.id}">
          <button class="column-heading ${column.tone}" type="button" data-filter="${column.id}">
            <span>${colDay(column)}</span>
          </button>
          <div class="task-stack" data-drop-column="${column.id}">
            ${columnTasks.length ? columnTasks.map(renderTaskCard).join("") : `<div class="empty-state">${t("noTasks")}</div>`}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderPipelineTable() {
  const rows = [...tasks].sort((first, second) => {
    const firstDate = first.date || "9999-12-31";
    const secondDate = second.date || "9999-12-31";
    return firstDate.localeCompare(secondDate) || first.title.localeCompare(second.title);
  });
  return `
    <section class="pipeline-table" aria-label="Pipeline list">
      ${rows.length ? rows.map(renderTaskListRow).join("") : `<div class="empty-state">${t("noTasks")}</div>`}
    </section>
  `;
}

function renderTaskListRow(task) {
  const completed = task.progress === "completed" ? "completed" : "";
  const assignees = task.assignees.map(profileById).filter(Boolean);
  const column = columns.find((item) => item.id === task.column);
  return `
    <div class="task-list-row priority-${escapeHtml(task.priority)} ${completed}" role="button" tabindex="0" draggable="true" data-task="${task.id}">
      <div class="task-list-day">
        <strong>${column ? colDay(column) : t("allPipeline")}</strong>
      </div>
      <div class="task-list-main">
        <strong>${escapeHtml(task.title)}</strong>
        <span>${escapeHtml(stripSource(task.desc || t("noDescription")))}</span>
      </div>
      <div class="task-list-status">
        <em class="progress-pill progress-${escapeHtml(task.progress)}">${progressLabel(task.progress)}</em>
        <em class="priority-pill priority-${escapeHtml(task.priority)}">${priorityLabel(task.priority)}</em>
      </div>
      <span class="task-list-date">${task.date ? formatDate(task.date) : t("undated")}</span>
      <div class="task-list-people">${assignees.length ? `<div class="task-avatar-row">${assignees.map(renderAvatar).join("")}</div>` : ""}</div>
      <span class="task-list-counts">${task.files.length} ${t("files")} / ${task.voices.length} ${t("voice")}</span>
      </div>
  `;
}

function renderTaskCard(task) {
  const selected = task.id === selectedTaskId ? "selected" : "";
  const completed = task.progress === "completed" ? "completed" : "";
  const thumbs = task.files.filter((file) => isImageFile(file)).slice(0, 3);
  const firstVoice = task.voices.find((voice) => voice.audio_url);
  const assignees = task.assignees.map(profileById).filter(Boolean);
  return `
    <div class="task-card priority-${escapeHtml(task.priority)} ${completed} ${selected}" role="button" tabindex="0" draggable="true" data-task="${task.id}">
      <div class="task-card-topline">
        <strong>${escapeHtml(task.title)}</strong>
        <div class="task-card-badges">
          <em class="progress-pill progress-${escapeHtml(task.progress)}">${progressLabel(task.progress)}</em>
          <em class="priority-pill priority-${escapeHtml(task.priority)}">${priorityLabel(task.priority)}</em>
        </div>
      </div>
      <span>${escapeHtml(stripSource(task.desc || t("noDescription")))}</span>
      ${
        thumbs.length
          ? `<div class="task-thumbnails">${thumbs.map((file) => `<img src="${file.file_url}" alt="${escapeHtml(file.file_name || t("fileFallback"))}" />`).join("")}</div>`
          : ""
      }
      ${firstVoice ? `<audio class="task-audio-preview" controls src="${firstVoice.audio_url}"></audio>` : ""}
      ${assignees.length ? `<div class="task-avatar-row">${assignees.map(renderAvatar).join("")}</div>` : ""}
      <div class="task-card-meta">
        <small>${escapeHtml(labelAssignees(task.assignees))}</small>
        <small>
          ${task.date ? formatDate(task.date) : t("undated")}
          ${task.deadline ? ` • ${t("due")}: ${formatDate(task.deadline)}` : ""}
          • ${task.files.length} ${t("files")} • ${task.voices.length} ${t("voice")}
        </small>
      </div>
    </div>
  `;
}

function renderCalendar() {
  const [year, month] = calendarMonth.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const dayCount = new Date(year, month, 0).getDate();
  const leadingBlanks = (firstDay.getDay() + 6) % 7;
  const cells = [];
  document.getElementById("calendar-title").textContent = new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-US", {
    month: "long",
    year: "numeric",
  }).format(firstDay);

  for (let index = 0; index < leadingBlanks; index += 1) cells.push(`<div class="calendar-day muted"></div>`);
  for (let day = 1; day <= dayCount; day += 1) {
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayTasks = tasks.filter((task) => task.date === date);
    cells.push(`
      <div class="calendar-day ${dayTasks.length ? "has-tasks" : ""}">
        <div class="calendar-date">${day}</div>
        <button class="calendar-add-button" type="button" data-calendar-add="${date}" aria-label="${escapeHtml(t("newTaskButton"))}: ${date}">+</button>
        <div class="calendar-tasks">
          ${dayTasks.map((task) => `<button class="calendar-task priority-${escapeHtml(task.priority)}" type="button" data-calendar-task="${task.id}">${escapeHtml(task.title)}</button>`).join("")}
        </div>
      </div>
    `);
  }
  document.getElementById("calendar-grid").innerHTML = cells.join("");
}

function renderEditor() {
  const task = getSelectedTask();
  const defaultDate = task?.date || draftTaskDefaults.date || "";
  const defaultColumn = activeColumn !== "all" ? activeColumn : columnFromDate(defaultDate || document.getElementById("task-date").value);
  document.getElementById("editor-title").textContent = task ? t("editTask") : t("newTask");
  document.getElementById("task-id").value = task?.id || "";
  document.getElementById("task-title").value = task?.title || "";
  document.getElementById("task-desc").value = stripSource(task?.desc || "");
  document.getElementById("task-date").value = defaultDate;
  document.getElementById("task-deadline").value = task?.deadline || draftTaskDefaults.date || "";
  document.getElementById("task-priority").value = task?.priority || "medium";
  document.getElementById("task-progress").value = task?.progress || "ongoing";
  document.getElementById("task-column").value = task?.column || defaultColumn;
  document.getElementById("delete-task-button").classList.toggle("app-hidden", !canDeleteTask(task));
  setSelectedAssignees(task?.assignees || []);
  renderAssets(task);
  renderMeet(task);
  renderNotes(task);
}

function openTaskModal() {
  taskModal.classList.remove("app-hidden");
  document.body.classList.add("modal-open");
}

function closeTaskModal() {
  taskModal.classList.add("app-hidden");
  if (!document.querySelector(".panel-modal:not(.app-hidden)")) document.body.classList.remove("modal-open");
}

function renderAssets(task) {
  const files = [
    ...(task?.files || []).map((file) => ({ ...file, source: "saved" })),
    ...pendingFiles.map((file, index) => ({ file, file_name: file.name, file_type: file.type, source: "pending", pendingIndex: index })),
  ];
  const voices = [
    ...(task?.voices || []).map((voice) => ({ ...voice, source: "saved" })),
    ...pendingVoices.map((voice, index) => ({ file_name: voice.name, audio_url: voice.url, source: "pending", pendingIndex: index })),
  ];
  document.getElementById("asset-list").innerHTML = `
    <div>
      <strong>${t("filesTitle")}</strong>
      ${files.length ? files.map(renderFile).join("") : `<p>${t("noFiles")}</p>`}
    </div>
    <div>
      <strong>${t("voiceTitle")}</strong>
      ${voices.length ? voices.map(renderVoice).join("") : `<p>${t("noVoices")}</p>`}
    </div>
  `;
}

function renderMeet(task) {
  const status = document.getElementById("google-meet-status");
  const connectButton = document.getElementById("connect-google-button");
  const disconnectButton = document.getElementById("disconnect-google-button");
  const createButton = document.getElementById("create-meet-button");
  const updateButton = document.getElementById("update-meet-button");
  const deleteButton = document.getElementById("delete-meet-button");
  const joinLink = document.getElementById("join-meet-link");
  const schedule = meetScheduleFromTask(task);
  document.getElementById("meet-date").value = schedule.date;
  document.getElementById("meet-start-time").value = schedule.startTime;
  document.getElementById("meet-end-time").value = schedule.endTime;
  connectButton.classList.toggle("app-hidden", googleConnected === true);
  disconnectButton.classList.toggle("app-hidden", googleConnected !== true);
  status.textContent = task?.googleMeetUrl
    ? t("meetCreated")
    : googleConnected === true
      ? t("googleConnected")
      : googleConnected === false
        ? t("googleDisconnected")
        : task
          ? t("googleMeetReady")
          : t("meetSaveFirst");
  createButton.disabled = !task || Boolean(task.googleMeetUrl);
  createButton.classList.toggle("app-hidden", Boolean(task?.googleMeetUrl));
  updateButton.classList.toggle("app-hidden", !task?.googleMeetUrl);
  deleteButton.classList.toggle("app-hidden", !task?.googleMeetUrl);
  updateButton.disabled = !task?.googleMeetUrl;
  deleteButton.disabled = !task?.googleMeetUrl;
  joinLink.classList.toggle("app-hidden", !task?.googleMeetUrl);
  if (task?.googleMeetUrl) joinLink.href = task.googleMeetUrl;
  else joinLink.removeAttribute("href");
  if (googleConnected === null && session) checkGoogleConnection();
}

function renderFile(file) {
  const href = file.file_url || "#";
  const localUrl = file.file_url || (file.file instanceof File ? URL.createObjectURL(file.file) : "");
  const name = file.file_name || file.file?.name || t("fileFallback");
  const author = labelAuthUser(file.created_by);
  const meta = [file.file_type || file.file?.type || "", author, file.created_at ? formatDateTime(file.created_at) : ""].filter(Boolean).join(" • ");
  const preview = isImageFile(file) && localUrl ? `<img class="asset-thumb" src="${localUrl}" alt="${escapeHtml(name)}" />` : "";
  const action = file.source === "pending"
    ? `<button class="asset-remove" type="button" data-remove-pending-file="${file.pendingIndex}">${t("removeAsset")}</button>`
    : canManageOwnItem(file) ? `<button class="asset-remove" type="button" data-delete-file="${file.id}">${t("removeAsset")}</button>` : "";
  return `
    <div class="asset-row">
      <a class="asset-link" href="${href}" target="_blank" rel="noreferrer">${preview}<span>${escapeHtml(name)}</span>${meta ? `<small>${escapeHtml(meta)}</small>` : ""}</a>
      ${action}
    </div>
  `;
}

function renderVoice(voice) {
  const author = labelAuthUser(voice.created_by);
  const meta = [author, voice.created_at ? formatDateTime(voice.created_at) : ""].filter(Boolean).join(" • ");
  const action = voice.source === "pending"
    ? `<button class="asset-remove" type="button" data-remove-pending-voice="${voice.pendingIndex}">${t("removeAsset")}</button>`
    : canManageOwnItem(voice) ? `<button class="asset-remove" type="button" data-delete-voice="${voice.id}">${t("removeAsset")}</button>` : "";
  return `
    <div class="asset-row">
      <div class="voice-note">
        ${voice.audio_url ? `<audio controls preload="metadata" src="${voice.audio_url}"></audio>` : ""}
        <small>${escapeHtml(voice.file_name || t("voiceFallback"))}</small>
        ${meta ? `<small>${escapeHtml(meta)}</small>` : ""}
      </div>
      ${action}
    </div>
  `;
}

function renderNotes(task) {
  const notes = task?.notes || [];
  document.getElementById("task-note").value = "";
  document.getElementById("note-list").innerHTML = notes.length
    ? notes.map(renderNote).join("")
    : `<p class="empty-note">${t("noNotes")}</p>`;
}

function renderNote(note) {
  const meta = [labelAuthUser(note.created_by), note.created_at ? formatDateTime(note.created_at) : ""].filter(Boolean).join(" • ");
  const actions = canManageOwnItem(note)
    ? `
      <div class="note-actions">
        <button class="icon-mini-button" type="button" data-edit-note="${note.id}" aria-label="${t("editNote")}">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m18 2 4 4-14 14H4v-4L18 2z"></path>
          </svg>
        </button>
        <button class="icon-mini-button danger" type="button" data-delete-note="${note.id}" aria-label="${t("deleteNote")}">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path>
          </svg>
        </button>
      </div>
    `
    : "";
  return `
    <article class="note-item">
      <div class="note-body">
        <p>${escapeHtml(note.note_text || "")}</p>
        ${meta ? `<small>${escapeHtml(meta)}</small>` : ""}
      </div>
      ${actions}
    </article>
  `;
}

function handleBoardClick(event) {
  if (event.target.closest("audio, a, img, input, select, textarea, button:not([data-filter])")) return;
  const card = event.target.closest("[data-task]");
  if (card) {
    selectedTaskId = card.dataset.task;
    pendingFiles = [];
    pendingVoices = [];
    renderEditor();
    openTaskModal();
  }
}

function handleBoardKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-task]");
  if (!card) return;
  event.preventDefault();
  selectedTaskId = card.dataset.task;
  pendingFiles = [];
  pendingVoices = [];
  renderEditor();
  openTaskModal();
}

async function handleAssetAction(event) {
  const pendingFileButton = event.target.closest("[data-remove-pending-file]");
  const pendingVoiceButton = event.target.closest("[data-remove-pending-voice]");
  const savedFileButton = event.target.closest("[data-delete-file]");
  const savedVoiceButton = event.target.closest("[data-delete-voice]");

  if (!pendingFileButton && !pendingVoiceButton && !savedFileButton && !savedVoiceButton) return;
  event.preventDefault();
  event.stopPropagation();
  if (!confirm(t("removeAssetConfirm"))) return;

  if (pendingFileButton) {
    pendingFiles.splice(Number(pendingFileButton.dataset.removePendingFile), 1);
    document.getElementById("task-files").value = "";
    renderAssets(getSelectedTask());
    return;
  }

  if (pendingVoiceButton) {
    const [voice] = pendingVoices.splice(Number(pendingVoiceButton.dataset.removePendingVoice), 1);
    if (voice?.url) URL.revokeObjectURL(voice.url);
    renderAssets(getSelectedTask());
    return;
  }

  const table = savedFileButton ? "task_files" : "voice_notes";
  const id = savedFileButton?.dataset.deleteFile || savedVoiceButton?.dataset.deleteVoice;
  await assertOk(await supabase.from(table).delete().eq("id", id));
  await recordTaskActivity(getSelectedTask()?.id, savedFileButton ? "file_deleted" : "voice_deleted");
  await loadData();
  renderAll();
}

function handleDragStart(event) {
  const card = event.target.closest("[data-task]");
  if (card) event.dataTransfer.setData("text/plain", card.dataset.task);
}

async function handleDrop(event) {
  const dropZone = event.target.closest("[data-drop-column]");
  const taskId = event.dataTransfer.getData("text/plain");
  if (!dropZone || !taskId) return;
  await supabase.from("tasks").update({ status: dropZone.dataset.dropColumn }).eq("id", taskId);
  await loadData();
  renderAll();
}

async function saveTask(event) {
  event.preventDefault();
  const submitButton = taskForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  const id = document.getElementById("task-id").value;
  const isNewTask = !id;
  const previousAssignees = new Set(getSelectedTask()?.assignees || []);
  const payload = {
    title: document.getElementById("task-title").value.trim(),
    description: stripSource(document.getElementById("task-desc").value.trim()),
    task_date: document.getElementById("task-date").value || null,
    deadline_date: document.getElementById("task-deadline").value || null,
    priority: document.getElementById("task-priority").value,
    progress_status: document.getElementById("task-progress").value,
    status: document.getElementById("task-date").value
      ? columnFromDate(document.getElementById("task-date").value)
      : document.getElementById("task-column").value,
  };
  if (isNewTask) payload.created_by = session.user.id;

  const result = id
    ? await supabase.from("tasks").update(payload).eq("id", id).select("id").single()
    : await supabase.from("tasks").insert(payload).select("id").single();

  if (result.error) {
    submitButton.disabled = false;
    alert(result.error.message);
    return;
  }

  const taskId = result.data.id;
  recentLocalEdits.add(taskId);
  try {
    await assertOk(await supabase.from("task_assignees").delete().eq("task_id", taskId));
    const assignees = getSelectedAssignees().map((userId) => ({ task_id: taskId, user_id: userId }));
    if (assignees.length) await assertOk(await supabase.from("task_assignees").insert(assignees));
    const newlyAssigned = assignees.map((item) => item.user_id).filter((userId) => isNewTask || !previousAssignees.has(userId));
    const filesToUpload = pendingFiles;
    const voicesToUpload = pendingVoices;
    selectedTaskId = taskId;
    pendingFiles = [];
    pendingVoices = [];
    draftTaskDefaults = {};
    document.getElementById("task-files").value = "";
    closeTaskModal();
    await loadData();
    renderAll();
    uploadAssetsAndNotify(taskId, filesToUpload, voicesToUpload, newlyAssigned, isNewTask ? "" : "task_updated");
  } catch (error) {
    submitButton.disabled = false;
    alert(error.message || String(error));
    return;
  }

  submitButton.disabled = false;
}

async function uploadAssetsAndNotify(taskId, files, voices, newlyAssigned, activityAction = "") {
  try {
    if (files.length || voices.length) await uploadPendingAssets(taskId, files, voices);
    if (activityAction) await recordTaskActivity(taskId, activityAction);
    if (newlyAssigned.length) await sendAssignmentEmails(taskId, newlyAssigned);
    await loadData();
    renderAll();
  } catch (error) {
    alert(error.message || String(error));
  }
}

async function sendAssignmentEmails(taskId, assigneeIds) {
  try {
    await supabase.functions.invoke("task-assignment-email", {
      body: { taskId, assigneeIds },
    });
  } catch (error) {
    console.warn("Assignment email function is not configured yet.", error);
  }
}

async function connectGoogle() {
  const { data, error } = await supabase.functions.invoke("google-oauth-start", {
    body: { returnTo: window.location.href },
  });
  if (error) {
    alert(error.message);
    return;
  }
  if (data?.url) window.location.href = data.url;
}

async function checkGoogleConnection() {
  try {
    const { data, error } = await supabase.functions.invoke("create-google-meet", {
      body: { mode: "status" },
    });
    if (error) throw error;
    googleConnected = Boolean(data?.connected);
    if (!taskModal.classList.contains("app-hidden")) renderMeet(getSelectedTask());
  } catch {
    googleConnected = false;
    if (!taskModal.classList.contains("app-hidden")) renderMeet(getSelectedTask());
  }
}

async function disconnectGoogle() {
  const status = document.getElementById("google-meet-status");
  try {
    const { data, error } = await supabase.functions.invoke("create-google-meet", {
      body: { mode: "disconnect" },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    googleConnected = false;
    renderMeet(getSelectedTask());
  } catch (error) {
    status.textContent = error.message || String(error);
  }
}

async function createGoogleMeet(mode = "create") {
  const task = getSelectedTask();
  if (!task) {
    document.getElementById("google-meet-status").textContent = t("meetSaveFirst");
    return;
  }
  const button = document.getElementById(mode === "update" ? "update-meet-button" : "create-meet-button");
  const status = document.getElementById("google-meet-status");
  button.disabled = true;
  status.textContent = t(mode === "update" ? "updatingMeet" : "creatingMeet");
  try {
    const { data, error } = await supabase.functions.invoke("create-google-meet", {
      body: { taskId: task.id, mode, ...getMeetSchedulePayload() },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    googleConnected = true;
    await loadData();
    renderAll();
    selectedTaskId = task.id;
    renderEditor();
  } catch (error) {
    status.textContent = error.message || String(error);
  } finally {
    button.disabled = false;
  }
}

async function deleteGoogleMeet() {
  const task = getSelectedTask();
  if (!task?.googleEventId && !task?.googleMeetUrl) return;
  const button = document.getElementById("delete-meet-button");
  const status = document.getElementById("google-meet-status");
  button.disabled = true;
  status.textContent = t("deletingMeet");
  try {
    const { data, error } = await supabase.functions.invoke("create-google-meet", {
      body: { taskId: task.id, mode: "delete" },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    await loadData();
    renderAll();
    selectedTaskId = task.id;
    renderEditor();
  } catch (error) {
    status.textContent = error.message || String(error);
  } finally {
    button.disabled = false;
  }
}

function getMeetSchedulePayload() {
  return {
    meetingDate: document.getElementById("meet-date").value,
    startTime: document.getElementById("meet-start-time").value || "10:00",
    endTime: document.getElementById("meet-end-time").value || "11:00",
  };
}

async function addTaskNote() {
  const task = getSelectedTask();
  const note = document.getElementById("task-note").value.trim();
  if (!task || !note) return;

  await assertOk(await supabase.from("task_notes").insert({
    task_id: task.id,
    note_text: note,
    created_by: session.user.id,
  }));
  await recordTaskActivity(task.id, "note_added");
  recentLocalEdits.add(task.id);
  document.getElementById("task-note").value = "";
  await loadData();
  renderAll();
}

async function handleNoteAction(event) {
  const editButton = event.target.closest("[data-edit-note]");
  const deleteButton = event.target.closest("[data-delete-note]");
  if (!editButton && !deleteButton) return;
  event.preventDefault();
  const task = getSelectedTask();
  if (!task) return;
  const noteId = editButton?.dataset.editNote || deleteButton?.dataset.deleteNote;
  const note = task.notes.find((item) => item.id === noteId);
  if (!note) return;

  if (editButton) {
    const nextText = prompt(t("editNotePrompt"), note.note_text || "");
    if (nextText === null || !nextText.trim()) return;
    await assertOk(await supabase.from("task_notes").update({ note_text: nextText.trim() }).eq("id", noteId));
    await recordTaskActivity(task.id, "note_updated");
  } else {
    if (!confirm(t("deleteNoteConfirm"))) return;
    await assertOk(await supabase.from("task_notes").delete().eq("id", noteId));
    await recordTaskActivity(task.id, "note_deleted");
  }

  recentLocalEdits.add(task.id);
  await loadData();
  renderAll();
}

async function deleteSelectedTask() {
  const task = getSelectedTask();
  if (!canDeleteTask(task)) return;
  if (!task || !confirm(t("deleteConfirm"))) return;

  const { error } = await supabase.from("tasks").delete().eq("id", task.id);
  if (error) {
    alert(error.message);
    return;
  }

  selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
  taskForm.reset();
  await loadData();
  renderAll();
  closeTaskModal();
}

async function uploadPendingAssets(taskId, files = pendingFiles, voices = pendingVoices) {
  for (const file of files) {
    const path = `${taskId}/files/${crypto.randomUUID()}-${safeName(file.name)}`;
    const { error } = await supabase.storage.from("task-assets").upload(path, file, { upsert: true });
    if (error) throw error;
    const { data } = supabase.storage.from("task-assets").getPublicUrl(path);
    await assertOk(await supabase.from("task_files").insert({
      task_id: taskId,
      file_url: data.publicUrl,
      file_name: file.name,
      file_type: file.type,
      created_by: session.user.id,
    }));
    await recordTaskActivity(taskId, "file_added");
  }

  for (const voice of voices) {
    const extension = audioExtension(voice.blob.type);
    const path = `${taskId}/voice/${crypto.randomUUID()}-${safeName(voice.name)}.${extension}`;
    const { error } = await supabase.storage.from("task-assets").upload(path, voice.blob, {
      contentType: voice.blob.type || "audio/webm",
      upsert: true,
    });
    if (error) throw error;
    const { data } = supabase.storage.from("task-assets").getPublicUrl(path);
    const voicePayload = {
      task_id: taskId,
      audio_url: data.publicUrl,
      file_name: voice.name,
      created_by: session.user.id,
    };
    await assertOk(await supabase.from("voice_notes").insert(voicePayload));
    await recordTaskActivity(taskId, "voice_added");
  }
}

async function recordTaskActivity(taskId, action) {
  if (!taskId || !action) return;
  try {
    await supabase.from("task_activity").insert({
      task_id: taskId,
      action,
      actor_id: session.user.id,
    });
  } catch (error) {
    console.warn("Task activity could not be recorded.", error);
  }
}

async function addProfile(event) {
  event.preventDefault();
  const value = document.getElementById("user-name").value.trim();
  if (!value) return;
  const [fullName, role = t("teamFallback")] = value.split("/").map((part) => part.trim());
  await supabase.from("profiles").insert({ full_name: fullName, role, approval_status: "approved" });
  document.getElementById("user-name").value = "";
  await loadData();
  renderAll();
}

function openProfileModal() {
  document.getElementById("profile-name").value = currentProfile?.full_name || "";
  document.getElementById("profile-role").value = currentProfile?.role || "";
  document.getElementById("profile-photo").value = "";
  document.getElementById("profile-password").value = "";
  document.getElementById("profile-status").textContent = "";
  profilePhotoMarkedForRemoval = false;
  renderProfilePhotoPreview(currentProfile?.avatar_url || "");
  openPanel(profileModal);
}

function openPanel(panel) {
  if (!panel) return;
  panel.classList.remove("app-hidden");
  document.body.classList.add("modal-open");
}

function closePanel(panel) {
  if (!panel) return;
  panel.classList.add("app-hidden");
  if (taskModal.classList.contains("app-hidden") && !document.querySelector(".panel-modal:not(.app-hidden)")) {
    document.body.classList.remove("modal-open");
  }
}

async function saveProfile(event) {
  event.preventDefault();
  const saveButton = document.getElementById("profile-save-button");
  const saveText = saveButton.querySelector("span");
  const status = document.getElementById("profile-status");
  const originalText = saveText.textContent;
  saveButton.disabled = true;
  saveText.textContent = t("saving");
  status.textContent = t("saving");
  const payload = {
    full_name: document.getElementById("profile-name").value.trim() || currentProfile.full_name,
    role: document.getElementById("profile-role").value.trim() || currentProfile.role,
  };
  const photo = document.getElementById("profile-photo").files?.[0];

  try {
    if (profilePhotoMarkedForRemoval) payload.avatar_url = null;
    if (photo) {
      const path = `profiles/${currentProfile.id}/${crypto.randomUUID()}-${safeName(photo.name)}`;
      const { error } = await withTimeout(
        supabase.storage.from("task-assets").upload(path, photo, {
          contentType: photo.type,
          upsert: true,
        }),
      );
      if (error) throw error;
      const { data } = supabase.storage.from("task-assets").getPublicUrl(path);
      payload.avatar_url = data.publicUrl;
    }

    const password = document.getElementById("profile-password").value;
    if (password) {
      const { error } = await withTimeout(supabase.auth.updateUser({ password }));
      if (error) throw error;
    }

    const result = await withTimeout(
      supabase.from("profiles").update(payload).eq("auth_user_id", session.user.id).select("*").single(),
    );
    await assertOk(result);
    currentProfile = result.data || { ...currentProfile, ...payload };
    profiles = profiles.map((profile) => (profile.id === currentProfile.id ? currentProfile : profile));
    renderAll();
    closePanel(profileModal);
    status.textContent = "";
  } catch (error) {
    status.textContent = error.message || String(error);
  } finally {
    saveButton.disabled = false;
    saveText.textContent = originalText || t("saveButton");
  }
}

function updateProfilePhotoPreview() {
  const file = document.getElementById("profile-photo").files?.[0];
  if (!file) return;
  if (profilePreviewObjectUrl) URL.revokeObjectURL(profilePreviewObjectUrl);
  profilePreviewObjectUrl = URL.createObjectURL(file);
  profilePhotoMarkedForRemoval = false;
  renderProfilePhotoPreview(profilePreviewObjectUrl);
}

function removeProfilePhotoPreview() {
  document.getElementById("profile-photo").value = "";
  profilePhotoMarkedForRemoval = true;
  renderProfilePhotoPreview("");
}

function renderProfilePhotoPreview(url) {
  const preview = document.getElementById("profile-photo-preview");
  const removeButton = document.getElementById("remove-profile-photo");
  const label = escapeHtml(currentProfile?.full_name || t("teamFallback"));
  preview.innerHTML = url
    ? `<img src="${url}" alt="${label}" />`
    : `
      <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 21a8 8 0 0 0-16 0"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    `;
  removeButton.classList.toggle("app-hidden", !url);
}

function renderProfileShell() {
  const avatar = document.getElementById("profile-avatar");
  const initials = document.getElementById("profile-initials");
  initials.textContent = initialsFromName(currentProfile?.full_name || session?.user?.email || "");
  if (currentProfile?.avatar_url) {
    avatar.src = currentProfile.avatar_url;
    avatar.classList.remove("app-hidden");
    initials.classList.add("app-hidden");
  } else {
    avatar.removeAttribute("src");
    avatar.classList.add("app-hidden");
    initials.classList.remove("app-hidden");
  }
  document.getElementById("current-user-label").textContent =
    `${currentProfile?.full_name || session?.user?.email || ""} • ${currentProfile?.role || t("teamFallback")}`;
}

function renderNotifications() {
  const notices = currentNotifications();
  const unread = notices.filter((notice) => !notice.read);
  const count = document.getElementById("notification-count");
  count.textContent = String(unread.length);
  count.classList.toggle("app-hidden", unread.length === 0);
  document.getElementById("notification-list").innerHTML = notices.length
    ? notices.map(renderNotification).join("")
    : `<p class="empty-note">${t("noNotifications")}</p>`;
}

function currentNotifications() {
  if (!currentProfile) return [];
  const today = todayKey();
  return tasks
    .filter((task) => task.assignees.includes(currentProfile.id))
    .flatMap((task) => {
      const notices = [{ id: notificationId("assigned", task), type: "assigned", task, title: task.title, body: taskPreview(task) }];
      if (task.deadline && daysBetween(today, task.deadline) === 1 && task.progress !== "completed") {
        notices.unshift({ id: notificationId("deadline", task), type: "deadline", task, title: task.title, body: `${t("deadlineTomorrowTitle")} • ${taskPreview(task)}` });
      }
      return notices;
    })
    .filter((notice) => !notificationSet("deleted").has(notice.id))
    .concat(activityNotifications())
    .map((notice) => ({ ...notice, read: notificationSet("read").has(notice.id) }));
}

function activityNotifications() {
  if (!currentProfile) return [];
  return activities
    .map((activity) => ({ activity, task: tasks.find((task) => task.id === activity.task_id) }))
    .filter(({ activity, task }) => task && task.assignees.includes(currentProfile.id) && activity.actor_id !== session.user.id)
    .map(({ activity, task }) => {
      const actor = labelAuthUser(activity.actor_id) || t("teamFallback");
      return {
        id: notificationId(`activity-${activity.action}-${activity.id}`, task),
        type: "activity",
        task,
        title: task.title,
        body: `${actor} ${activityLabel(activity.action)}${taskPreview(task) ? ` • ${taskPreview(task)}` : ""}`,
        createdAt: activity.created_at,
      };
    })
    .filter((notice) => !notificationSet("deleted").has(notice.id));
}

function renderNotification(notice) {
  return `
    <div class="notification-row">
      <button class="notification-item ${notice.type} ${notice.read ? "read" : ""}" type="button" data-notification-task="${notice.task.id}" data-notification-id="${notice.id}">
        <strong>${escapeHtml(notice.title)}</strong>
        <span>${escapeHtml(notice.body)}</span>
        ${notice.task.deadline ? `<small>${t("due")}: ${formatDate(notice.task.deadline)}</small>` : ""}
      </button>
      <button class="icon-mini-button danger" type="button" data-delete-notification="${notice.id}" aria-label="${t("notificationDelete")}">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path>
        </svg>
      </button>
    </div>
  `;
}

function activityLabel(action) {
  const map = {
    task_updated: "activityTaskUpdated",
    note_added: "activityNoteAdded",
    note_updated: "activityNoteUpdated",
    note_deleted: "activityNoteDeleted",
    file_added: "activityFileAdded",
    file_deleted: "activityFileDeleted",
    voice_added: "activityVoiceAdded",
    voice_deleted: "activityVoiceDeleted",
  };
  return t(map[action] || "activityNotice");
}

function taskPreview(task) {
  return truncateText(stripSource(task?.desc || ""), 110);
}

function truncateText(value = "", maxLength = 110) {
  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1)}...`;
}

function notificationId(type, task) {
  return `${type}-${task.id}-${task.deadline || task.date || "task"}`;
}

function notificationKey(kind) {
  return `workflow-notifications-${kind}-${currentProfile?.id || "guest"}`;
}

function notificationSet(kind) {
  return new Set(JSON.parse(localStorage.getItem(notificationKey(kind)) || "[]"));
}

function saveNotificationSet(kind, values) {
  localStorage.setItem(notificationKey(kind), JSON.stringify([...values]));
}

function markNotificationRead(id) {
  const read = notificationSet("read");
  read.add(id);
  saveNotificationSet("read", read);
}

function markNotificationsRead() {
  const read = notificationSet("read");
  currentNotifications().forEach((notice) => read.add(notice.id));
  saveNotificationSet("read", read);
}

function deleteNotification(id) {
  const deleted = notificationSet("deleted");
  deleted.add(id);
  saveNotificationSet("deleted", deleted);
  markNotificationRead(id);
}

async function approveUser(event) {
  const button = event.target.closest("[data-approve-user]");
  if (!button) return;
  await supabase
    .from("profiles")
    .update({ approval_status: "approved" })
    .eq("id", button.dataset.approveUser);
  await loadData();
  renderAll();
}

async function toggleRecording() {
  if (recorder?.state === "recording") {
    recorder.stop();
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordedChunks = [];
    const mimeType = getSupportedAudioType();
    recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) recordedChunks.push(event.data);
    });
    recorder.addEventListener("stop", () => {
      stream.getTracks().forEach((track) => track.stop());
      const blob = new Blob(recordedChunks, { type: recorder.mimeType || mimeType || "audio/webm" });
      pendingVoices.push({
        name: `${t("voiceFallback")} ${new Date().toLocaleTimeString(lang === "tr" ? "tr-TR" : "en-US")}`,
        blob,
      });
      pendingVoices[pendingVoices.length - 1].url = URL.createObjectURL(pendingVoices[pendingVoices.length - 1].blob);
      recordButton.textContent = t("recordStart");
      voiceStatus.textContent = t("recorded");
      renderAssets(getSelectedTask());
    });
    recorder.start();
    recordButton.textContent = t("recordStop");
    voiceStatus.textContent = t("recording");
  } catch {
    voiceStatus.textContent = t("micNeeded");
  }
}

function setAuthMode(mode) {
  const isLogin = mode === "login";
  document.getElementById("login-tab").classList.toggle("active", isLogin);
  document.getElementById("register-tab").classList.toggle("active", !isLogin);
  document.getElementById("login-form").classList.toggle("hidden", !isLogin);
  document.getElementById("register-form").classList.toggle("hidden", isLogin);
  setAuthMessage("");
}

function moveCalendarMonth(delta) {
  const [year, month] = calendarMonth.split("-").map(Number);
  const next = new Date(year, month - 1 + delta, 1);
  calendarMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  renderCalendar();
}

function currentMonthKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
}

function meetScheduleFromTask(task) {
  const fallbackDate = task?.deadline || task?.date || todayKey();
  const start = task?.googleMeetStart ? new Date(task.googleMeetStart) : null;
  const end = task?.googleMeetEnd ? new Date(task.googleMeetEnd) : null;
  return {
    date: start ? toDateInput(start) : fallbackDate,
    startTime: start ? toTimeInput(start) : "10:00",
    endTime: end ? toTimeInput(end) : "11:00",
  };
}

function toDateInput(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function toTimeInput(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function getSelectedTask() {
  return tasks.find((task) => task.id === selectedTaskId);
}

function getSelectedAssignees() {
  return Array.from(document.querySelectorAll("#assignee-list input:checked")).map((option) => option.value);
}

function setSelectedAssignees(assignees) {
  renderAssigneeChecklist(assignees);
}

function labelAssignees(ids) {
  const normalizedIds = defaultAssignees(ids);
  if (!normalizedIds.length) return t("unassigned");
  return normalizedIds
    .map(profileById)
    .filter(Boolean)
    .map((profile) => profile.full_name)
    .join(", ");
}

function profileById(id) {
  return profiles.find((profile) => profile.id === id);
}

function defaultAssignees(ids = []) {
  if (ids.length) return ids;
  const fallback = profiles.find((profile) => normalizeText(profile.full_name).includes("erhan avci"));
  return fallback ? [fallback.id] : [];
}

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .toLowerCase();
}

function renderAvatar(profile) {
  const label = escapeHtml(profile.full_name || t("teamFallback"));
  if (profile.avatar_url) {
    return `<span class="mini-avatar" title="${label}"><img src="${profile.avatar_url}" alt="${label}" /></span>`;
  }
  return `
    <span class="mini-avatar avatar-placeholder" title="${label}" aria-label="${label}">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 21a8 8 0 0 0-16 0"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </span>
  `;
}

function canDeleteTask(task) {
  return Boolean(task && task.createdBy && task.createdBy === session?.user?.id);
}

function canManageOwnItem(item) {
  return Boolean(item?.created_by && item.created_by === session?.user?.id);
}

function priorityLabel(id = "medium") {
  const priority = priorities.find((item) => item.id === id) || priorities[1];
  return lang === "tr" ? priority.labelTr : priority.labelEn;
}

function progressLabel(id = "ongoing") {
  const progress = progressStates.find((item) => item.id === id) || progressStates[0];
  return lang === "tr" ? progress.labelTr : progress.labelEn;
}

function stripSource(text = "") {
  return String(text)
    .split("\n")
    .filter((line) => !line.trim().toLowerCase().startsWith("kaynak:"))
    .join("\n")
    .trim();
}

function labelAuthUser(authUserId) {
  if (!authUserId) return "";
  const profile = profiles.find((item) => item.auth_user_id === authUserId || item.id === authUserId);
  return profile?.full_name || "";
}

function columnFromDate(date) {
  if (!date) return activeColumn !== "all" ? activeColumn : "plan";
  const day = new Date(`${date}T12:00:00`).getDay();
  const map = {
    1: "plan",
    2: "start",
    3: "production",
    4: "approval",
    5: "publish",
    6: "live",
    0: "analysis",
  };
  return map[day] || "plan";
}

function isImageFile(file) {
  const type = file.file_type || file.type || file.file?.type || "";
  const name = file.file_name || file.name || file.file?.name || "";
  return type.startsWith("image/") || /\.(png|jpe?g|gif|webp|avif)$/i.test(name);
}

function getSupportedAudioType() {
  const types = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"];
  return types.find((type) => window.MediaRecorder?.isTypeSupported?.(type)) || "";
}

function audioExtension(type = "") {
  if (type.includes("mp4")) return "m4a";
  if (type.includes("ogg")) return "ogg";
  return "webm";
}

async function requestBrowserNotifications() {
  if (!("Notification" in window) || Notification.permission !== "default") return;
  try {
    const permission = await Notification.requestPermission();
    console.info(permission === "granted" ? t("browserNotifications") : t("browserNotificationsBlocked"));
  } catch {
    console.info(t("browserNotificationsBlocked"));
  }
}

function notifyAssignedTaskChanges() {
  if (!currentProfile || !("Notification" in window) || Notification.permission !== "granted") return;
  const key = `workflow-seen-assigned-${currentProfile.id}`;
  const seen = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  const assigned = tasks.filter((task) => task.assignees.includes(currentProfile.id));

  if (!notificationBaselineReady) {
    assigned.forEach((task) => seen.add(task.id));
    localStorage.setItem(key, JSON.stringify([...seen]));
    taskFingerprints = new Map(assigned.map((task) => [task.id, taskFingerprint(task)]));
    notificationBaselineReady = true;
    return;
  }

  assigned.forEach((task) => {
    const nextFingerprint = taskFingerprint(task);
    const previousFingerprint = taskFingerprints.get(task.id);
    const isNew = !seen.has(task.id);
    const isChanged = previousFingerprint && previousFingerprint !== nextFingerprint;

    if ((isNew || isChanged) && !recentLocalEdits.has(task.id)) {
      seen.add(task.id);
      new Notification(task.title, {
        body: isNew
          ? taskPreview(task) || t("assignedNotificationTitle")
          : `${t("taskUpdatedNotificationTitle")}${taskPreview(task) ? ` • ${taskPreview(task)}` : ""}`,
      });
    }

    taskFingerprints.set(task.id, nextFingerprint);
    recentLocalEdits.delete(task.id);
  });

  localStorage.setItem(key, JSON.stringify([...seen]));
}

function notifyDeadlineReminders() {
  if (!currentProfile || !("Notification" in window) || Notification.permission !== "granted") return;
  const today = todayKey();
  const key = `workflow-deadline-notified-${currentProfile.id}-${today}`;
  const sent = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  tasks
    .filter((task) => task.assignees.includes(currentProfile.id))
    .filter((task) => task.deadline && task.progress !== "completed" && daysBetween(today, task.deadline) === 1)
    .forEach((task) => {
      if (sent.has(task.id)) return;
      new Notification(task.title, {
        body: `${t("deadlineTomorrowTitle")} • ${t("due")}: ${formatDate(task.deadline)}${taskPreview(task) ? ` • ${taskPreview(task)}` : ""}`,
      });
      sent.add(task.id);
    });
  localStorage.setItem(key, JSON.stringify([...sent]));
}

function notifyActivityChanges() {
  if (!currentProfile || !("Notification" in window) || Notification.permission !== "granted") return;
  const key = `workflow-seen-activity-${currentProfile.id}`;
  const seen = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  const notices = activityNotifications();

  if (!activityBaselineReady) {
    notices.forEach((notice) => seen.add(notice.id));
    localStorage.setItem(key, JSON.stringify([...seen]));
    activityBaselineReady = true;
    return;
  }

  notices.forEach((notice) => {
    if (seen.has(notice.id)) return;
    seen.add(notice.id);
    new Notification(notice.title, { body: notice.body });
  });
  localStorage.setItem(key, JSON.stringify([...seen]));
}

function taskFingerprint(task) {
  return JSON.stringify({
    title: task.title,
    desc: task.desc,
    date: task.date,
    deadline: task.deadline,
    priority: task.priority,
    progress: task.progress,
    column: task.column,
    googleMeetUrl: task.googleMeetUrl,
    assignees: [...task.assignees].sort(),
    files: task.files.length,
    voices: task.voices.length,
    notes: task.notes.length,
  });
}

function groupBy(rows, key) {
  return rows.reduce((acc, row) => {
    acc[row[key]] ||= [];
    acc[row[key]].push(row);
    return acc;
  }, {});
}

function assertOk(result) {
  if (result?.error) throw result.error;
  return result;
}

function withTimeout(promise, ms = 12000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(t("saveTimeout"))), ms);
    }),
  ]);
}

function setAuthMessage(message) {
  authMessage.textContent = message;
}

function t(key) {
  return i18n[lang]?.[key] || i18n.en[key] || key;
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((node) => {
    node.textContent = lang === "en" ? "TR" : "EN";
  });
}

function colDay(column) {
  return lang === "tr" ? column.dayTr : column.dayEn;
}

function colTitle(column) {
  return lang === "tr" ? column.titleTr : column.titleEn;
}

function colPhase(column) {
  return lang === "tr" ? column.phaseTr : column.phaseEn;
}

function formatDate(date) {
  return new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-US", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function todayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function daysBetween(start, end) {
  const first = new Date(`${start}T12:00:00`);
  const second = new Date(`${end}T12:00:00`);
  return Math.round((second - first) / 86400000);
}

function initialsFromName(name = "") {
  return (
    name
      .split(/[\s@._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U"
  );
}

function safeName(name) {
  return name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}
