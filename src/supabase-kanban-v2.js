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
  { id: "post", dayTr: "Cumartesi", dayEn: "Saturday", titleTr: "Yayın Paketi", titleEn: "Publishing Package", phaseTr: "Yayınla", phaseEn: "Publish", tone: "tone-steel" },
  { id: "analysis", dayTr: "Pazar", dayEn: "Sunday", titleTr: "Analiz & Optimizasyon", titleEn: "Analysis & Optimization", phaseTr: "Analiz Et", phaseEn: "Analyze", tone: "tone-green" },
];

const priorities = [
  { id: "low", labelTr: "Az", labelEn: "Low" },
  { id: "medium", labelTr: "Orta", labelEn: "Medium" },
  { id: "high", labelTr: "Yüksek", labelEn: "High" },
  { id: "urgent", labelTr: "Acil", labelEn: "Urgent" },
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
    titleLabel: "Title",
    taskTitlePlaceholder: "Saturday reels package",
    descriptionLabel: "Description",
    taskDescPlaceholder: "Short note, content target or delivery criteria",
    dateLabel: "Date",
    deadlineLabel: "Deadline",
    priorityLabel: "Priority",
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
    saveButton: "Save",
    teamLabel: "Team",
    defineUser: "Define User",
    userPlaceholder: "Full name / role",
    addButton: "Add",
    allPipeline: "All Pipeline",
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
    pendingKicker: "MIAMI WORKFLOW",
    pendingTitle: "Access pending approval.",
    pendingCopy: "Your account has been created. An administrator must approve your access before you can view the workflow.",
    adminLabel: "Admin",
    approvalTitle: "User Approvals",
    approveButton: "Approve",
    noPendingUsers: "No users pending approval.",
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
    titleLabel: "Başlık",
    taskTitlePlaceholder: "Cumartesi reels paketi",
    descriptionLabel: "Açıklama",
    taskDescPlaceholder: "Kısa not, içerik hedefi veya teslim kriteri",
    dateLabel: "Tarih",
    deadlineLabel: "Deadline",
    priorityLabel: "Öncelik",
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
    saveButton: "Kaydet",
    teamLabel: "Ekip",
    defineUser: "Kullanıcı Tanımla",
    userPlaceholder: "Ad Soyad / rol",
    addButton: "Ekle",
    allPipeline: "Tüm Pipeline",
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
    pendingKicker: "MIAMI WORKFLOW",
    pendingTitle: "Erişim admin onayı bekliyor.",
    pendingCopy: "Hesabın oluşturuldu. Workflow ekranına erişebilmen için bir adminin hesabını onaylaması gerekiyor.",
    adminLabel: "Admin",
    approvalTitle: "Kullanıcı Onayları",
    approveButton: "Onayla",
    noPendingUsers: "Onay bekleyen kullanıcı yok.",
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
  ["2026-11-02", "Content for visuals prepared in Antalya regarding the Miami Workflow.", "production", "Nov"],
  ["2026-11-20", "Content for visuals prepared in Antalya regarding the Miami Workflow.", "production", "Nov"],
];

let session = null;
let currentProfile = null;
let profiles = [];
let tasks = [];
let selectedTaskId = "";
let activeColumn = "all";
let calendarMonth = "2026-03";
let lang = localStorage.getItem("workflow-language") || "en";
let pendingFiles = [];
let pendingVoices = [];
let recorder = null;
let recordedChunks = [];
let notificationBaselineReady = false;
let dataChannel = null;

const authScreen = document.getElementById("auth-screen");
const pendingScreen = document.getElementById("pending-screen");
const appScreen = document.getElementById("app-screen");
const authMessage = document.getElementById("auth-message");
const board = document.getElementById("kanban-board");
const taskForm = document.getElementById("task-form");
const userForm = document.getElementById("user-form");
const recordButton = document.getElementById("record-button");
const voiceStatus = document.getElementById("voice-status");

boot();

