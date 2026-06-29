const columns = [
  { id: "plan", day: "Pazartesi", title: "Strateji & Planlama", phase: "Planla", tone: "tone-blue" },
  { id: "start", day: "Salı", title: "Üretim Başlangıcı", phase: "Üret", tone: "tone-gold" },
  { id: "production", day: "Çarşamba", title: "İçerik Üretimi", phase: "Üret", tone: "tone-orange" },
  { id: "approval", day: "Perşembe", title: "Onay & Hazırlık", phase: "Hazırla", tone: "tone-violet" },
  { id: "publish", day: "Cuma", title: "Yayın Başlangıcı", phase: "Yayınla", tone: "tone-rose" },
  { id: "live", day: "Cumartesi", title: "Canlı Operasyon", phase: "Canlı Yönet", tone: "tone-red" },
  { id: "post", day: "Cumartesi", title: "Yayın Paketi", phase: "Yayınla", tone: "tone-steel" },
  { id: "analysis", day: "Pazar", title: "Analiz & Optimizasyon", phase: "Analiz Et", tone: "tone-green" },
];

const importedTasks = [
  { date: "2026-03-02", title: "Championship announcement post (Graphic animation) v1 + Social ads", desc: "Championship announcement post (Graphic animation) v1 + Social ads", column: "publish", sourceSheet: "Mar" },
  { date: "2026-03-11", title: "Championship announcement post (Graphic animation) v2 + Social ads", desc: "Championship announcement post (Graphic animation) v2 + Social ads", column: "publish", sourceSheet: "Mar" },
  { date: "2026-03-16", title: "Championship announcement post (Graphic animation) v3 + Social ads", desc: "Championship announcement post (Graphic animation) v3 + Social ads", column: "publish", sourceSheet: "Mar" },
  { date: "2026-03-27", title: "Championship announcement post (Graphic animation) v4 + Social ads", desc: "Championship announcement post (Graphic animation) v4 + Social ads", column: "publish", sourceSheet: "Mar" },
  { date: "2026-04-03", title: "Championship announcement post (Graphic animation) v5 + Social ads", desc: "Championship announcement post (Graphic animation) v5 + Social ads", column: "publish", sourceSheet: "Apr" },
  { date: "2026-04-07", title: "Q&A with athletes v1", desc: "Q&A with athletes v1", column: "plan", sourceSheet: "Apr" },
  { date: "2026-04-16", title: "Championship announcement post (Graphic animation) v6 + Social ads", desc: "Championship announcement post (Graphic animation) v6 + Social ads", column: "publish", sourceSheet: "Apr" },
  { date: "2026-04-22", title: "Q&A with athletes v2", desc: "Q&A with athletes v2", column: "plan", sourceSheet: "Apr" },
  { date: "2026-05-04", title: "Official promotional video", desc: "Official promotional video", column: "production", sourceSheet: "May" },
  { date: "2026-05-11", title: "Official mascot", desc: "Official mascot", column: "plan", sourceSheet: "May" },
  { date: "2026-05-18", title: "Ticket sales announcement", desc: "Ticket sales announcement", column: "publish", sourceSheet: "May" },
  { date: "2026-05-29", title: "Ticket giveaway", desc: "Ticket giveaway", column: "publish", sourceSheet: "May" },
  { date: "2026-06-05", title: "Influencer video v1", desc: "Influencer video v1", column: "production", sourceSheet: "Jun" },
  { date: "2026-06-10", title: "Influencer video v2", desc: "Influencer video v2", column: "production", sourceSheet: "Jun" },
  { date: "2026-06-19", title: "Volunteer announcement", desc: "Volunteer announcement", column: "publish", sourceSheet: "Jun" },
  { date: "2026-06-24", title: "Influencer video v3", desc: "Influencer video v3", column: "production", sourceSheet: "Jun" },
  { date: "2026-07-03", title: "Content about handball events in Antalya", desc: "Content about handball events in Antalya", column: "production", sourceSheet: "Jul" },
  { date: "2026-07-07", title: "Content about handball events in Antalya", desc: "Content about handball events in Antalya", column: "production", sourceSheet: "Jul" },
  { date: "2026-07-17", title: "Content about handball events in Antalya", desc: "Content about handball events in Antalya", column: "production", sourceSheet: "Jul" },
  { date: "2026-07-22", title: "Content about handball events in Antalya", desc: "Content about handball events in Antalya", column: "production", sourceSheet: "Jul" },
  { date: "2026-09-04", title: "Official song announcement", desc: "Official song announcement", column: "publish", sourceSheet: "Sep" },
  { date: "2026-09-07", title: "The mascot's school visit", desc: "The mascot's school visit", column: "publish", sourceSheet: "Sep" },
  { date: "2026-09-18", title: "The mascot's shopping mall visit", desc: "The mascot's shopping mall visit", column: "publish", sourceSheet: "Sep" },
  { date: "2026-09-23", title: "The mascot's Antalya Sports Hall visit", desc: "The mascot's Antalya Sports Hall visit", column: "live", sourceSheet: "Sep" },
  { date: "2026-10-02", title: "Turkey National Team's player's talks at school", desc: "Turkey National Team's player's talks at school", column: "publish", sourceSheet: "Oct" },
  { date: "2026-10-16", title: "Turkey National Team's player's talks at school", desc: "Turkey National Team's player's talks at school", column: "publish", sourceSheet: "Oct" },
  { date: "2026-11-02", title: "Content for visuals prepared in Antalya regarding the Miami Workflow.", desc: "Content for visuals prepared in Antalya regarding the Miami Workflow.", column: "production", sourceSheet: "Nov" },
  { date: "2026-11-20", title: "Content for visuals prepared in Antalya regarding the Miami Workflow.", desc: "Content for visuals prepared in Antalya regarding the Miami Workflow.", column: "production", sourceSheet: "Nov" },
];

