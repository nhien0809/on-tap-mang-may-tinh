/* ==========================================================
   Ôn Mạng — quiz app (vanilla JS + GSAP)
   Dữ liệu: window.CHAPTERS (data/ch*.js).
   - Câu chọn 1 đáp án: o[0] là đáp án đúng.
   - Câu chọn nhiều đáp án: trường m = chỉ số các phương án đúng.
   ========================================================== */
(function () {
  "use strict";

  /* ---------- GSAP (có fallback nếu CDN lỗi) ---------- */
  const gsap = window.gsap || makeGsapShim();

  const CHAPTERS = (window.CHAPTERS || []).slice().sort((a, b) => a.id - b.id);
  const LEVELS = {
    1: { name: "Nhận biết", cls: "lv1" },
    2: { name: "Thông hiểu", cls: "lv2" },
    3: { name: "Vận dụng", cls: "lv3" }
  };
  const QUOTA_40 = { 1: 12, 2: 16, 3: 12 };
  const LETTERS = ["A", "B", "C", "D"];
  const DE_SIZE = 40; // mỗi đề 40 câu, câu hỏi trong ngân hàng xếp liền theo từng đề (12-16-12)
  const STORE_KEY = "onmang.best.v1";
  const WRONG_KEY = "onmang.wrong.v1";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
    next: '<span>Câu tiếp</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* ---------- motion preferences (gsap.matchMedia) ---------- */
  let reduceMotion = false;
  gsap.defaults({ ease: "power2.out", duration: 0.45 });
  const mm = gsap.matchMedia();
  mm.add(
    { reduce: "(prefers-reduced-motion: reduce)", ok: "(prefers-reduced-motion: no-preference)" },
    (ctx) => {
      reduceMotion = !!ctx.conditions.reduce;
      if (!ctx.conditions.ok) return;
      // nền "thở" nhẹ: chỉ animate transform
      gsap.to(".b1", { x: 60, y: 40, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".b2", { x: -50, y: 60, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".b3", { x: 40, y: -50, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-card", { y: -10, duration: 3.2, delay: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }
  );
  const D = (d) => (reduceMotion ? 0 : d);

  /* ---------- storage ---------- */
  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
  }
  function writeJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* private mode */ }
  }
  const store = {
    best(key) { return readJSON(STORE_KEY, {})[key] || null; },
    save(key, score) {
      const all = readJSON(STORE_KEY, {});
      if (!all[key] || score > all[key].score) all[key] = { score, at: Date.now() };
      writeJSON(STORE_KEY, all);
    }
  };

  // Sổ câu sai: { "chương:chỉ số câu": { n: số lần sai, at } }
  const wrongBook = {
    all() { return readJSON(WRONG_KEY, {}); },
    ids(ch) {
      return Object.entries(this.all())
        .filter(([id]) => !ch || id.split(":")[0] === String(ch))
        .sort((a, b) => b[1].at - a[1].at)
        .map(([id]) => id);
    },
    count(ch) { return this.ids(ch).length; },
    // làm sai -> ghi vào sổ; làm đúng -> gạch khỏi sổ; bỏ trống -> giữ nguyên
    update(results) {
      const book = this.all();
      results.forEach(({ id, ok }) => {
        if (ok) delete book[id];
        else book[id] = { n: ((book[id] && book[id].n) || 0) + 1, at: Date.now() };
      });
      writeJSON(WRONG_KEY, book);
    }
  };
  function questionById(id) {
    const [ch, idx] = id.split(":").map(Number);
    const c = CHAPTERS.find((x) => x.id === ch);
    return c && c.questions[idx] ? normalize(c.questions[idx], ch, idx) : null;
  }

  /* ---------- helpers ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const fmtScore = (n) => (Math.round(n * 100) / 100).toLocaleString("vi-VN", { maximumFractionDigits: 2 });
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }
  function fmtDuration(sec) {
    sec = Math.round(sec);
    const m = Math.floor(sec / 60), s = sec % 60;
    return m ? `${m} phút ${s} giây` : `${s} giây`;
  }
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  const pad2 = (n) => String(n).padStart(2, "0");
  const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));

  // Chuẩn hóa câu hỏi: ans = chỉ số (gốc) các phương án đúng
  function normalize(q, ch, idx) {
    const multi = Array.isArray(q.m) && q.m.length > 0;
    return { ...q, ch, id: ch + ":" + idx, t: multi ? "multi" : "single", ans: multi ? q.m.slice() : [0] };
  }
  function pickByQuota(pool, quota) {
    const picked = [1, 2, 3].flatMap((lv) => shuffle(pool.filter((q) => q.l === lv)).slice(0, quota[lv]));
    // nếu một mức thiếu câu thì bù bằng câu ngẫu nhiên còn lại
    const want = quota[1] + quota[2] + quota[3];
    if (picked.length < want) picked.push(...shuffle(pool.filter((q) => !picked.includes(q))).slice(0, want - picked.length));
    return picked;
  }
  function quotaFor(n) {
    const a = Math.round(n * 0.3), c = Math.round(n * 0.3);
    return { 1: a, 2: n - a - c, 3: c };
  }
  const deCount = (c) => Math.ceil(c.questions.length / DE_SIZE);
  function chapterBest(c) {
    const keys = ["ch" + c.id + "-rand"];
    for (let d = 1; d <= deCount(c); d++) keys.push("ch" + c.id + "-d" + d);
    return keys.map((k) => store.best(k)).filter(Boolean).sort((a, b) => b.score - a.score)[0] || null;
  }
  /* ==========================================================
     HOME
     ========================================================== */
  const totalQ = CHAPTERS.reduce((s, c) => s + c.questions.length, 0);
  $("#statTotal").textContent = totalQ;

  function cardHTML({ no, title, topics, meta, best, badge }) {
    const tag = badge != null ? badge : best ? "Cao nhất " + fmtScore(best.score) : "Chưa làm";
    return `
      <div class="ch-top">
        <span class="ch-no">${no}</span>
        <span class="ch-best ${best || badge ? "" : "is-new"}">${tag}</span>
      </div>
      <h3>${title}</h3>
      <p class="ch-topics">${topics}</p>
      <div class="ch-bar"><span></span></div>
      <div class="ch-foot">
        <span class="ch-meta">${meta}</span>
        <span class="ch-go">${ICON.arrow}</span>
      </div>`;
  }

  function renderHome() {
    const grid = $("#chGrid");
    grid.innerHTML = "";

    const nWrong = wrongBook.count();
    const rv = el("button", "ch-card is-review" + (nWrong ? "" : " is-empty"));
    rv.type = "button";
    rv.dataset.key = "review";
    rv.innerHTML = cardHTML({
      no: "Ôn câu sai",
      title: "Sổ câu sai của bạn",
      topics: nWrong
        ? "Làm lại riêng những câu bạn từng chọn sai. Làm đúng câu nào thì câu đó tự được gạch khỏi sổ."
        : "Chưa có câu sai nào. Làm thử một chương, câu chọn sai sẽ tự được lưu vào đây để ôn lại.",
      meta: nWrong ? `${nWrong} câu cần ôn` : "Trống",
      badge: nWrong ? nWrong + " câu" : "Trống"
    });
    rv.addEventListener("click", openReview);
    grid.appendChild(rv);

    CHAPTERS.forEach((c) => {
      const best = chapterBest(c);
      const b = el("button", "ch-card");
      b.type = "button";
      b.dataset.key = "ch" + c.id;
      b.innerHTML = cardHTML({
        no: "Chương " + pad2(c.id),
        title: c.title,
        topics: c.topics,
        meta: `${deCount(c)} đề · ${c.questions.length} câu`,
        best
      });
      b.addEventListener("click", () => openSetup({ type: "chapter", chapter: c }));
      grid.appendChild(b);
    });

    const m = el("button", "ch-card is-mix");
    m.type = "button";
    m.dataset.key = "mix";
    m.innerHTML = cardHTML({
      no: "Ôn tổng hợp",
      title: "Trộn đề cả 7 chương",
      topics: "Tự chọn chương, số câu và thời gian làm bài. Câu hỏi bốc ngẫu nhiên, vẫn giữ tỉ lệ nhận biết · thông hiểu · vận dụng 3-4-3.",
      meta: `${totalQ} câu · tự chọn`,
      best: store.best("mix")
    });
    m.addEventListener("click", () => openSetup({ type: "mix" }));
    grid.appendChild(m);

    // thanh điểm cao nhất
    $$(".ch-card", grid).forEach((card) => {
      const c = CHAPTERS.find((x) => "ch" + x.id === card.dataset.key);
      const best = c ? chapterBest(c) : store.best(card.dataset.key);
      const bar = $(".ch-bar span", card);
      gsap.to(bar, { scaleX: best ? best.score / 10 : 0, duration: D(0.9), delay: D(0.25), ease: "power3.out" });
    });
  }

  /* ==========================================================
     MODALS
     ========================================================== */
  let openModalEl = null;

  function showModal(modal) {
    modal.hidden = false;
    openModalEl = modal;
    const tl = gsap.timeline();
    tl.fromTo($(".modal-backdrop", modal), { autoAlpha: 0 }, { autoAlpha: 1, duration: D(0.25) })
      .fromTo($(".sheet", modal), { autoAlpha: 0, y: 24, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: D(0.4), ease: "back.out(1.6)" }, "<");
    const first = $("input:checked, .btn-primary", modal);
    if (first) setTimeout(() => first.focus({ preventScroll: true }), 50);
  }
  function hideModal(modal) {
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => { modal.hidden = true; if (openModalEl === modal) openModalEl = null; resolve(); }
      });
      tl.to($(".sheet", modal), { autoAlpha: 0, y: 16, scale: 0.98, duration: D(0.2), ease: "power2.in" })
        .to($(".modal-backdrop", modal), { autoAlpha: 0, duration: D(0.2) }, "<");
    });
  }

  // --- setup ---
  const setupModal = $("#setupModal");
  let pendingSetup = null;

  let timeTouched = false;
  const TIME_PRESETS = [0, 15, 30, 45, 60, 90];

  // số câu sẽ có trong đề theo lựa chọn hiện tại
  function setupQuestionCount() {
    const src = pendingSetup;
    if (!src) return 0;
    if (src.type === "chapter") {
      const de = $("input[name=de]:checked", setupModal);
      const d = de ? de.value : "1";
      if (d === "rand") return DE_SIZE;
      return Math.min(DE_SIZE, src.chapter.questions.length - (Number(d) - 1) * DE_SIZE);
    }
    if (src.type === "mix") return Math.max(1, Math.min(mixPoolSize(), Number($("#mixCount").value) || 1));
    if (src.type === "review") {
      const v = $("#reviewScope").value;
      return wrongBook.count(v === "all" ? 0 : v);
    }
    return 0;
  }
  function setTime(min) {
    $("#timeInput").value = min;
    $$("#timePresets button").forEach((b) => b.classList.toggle("is-on", Number(b.dataset.min) === Number(min)));
    $("#timeHint").textContent = Number(min) > 0 ? `Đồng hồ đếm ngược ${min} phút, hết giờ tự nộp bài.` : "Không giới hạn thời gian.";
  }
  function refreshSetup() {
    const n = setupQuestionCount();
    if (pendingSetup && pendingSetup.type === "mix") {
      const q = quotaFor(n);
      $("#setupMix").innerHTML = `<span class="lv lv1">${q[1]} Nhận biết</span><span class="lv lv2">${q[2]} Thông hiểu</span><span class="lv lv3">${q[3]} Vận dụng</span>`;
    }
    if (!timeTouched) {
      const exam = $("input[name=mode]:checked", setupModal).value === "exam";
      setTime(exam ? Math.max(5, n) : 0); // thi thử: mặc định 1 phút/câu
    }
    $("#startBtn").textContent = `Bắt đầu làm bài (${n} câu)`;
    $("#startBtn").disabled = n === 0;
  }
  function mixPoolSize() {
    return $$("#mixChapters input:checked").reduce((s, cb) => s + CHAPTERS.find((c) => c.id === Number(cb.value)).questions.length, 0);
  }
  // Đặt số câu cho Ôn tổng hợp: đồng bộ ô nhập, thanh kéo và nút chọn nhanh
  function setMixCount(n) {
    const max = mixPoolSize();
    n = Math.max(1, Math.min(max, Math.round(Number(n)) || 1));
    $("#mixCount").value = n;
    $("#mixCountInput").value = n;
    $$("#mixCountPresets button").forEach((b) => {
      const v = b.dataset.n === "all" ? max : Number(b.dataset.n);
      b.classList.toggle("is-on", v === n);
      b.disabled = b.dataset.n !== "all" && v > max;
    });
    refreshSetup();
  }
  function refreshMixRange() {
    const max = mixPoolSize();
    $("#mixCount").max = max;
    $("#mixCountInput").max = max;
    $("#mixMax").textContent = `(1 – ${max} câu)`;
    setMixCount($("#mixCount").value);
  }

  (function initSetupControls() {
    const box = $("#mixChapters");
    CHAPTERS.forEach((c) => {
      const lab = el("label", "chip-check");
      lab.innerHTML = `<input type="checkbox" value="${c.id}" checked><span>Chương ${c.id}</span>`;
      lab.title = c.title;
      box.appendChild(lab);
    });
    box.addEventListener("change", (e) => {
      if (!$$("#mixChapters input:checked").length) e.target.checked = true; // luôn giữ ít nhất 1 chương
      refreshMixRange();
    });
    $("#mixAll").addEventListener("click", () => { $$("#mixChapters input").forEach((cb) => (cb.checked = true)); refreshMixRange(); });
    $("#mixCount").addEventListener("input", () => setMixCount($("#mixCount").value));
    const inp = $("#mixCountInput");
    inp.addEventListener("input", () => {
      // đang gõ: chỉ cập nhật khi là số hợp lệ, chưa ép về giới hạn
      const v = Number(inp.value);
      if (inp.value !== "" && v >= 1) {
        $("#mixCount").value = Math.min(v, mixPoolSize());
        refreshSetup();
      }
    });
    inp.addEventListener("change", () => setMixCount(inp.value));
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); setMixCount(inp.value); } });
    $("#mixMinus").addEventListener("click", () => setMixCount(Number($("#mixCount").value) - 1));
    $("#mixPlus").addEventListener("click", () => setMixCount(Number($("#mixCount").value) + 1));
    $$("#mixCountPresets button").forEach((b) => b.addEventListener("click", () => {
      setMixCount(b.dataset.n === "all" ? mixPoolSize() : b.dataset.n);
    }));
    const tp = $("#timePresets");
    TIME_PRESETS.forEach((m) => {
      const b = el("button", "chip-btn", m ? m + " phút" : "Không giới hạn");
      b.type = "button";
      b.dataset.min = m;
      b.addEventListener("click", () => { timeTouched = true; setTime(m); });
      tp.appendChild(b);
    });
    $("#timeInput").addEventListener("input", () => {
      timeTouched = true;
      const v = Math.max(0, Math.min(300, Math.round(Number($("#timeInput").value) || 0)));
      $$("#timePresets button").forEach((b) => b.classList.toggle("is-on", Number(b.dataset.min) === v));
      $("#timeHint").textContent = v > 0 ? `Đồng hồ đếm ngược ${v} phút, hết giờ tự nộp bài.` : "Không giới hạn thời gian.";
    });
    $$("input[name=mode]", setupModal).forEach((r) => r.addEventListener("change", refreshSetup));
    $("#deList").addEventListener("change", refreshSetup);
    $("#reviewScope").addEventListener("change", refreshSetup);
  })();

  function openSetup(src) {
    pendingSetup = src;
    timeTouched = false;
    $("#scopeChoice").hidden = src.type !== "review";
    $("#setupMix").hidden = src.type === "review";
    $("#deChoice").hidden = src.type !== "chapter";
    $("#mixChoice").hidden = src.type !== "mix";
    $("#setupMix").innerHTML = '<span class="lv lv1">12 Nhận biết</span><span class="lv lv2">16 Thông hiểu</span><span class="lv lv3">12 Vận dụng</span>';
    if (src.type === "review") {
      $("#setupEyebrow").textContent = "Ôn câu sai";
      $("#setupTitle").textContent = "Sổ câu sai của bạn";
      $("#setupTopics").textContent = "Chọn phạm vi muốn ôn. Câu làm đúng sẽ được gạch khỏi sổ, câu làm sai tiếp tục được giữ lại.";
      const sel = $("#reviewScope");
      sel.innerHTML = "";
      sel.appendChild(new Option(`Tất cả các chương (${wrongBook.count()} câu)`, "all"));
      CHAPTERS.forEach((c) => {
        const n = wrongBook.count(c.id);
        if (n) sel.appendChild(new Option(`Chương ${c.id} · ${c.title} (${n} câu)`, c.id));
      });
    } else if (src.type === "chapter") {
      const c = src.chapter;
      $("#setupEyebrow").textContent = "Chương " + pad2(c.id);
      $("#setupTitle").textContent = c.title;
      $("#setupTopics").textContent = c.topics;
      const list = $("#deList");
      list.innerHTML = "";
      const opts = [];
      for (let d = 1; d <= deCount(c); d++) {
        const n = Math.min(DE_SIZE, c.questions.length - (d - 1) * DE_SIZE);
        opts.push({ v: String(d), name: "Đề " + d, sub: n + " câu", best: store.best(`ch${c.id}-d${d}`) });
      }
      opts.push({ v: "rand", name: "Đề ngẫu nhiên", sub: `40 câu trộn từ ${c.questions.length} câu`, best: store.best(`ch${c.id}-rand`) });
      opts.forEach((o, i) => {
        const lab = el("label", "de-card");
        lab.innerHTML = `<input type="radio" name="de" value="${o.v}" ${i === 0 ? "checked" : ""}>
          <span class="de-card-in"><strong>${o.name}</strong><small>${o.sub}</small>
          <em class="${o.best ? "" : "is-new"}">${o.best ? "Cao nhất " + fmtScore(o.best.score) : "Chưa làm"}</em></span>`;
        list.appendChild(lab);
      });
    } else {
      $("#setupEyebrow").textContent = "Ôn tổng hợp";
      $("#setupTitle").textContent = "Trộn đề cả 7 chương";
      $("#setupTopics").textContent = "Chọn chương, số câu và thời gian. Câu hỏi được bốc ngẫu nhiên theo tỉ lệ 3-4-3.";
      refreshMixRange();
    }
    refreshSetup();
    showModal(setupModal);
  }
  $$("[data-close]", setupModal).forEach((b) => b.addEventListener("click", () => hideModal(setupModal)));
  function openReview() {
    if (!wrongBook.count()) {
      confirmDialog({
        title: "Sổ câu sai đang trống",
        text: "Hãy làm thử một chương. Những câu bạn chọn sai sẽ tự được lưu vào đây để ôn lại.",
        ok: "Đã hiểu",
        cancel: null
      });
      return;
    }
    openSetup({ type: "review" });
  }
  $("#startBtn").addEventListener("click", async () => {
    const mode = $("input[name=mode]:checked", setupModal).value;
    const order = $("input[name=order]:checked", setupModal).value;
    const time = Math.max(0, Math.min(300, Math.round(Number($("#timeInput").value) || 0)));
    const extra = {};
    if (pendingSetup.type === "review") extra.scope = $("#reviewScope").value;
    if (pendingSetup.type === "chapter") extra.de = $("input[name=de]:checked", setupModal).value;
    if (pendingSetup.type === "mix") {
      extra.chapters = $$("#mixChapters input:checked").map((cb) => Number(cb.value));
      setMixCount($("#mixCountInput").value);
      extra.n = Number($("#mixCount").value);
    }
    await hideModal(setupModal);
    startQuiz({ ...pendingSetup, ...extra, mode, order, time });
  });

  // --- confirm ---
  const confirmModal = $("#confirmModal");
  let confirmResolve = null;
  function confirmDialog({ title, text, ok = "Đồng ý", cancel = "Ở lại" }) {
    $("#cfTitle").textContent = title;
    $("#cfText").textContent = text;
    $("#cfOk").textContent = ok;
    $("#cfCancel").textContent = cancel || "";
    $("#cfCancel").hidden = !cancel;
    showModal(confirmModal);
    return new Promise((res) => { confirmResolve = res; });
  }
  async function closeConfirm(val) {
    await hideModal(confirmModal);
    if (confirmResolve) { const r = confirmResolve; confirmResolve = null; r(val); }
  }
  $("#cfOk").addEventListener("click", () => closeConfirm(true));
  $$("[data-cancel]", confirmModal).forEach((b) => b.addEventListener("click", () => closeConfirm(false)));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && openModalEl) {
      if (openModalEl === confirmModal) closeConfirm(false);
      else hideModal(openModalEl);
    }
  });

  /* ==========================================================
     VIEWS
     ========================================================== */
  const views = { home: $("#view-home"), quiz: $("#view-quiz"), result: $("#view-result") };
  let currentView = "home";

  function showView(name, onShown) {
    const from = views[currentView];
    const to = views[name];
    if (from === to) { onShown && onShown(); return; }
    const tl = gsap.timeline();
    tl.to(from, { autoAlpha: 0, y: -12, duration: D(0.22), ease: "power2.in" })
      .add(() => {
        from.hidden = true;
        gsap.set(from, { clearProps: "opacity,visibility,transform" });
        to.hidden = false;
        document.body.classList.toggle("is-quiz", name === "quiz");
        window.scrollTo(0, 0);
        currentView = name;
        onShown && onShown();
      })
      .fromTo(to, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: D(0.4), clearProps: "transform" });
  }

  /* ==========================================================
     QUIZ
     ========================================================== */
  let S = null; // trạng thái bài làm
  let lastConfig = null;

  function buildItems(cfg) {
    let pool;
    if (cfg.type === "chapter") {
      pool = cfg.chapter.questions.map((q, i) => normalize(q, cfg.chapter.id, i));
      if (cfg.de === "rand") pool = pickByQuota(pool, QUOTA_40);
      else {
        const d = Number(cfg.de || 1) - 1;
        pool = pool.slice(d * DE_SIZE, (d + 1) * DE_SIZE);
      }
    } else if (cfg.type === "review") {
      pool = wrongBook.ids(cfg.scope === "all" ? 0 : cfg.scope).map(questionById).filter(Boolean);
    } else if (cfg.type === "retry") {
      pool = cfg.pool;
    } else {
      const all = [];
      const chs = cfg.chapters && cfg.chapters.length ? cfg.chapters : CHAPTERS.map((c) => c.id);
      CHAPTERS.filter((c) => chs.includes(c.id)).forEach((c) => c.questions.forEach((q, i) => all.push(normalize(q, c.id, i))));
      pool = pickByQuota(all, quotaFor(Math.min(cfg.n || 40, all.length)));
    }
    const ordered = cfg.order === "random"
      ? shuffle(pool)
      : [1, 2, 3].flatMap((lv) => shuffle(pool.filter((q) => q.l === lv)));

    return ordered.map((q) => {
      const perm = shuffle([0, 1, 2, 3]);
      const correct = q.ans.map((orig) => perm.indexOf(orig)).sort();
      return { q, perm, correct };
    });
  }

  function startQuiz(cfg) {
    lastConfig = cfg;
    const items = buildItems(cfg);
    const meta = {
      chapter: {
        key: cfg.chapter && `ch${cfg.chapter.id}-${cfg.de === "rand" ? "rand" : "d" + (cfg.de || 1)}`,
        eyebrow: "Chương " + pad2(cfg.chapter ? cfg.chapter.id : 0) + " · " + (cfg.de === "rand" ? "Đề ngẫu nhiên" : "Đề " + (cfg.de || 1)),
        title: cfg.chapter && cfg.chapter.title
      },
      mix: {
        key: "mix",
        eyebrow: "Ôn tổng hợp",
        title: cfg.chapters && cfg.chapters.length < CHAPTERS.length ? "Chương " + cfg.chapters.join(", ") : "Trộn cả 7 chương"
      },
      review: { key: null, eyebrow: "Ôn câu sai", title: cfg.scope === "all" || !cfg.scope ? "Sổ câu sai · tất cả chương" : "Sổ câu sai · Chương " + cfg.scope },
      retry: { key: null, eyebrow: "Làm lại câu sai", title: cfg.title }
    }[cfg.type];
    S = {
      cfg,
      key: meta.key,
      eyebrow: meta.eyebrow,
      title: meta.title,
      items,
      answers: new Array(items.length).fill(null),
      pending: [],
      idx: 0,
      mode: cfg.mode,
      startedAt: Date.now(),
      remaining: (cfg.time || 0) * 60,
      limit: (cfg.time || 0) > 0,
      timerId: null,
      done: false
    };

    $("#qzEyebrow").textContent = S.eyebrow;
    $("#qzTitle").textContent = S.title;
    $("#qzMode").textContent = S.mode === "exam" ? "Thi thử" : "Luyện tập";
    $("#submitBtn").textContent = S.mode === "exam" ? "Nộp bài" : "Kết thúc & xem điểm";
    $("#navLegend").innerHTML = S.mode === "exam"
      ? '<span><i></i>Chưa làm</span><span><i class="a"></i>Đã chọn</span>'
      : '<span><i></i>Chưa làm</span><span><i class="r"></i>Đúng</span><span><i class="w"></i>Sai</span>';

    buildNav();
    setupTimer();
    showView("quiz", () => {
      renderQuestion(0, 0);
      gsap.from(".nav-btn", { autoAlpha: 0, scale: 0.6, duration: D(0.3), stagger: { each: 0.01, from: "start" }, ease: "back.out(2)" });
    });
  }

  function setupTimer() {
    clearInterval(S && S.timerId);
    const t = $("#qzTimer");
    if (!S.limit) { t.hidden = true; return; }
    t.hidden = false;
    t.classList.remove("is-low");
    t.textContent = fmtTime(S.remaining);
    const endAt = Date.now() + S.remaining * 1000;
    S.timerId = setInterval(() => {
      S.remaining = (endAt - Date.now()) / 1000;
      t.textContent = fmtTime(S.remaining);
      t.classList.toggle("is-low", S.remaining <= 300);
      if (S.remaining <= 0) {
        clearInterval(S.timerId);
        finishQuiz(true);
      }
    }, 500);
  }

  function buildNav() {
    const grid = $("#navGrid");
    grid.innerHTML = "";
    S.items.forEach((_, i) => {
      const b = el("button", "nav-btn", String(i + 1));
      b.type = "button";
      b.setAttribute("aria-label", "Câu " + (i + 1));
      b.addEventListener("click", () => goTo(i));
      grid.appendChild(b);
    });
    updateNav();
  }

  const isRight = (st, i) => st.answers[i] !== null && sameSet(st.answers[i], st.items[i].correct);

  function updateNav() {
    const btns = $$(".nav-btn");
    let answered = 0;
    btns.forEach((b, i) => {
      const a = S.answers[i];
      if (a !== null) answered++;
      b.className = "nav-btn";
      if (a !== null) {
        if (S.mode === "exam") b.classList.add("is-answered");
        else b.classList.add(isRight(S, i) ? "is-right" : "is-wrong");
      }
      if (i === S.idx) b.classList.add("is-current");
    });
    $("#navCount").textContent = answered + "/" + S.items.length + " đã làm";
    gsap.to("#qzBar", { scaleX: answered / S.items.length, duration: D(0.5), ease: "power2.out" });
  }

  let qTl = null;
  function renderQuestion(i, dir) {
    if (qTl) { qTl.progress(1).kill(); qTl = null; }
    S.idx = i;
    S.pending = [];
    const it = S.items[i];
    const inner = $("#qcardIn");
    const multi = it.q.t === "multi";

    const paint = () => {
      $("#qNum").textContent = `Câu ${i + 1} / ${S.items.length}`;
      const lv = LEVELS[it.q.l];
      const lvEl = $("#qLv");
      lvEl.className = "lv " + lv.cls;
      lvEl.textContent = lv.name + (S.cfg.type === "mix" ? " · Chương " + it.q.ch : "");
      $("#qMulti").hidden = !multi;
      $("#qText").innerHTML = it.q.q;

      const box = $("#qOpts");
      box.innerHTML = "";
      box.classList.toggle("is-multi", multi);
      it.perm.forEach((origIdx, k) => {
        const b = el("button", "opt");
        b.type = "button";
        b.dataset.k = k;
        b.innerHTML = `<span class="opt-key">${LETTERS[k]}</span><span class="opt-text"></span><span class="opt-mark"></span>`;
        $(".opt-text", b).textContent = it.q.o[origIdx];
        b.addEventListener("click", () => choose(k));
        box.appendChild(b);
      });
      applyOptionState(false);
      updateNav();
      updateFooter();
    };

    if (dir === 0 || reduceMotion) {
      paint();
      if (!reduceMotion) gsap.fromTo(inner, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.35 });
      gsap.fromTo(".opt", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: D(0.3), stagger: D(0.05), delay: D(0.08) });
      return;
    }
    qTl = gsap.timeline({ onComplete: () => { qTl = null; } })
      .to(inner, { autoAlpha: 0, x: -28 * dir, duration: 0.18, ease: "power2.in" })
      .add(paint)
      .fromTo(inner, { autoAlpha: 0, x: 28 * dir }, { autoAlpha: 1, x: 0, duration: 0.32, ease: "power3.out" })
      .fromTo(".opt", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.26, stagger: 0.04 }, "<0.05");
  }

  function applyOptionState(animate) {
    const it = S.items[S.idx];
    const ans = S.answers[S.idx];
    const multi = it.q.t === "multi";
    const opts = $$("#qOpts .opt");
    const fb = $("#qFb");
    const checkBtn = $("#checkBtn");

    opts.forEach((b) => {
      b.classList.remove("is-selected", "is-correct", "is-wrong", "is-dim", "is-missed");
      $(".opt-mark", b).innerHTML = "";
      b.disabled = false;
    });

    // Chưa chấm: chỉ đánh dấu lựa chọn
    const graded = S.mode === "practice" && ans !== null;
    if (!graded) {
      const sel = S.mode === "exam" ? ans || [] : multi ? S.pending : [];
      opts.forEach((b, k) => {
        b.classList.toggle("is-selected", sel.includes(k));
        b.setAttribute("aria-pressed", String(sel.includes(k)));
      });
      fb.hidden = true;
      checkBtn.hidden = !(S.mode === "practice" && multi);
      checkBtn.disabled = S.pending.length === 0;
      return;
    }

    // Luyện tập: chấm và giải thích
    checkBtn.hidden = true;
    opts.forEach((b, k) => {
      b.disabled = true;
      const isC = it.correct.includes(k), picked = ans.includes(k);
      if (isC) { b.classList.add("is-correct"); $(".opt-mark", b).innerHTML = ICON.check; if (!picked && multi) b.classList.add("is-missed"); }
      else if (picked) { b.classList.add("is-wrong"); $(".opt-mark", b).innerHTML = ICON.cross; }
      else b.classList.add("is-dim");
    });
    const right = sameSet(ans, it.correct);
    const letters = it.correct.map((k) => LETTERS[k]).join(", ");
    fb.className = "feedback " + (right ? "ok" : "bad");
    fb.innerHTML = `<p class="feedback-title">${right ? ICON.check + "Chính xác!" : ICON.cross + (multi ? "Chưa đúng — các đáp án đúng là " : "Chưa đúng — đáp án đúng là ") + letters}</p><p></p>`;
    $("p:last-child", fb).innerHTML = it.q.e;
    fb.hidden = false;

    if (animate) {
      const wrongBtns = opts.filter((b) => b.classList.contains("is-wrong"));
      if (right) gsap.fromTo(opts.filter((b) => b.classList.contains("is-correct")), { scale: 0.97 }, { scale: 1, duration: D(0.5), ease: "back.out(3)" });
      else if (wrongBtns.length) gsap.to(wrongBtns, { keyframes: { x: [0, -8, 8, -5, 5, 0] }, duration: D(0.42), ease: "power1.inOut" });
      gsap.fromTo(fb, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: D(0.35), delay: D(0.08) });
    }
  }

  function choose(k) {
    if (!S || S.done || qTl) return; // đang chuyển câu: các nút trên màn hình vẫn là của câu cũ
    const it = S.items[S.idx];
    const multi = it.q.t === "multi";
    if (S.mode === "practice" && S.answers[S.idx] !== null) return;

    if (S.mode === "practice") {
      if (multi) {
        S.pending = S.pending.includes(k) ? S.pending.filter((x) => x !== k) : [...S.pending, k].sort();
        applyOptionState(false);
        popOption(k);
        return;
      }
      S.answers[S.idx] = [k];
      applyOptionState(true);
    } else {
      const cur = S.answers[S.idx] || [];
      let next = multi ? (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k].sort()) : [k];
      S.answers[S.idx] = next.length ? next : null;
      applyOptionState(false);
      popOption(k);
    }
    updateNav();
    updateFooter();
  }
  function popOption(k) {
    gsap.fromTo($$("#qOpts .opt")[k], { scale: 0.985 }, { scale: 1, duration: D(0.3), ease: "back.out(2.5)" });
  }
  function checkMulti() {
    if (!S || S.mode !== "practice" || !S.pending.length || S.answers[S.idx] !== null) return;
    S.answers[S.idx] = S.pending.slice();
    applyOptionState(true);
    updateNav();
    updateFooter();
  }
  $("#checkBtn").addEventListener("click", checkMulti);

  function updateFooter() {
    $("#prevBtn").disabled = S.idx === 0;
    const next = $("#nextBtn");
    const last = S.idx === S.items.length - 1;
    if (last) next.innerHTML = S.mode === "exam" ? "<span>Nộp bài</span>" : "<span>Xem kết quả</span>";
    else next.innerHTML = ICON.next;
  }

  function goTo(i) {
    if (!S || i < 0 || i >= S.items.length || i === S.idx) return;
    renderQuestion(i, i > S.idx ? 1 : -1);
  }

  $("#prevBtn").addEventListener("click", () => goTo(S.idx - 1));
  $("#nextBtn").addEventListener("click", () => {
    if (S.idx < S.items.length - 1) goTo(S.idx + 1);
    else requestFinish();
  });
  $("#submitBtn").addEventListener("click", requestFinish);

  async function requestFinish() {
    if (!S || S.done) return;
    const blank = S.answers.filter((a) => a === null).length;
    if (blank > 0) {
      const ok = await confirmDialog({
        title: S.mode === "exam" ? "Nộp bài ngay?" : "Kết thúc lượt luyện?",
        text: `Bạn còn ${blank} câu chưa làm. Các câu bỏ trống sẽ được tính là sai.`,
        ok: S.mode === "exam" ? "Nộp bài" : "Kết thúc",
        cancel: "Làm tiếp"
      });
      if (!ok) return;
    }
    finishQuiz(false);
  }

  $("#quitBtn").addEventListener("click", async () => {
    if (!S) return;
    const started = S.answers.some((a) => a !== null);
    if (started && !S.done) {
      const ok = await confirmDialog({
        title: "Thoát bài làm?",
        text: "Kết quả của lượt này sẽ không được lưu.",
        ok: "Thoát",
        cancel: "Ở lại"
      });
      if (!ok) return;
    }
    clearInterval(S.timerId);
    S = null;
    goHome();
  });

  function goHome() {
    renderHome();
    showView("home", () => {
      gsap.from(".ch-card", { autoAlpha: 0, y: 20, duration: D(0.4), stagger: D(0.05) });
    });
  }
  $("#brandLink").addEventListener("click", (e) => { e.preventDefault(); if (currentView !== "quiz") goHome(); });
  $("#mixBtnTop").addEventListener("click", () => { if (currentView !== "quiz") openSetup({ type: "mix" }); });

  // bàn phím
  document.addEventListener("keydown", (e) => {
    if (currentView !== "quiz" || !S || openModalEl) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const map = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
    if (k in map) { e.preventDefault(); choose(map[k]); }
    else if (e.key === "ArrowRight" || (e.key === "Enter" && e.target.tagName !== "BUTTON")) {
      e.preventDefault();
      const it = S.items[S.idx];
      if (e.key === "Enter" && S.mode === "practice" && it.q.t === "multi" && S.answers[S.idx] === null) { checkMulti(); return; }
      if (S.idx < S.items.length - 1) goTo(S.idx + 1); else requestFinish();
    } else if (e.key === "ArrowLeft") { e.preventDefault(); goTo(S.idx - 1); }
  });

  /* ==========================================================
     RESULT
     ========================================================== */
  let R = null;

  function finishQuiz(timeUp) {
    if (!S || S.done) return;
    S.done = true;
    clearInterval(S.timerId);
    if (openModalEl === confirmModal) closeConfirm(false);
    const total = S.items.length;
    const perLv = { 1: [0, 0], 2: [0, 0], 3: [0, 0] };
    let right = 0;
    const results = [];
    S.items.forEach((it, i) => {
      const ok = isRight(S, i);
      perLv[it.q.l][1]++;
      if (ok) { right++; perLv[it.q.l][0]++; }
      if (S.answers[i] !== null) results.push({ id: it.q.id, ok });
    });
    wrongBook.update(results);
    const score = (right / total) * 10;
    if (S.key) store.save(S.key, score);
    R = { ...S, right, total, score, perLv, timeUp, spent: (Date.now() - S.startedAt) / 1000 };
    S = null;
    renderResult();
  }

  function resultMessage(score) {
    if (score >= 9) return "Xuất sắc! Kiến thức rất chắc ✿";
    if (score >= 8) return "Giỏi lắm! Chỉ còn chút xíu nữa thôi";
    if (score >= 6.5) return "Khá tốt! Ôn lại vài câu sai là ổn";
    if (score >= 5) return "Đạt rồi! Cố thêm chút nữa nhé";
    return "Đừng nản, xem lại giải thích rồi làm lại nhé";
  }

  function renderResult() {
    $("#rEyebrow").textContent = R.eyebrow + " · " + (R.mode === "exam" ? "Thi thử" : "Luyện tập");
    $("#rMsg").textContent = R.timeUp ? "Hết giờ! Bài đã được nộp tự động" : resultMessage(R.score);
    $("#rSub").textContent = `Đúng ${R.right}/${R.total} câu · Thời gian ${fmtDuration(R.spent)}`;
    $("#rScore").textContent = "0";
    const wrongN = R.total - R.right;
    const rb = $("#retryWrongBtn");
    rb.hidden = wrongN === 0;
    rb.textContent = `Làm lại ${wrongN} câu chưa đúng`;

    const lvBox = $("#rLevels");
    lvBox.innerHTML = "";
    [1, 2, 3].forEach((lv) => {
      const [ok, n] = R.perLv[lv];
      if (!n) return;
      const row = el("div", "lv-row l" + lv,
        `<span class="lv ${LEVELS[lv].cls}">${LEVELS[lv].name}</span><div class="lv-track"><span data-r="${ok / n}"></span></div><b>${ok}/${n}</b>`);
      lvBox.appendChild(row);
    });

    $("#review").hidden = true;
    setReviewFilter("all");

    const ring = $("#ringFg");
    const C = 2 * Math.PI * 52;
    ring.style.strokeDasharray = C;
    ring.style.strokeDashoffset = C;

    showView("result", () => {
      const tl = gsap.timeline({ delay: D(0.1) });
      const counter = { v: 0 };
      tl.from(".result-card", { autoAlpha: 0, y: 24, scale: 0.98, duration: D(0.5), ease: "power3.out" })
        .to(ring, { strokeDashoffset: C * (1 - R.score / 10), duration: D(1.3), ease: "power3.out" }, "-=0.15")
        .to(counter, {
          v: R.score, duration: D(1.3), ease: "power3.out",
          onUpdate: () => { $("#rScore").textContent = fmtScore(counter.v); },
          onComplete: () => { $("#rScore").textContent = fmtScore(R.score); }
        }, "<")
        .to(".lv-track span", {
          scaleX: (i, t) => Number(t.dataset.r) || 0,
          duration: D(0.8), stagger: D(0.12), ease: "power3.out"
        }, "<0.2")
        .from(".result-actions .btn:not([hidden])", { autoAlpha: 0, y: 10, stagger: D(0.07), duration: D(0.3) }, "<0.3");
      if (R.score >= 8) tl.add(petals, 0.6);
    });
  }

  function petals() {
    if (reduceMotion || !window.gsap) return;
    const box = $("#petals");
    const W = window.innerWidth, H = window.innerHeight;
    for (let i = 0; i < 34; i++) {
      const p = el("span", "petal");
      const size = gsap.utils.random(9, 18);
      p.style.width = p.style.height = size + "px";
      box.appendChild(p);
      const x0 = gsap.utils.random(0, W);
      gsap.fromTo(p,
        { x: x0, y: -30, rotation: gsap.utils.random(0, 360), autoAlpha: 1 },
        {
          x: x0 + gsap.utils.random(-140, 140),
          y: H + 40,
          rotation: "+=" + gsap.utils.random(180, 540),
          duration: gsap.utils.random(2.6, 4.6),
          delay: gsap.utils.random(0, 0.9),
          ease: "none",
          onComplete: () => p.remove()
        });
    }
  }

  // --- review ---
  let reviewFilter = "all";
  function setReviewFilter(f) {
    reviewFilter = f;
    $$("#reviewTabs .tab").forEach((t) => {
      const on = t.dataset.filter === f;
      t.classList.toggle("is-on", on);
      t.setAttribute("aria-selected", String(on));
    });
  }
  function renderReview() {
    const list = $("#reviewList");
    list.innerHTML = "";
    let shown = 0;
    R.items.forEach((it, i) => {
      const ans = R.answers[i] || [];
      const ok = isRight(R, i);
      if (reviewFilter === "wrong" && ok) return;
      if (reviewFilter === "right" && !ok) return;
      shown++;
      const state = ok ? "is-right" : R.answers[i] === null ? "is-skip" : "is-wrong";
      const card = el("article", "rv " + state);
      const lv = LEVELS[it.q.l];
      card.innerHTML = `
        <div class="rv-top">
          <span>Câu ${i + 1}</span>
          <span class="lv ${lv.cls}">${lv.name}</span>
          ${it.q.t === "multi" ? '<span class="multi-tag">Chọn nhiều</span>' : ""}
          ${R.cfg.type === "mix" ? `<span>· Chương ${it.q.ch}</span>` : ""}
          <span class="rv-state">${ok ? "Đúng" : R.answers[i] === null ? "Bỏ trống" : "Sai"}</span>
        </div>
        <p class="rv-q"></p>
        <ul class="rv-opts"></ul>
        <p class="rv-exp"><strong>Giải thích: </strong><span></span></p>`;
      $(".rv-q", card).innerHTML = it.q.q;
      const ul = $(".rv-opts", card);
      it.perm.forEach((orig, k) => {
        const li = el("li", it.correct.includes(k) ? "c" : ans.includes(k) ? "x" : "");
        li.innerHTML = `<b>${LETTERS[k]}.</b><span></span>`;
        $("span", li).textContent = it.q.o[orig];
        ul.appendChild(li);
      });
      $(".rv-exp span", card).innerHTML = it.q.e;
      list.appendChild(card);
    });
    if (!shown) list.appendChild(el("div", "empty", reviewFilter === "wrong" ? "Không có câu sai nào — quá đỉnh! ✿" : "Chưa có câu đúng nào ở lượt này."));
    gsap.from(".rv, .empty", { autoAlpha: 0, y: 14, duration: D(0.35), stagger: D(0.03) });
  }
  $("#reviewTabs").addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (!t) return;
    setReviewFilter(t.dataset.filter);
    renderReview();
  });
  $("#reviewBtn").addEventListener("click", () => {
    const rv = $("#review");
    if (rv.hidden) {
      rv.hidden = false;
      setReviewFilter(R.right < R.total ? "wrong" : "all");
      renderReview();
    }
    rv.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
  $("#retryBtn").addEventListener("click", () => { if (lastConfig) startQuiz(lastConfig); });
  $("#retryWrongBtn").addEventListener("click", () => {
    const pool = R.items.filter((_, i) => !isRight(R, i)).map((it) => it.q);
    if (!pool.length) return;
    startQuiz({ type: "retry", pool, mode: "practice", order: "level", time: 0, title: R.title });
  });
  $("#homeBtn").addEventListener("click", goHome);

  /* ==========================================================
     INTRO
     ========================================================== */
  renderHome();
  document.documentElement.classList.remove("preload");
  if (!reduceMotion) {
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".topbar", { y: -20, autoAlpha: 0, duration: 0.5 })
      .from(".hero-eyebrow, .hero h1, .hero-lead", { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.25")
      .from(".hero-stats li", { y: 16, autoAlpha: 0, duration: 0.45, stagger: 0.07 }, "-=0.35")
      .from(".hero-card", { y: 40, rotation: -6, autoAlpha: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=0.55")
      .from(".mini-opts li", { x: 14, autoAlpha: 0, duration: 0.35, stagger: 0.06 }, "-=0.4")
      .from(".section-head > *", { y: 14, autoAlpha: 0, duration: 0.4, stagger: 0.06 }, "-=0.3")
      .from(".ch-card", { y: 28, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, "-=0.25");
  }

  /* ==========================================================
     Fallback tối giản khi không tải được GSAP: áp trạng thái cuối ngay
     ========================================================== */
  function makeGsapShim() {
    const toArr = (t) => typeof t === "string" ? Array.from(document.querySelectorAll(t))
      : t instanceof Element ? [t] : Array.isArray(t) || t instanceof NodeList ? Array.from(t) : t ? [t] : [];
    const val = (v, i, n) => typeof v === "function" ? v(i, n) : v;
    function apply(targets, vars) {
      toArr(targets).forEach((n, i) => {
        if (!(n instanceof Element)) { // đối tượng thường (counter)
          Object.keys(vars).forEach((k) => { if (k in n) n[k] = vars[k]; });
          return;
        }
        if ("autoAlpha" in vars) {
          const a = val(vars.autoAlpha, i, n);
          n.style.opacity = a; n.style.visibility = a ? "" : "hidden";
        }
        if ("scaleX" in vars) n.style.transform = "scaleX(" + val(vars.scaleX, i, n) + ")";
        if ("strokeDashoffset" in vars) n.style.strokeDashoffset = val(vars.strokeDashoffset, i, n);
        if (vars.clearProps) n.style.opacity = n.style.visibility = n.style.transform = "";
      });
      vars.onUpdate && vars.onUpdate();
      vars.onComplete && vars.onComplete();
    }
    const api = {
      to: (t, v) => (apply(t, v), api),
      fromTo: (t, a, b) => (apply(t, b), api),
      from: (t, v) => (v.onComplete && v.onComplete(), api),
      set: (t, v) => (apply(t, v), api),
      add: (fn) => (typeof fn === "function" && fn(), api),
      progress: () => api,
      kill() {},
      defaults() {},
      timeline(o) { const tl = Object.assign({}, api); if (o && o.onComplete) setTimeout(o.onComplete, 0); return tl; },
      matchMedia: () => ({ add: (q, fn) => fn({ conditions: { reduce: true, ok: false } }) }),
      utils: { random: (a, b) => a + Math.random() * (b - a) }
    };
    return api;
  }
})();
