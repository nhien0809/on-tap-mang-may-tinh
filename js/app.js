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
  const SECONDS_PER_Q = 60;
  const STORE_KEY = "onmang.best.v1";
  const MISTAKE_KEY = "onmang.mistakes.v1";
  const AI_KEY = "onmang.ai.settings.v1";
  const AI_LAST_KEY = "onmang.ai.last.v1";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" fill="currentColor"/></svg>',
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

  // Sổ lỗi sai: câu đã chọn sai -> lưu lại để AI soạn câu biến tấu
  const mistakes = {
    all() { return readJSON(MISTAKE_KEY, []); },
    byChapter(ch) { return this.all().filter((m) => m.ch === ch); },
    count(ch) { return ch ? this.byChapter(ch).length : this.all().length; },
    update(records) {
      let list = this.all();
      records.forEach((r) => {
        const i = list.findIndex((m) => m.q === r.q);
        if (r.right) { if (i >= 0) list.splice(i, 1); return; } // làm đúng rồi thì gạch khỏi sổ
        const rec = { ch: r.ch, l: r.l, q: r.q, wrong: r.wrong, right: r.rightTexts, n: 1, at: Date.now() };
        if (i >= 0) { rec.n = list[i].n + 1; list.splice(i, 1); }
        list.unshift(rec);
      });
      writeJSON(MISTAKE_KEY, list.slice(0, 200));
    }
  };

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
  const stripTags = (s) => String(s).replace(/<[^>]*>/g, "");
  // Chỉ giữ lại thẻ <b> (dùng cho nội dung do AI sinh ra)
  function safeHTML(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/&lt;(\/?)b&gt;/gi, "<$1b>");
  }
  const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));

  // Chuẩn hóa câu hỏi: ans = chỉ số (gốc) các phương án đúng
  function normalize(q, ch) {
    const multi = Array.isArray(q.m) && q.m.length > 0;
    return { ...q, ch, t: multi ? "multi" : "single", ans: multi ? q.m.slice() : [0] };
  }
  function pickByQuota(pool, quota) {
    return [1, 2, 3].flatMap((lv) => shuffle(pool.filter((q) => q.l === lv)).slice(0, quota[lv]));
  }
  function quotaFor(n) {
    const a = Math.round(n * 0.3), c = Math.round(n * 0.3);
    return { 1: a, 2: n - a - c, 3: c };
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

    const ai = el("button", "ch-card is-ai");
    ai.type = "button";
    ai.dataset.key = "ai";
    const nm = mistakes.count();
    ai.innerHTML = cardHTML({
      no: "Luyện cùng AI",
      title: "Đề mới do AI biến tấu",
      topics: "AI soạn câu hỏi mới theo chương, nhắm vào đúng những câu bạn từng làm sai và đổi cách hỏi để bạn không học vẹt.",
      meta: nm ? `Sổ lỗi sai: ${nm} câu` : "Chưa có lỗi sai nào",
      badge: "Mới ✦"
    });
    ai.addEventListener("click", () => openAi());
    grid.appendChild(ai);

    CHAPTERS.forEach((c) => {
      const best = store.best("ch" + c.id);
      const b = el("button", "ch-card");
      b.type = "button";
      b.dataset.key = "ch" + c.id;
      const n = c.questions.length;
      b.innerHTML = cardHTML({
        no: "Chương " + pad2(c.id),
        title: c.title,
        topics: c.topics,
        meta: n > 40 ? `Ngân hàng ${n} câu · đề 40 câu` : `${n} câu · 3-4-3`,
        best
      });
      b.addEventListener("click", () => openSetup({ type: "chapter", chapter: c }));
      grid.appendChild(b);
    });

    const m = el("button", "ch-card is-mix");
    m.type = "button";
    m.dataset.key = "mix";
    m.innerHTML = cardHTML({
      no: "Đề tổng hợp",
      title: "Trộn cả 7 chương",
      topics: "40 câu ngẫu nhiên từ toàn bộ ngân hàng, vẫn giữ tỉ lệ 12 nhận biết · 16 thông hiểu · 12 vận dụng.",
      meta: "40 câu · ngẫu nhiên",
      best: store.best("mix")
    });
    m.addEventListener("click", () => openSetup({ type: "mix" }));
    grid.appendChild(m);

    // thanh điểm cao nhất
    $$(".ch-card", grid).forEach((card) => {
      const best = store.best(card.dataset.key);
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

  function openSetup(src) {
    pendingSetup = src;
    const countBox = $("#countChoice");
    if (src.type === "chapter") {
      const n = src.chapter.questions.length;
      $("#setupEyebrow").textContent = "Chương " + pad2(src.chapter.id);
      $("#setupTitle").textContent = src.chapter.title;
      $("#setupTopics").textContent = src.chapter.topics;
      countBox.hidden = n <= 40;
      $("#countAllLabel").textContent = `Toàn bộ ${n} câu`;
      $("input[name=count][value=quota]", setupModal).checked = true;
    } else {
      $("#setupEyebrow").textContent = "Đề tổng hợp";
      $("#setupTitle").textContent = "Trộn cả 7 chương";
      $("#setupTopics").textContent = "40 câu chọn ngẫu nhiên từ " + totalQ + " câu của cả 7 chương.";
      countBox.hidden = true;
    }
    showModal(setupModal);
  }
  $$("[data-close]", setupModal).forEach((b) => b.addEventListener("click", () => hideModal(setupModal)));
  $("#startBtn").addEventListener("click", async () => {
    const mode = $("input[name=mode]:checked", setupModal).value;
    const order = $("input[name=order]:checked", setupModal).value;
    const count = $("input[name=count]:checked", setupModal).value;
    await hideModal(setupModal);
    startQuiz({ ...pendingSetup, mode, order, count });
  });

  // --- confirm ---
  const confirmModal = $("#confirmModal");
  let confirmResolve = null;
  function confirmDialog({ title, text, ok = "Đồng ý", cancel = "Ở lại" }) {
    $("#cfTitle").textContent = title;
    $("#cfText").textContent = text;
    $("#cfOk").textContent = ok;
    $("#cfCancel").textContent = cancel;
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
      else if (!aiBusy) hideModal(openModalEl);
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
      pool = cfg.chapter.questions.map((q) => normalize(q, cfg.chapter.id));
      if (cfg.count !== "all" && pool.length > 40) pool = pickByQuota(pool, QUOTA_40);
    } else if (cfg.type === "ai") {
      pool = cfg.questions.map((q) => normalize(q, cfg.chapter.id));
    } else {
      const all = [];
      CHAPTERS.forEach((c) => c.questions.forEach((q) => all.push(normalize(q, c.id))));
      pool = pickByQuota(all, QUOTA_40);
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
      chapter: { key: "ch" + (cfg.chapter && cfg.chapter.id), eyebrow: "Chương " + pad2(cfg.chapter ? cfg.chapter.id : 0), title: cfg.chapter && cfg.chapter.title },
      ai: { key: null, eyebrow: "Đề AI · Chương " + pad2(cfg.chapter ? cfg.chapter.id : 0), title: cfg.chapter && cfg.chapter.title },
      mix: { key: "mix", eyebrow: "Đề tổng hợp", title: "Trộn cả 7 chương" }
    }[cfg.type];
    S = {
      cfg,
      key: cfg.type === "chapter" && cfg.count === "all" ? null : meta.key,
      eyebrow: meta.eyebrow,
      title: meta.title,
      items,
      answers: new Array(items.length).fill(null),
      pending: [],
      idx: 0,
      mode: cfg.mode,
      startedAt: Date.now(),
      remaining: items.length * SECONDS_PER_Q,
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
    if (S.mode !== "exam") { t.hidden = true; return; }
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
      $("#qText").innerHTML = S.cfg.type === "ai" ? safeHTML(it.q.q) : it.q.q;

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
    $("p:last-child", fb).innerHTML = S.cfg.type === "ai" ? safeHTML(it.q.e) : it.q.e;
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
  $("#mixBtnTop").addEventListener("click", () => openSetup({ type: "mix" }));
  $("#aiBtnTop").addEventListener("click", () => openAi());

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
    const records = [];
    S.items.forEach((it, i) => {
      const ok = isRight(S, i);
      perLv[it.q.l][1]++;
      if (ok) { right++; perLv[it.q.l][0]++; }
      const ans = S.answers[i];
      if (ans !== null) {
        records.push({
          ch: it.q.ch, l: it.q.l, q: stripTags(it.q.q), right: ok,
          wrong: ans.map((k) => it.q.o[it.perm[k]]),
          rightTexts: it.q.ans.map((o) => it.q.o[o])
        });
      }
    });
    mistakes.update(records);
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
    $("#aiFromResultBtn").hidden = wrongN === 0 || !R.cfg.chapter;

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
    const fromAi = R.cfg.type === "ai";
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
      $(".rv-q", card).innerHTML = fromAi ? safeHTML(it.q.q) : it.q.q;
      const ul = $(".rv-opts", card);
      it.perm.forEach((orig, k) => {
        const li = el("li", it.correct.includes(k) ? "c" : ans.includes(k) ? "x" : "");
        li.innerHTML = `<b>${LETTERS[k]}.</b><span></span>`;
        $("span", li).textContent = it.q.o[orig];
        ul.appendChild(li);
      });
      $(".rv-exp span", card).innerHTML = fromAi ? safeHTML(it.q.e) : it.q.e;
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
  $("#homeBtn").addEventListener("click", goHome);
  $("#aiFromResultBtn").addEventListener("click", () => openAi(R.cfg.chapter && R.cfg.chapter.id));

  /* ==========================================================
     AI — soạn đề mới từ lỗi sai cũ + biến tấu câu hỏi
     Gọi Claude API trực tiếp từ trình duyệt bằng API key của người dùng.
     ========================================================== */
  const aiModal = $("#aiModal");
  let aiBusy = false;
  const AI_MODELS = {
    "claude-opus-5-5": "Claude Opus 5.5 — chất lượng cao nhất",
    "claude-sonnet-5-5": "Claude Sonnet 5.5 — cân bằng",
    "claude-haiku-5-5": "Claude Haiku 5.5 — nhanh, rẻ nhất"
  };
  const aiSettings = () => readJSON(AI_KEY, { key: "", model: "claude-opus-5-5" });

  (function initAiForm() {
    const sel = $("#aiChapter");
    CHAPTERS.forEach((c) => sel.appendChild(new Option(`Chương ${c.id} · ${c.title}`, c.id)));
    const msel = $("#aiModel");
    Object.entries(AI_MODELS).forEach(([id, label]) => msel.appendChild(new Option(label, id)));
    sel.addEventListener("change", refreshAiMistakes);
    $$("[data-close]", aiModal).forEach((b) => b.addEventListener("click", () => { if (!aiBusy) hideModal(aiModal); }));
    $("#aiKeyToggle").addEventListener("click", () => {
      const inp = $("#aiKey");
      inp.type = inp.type === "password" ? "text" : "password";
    });
    $("#aiForget").addEventListener("click", () => {
      writeJSON(AI_KEY, { key: "", model: $("#aiModel").value });
      $("#aiKey").value = "";
      setAiStatus("Đã xóa API key khỏi trình duyệt này.", "");
    });
    $("#aiGenBtn").addEventListener("click", generateWithAi);
    $("#aiLastBtn").addEventListener("click", async () => {
      const last = readJSON(AI_LAST_KEY, null);
      const ch = last && CHAPTERS.find((c) => c.id === last.ch);
      if (!ch) return;
      const mode = $("input[name=aimode]:checked", aiModal).value;
      await hideModal(aiModal);
      startQuiz({ type: "ai", chapter: ch, questions: last.questions, mode, order: "level" });
    });
  })();

  function refreshAiMistakes() {
    const ch = Number($("#aiChapter").value);
    const n = mistakes.count(ch);
    const box = $("#aiUseMistakes");
    box.disabled = n === 0;
    box.checked = n > 0;
    $("#aiMistakeInfo").textContent = n
      ? `Sổ lỗi sai chương ${ch} đang có ${n} câu — AI sẽ hỏi lại đúng những chỗ bạn hay nhầm.`
      : `Chương ${ch} chưa có lỗi sai nào. Hãy làm thử đề chương này trước, hoặc để AI biến tấu từ ngân hàng câu hỏi.`;
  }

  function setAiStatus(text, kind) {
    const s = $("#aiStatus");
    s.textContent = text;
    s.className = "ai-status" + (kind ? " is-" + kind : "");
    s.hidden = !text;
  }

  function openAi(chId) {
    const st = aiSettings();
    $("#aiKey").value = st.key || "";
    $("#aiModel").value = AI_MODELS[st.model] ? st.model : "claude-opus-5-5";
    if (chId) $("#aiChapter").value = String(chId);
    refreshAiMistakes();
    const last = readJSON(AI_LAST_KEY, null);
    $("#aiLastBtn").hidden = !last;
    if (last) $("#aiLastBtn").textContent = `Làm lại đề AI gần nhất (Chương ${last.ch}, ${last.questions.length} câu)`;
    $("#aiSettingsBox").open = !st.key;
    setAiStatus("", "");
    showModal(aiModal);
  }

  const CRITERIA = `Bạn là chuyên gia nhiều năm kinh nghiệm giảng dạy đại học chuyên ngành Lí luận và phương pháp dạy học môn Tin học. Bạn soạn câu hỏi trắc nghiệm kiểm tra – đánh giá sinh viên năm thứ 3 về môn Mạng máy tính, bám sát nguồn kiến thức được cung cấp.

Tiêu chí bắt buộc:
1. Câu hỏi logic, câu từ chọn lọc, cấu trúc đầy đủ (một câu hỏi hoàn chỉnh, không bỏ lửng).
2. Câu hỏi phủ định: từ phủ định viết IN HOA và bọc trong thẻ <b>…</b>, ví dụ "…là <b>KHÔNG</b> đúng?". Ngoài thẻ <b> không dùng bất kỳ thẻ HTML nào khác.
3. Mỗi câu có đúng 4 phương án. Dạng "single": đúng 1 phương án đúng. Dạng "multi" (chọn các đáp án đúng): 2 hoặc 3 phương án đúng, và câu hỏi kết thúc bằng "(Chọn tất cả đáp án đúng)".
4. Các phương án logic, không làm lộ đáp án; phương án đúng và phương án nhiễu có độ dài tương đương – không để phương án đúng là phương án dài nhất hay chi tiết nhất.
5. Không dùng các phương án "Tất cả đều đúng", "Tất cả đều sai", "Cả A và B", "Không có phương án nào".
6. Phương án nhiễu phải xây dựng từ sai lầm thường gặp của sinh viên (nhầm khái niệm gần nhau, nhầm số liệu, nhầm thiết bị/tầng, đảo chiều quan hệ…), không đưa phương án vô lý.
7. Mức độ: 1 = Nhận biết (nhớ khái niệm, số liệu), 2 = Thông hiểu (giải thích, so sánh, phân biệt), 3 = Vận dụng (tình huống thực tế, tính toán, chọn giải pháp). Tạo đúng số lượng từng mức được yêu cầu.
8. Chỉ dùng kiến thức có trong nguồn được cung cấp; không bịa số liệu, không đưa kiến thức ngoài nguồn.
9. Biến tấu: không chép nguyên văn câu hỏi trong nguồn; đổi ngữ cảnh, tình huống, số liệu, đổi góc hỏi (xuôi ↔ ngược, khẳng định ↔ phủ định, chọn một ↔ chọn nhiều).
10. explanation: 1–3 câu tiếng Việt, nêu vì sao đáp án đúng và chỉ ra sai lầm ở phương án nhiễu tiêu biểu.
11. correct là mảng chỉ số (0–3) của các phương án đúng trong mảng options. Phân tán vị trí đáp án đúng, không dồn vào một vị trí.`;

  const AI_SCHEMA = {
    type: "object",
    properties: {
      questions: {
        type: "array",
        items: {
          type: "object",
          properties: {
            level: { type: "integer", enum: [1, 2, 3] },
            type: { type: "string", enum: ["single", "multi"] },
            question: { type: "string" },
            options: { type: "array", items: { type: "string" } },
            correct: { type: "array", items: { type: "integer" } },
            explanation: { type: "string" },
            targets_mistake: { type: "boolean" }
          },
          required: ["level", "type", "question", "options", "correct", "explanation", "targets_mistake"],
          additionalProperties: false
        }
      }
    },
    required: ["questions"],
    additionalProperties: false
  };

  function buildAiPrompt(ch, n, useMistakes) {
    const q = quotaFor(n);
    const kb = ch.questions.map((x) => {
      const nx = normalize(x, ch.id);
      const right = nx.ans.map((i) => x.o[i]).join(" | ");
      return `- [${LEVELS[x.l].name}] ${stripTags(x.q)}\n  Đáp án đúng: ${right}\n  Giải thích: ${stripTags(x.e)}`;
    }).join("\n");
    const ms = useMistakes ? mistakes.byChapter(ch.id).slice(0, 20) : [];
    const msText = ms.length
      ? ms.map((m) => `- Câu: ${m.q}\n  Sinh viên đã chọn: ${m.wrong.join(" | ")}\n  Đáp án đúng: ${m.right.join(" | ")}${m.n > 1 ? `\n  (đã sai ${m.n} lần)` : ""}`).join("\n")
      : "";
    const multiN = Math.max(1, Math.round(n * 0.25));

    let task = `YÊU CẦU: Soạn ${n} câu hỏi mới cho chương này: ${q[1]} câu Nhận biết, ${q[2]} câu Thông hiểu, ${q[3]} câu Vận dụng. Khoảng ${multiN} câu dạng "multi", còn lại dạng "single".`;
    if (ms.length) {
      task += ` Ít nhất một nửa số câu phải nhắm đúng vào các sai lầm trong mục LỖI SAI CŨ: hỏi lại chính kiến thức đó nhưng bằng tình huống/cách hỏi khác, và dùng lựa chọn sai của sinh viên (hoặc biến thể của nó) làm phương án nhiễu. Đặt targets_mistake = true cho những câu này, false cho các câu còn lại.`;
    } else {
      task += ` Đặt targets_mistake = false cho mọi câu.`;
    }

    const user = `NGUỒN KIẾN THỨC – Chương ${ch.id}: ${ch.title}\n(Ngân hàng câu hỏi hiện có kèm đáp án và giải thích; dùng làm nguồn kiến thức, KHÔNG chép nguyên văn)\n${kb}\n\n`
      + (ms.length ? `LỖI SAI CŨ CỦA SINH VIÊN (chương ${ch.id}):\n${msText}\n\n` : "")
      + task;
    return { system: CRITERIA, user, quota: q };
  }

  // Kiểm tra từng câu AI trả về; chuyển sang định dạng dữ liệu của app
  function validateAiQuestions(raw) {
    const out = [];
    (raw || []).forEach((x) => {
      if (!x || ![1, 2, 3].includes(x.level)) return;
      const o = (x.options || []).map((s) => String(s).trim());
      if (o.length !== 4 || o.some((s) => !s) || new Set(o).size !== 4) return;
      const c = [...new Set((x.correct || []).filter((i) => Number.isInteger(i) && i >= 0 && i < 4))];
      const multi = x.type === "multi";
      if (multi ? c.length < 2 || c.length > 3 : c.length !== 1) return;
      if (/tất cả (đều|các) (đúng|sai)|cả a và b/i.test(o.join(" "))) return;
      const item = { l: x.level, q: String(x.question).trim(), e: String(x.explanation || "").trim(), ai: true, tm: !!x.targets_mistake };
      if (multi) { item.o = o; item.m = c; }
      else item.o = [o[c[0]], ...o.filter((_, i) => i !== c[0])]; // đáp án đúng về vị trí 0
      out.push(item);
    });
    return out;
  }

  async function generateWithAi() {
    if (aiBusy) return;
    const key = $("#aiKey").value.trim();
    const model = $("#aiModel").value;
    if (!key) {
      $("#aiSettingsBox").open = true;
      setAiStatus("Bạn cần nhập API key của Anthropic trước (lấy tại console.anthropic.com).", "err");
      $("#aiKey").focus();
      return;
    }
    writeJSON(AI_KEY, { key, model });

    const ch = CHAPTERS.find((c) => c.id === Number($("#aiChapter").value));
    const n = Number($("input[name=ainum]:checked", aiModal).value);
    const mode = $("input[name=aimode]:checked", aiModal).value;
    const useMistakes = $("#aiUseMistakes").checked;
    const { system, user } = buildAiPrompt(ch, n, useMistakes);

    aiBusy = true;
    const btn = $("#aiGenBtn");
    btn.disabled = true;
    btn.classList.add("is-loading");
    const t0 = Date.now();
    let made = 0;
    const tick = setInterval(() => {
      const s = Math.round((Date.now() - t0) / 1000);
      setAiStatus(made ? `Đang soạn… đã xong khoảng ${made}/${n} câu (${s}s)` : `AI đang đọc kiến thức và suy nghĩ… (${s}s) — thường mất 30–120 giây.`, "busy");
    }, 500);

    let Anthropic;
    try {
      ({ default: Anthropic } = await import("https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.133.0/+esm"));
    } catch (e) {
      clearInterval(tick); aiBusy = false; btn.disabled = false; btn.classList.remove("is-loading");
      setAiStatus("Không tải được thư viện AI. Kiểm tra kết nối mạng rồi thử lại.", "err");
      return;
    }

    try {
      const client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
      const params = {
        model,
        max_tokens: 64000,
        system,
        messages: [{ role: "user", content: user }],
        output_config: { effort: "medium", format: { type: "json_schema", schema: AI_SCHEMA } }
      };
      // Opus/Sonnet: bật fallback phía server khi bị bộ lọc an toàn từ chối nhầm
      if (model !== "claude-haiku-5-5") {
        params.betas = ["server-side-fallback-2026-07-01"];
        params.fallbacks = "default";
      }
      const stream = client.beta.messages.stream(params);
      let acc = "";
      stream.on("text", (delta) => {
        acc += delta;
        made = (acc.match(/"explanation"\s*:/g) || []).length;
      });
      const msg = await stream.finalMessage();

      if (msg.stop_reason === "refusal") throw new Error("AI đã từ chối yêu cầu này. Hãy thử lại hoặc chọn mô hình khác.");
      if (msg.stop_reason === "max_tokens") throw new Error("Câu trả lời bị cắt giữa chừng. Hãy giảm số câu rồi thử lại.");
      const text = msg.content.filter((b) => b.type === "text").map((b) => b.text).join("");
      const data = JSON.parse(text);
      const qs = validateAiQuestions(data.questions);
      if (qs.length < Math.ceil(n / 2)) throw new Error("AI trả về quá ít câu hợp lệ. Hãy thử tạo lại.");

      writeJSON(AI_LAST_KEY, { ch: ch.id, questions: qs, at: Date.now() });
      clearInterval(tick);
      setAiStatus(`Đã tạo ${qs.length} câu.`, "ok");
      aiBusy = false;
      await hideModal(aiModal);
      startQuiz({ type: "ai", chapter: ch, questions: qs, mode, order: "level" });
    } catch (err) {
      clearInterval(tick);
      setAiStatus(aiErrorText(err, Anthropic), "err");
    } finally {
      aiBusy = false;
      btn.disabled = false;
      btn.classList.remove("is-loading");
    }
  }

  function aiErrorText(err, Anthropic) {
    if (Anthropic) {
      if (err instanceof Anthropic.AuthenticationError) return "API key không hợp lệ. Kiểm tra lại key trong phần Cài đặt AI.";
      if (err instanceof Anthropic.PermissionDeniedError) return "API key không có quyền dùng mô hình này. Thử chọn mô hình khác.";
      if (err instanceof Anthropic.RateLimitError) return "Đang vượt giới hạn gọi API. Đợi một lát rồi thử lại.";
      if (err instanceof Anthropic.BadRequestError) return "Yêu cầu bị từ chối (" + (err.message || "400") + "). Nếu tài khoản hết credit, hãy nạp thêm tại console.anthropic.com.";
      if (err instanceof Anthropic.APIConnectionError) return "Không kết nối được tới máy chủ AI. Kiểm tra mạng rồi thử lại.";
      if (err instanceof Anthropic.APIError) return "Máy chủ AI báo lỗi (" + (err.status || "") + "). Thử lại sau ít phút.";
    }
    if (err instanceof SyntaxError) return "AI trả về dữ liệu không đọc được. Hãy thử tạo lại.";
    return err && err.message ? err.message : "Có lỗi xảy ra, hãy thử lại.";
  }

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