const storeKey = "thf-media-kanban-v1";
const authStoreKey = "thf-media-auth-v1";
const initialState = {
  activeColumn: "all",
  calendarMonth: "2026-03",
  users: ["Medya Direktörü", "Sosyal Medya", "Video Editör"],
  selectedTaskId: "",
  tasks: [
    {
      id: crypto.randomUUID(),
      column: "plan",
      title: "Haftalık medya toplantısı",
      desc: "Haftanın maç, röportaj ve yayın önceliklerini netleştir.",
      date: "",
      assignees: ["Medya Direktörü"],
      files: [],
      voices: [],
    },
    {
      id: crypto.randomUUID(),
      column: "production",
      title: "Reels kurgu paketi",
      desc: "Antrenman ve oyuncu görüntülerinden kısa video akışı hazırla.",
      date: "",
      assignees: ["Video Editör"],
      files: [],
      voices: [],
    },
    {
      id: crypto.randomUUID(),
      column: "live",
      title: "Cumartesi canlı paylaşım",
      desc: "Skor, ilk 7, mola ve maç sonu postlarını anlık yayınla.",
      date: "",
      assignees: ["Sosyal Medya"],
      files: [],
      voices: [],
    },
  ],
};

let state = loadState();
saveState();
let authState = loadAuthState();
let recorder = null;
let recordedChunks = [];
let pendingFiles = [];
let pendingVoices = [];

const authScreen = document.getElementById("auth-screen");
const appScreen = document.getElementById("app-screen");
const board = document.getElementById("kanban-board");
const activeViewTitle = document.getElementById("active-view-title");
const taskForm = document.getElementById("task-form");
const userForm = document.getElementById("user-form");
const recordButton = document.getElementById("record-button");
const voiceStatus = document.getElementById("voice-status");
const authMessage = document.getElementById("auth-message");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storeKey));
    return normalizeState(stored ? { ...initialState, ...stored } : structuredClone(initialState));
  } catch {
    return normalizeState(structuredClone(initialState));
  }
}