async function boot() {
  const { data } = await supabase.auth.getSession();
  session = data.session;
  wireEvents();
  applyI18n();
  await renderShell();

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
  document.getElementById("show-all-button").addEventListener("click", () => {
    activeColumn = "all";
    renderBoard();
  });
  document.getElementById("new-task-button").addEventListener("click", () => {
    selectedTaskId = "";
    pendingFiles = [];
    pendingVoices = [];
    renderEditor();
    document.getElementById("task-title").focus();
  });
  document.getElementById("clear-button").addEventListener("click", () => {
    selectedTaskId = "";
    pendingFiles = [];
    pendingVoices = [];
    taskForm.reset();
    renderEditor();
  });
  document.getElementById("delete-task-button").addEventListener("click", deleteSelectedTask);
  document.getElementById("calendar-prev").addEventListener("click", () => moveCalendarMonth(-1));
  document.getElementById("calendar-next").addEventListener("click", () => moveCalendarMonth(1));
  document.getElementById("task-files").addEventListener("change", (event) => {
    pendingFiles = Array.from(event.target.files || []);
    renderAssets(getSelectedTask());
  });
  document.getElementById("asset-list").addEventListener("click", handleAssetAction);
  document.getElementById("task-date").addEventListener("change", (event) => {
    if (activeColumn === "all") {
      document.getElementById("task-column").value = columnFromDate(event.target.value);
    }
  });
  taskForm.addEventListener("submit", saveTask);
  userForm.addEventListener("submit", addProfile);
  document.getElementById("approval-list").addEventListener("click", approveUser);
  recordButton.addEventListener("click", toggleRecording);
  board.addEventListener("click", handleBoardClick);
  board.addEventListener("keydown", handleBoardKeydown);
  board.addEventListener("dragstart", handleDragStart);
  board.addEventListener("dragover", (event) => {
    if (event.target.closest("[data-drop-column]")) event.preventDefault();
  });
  board.addEventListener("drop", handleDrop);
  document.getElementById("calendar-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-calendar-task]");
    if (!button) return;
    selectedTaskId = button.dataset.calendarTask;
    pendingFiles = [];
    pendingVoices = [];
    renderAll();
    document.getElementById("editor-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
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
  selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
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
    description: title,
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
  const [profileResult, taskResult, assigneeResult, fileResult, voiceResult] = await Promise.all([
    supabase.from("profiles").select("*").order("full_name"),
    supabase.from("tasks").select("*").order("task_date", { ascending: true, nullsFirst: false }),
    supabase.from("task_assignees").select("*"),
    supabase.from("task_files").select("*"),
    supabase.from("voice_notes").select("*"),
  ]);

  if (taskResult.error) {
    setAuthMessage(`${t("dbError")}: ${taskResult.error.message}`);
    return;
  }

  profiles = profileResult.data || [];
  const assigneesByTask = groupBy(assigneeResult.data || [], "task_id");
  const filesByTask = groupBy(fileResult.data || [], "task_id");
  const voicesByTask = groupBy(voiceResult.data || [], "task_id");
  tasks = (taskResult.data || []).map((task) => ({
    id: task.id,
    column: task.status,
    title: task.title,
    desc: task.description || "",
    date: task.task_date || "",
    deadline: task.deadline_date || "",
    priority: task.priority || "medium",
    createdBy: task.created_by || "",
    assignees: (assigneesByTask[task.id] || []).map((row) => row.user_id),
    files: filesByTask[task.id] || [],
    voices: voicesByTask[task.id] || [],
  }));
  notifyNewAssignedTasks();
}

function renderAll() {
  applyI18n();
  renderSelectors();
  renderUsers();
  renderBoard();
  renderCalendar();
  renderEditor();
  renderAdminPanel();
}

function renderSelectors() {
  document.getElementById("task-priority").innerHTML = priorities
    .map((priority) => `<option value="${priority.id}">${priorityLabel(priority.id)}</option>`)
    .join("");
  renderAssigneeChecklist(getSelectedTask()?.assignees || []);
}

function renderUsers() {
  document.getElementById("user-list").innerHTML = profiles
    .map((profile) => `<span class="user-pill">${escapeHtml(profile.full_name)} / ${escapeHtml(profile.role || t("teamFallback"))}</span>`)
    .join("");
}

function renderAssigneeChecklist(assignees = []) {
  const selected = new Set(assignees.length ? assignees : currentProfile ? [currentProfile.id] : []);
  document.getElementById("assignee-list").innerHTML = profiles
    .map(
      (profile) => `
        <label class="assignee-option">
          <input type="checkbox" value="${profile.id}" ${selected.has(profile.id) ? "checked" : ""} />
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
  const panel = document.getElementById("admin-panel");
  const list = document.getElementById("approval-list");
  const isAdmin = Boolean(currentProfile?.is_admin);
  panel.classList.toggle("app-hidden", !isAdmin);
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
  const active = columns.find((column) => column.id === activeColumn);
  document.getElementById("active-view-title").textContent = active ? colTitle(active) : t("allPipeline");
  const visibleColumns = activeColumn === "all" ? columns : columns.filter((column) => column.id === activeColumn);
  board.innerHTML = visibleColumns
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

function renderTaskCard(task) {
  const selected = task.id === selectedTaskId ? "selected" : "";
  const thumbs = task.files.filter((file) => isImageFile(file)).slice(0, 3);
  const firstVoice = task.voices.find((voice) => voice.audio_url);
  return `
    <div class="task-card priority-${escapeHtml(task.priority)} ${selected}" role="button" tabindex="0" draggable="true" data-task="${task.id}">
      <div class="task-card-topline">
        <strong>${escapeHtml(task.title)}</strong>
        <em class="priority-pill priority-${escapeHtml(task.priority)}">${priorityLabel(task.priority)}</em>
      </div>
      <span>${escapeHtml(task.desc || t("noDescription"))}</span>
      ${
        thumbs.length
          ? `<div class="task-thumbnails">${thumbs.map((file) => `<img src="${file.file_url}" alt="${escapeHtml(file.file_name || t("fileFallback"))}" />`).join("")}</div>`
          : ""
      }
      ${firstVoice ? `<audio class="task-audio-preview" controls src="${firstVoice.audio_url}"></audio>` : ""}
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
  const defaultColumn = activeColumn !== "all" ? activeColumn : columnFromDate(task?.date || document.getElementById("task-date").value);
  document.getElementById("editor-title").textContent = task ? t("editTask") : t("newTask");
  document.getElementById("task-id").value = task?.id || "";
  document.getElementById("task-title").value = task?.title || "";
  document.getElementById("task-desc").value = task?.desc || "";
  document.getElementById("task-date").value = task?.date || "";
  document.getElementById("task-deadline").value = task?.deadline || "";
  document.getElementById("task-priority").value = task?.priority || "medium";
  document.getElementById("task-column").value = task?.column || defaultColumn;
  document.getElementById("delete-task-button").classList.toggle("app-hidden", !task);
  setSelectedAssignees(task?.assignees || []);
  renderAssets(task);
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

function renderFile(file) {
  const href = file.file_url || "#";
  const localUrl = file.file_url || (file.file instanceof File ? URL.createObjectURL(file.file) : "");
  const name = file.file_name || file.file?.name || t("fileFallback");
  const preview = isImageFile(file) && localUrl ? `<img class="asset-thumb" src="${localUrl}" alt="${escapeHtml(name)}" />` : "";
  const action = file.source === "pending"
    ? `<button class="asset-remove" type="button" data-remove-pending-file="${file.pendingIndex}">${t("removeAsset")}</button>`
    : `<button class="asset-remove" type="button" data-delete-file="${file.id}">${t("removeAsset")}</button>`;
  return `
    <div class="asset-row">
      <a class="asset-link" href="${href}" target="_blank" rel="noreferrer">${preview}<span>${escapeHtml(name)}</span><small>${escapeHtml(file.file_type || file.file?.type || "")}</small></a>
      ${action}
    </div>
  `;
}

function renderVoice(voice) {
  const action = voice.source === "pending"
    ? `<button class="asset-remove" type="button" data-remove-pending-voice="${voice.pendingIndex}">${t("removeAsset")}</button>`
    : `<button class="asset-remove" type="button" data-delete-voice="${voice.id}">${t("removeAsset")}</button>`;
  return `
    <div class="asset-row">
      <div class="voice-note">${voice.audio_url ? `<audio controls preload="metadata" src="${voice.audio_url}"></audio>` : ""}<small>${escapeHtml(voice.file_name || t("voiceFallback"))}</small></div>
      ${action}
    </div>
  `;
}

function handleBoardClick(event) {
  if (event.target.closest("audio, a, img, input, select, textarea, button:not([data-filter])")) return;
  const heading = event.target.closest("[data-filter]");
  const card = event.target.closest("[data-task]");
  if (heading) {
    activeColumn = heading.dataset.filter;
    renderBoard();
  }
  if (card) {
    selectedTaskId = card.dataset.task;
    pendingFiles = [];
    pendingVoices = [];
    renderAll();
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
  renderAll();
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
  const id = document.getElementById("task-id").value;
  const isNewTask = !id;
  const payload = {
    title: document.getElementById("task-title").value.trim(),
    description: document.getElementById("task-desc").value.trim(),
    task_date: document.getElementById("task-date").value || null,
    deadline_date: document.getElementById("task-deadline").value || null,
    priority: document.getElementById("task-priority").value,
    status: document.getElementById("task-date").value
      ? columnFromDate(document.getElementById("task-date").value)
      : document.getElementById("task-column").value,
    created_by: session.user.id,
  };

  const result = id
    ? await supabase.from("tasks").update(payload).eq("id", id).select("id").single()
    : await supabase.from("tasks").insert(payload).select("id").single();

  if (result.error) {
    alert(result.error.message);
    return;
  }

  const taskId = result.data.id;
  try {
    await assertOk(await supabase.from("task_assignees").delete().eq("task_id", taskId));
    const assignees = getSelectedAssignees().map((userId) => ({ task_id: taskId, user_id: userId }));
    if (assignees.length) await assertOk(await supabase.from("task_assignees").insert(assignees));
    if (isNewTask && assignees.length) await sendAssignmentEmails(taskId, assignees.map((item) => item.user_id));
    await uploadPendingAssets(taskId);
  } catch (error) {
    alert(error.message || String(error));
    return;
  }

  selectedTaskId = taskId;
  pendingFiles = [];
  pendingVoices = [];
  document.getElementById("task-files").value = "";
  await loadData();
  renderAll();
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

async function deleteSelectedTask() {
  const task = getSelectedTask();
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
}

async function uploadPendingAssets(taskId) {
  for (const file of pendingFiles) {
    const path = `${taskId}/files/${crypto.randomUUID()}-${safeName(file.name)}`;
    const { error } = await supabase.storage.from("task-assets").upload(path, file, { upsert: true });
    if (error) throw error;
    const { data } = supabase.storage.from("task-assets").getPublicUrl(path);
    await assertOk(await supabase.from("task_files").insert({
      task_id: taskId,
      file_url: data.publicUrl,
      file_name: file.name,
      file_type: file.type,
    }));
  }

  for (const voice of pendingVoices) {
    const extension = audioExtension(voice.blob.type);
    const path = `${taskId}/voice/${crypto.randomUUID()}-${safeName(voice.name)}.${extension}`;
    const { error } = await supabase.storage.from("task-assets").upload(path, voice.blob, {
      contentType: voice.blob.type || "audio/webm",
      upsert: true,
    });
    if (error) throw error;
    const { data } = supabase.storage.from("task-assets").getPublicUrl(path);
    await assertOk(await supabase.from("voice_notes").insert({
      task_id: taskId,
      audio_url: data.publicUrl,
      file_name: voice.name,
      created_by: session.user.id,
    }));
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
  if (!ids.length) return t("unassigned");
  return ids
    .map((id) => profiles.find((profile) => profile.id === id))
    .filter(Boolean)
    .map((profile) => profile.full_name)
    .join(", ");
}

function priorityLabel(id = "medium") {
  const priority = priorities.find((item) => item.id === id) || priorities[1];
  return lang === "tr" ? priority.labelTr : priority.labelEn;
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

function notifyNewAssignedTasks() {
  if (!currentProfile || !("Notification" in window) || Notification.permission !== "granted") return;
  const key = `workflow-seen-assigned-${currentProfile.id}`;
  const seen = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  const assigned = tasks.filter((task) => task.assignees.includes(currentProfile.id));

  if (!notificationBaselineReady) {
    assigned.forEach((task) => seen.add(task.id));
    localStorage.setItem(key, JSON.stringify([...seen]));
    notificationBaselineReady = true;
    return;
  }

  assigned
    .filter((task) => !seen.has(task.id) && task.createdBy !== session.user.id)
    .forEach((task) => {
      seen.add(task.id);
      new Notification(t("assignedNotificationTitle"), {
        body: `${task.title}${task.deadline ? ` • ${t("due")}: ${formatDate(task.deadline)}` : ""}`,
      });
    });

  localStorage.setItem(key, JSON.stringify([...seen]));
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

function safeName(name) {
  return name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}
