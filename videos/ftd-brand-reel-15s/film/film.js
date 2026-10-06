// FEE THE DEVELOPER — 15s brand reel. Built to docs/shotlist.md (APPROVED 2026-10-06).
//
// Pure function of time: window.seek(t) paints frame t in any order. No timers, no Math.random,
// no state mutated in run(), no CSS 3D or composited layers (2D transforms only, via C.put).
// Every mark and every SFX beat lives in timeline.json; nothing below hard-codes a second.
(() => {
  const {
    W, H, pick, put, reg, el, scene, canvas, sp, spHit, trk, seg, clamp, lerp, ease, bt, beatOf,
  } = C;
  const { line, rise } = TYPE;

  C.fonts = ['800 120px Display', '600 40px UI', '400 40px UI'];

  const PAD = pick(140, 110, 80);          // left margin — type is never centred on an empty field
  const COL = W - 2 * PAD;                 // usable column width
  // 9:16 keeps key content out of the platform UI zones: top 14%, bottom 20%, right 12%.
  const SAFE = pick(COL, COL, 860);
  const BRAND = C.TL.brand || {};

  // Measured brand tokens (see docs/style_guide.md). One accent, as a tonal ramp.
  const INK = '#F3F6FA', INK2 = '#91A0B7', CARD = '#0B1018';
  const ACCENT = '#2578FF', ACCENT_DEEP = '#0D2BFF', ACCENT_LIFT = '#22D3EE';

  // ---------------------------------------------------------------- shared helpers

  /**
   * Vertical offset of the site's 42px grid at time t, in px — a closed form so any frame
   * can be painted cold. Base drift everywhere; accelerates across the build shot, then
   * decelerates to a dead stop exactly as the logo lands.
   */
  function gridOffset(t) {
    const t0 = bt('build'), t1 = bt('gap'), t2 = bt('end');
    const BASE = 6, EXTRA = 84;
    let y = BASE * t;
    if (t > t0) { const u = Math.min(t, t1) - t0; y += (EXTRA * u * u) / (2 * (t1 - t0)); }
    if (t > t1) { const u = Math.min(t, t2) - t1, s = t2 - t1; y += EXTRA * (u - (u * u) / (2 * s)); }
    return y;
  }

  /** A UI (non-display) masked line. TYPE.line only takes x/y/size/colour, so weight is set here. */
  function uiLine(parent, text, o) {
    const L = line(parent, text, { ...o, cls: 'ui' });
    L.el.style.fontWeight = o.weight || 600;
    if (o.tracking) L.el.style.letterSpacing = o.tracking;
    return L;
  }

  // ================================================================ BACKGROUND (whole film)
  // The site's own field: #05070B, its radial washes, and its 42px grid at 4.5% white masked
  // out toward the bottom — the same texture body::before paints on feethedeveloper.com.
  scene({
    name: 'bg', from: 'hook', to: 'done', cut: false,
    build(root, S) { S.ctx = canvas(root); },
    run(t, b, S) {
      const g = S.ctx;
      g.clearRect(0, 0, W, H);
      g.fillStyle = '#05070B'; g.fillRect(0, 0, W, H);

      // the site's washes: electric high-left, cyan high-right, both well under the type
      const wash = (cx, cy, r, rgb, a) => {
        const grad = g.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(${rgb},${a})`); grad.addColorStop(1, `rgba(${rgb},0)`);
        g.fillStyle = grad; g.fillRect(0, 0, W, H);
      };
      wash(W * 0.16, H * 0.08, W * 0.55, '37,120,255', 0.20);
      wash(W * 0.86, H * 0.14, W * 0.42, '34,211,238', 0.10);

      // grid: 42px pitch, drifting up. Through the build shot the accent ramp lights it.
      const P = 42, off = gridOffset(t) % P;
      const heat = sp(t, 'build', 'default') - sp(t, 'end', 'snappy');   // 0 → 1 → 0
      const fade = g.createLinearGradient(0, 0, 0, H);
      fade.addColorStop(0, 'rgba(255,255,255,1)');
      fade.addColorStop(0.86, 'rgba(255,255,255,0)');
      g.save();
      g.lineWidth = 1;
      for (let y = -off; y < H; y += P) {
        const k = clamp(1 - y / (H * 0.86));
        const lit = heat * clamp(1 - Math.abs((y / H) - ((gridOffset(t) * 0.004) % 1.4 - 0.2)) * 2.2);
        g.strokeStyle = lit > 0.01
          ? `rgba(${lerp(13, 34, lit)},${lerp(43, 211, lit)},${lerp(255, 238, lit)},${0.045 * k + 0.22 * lit * k})`
          : `rgba(255,255,255,${0.045 * k})`;
        g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(W, y + 0.5); g.stroke();
      }
      for (let x = 0; x < W; x += P) {
        g.strokeStyle = `rgba(255,255,255,${0.045 * 0.6})`;
        g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, H * 0.86); g.stroke();
      }
      g.restore();
      void fade;
    },
  });

  // ================================================================ 1 — HOOK (0 → 4)
  // The site's own H1. Frame 0 already reads BUILD. — word 0 is released at beat -0.4.
  const HOOK_LINES = pick(
    [{ text: 'BUILD. AUTOMATE.', beats: [-0.4, 'w_automate'], accent: [1] },
     { text: 'CREATE. SCALE.', beats: ['w_create', 'w_scale'] }],
    null,
    [{ text: 'BUILD.', beats: [-0.4] },
     { text: 'AUTOMATE.', beats: ['w_automate'], accent: [0] },
     { text: 'CREATE.', beats: ['w_create'] },
     { text: 'SCALE.', beats: ['w_scale'] }],
  );

  scene({
    name: 'hook', from: 'hook', to: 'site', post: 2, cut: false,
    build(root, S) {
      // .abs anchors transforms at 0,0, so shrinking the block would push glyph edges
      // LEFT of the covering panel. Anchor at the frame centre so it recedes inward.
      S.block = el('div', { class: 'abs', style: `width:${W}px;height:${H}px;transform-origin:${W / 2}px ${H / 2}px` }, root);
      reg(S.block);
      const size = pick(196, 150, 118);
      const top = pick(392, 440, 628), step = pick(224, 180, 152);
      S.lines = HOOK_LINES.map((spec, i) =>
        line(S.block, spec.text, { x: PAD, y: top + i * step, size, accent: spec.accent }));
      // eyebrow: the site's own status chip. The ONLY fade in the film — house rule allows it on eyebrows.
      S.eyebrow = uiLine(S.block, 'VETERAN-OWNED · WEB · AI · BUSINESS PRESENCE', {
        x: PAD, y: top - pick(96, 86, 86), size: pick(30, 26, 24), color: INK2, tracking: '0.22em',
      });
    },
    run(t, b, S) {
      S.lines.forEach((L, i) => rise(t, L, HOOK_LINES[i].beats));
      put(S.eyebrow.el, { o: clamp(seg(t, 0.3, 1.1)) * (1 - sp(t, 'site', 'snappy')) });
      // the site panel rises and covers this block: it recedes and lifts, it never fades out
      const up = sp(t, 'site', 'default');
      put(S.block, { y: -pick(150, 140, 170) * ease.inOut(up), s: 1 - 0.08 * up });
      // slow push for the whole held shot
      put(S.root, { s: 1 + 0.04 * ease.inOut(seg(t, 'hook', 'site')) });
    },
  });

  // ================================================================ 2 — THE SITE (4 → 10)
  // Real captured UI (assets/site/hero.png). Never redrawn: the panel rises, then the capture
  // is revealed top-down. The accent rule and the caption are the only drawn elements.
  const SITE_CAPTION = ['Technology execution backed by', 'a complete digital business presence.'];

  scene({
    name: 'site', from: 'site', to: 'systems', post: 0.6, cut: false,
    build(root, S) {
      const cw = SAFE, ch = pick(790, 820, 900);
      S.card = el('div', { class: 'card', style:
        `left:${PAD}px;top:${pick(120, 230, 300)}px;width:${cw}px;height:${ch}px;overflow:hidden;background:${CARD}` }, root);
      reg(S.card, { o: 0 });
      // The real capture (3200x2000 = 2x of a 1600x1000 viewport), cropped tight enough to READ.
      // 16:9 frames the headline and the founder card; 9:16 frames the founder card alone.
      const K = pick(1.15, 1.2, 1.3);                       // logical px → stage px
      const ORIGIN = pick([150, 300], [300, 300], [760, 340]);   // logical top-left of the crop
      S.shot = el('img', { src: '../assets/site/hero.png', style:
        `position:absolute;left:${-ORIGIN[0] * K}px;top:${-ORIGIN[1] * K}px;width:${1600 * K}px;display:block` }, S.card);
      S.rule = el('div', { class: 'abs', style:
        `top:${pick(950, 1090, 1252)}px;height:8px;border-radius:4px;background:${ACCENT}` }, root);
      reg(S.rule, { o: 0 });
      S.cap = SITE_CAPTION.map((s, i) => uiLine(root, s, {
        x: PAD, y: pick(986, 1140, 1290) + i * pick(56, 52, 48), size: pick(42, 38, 34),
        color: i ? INK2 : INK, weight: i ? 500 : 700,
      }));
    },
    run(t, b, S) {
      // the card rises from below the frame and covers the hook
      const up = sp(t, 'site', 'default');
      put(S.card, { o: up > 0.002 ? 1 : 0, y: lerp(H + 60, 0, up), sy: lerp(0.94, 1, up) });
      // build: the real capture is revealed top-down across two bars (skeleton → content)
      const rev = clamp(0.55 * ease.out(seg(t, 'site', 4.6)) + 0.45 * sp(t, 'chip', 'default'));
      put(S.shot, { clip: C.inset(0, 0, (1 - rev) * 100, 0) });
      // accent rule wipes across under the card on the navline hit
      const wipe = sp(t, 'navline', 'default');
      put(S.rule, { o: wipe > 0.004 ? 1 : 0, x: PAD, css: { width: SAFE * 0.46 * wipe + 'px' } });
      // the site's own caption rises on hero_card
      S.cap.forEach((L, i) => rise(t, L, beatOf('hero_card') + i * 0.25, null, { preset: 'default', stagger: 0.04 }));
      // held shot keeps moving
      put(S.root, { s: 1 + 0.03 * ease.inOut(seg(t, 'site', 'systems')) });
    },
  });

  // ================================================================ 3 — SYSTEMS (10 → 16)
  const SYS = [
    { eyebrow: 'DESIGN', word: 'WEB.', mark: 'sys_a' },
    { eyebrow: 'INTEGRATION', word: 'AI.', mark: 'sys_b' },
    { eyebrow: 'BUSINESS', word: 'PRESENCE.', mark: 'sys_c' },
  ];
  const SYS_CAPTION = pick(
    ['We design the site, wire the systems, and connect the business.'],
    null,
    ['We design the site, wire the systems,', 'and connect the business.'],
  );

  scene({
    name: 'systems', from: 'systems', to: 'promise', post: 0.9,
    build(root, S) {
      const wide = C.FMT === '16x9';
      const cw = pick(500, 520, SAFE), ch = pick(448, 360, 262);
      const gap = pick(70, 60, 44);
      S.cards = SYS.map((d, i) => {
        const x = wide ? PAD + i * (cw + gap) : PAD;
        const y = wide ? pick(330, 330, 0) : pick(0, 0, 420) + i * (ch + gap);
        const c = el('div', { class: 'card', style:
          `left:${x}px;top:${y}px;width:${cw}px;height:${ch}px;background:${CARD}` }, root);
        reg(c, { o: 0 });
        const eb = el('div', { class: 'abs', style:
          `left:40px;top:38px;font-size:${pick(24, 22, 24)}px;font-weight:700;letter-spacing:0.22em;color:${ACCENT}` }, c, d.eyebrow);
        reg(eb);
        const wd = el('div', { class: 'display abs', style:
          `left:40px;top:${pick(96, 86, 84)}px;font-size:${pick(62, 58, 64)}px;color:${INK}` }, c, d.word);
        reg(wd);
        // skeleton → content: three rows fill with the accent ramp as the card takes focus
        const rows = [0, 1, 2].map((r) => {
          const e = el('div', { class: 'abs', style:
            `left:40px;top:${pick(220, 196, 162) + r * pick(42, 38, 32)}px;height:${pick(14, 13, 12)}px;border-radius:7px;background:rgba(255,255,255,0.10)` }, c);
          return reg(e);
        });
        return { el: c, eb, wd, rows, x, y, w: cw, h: ch };
      });
      S.bar = el('div', { class: 'abs', style: `border-radius:6px;background:${ACCENT}` }, root);
      reg(S.bar, { o: 0 });
      S.cap = SYS_CAPTION.map((s, i) => uiLine(root, s, {
        x: PAD, y: pick(846, 860, 1356) + i * pick(0, 0, 48), size: pick(44, 40, 33), color: INK2, weight: 500,
      }));
    },
    run(t, b, S) {
      const wide = C.FMT === '16x9';
      // cards build in on their own hits, then collapse into the promise line that replaces them
      // The cards collapse INTO the line that replaces them: they converge on the promise slot
      // and shrink out of the way, clearing before the new line is readable (no mush at the swap).
      const gone = sp(t, beatOf('promise') - 0.55, 'snappy');
      S.cards.forEach((c, i) => {
        const p = sp(t, SYS[i].mark, 'default');
        const focus = C.win(t, SYS[i].mark, i < 2 ? SYS[i + 1].mark : 'promise');
        put(c.el, {
          o: p > 0.004 ? 1 - gone : 0,
          y: lerp(70, 0, p) - 26 * focus - (c.y + c.h / 2 - H * 0.5) * 0.55 * gone,
          x: -(c.x + c.w / 2 - W * 0.5) * 0.55 * gone,
          s: lerp(0.94, 1, p) * (1 - 0.46 * gone),
        });
        put(c.eb, { o: spHit(t, beatOf(SYS[i].mark) + 0.15, 'snappy') });
        const wp = spHit(t, beatOf(SYS[i].mark) + 0.25, 'heavy');
        put(c.wd, { y: 30 * (1 - wp), o: wp });
        c.rows.forEach((r, k) => {
          const rp = spHit(t, beatOf(SYS[i].mark) + 0.4 + k * 0.12, 'snappy');
          put(r, {
            css: { width: lerp(60, c.w - 80 - k * pick(60, 56, 120), rp) + 'px',
                   background: focus > 0.5 ? `rgba(37,120,255,${0.18 + 0.22 * focus})` : 'rgba(255,255,255,0.10)' },
          });
        });
      });
      // indicator: leading edge on a stiffer spring, so it stretches mid-move and settles
      const stops = [[bt('systems') - 1, wide ? PAD : S.cards[0].y, wide ? PAD : S.cards[0].y]]
        .concat(S.cards.map((c, i) => [bt(SYS[i].mark),
          wide ? c.x : c.y, wide ? c.x + c.w : c.y + c.h]));
      const ind = Motion.indicator(t, stops);
      if (wide) {
        put(S.bar, { o: ind.size > 1 && gone < 0.3 ? 1 : 0, x: ind.start, y: S.cards[0].y + S.cards[0].h + 34,
          css: { width: Math.max(0, ind.size) + 'px', height: '10px' } });
      } else {
        put(S.bar, { o: ind.size > 1 && gone < 0.3 ? 1 : 0, x: PAD - 24, y: ind.start,
          css: { width: '10px', height: Math.max(0, ind.size) + 'px' } });
      }
      S.cap.forEach((L, i) => rise(t, L, beatOf('systems') + 0.9 + i * 0.2, beatOf('promise') - 0.5, { preset: 'default', exit: 0.3 }));
      // lateral drift tracking the indicator
      put(S.root, { x: wide ? -34 * seg(t, 'sys_a', 'sys_c') : 0, s: 1 + 0.025 * ease.inOut(seg(t, 'systems', 'promise')) });
    },
  });

  // ================================================================ 4 — THE PROMISE (16 → 20)
  // One slot, two lines, a true swap: the first is gone before the second lands.
  const P_A = 'Veteran-owned software.';
  const P_B = 'Custom builds, automation, AI integration.';

  scene({
    name: 'promise', from: 'promise', to: 'build', cut: false,
    build(root, S) {
      S.push = el('div', { class: 'abs', style: `width:${W}px;height:${H}px;transform-origin:${PAD}px ${H * 0.5}px` }, root);
      reg(S.push);
      const y = pick(470, 820, 860);
      S.a = line(S.push, P_A, { x: PAD, y, size: pick(110, 86, 62) });
      S.b = line(S.push, P_B, { x: PAD, y, size: pick(70, 54, 40) });
      S.b.el.style.color = ACCENT;
      S.rule = el('div', { class: 'abs', style:
        `left:${PAD}px;top:${y - pick(54, 46, 36)}px;width:${pick(120, 100, 90)}px;height:8px;border-radius:4px;background:${ACCENT}` }, S.push);
      reg(S.rule, { o: 0 });
    },
    run(t, b, S) {
      // swap: A leaves at 17.4 and is >95% gone by ~17.64; B's spring releases at ~17.73
      rise(t, S.a, 'promise', 17.4, { preset: 'heavy', exit: 0.28 });
      rise(t, S.b, 'promise_b', null, { preset: 'heavy', stagger: 0.03 });
      const r = spHit(t, 'promise', 'snappy');
      put(S.rule, { o: r > 0.01 ? 1 : 0, sx: r });
      // push past camera: by the cut at 'build' the line has left through the lens
      const k = ease.expoIn(seg(t, 19.1, 'build'));
      put(S.push, { s: 1 + 0.05 * ease.inOut(seg(t, 'promise', 19.1)) + 9 * k, o: 1 - clamp(k * 2.4) });
    },
  });

  // ================================================================ 5 — BUILD (20 → 26)
  // One slot, four words, one per beat. Behind them the grid accelerates (see gridOffset).
  // 1.5 beats each: a 1-beat cycle strobes at this type size — the word never gets read.
  // A heavy rise leads the beat by ~0.27b and a snappy exit needs ~0.38b, so the swap needs
  // at least ~0.65b of clearance. 1.5b leaves each word ~0.8s on screen.
  const CYCLE = [
    { word: 'PLAN.', at: 20 }, { word: 'DEVELOP.', at: 21.5 },
    { word: 'DEPLOY.', at: 23 }, { word: 'REPEAT.', at: 24.5 },
  ];

  scene({
    name: 'build', from: 'build', to: 'end',
    build(root, S) {
      const y = pick(430, 800, 790), size = pick(190, 150, 124);
      S.words = CYCLE.map((c) => line(root, c.word, { x: PAD, y, size }));
      S.words[3].el.style.color = ACCENT;
      S.track = el('div', { class: 'abs', style:
        `left:${PAD}px;top:${y + pick(238, 196, 170)}px;width:${SAFE}px;height:4px;border-radius:2px;background:rgba(255,255,255,0.10)` }, root);
      reg(S.track);
      S.bar = el('div', { class: 'abs', style:
        `top:${y + pick(235, 193, 167)}px;height:10px;border-radius:5px;background:linear-gradient(90deg,${ACCENT_DEEP},${ACCENT},${ACCENT_LIFT})` }, root);
      reg(S.bar, { o: 0 });
      S.eyebrow = uiLine(root, 'THE LOOP', {
        x: PAD, y: y - pick(86, 76, 74), size: pick(28, 25, 24), color: INK2, tracking: '0.3em',
      });
    },
    run(t, b, S) {
      // strictly sequential swaps: each word is >95% gone before the next one becomes visible
      S.words.forEach((L, i) => {
        const out = i < 3 ? CYCLE[i + 1].at - 0.5 : null;
        rise(t, L, CYCLE[i].at, out, { preset: 'heavy', exit: 0.28, stagger: 0.03 });
      });
      rise(t, S.eyebrow, 'build', null, { preset: 'default' });
      // the loop's progress bar steps a quarter further on every word — a new event every 1.5 beats
      const stops = [[bt(20) - 1, PAD, PAD]].concat(
        CYCLE.map((c, i) => [bt(c.at), PAD, PAD + (SAFE * (i + 1)) / 4]));
      const ind = Motion.indicator(t, stops);
      put(S.bar, { o: ind.size > 1 ? 1 : 0, x: ind.start, css: { width: Math.max(0, ind.size) + 'px' } });
      put(S.root, { s: 1 + 0.05 * ease.inOut(seg(t, 'build', 'end')) });
    },
  });

  // ================================================================ 6 — END CARD (26 → 30, 2.0s)
  scene({
    name: 'end', from: 'end', to: 'done',
    build(root, S) {
      S.push = el('div', { class: 'abs', style: `width:${W}px;height:${H}px;transform-origin:${PAD}px ${H * 0.5}px` }, root);
      reg(S.push);
      const badge = pick(212, 260, 330);
      S.badge = el('img', { src: '../assets/brand/logo.png', style:
        `position:absolute;left:${PAD}px;top:${pick(206, 430, 520)}px;width:${badge}px;height:${badge}px;display:block` }, S.push);
      reg(S.badge, { o: 0 });
      S.mark = line(S.push, 'FEE THE DEVELOPER', { x: PAD, y: pick(470, 760, 910), size: pick(138, 104, 76) });
      S.mark.el.style.letterSpacing = '0.02em';
      S.rule = el('div', { class: 'abs', style:
        `left:${PAD}px;top:${pick(676, 952, 1046)}px;height:10px;border-radius:5px;background:linear-gradient(90deg,${ACCENT_DEEP},${ACCENT},${ACCENT_LIFT})` }, S.push);
      reg(S.rule, { o: 0 });
      S.tag = uiLine(S.push, 'IDEAS TO IMPACT', {
        x: PAD, y: pick(722, 1000, 1094), size: pick(32, 28, 26), color: INK2, tracking: '0.3em',
      });
      S.cta = uiLine(S.push, BRAND.cta || 'feethedeveloper.com', {
        x: PAD, y: pick(788, 1066, 1158), size: pick(60, 54, 48), color: INK, weight: 700,
      });
    },
    run(t, b, S) {
      // the logo lands hard on the downbeat
      const land = spHit(t, 'end', 'heavy');
      put(S.badge, { o: land > 0.01 ? 1 : 0, s: lerp(0.86, 1, land), y: 26 * (1 - land) });
      rise(t, S.mark, 'end', null, { preset: 'heavy', stagger: 0.04 });
      const r = sp(t, beatOf('end') + 0.5, 'default');
      put(S.rule, { o: r > 0.004 ? 1 : 0, css: { width: SAFE * 0.52 * r + 'px' } });
      rise(t, S.tag, beatOf('end') + 0.6, null, { preset: 'default', stagger: 0.02 });
      rise(t, S.cta, 'cta', null, { preset: 'snappy', stagger: 0.03 });
      // never static: the lockup holds a slow push for the whole 2s
      put(S.push, { s: 1 + 0.03 * ease.inOut(seg(t, 'end', 'done')) });
    },
  });

  // ================================================================ TRANSITION COVERS (top layer)
  scene({
    name: 'covers', from: 'hook', to: 'done', cut: false,
    build(root, S) {
      S.wipe = el('div', { class: 'abs', style:
        `width:${W}px;height:${H}px;background:linear-gradient(120deg,${ACCENT_DEEP},${ACCENT} 55%,${ACCENT_LIFT})` }, root);
      reg(S.wipe, { o: 0 });
      S.bloom = el('div', { class: 'abs', style:
        `left:${W * 0.5 - H}px;top:${-H * 0.5}px;width:${H * 2}px;height:${H * 2}px;border-radius:50%;` +
        `background:radial-gradient(circle, ${ACCENT} 0%, ${ACCENT_DEEP} 42%, rgba(5,7,11,0) 70%)` }, root);
      reg(S.bloom, { o: 0 });
    },
    run(t, b, S) {
      // 2 → 3: a hard cut on the bar line, taken under full cover
      const inK = ease.out(seg(t, 9.6, 'systems'));
      const outK = ease.inOut(seg(t, 'systems', 10.4));
      const cover = C.win(t, 9.55, 10.45, 'snappy', 'snappy') > 0.001;
      put(S.wipe, {
        o: cover ? 1 : 0,
        clip: C.inset(0, (1 - inK) * 100, 0, outK * 100),
      });
      // 5 → 6: the riser blooms from centre and the logo cut lands inside it
      const bl = seg(t, 25.3, 'end'), fall = sp(t, beatOf('end') + 0.12, 'default');
      put(S.bloom, {
        o: bl > 0.001 ? clamp(0.62 * ease.expoIn(bl) * (1 - fall)) : 0,
        s: lerp(0.12, 0.95, ease.out(bl)) * (1 + 0.6 * fall),
      });
    },
  });

  C.start();
})();