function normalizeState(nextState) {
  nextState.calendarMonth = nextState.calendarMonth || "2026-03";
  nextState.tasks = nextState.tasks.map((task) => ({
    ...task,
    title: normalizeMatchDayText(task.title),
    desc: normalizeMatchDayText(task.desc),
    date: task.date || "",
    assignees: task.assignees?.length ? task.assignees : task.user ? [task.user] : [],
    files: task.files || [],
    voices: task.voices || [],
  }));
  mergeImportedTasks(nextState);
  return nextState;
}

function mergeImportedTasks(nextState) {
  const existing = new Set(nextState.tasks.map((task) => task.importKey).filter(Boolean));

  importedTasks.forEach((task) => {
    const importKey = `${task.date}|${task.title}`;
    if (existing.has(importKey)) return;

    nextState.tasks.push({
      id: crypto.randomUUID(),
      column: task.column,
      title: task.title,
      desc: task.desc,
      date: task.date,
      assignees: [],
      files: [],
      voices: [],
      importKey,
    });
    existing.add(importKey);
  });
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function loadAuthState() {
  try {
    const stored = JSON.parse(localStorage.getItem(authStoreKey));
    return {
      users: Array.isArray(stored?.users) ? stored.users : [],
      sessionEmail: stored?.sessionEmail || "",
    };
  } catch {
    return { users: [], sessionEmail: "" };
  }
}

function saveAuthState() {
  localStorage.setItem(authStoreKey, JSON.stringify(authState));
}

function render() {
  renderSelectors();
  renderUsers();
  renderBoard();
  renderEditor();
  renderCalendar();
}

function renderSelectors() {
  const columnSelect = document.getElementById("task-column");
  const userSelect = document.getElementById("task-user");

  columnSelect.innerHTML = columns
    .map((column) => `<option value="${column.id}">${column.day} - ${column.title}</option>`)
    .join("");

  userSelect.innerHTML = state.users
    .map((user) => `<option value="${escapeHtml(user)}">${escapeHtml(user)}</option>`)
    .join("");
}

function renderUsers() {
  document.getElementById("user-list").innerHTML = state.users
    .map((user) => `<span class="user-pill">${escapeHtml(user)}</span>`)
    .join("");
}

function renderShell() {
  const currentUser = getCurrentUser();
  authScreen.classList.toggle("app-hidden", Boolean(currentUser));
  appScreen.classList.toggle("app-hidden", !currentUser);

  if (currentUser) {
    document.getElementById("current-user-label").textContent =
      `${currentUser.name} • ${currentUser.role}`;
    render();
    return;
  }

  const hasUsers = authState.users.length > 0;
  authMessage.textContent = hasUsers
    ? ""
    : "İlk kullanım için Üyelik sekmesinden ekip kullanıcısı oluştur.";
}

function renderBoard() {
  const activeColumn = columns.find((column) => column.id === state.activeColumn);
  activeViewTitle.textContent = activeColumn ? activeColumn.title : "Tüm Pipeline";

  const visibleColumns =
    state.activeColumn === "all"
      ? columns
      : columns.filter((column) => column.id === state.activeColumn);

  board.innerHTML = visibleColumns
    .map((column) => {
      const tasks = state.tasks.filter((task) => task.column === column.id);
      return `
        <section class="kanban-column" data-column="${column.id}">
          <button class="column-heading ${column.tone}" type="button" data-filter="${column.id}">
            <span>${column.day}</span>
            <strong>${column.title}</strong>
            <em>${column.phase}</em>
          </button>
          <div class="task-stack" data-drop-column="${column.id}">
            ${
              tasks.length
                ? tasks.map(renderTaskCard).join("")
                : `<div class="empty-state">Bu kolonda görev yok.</div>`
            }
          </div>
        </section>
      `;
    })
    .join("");
}

function renderTaskCard(task) {
  const selected = task.id === state.selectedTaskId ? "selected" : "";
  const assignees = getAssignees(task);
  return `
    <button class="task-card ${selected}" type="button" draggable="true" data-task="${task.id}">
      <strong>${escapeHtml(task.title)}</strong>
      <span>${escapeHtml(task.desc || "Açıklama yok")}</span>
      <div class="task-card-meta">
        <small>${escapeHtml(assignees.length ? assignees.join(", ") : "Atanmadı")}</small>
        <small>${task.date ? formatDate(task.date) : "Tarihsiz"} • ${task.files.length} dosya • ${task.voices.length} ses</small>
      </div>
    </button>
  `;
}

function renderCalendar() {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const dayCount = new Date(year, month, 0).getDate();
  const leadingBlanks = (firstDay.getDay() + 6) % 7;
  const calendarGrid = document.getElementById("calendar-grid");
  const monthFormatter = new Intl.DateTimeFormat("tr-TR", { month: "long", year: "numeric" });

  document.getElementById("calendar-title").textContent = monthFormatter.format(firstDay);

  const cells = [];
  for (let index = 0; index < leadingBlanks; index += 1) {
    cells.push(`<div class="calendar-day muted" aria-hidden="true"></div>`);
  }

  for (let day = 1; day <= dayCount; day += 1) {
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const tasks = state.tasks.filter((task) => task.date === date);
    cells.push(`
      <div class="calendar-day ${tasks.length ? "has-tasks" : ""}">
        <div class="calendar-date">${day}</div>
        <div class="calendar-tasks">
          ${tasks.map(renderCalendarTask).join("")}
        </div>
      </div>
    `);
  }

  calendarGrid.innerHTML = cells.join("");
}

function renderCalendarTask(task) {
  return `
    <button class="calendar-task" type="button" data-calendar-task="${task.id}">
      ${escapeHtml(task.title)}
    </button>
  `;
}

function renderEditor() {
  const task = state.tasks.find((item) => item.id === state.selectedTaskId);
  document.getElementById("editor-title").textContent = task ? "Görevi Düzenle" : "Yeni Görev";
  document.getElementById("task-id").value = task?.id || "";
  document.getElementById("task-title").value = task?.title || "";
  document.getElementById("task-desc").value = task?.desc || "";
  document.getElementById("task-date").value = task?.date || "";
  document.getElementById("task-column").value =
    task?.column || (state.activeColumn !== "all" ? state.activeColumn : columns[0].id);
  setSelectedAssignees(getAssignees(task));
  renderAssets(task);
}

function renderAssets(task) {
  const files = [...(task?.files || []), ...pendingFiles];
  const voices = [...(task?.voices || []), ...pendingVoices];
  const list = document.getElementById("asset-list");

  list.innerHTML = `
    <div>
      <strong>Dosyalar</strong>
      ${files.length ? files.map(renderFile).join("") : `<p>Henüz dosya yok.</p>`}
    </div>
    <div>
      <strong>Sesli Notlar</strong>
      ${voices.length ? voices.map(renderVoice).join("") : `<p>Henüz sesli not yok.</p>`}
    </div>
  `;
}

function renderFile(file) {
  return `
    <a class="asset-link" href="${file.dataUrl}" download="${escapeHtml(file.name)}">
      <span>${escapeHtml(file.name)}</span>
      <small>${formatBytes(file.size)}</small>
    </a>
  `;
}

function renderVoice(voice) {
  return `
    <div class="voice-note">
      <audio controls src="${voice.dataUrl}"></audio>
      <small>${escapeHtml(voice.name)}</small>
    </div>
  `;
}

board.addEventListener("click", (event) => {
  const heading = event.target.closest("[data-filter]");
  const card = event.target.closest("[data-task]");

  if (heading) {
    state.activeColumn = heading.dataset.filter;
    saveState();
    render();
  }

  if (card) {
    state.selectedTaskId = card.dataset.task;
    pendingFiles = [];
    pendingVoices = [];
    saveState();
    render();
  }
});

document.getElementById("calendar-grid").addEventListener("click", (event) => {
  const calendarTask = event.target.closest("[data-calendar-task]");
  if (!calendarTask) return;

  state.selectedTaskId = calendarTask.dataset.calendarTask;
  pendingFiles = [];
  pendingVoices = [];
  saveState();
  render();
  document.getElementById("editor-title").scrollIntoView({ behavior: "smooth", block: "start" });
});

board.addEventListener("dragstart", (event) => {
  const card = event.target.closest("[data-task]");
  if (card) {
    event.dataTransfer.setData("text/plain", card.dataset.task);
  }
});

board.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-drop-column]")) {
    event.preventDefault();
  }
});

board.addEventListener("drop", (event) => {
  const dropZone = event.target.closest("[data-drop-column]");
  const taskId = event.dataTransfer.getData("text/plain");
  const task = state.tasks.find((item) => item.id === taskId);

  if (dropZone && task) {
    task.column = dropZone.dataset.dropColumn;
    saveState();
    render();
  }
});

document.getElementById("show-all-button").addEventListener("click", () => {
  state.activeColumn = "all";
  saveState();
  render();
});

document.getElementById("new-task-button").addEventListener("click", () => {
  state.selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
  render();
  document.getElementById("task-title").focus();
});

document.getElementById("calendar-prev").addEventListener("click", () => {
  moveCalendarMonth(-1);
});

document.getElementById("calendar-next").addEventListener("click", () => {
  moveCalendarMonth(1);
});

document.getElementById("clear-button").addEventListener("click", () => {
  state.selectedTaskId = "";
  pendingFiles = [];
  pendingVoices = [];
  saveState();
  taskForm.reset();
  render();
});

document.getElementById("task-files").addEventListener("change", async (event) => {
  const files = Array.from(event.target.files || []);
  pendingFiles = await Promise.all(files.map(fileToRecord));
  renderAssets(state.tasks.find((task) => task.id === state.selectedTaskId));
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.getElementById("task-id").value || crypto.randomUUID();
  const existing = state.tasks.find((task) => task.id === id);
  const nextTask = {
    id,
    title: document.getElementById("task-title").value.trim(),
    desc: document.getElementById("task-desc").value.trim(),
    date: document.getElementById("task-date").value,
    column: document.getElementById("task-column").value,
    assignees: getSelectedAssignees(),
    files: [...(existing?.files || []), ...pendingFiles],
    voices: [...(existing?.voices || []), ...pendingVoices],
  };

  if (existing) {
    Object.assign(existing, nextTask);
  } else {
    state.tasks.unshift(nextTask);
  }

  state.selectedTaskId = id;
  pendingFiles = [];
  pendingVoices = [];
  document.getElementById("task-files").value = "";
  saveState();
  render();
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("user-name");
  const value = input.value.trim();

  if (value && !state.users.includes(value)) {
    state.users.push(value);
    input.value = "";
    saveState();
    render();
  }
});

document.getElementById("login-tab").addEventListener("click", () => {
  setAuthMode("login");
});

document.getElementById("register-tab").addEventListener("click", () => {
  setAuthMode("register");
});

document.getElementById("login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = normalizeEmail(document.getElementById("login-email").value);
  const passwordHash = await hashPassword(document.getElementById("login-password").value);
  const user = authState.users.find((item) => item.email === email);

  if (!user || user.passwordHash !== passwordHash) {
    authMessage.textContent = "E-posta veya şifre hatalı.";
    return;
  }

  authState.sessionEmail = email;
  saveAuthState();
  authMessage.textContent = "";
  renderShell();
});

document.getElementById("register-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("register-name").value.trim();
  const role = document.getElementById("register-role").value.trim();
  const email = normalizeEmail(document.getElementById("register-email").value);
  const password = document.getElementById("register-password").value;

  if (authState.users.some((user) => user.email === email)) {
    authMessage.textContent = "Bu e-posta ile zaten üyelik var.";
    return;
  }

  const memberLabel = `${name} / ${role}`;
  authState.users.push({
    id: crypto.randomUUID(),
    name,
    role,
    email,
    passwordHash: await hashPassword(password),
  });
  authState.sessionEmail = email;

  if (!state.users.includes(memberLabel)) {
    state.users.push(memberLabel);
    saveState();
  }

  saveAuthState();
  authMessage.textContent = "";
  event.target.reset();
  renderShell();
});

document.getElementById("logout-button").addEventListener("click", () => {
  authState.sessionEmail = "";
  saveAuthState();
  renderShell();
  setAuthMode("login");
});

recordButton.addEventListener("click", async () => {
  if (recorder?.state === "recording") {
    recorder.stop();
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordedChunks = [];
    recorder = new MediaRecorder(stream);
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) recordedChunks.push(event.data);
    });
    recorder.addEventListener("stop", async () => {
      stream.getTracks().forEach((track) => track.stop());
      const blob = new Blob(recordedChunks, { type: "audio/webm" });
      pendingVoices.push({
        name: `Sesli not ${new Date().toLocaleTimeString("tr-TR")}`,
        dataUrl: await blobToDataUrl(blob),
      });
      recordButton.textContent = "Kayda Başla";
      voiceStatus.textContent = "Kaydedildi";
      renderAssets(state.tasks.find((task) => task.id === state.selectedTaskId));
    });
    recorder.start();
    recordButton.textContent = "Kaydı Bitir";
    voiceStatus.textContent = "Kayıt alınıyor";
  } catch {
    voiceStatus.textContent = "Mikrofon izni gerekli";
  }
});

function fileToRecord(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        name: file.name,
        size: file.size,
        type: file.type,
        dataUrl: reader.result,
      });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function formatBytes(bytes = 0) {
  if (!bytes) return "0 KB";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "short", year: "numeric" })
    .format(new Date(`${date}T12:00:00`));
}

function moveCalendarMonth(delta) {
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const next = new Date(year, month - 1 + delta, 1);
  state.calendarMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  saveState();
  renderCalendar();
}

function getAssignees(task) {
  if (!task) return state.users[0] ? [state.users[0]] : [];
  if (task.assignees?.length) return task.assignees;
  return task.user ? [task.user] : [];
}

function getSelectedAssignees() {
  return Array.from(document.getElementById("task-user").selectedOptions).map(
    (option) => option.value,
  );
}

function setSelectedAssignees(assignees) {
  const selected = new Set(assignees.length ? assignees : state.users.slice(0, 1));
  Array.from(document.getElementById("task-user").options).forEach((option) => {
    option.selected = selected.has(option.value);
  });
}

function getCurrentUser() {
  return authState.users.find((user) => user.email === authState.sessionEmail);
}

function setAuthMode(mode) {
  const isLogin = mode === "login";
  document.getElementById("login-tab").classList.toggle("active", isLogin);
  document.getElementById("register-tab").classList.toggle("active", !isLogin);
  document.getElementById("login-form").classList.toggle("hidden", !isLogin);
  document.getElementById("register-form").classList.toggle("hidden", isLogin);
  authMessage.textContent = "";
}

function normalizeEmail(value = "") {
  return value.trim().toLowerCase();
}

async function hashPassword(value) {
  const source = `thf-local:${value}`;
  if (crypto.subtle) {
    const data = new TextEncoder().encode(source);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  return btoa(unescape(encodeURIComponent(source)));
}

function normalizeMatchDayText(value = "") {
  return String(value)
    .replaceAll("Maç Günü", "Cumartesi")
    .replaceAll("maç günü", "cumartesi")
    .replaceAll("Maç Sonrası", "Cumartesi")
    .replaceAll("maç sonrası", "cumartesi");
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

renderShell();
