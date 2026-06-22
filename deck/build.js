const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.author = "Notch";
pres.title = "Notch x Bullet - Project Kickoff Plan";

const W = 13.333, H = 7.5, M = 0.7;
const NAVY = "0E1526", ORANGE = "F06A22", OSOFT = "FFF4EE", INK = "111827",
  BODY = "374151", GRAY = "6B7280", MUTE = "9CA3AF", LINE = "E4E7EC",
  LIGHT = "F7F8FA", WHITE = "FFFFFF", BLUE = "2563EB", GREEN = "16A34A",
  RED = "DC2626", AMBER = "B45309", PURPLE = "7C3AED", TEAL = "0891B2";
const F = "Calibri";
const S = pres.shapes;

const shadow = () => ({ type: "outer", color: "000000", blur: 7, offset: 3, angle: 135, opacity: 0.1 });

function diamond(slide, cx, cy, s, color) {
  slide.addShape(S.RECTANGLE, { x: cx - s / 2, y: cy - s / 2, w: s, h: s, fill: { color }, rotate: 45, line: { type: "none" } });
}
function sectionTag(slide, num, label) {
  slide.addShape(S.ROUNDED_RECTANGLE, { x: M, y: 0.55, w: 0.44, h: 0.44, fill: { color: ORANGE }, rectRadius: 0.07, line: { type: "none" } });
  slide.addText(num, { x: M, y: 0.55, w: 0.44, h: 0.44, align: "center", valign: "middle", color: WHITE, bold: true, fontSize: 15, fontFace: F, margin: 0 });
  slide.addText(label.toUpperCase(), { x: M + 0.58, y: 0.55, w: 8, h: 0.44, valign: "middle", color: GRAY, bold: true, fontSize: 12.5, charSpacing: 3, fontFace: F, margin: 0 });
}
function title(slide, text, y = 1.2) {
  slide.addText(text, { x: M, y, w: W - 2 * M, h: 0.95, color: INK, bold: true, fontSize: 33, fontFace: F, margin: 0, valign: "top" });
}
function footer(slide, n) {
  slide.addText([{ text: "Notch ", options: { bold: true, color: INK } }, { text: "× ", options: { color: ORANGE, bold: true } }, { text: "Bullet", options: { bold: true, color: INK } }],
    { x: M, y: H - 0.5, w: 4, h: 0.3, fontSize: 9.5, fontFace: F, margin: 0 });
  slide.addText(String(n).padStart(2, "0"), { x: W - M - 0.7, y: H - 0.5, w: 0.7, h: 0.3, align: "right", fontSize: 9.5, color: MUTE, fontFace: F, margin: 0 });
}
function card(slide, x, y, w, h, fill, opts) {
  opts = opts || {};
  slide.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill || WHITE }, rectRadius: 0.09, line: opts.line || { color: LINE, width: 1 }, shadow: opts.shadow ? shadow() : undefined });
}
function chip(slide, x, y, text, fg, bg) {
  const w = 0.22 + text.length * 0.085;
  slide.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h: 0.3, fill: { color: bg }, rectRadius: 0.15, line: { type: "none" } });
  slide.addText(text, { x, y, w, h: 0.3, align: "center", valign: "middle", color: fg, bold: true, fontSize: 9.5, fontFace: F, margin: 0, charSpacing: 1 });
  return w;
}

// ============ SLIDE 1 — TITLE ============
(() => {
  const s = pres.addSlide();
  s.background = { color: NAVY };
  // accent vertical bar
  s.addShape(S.RECTANGLE, { x: 0, y: 0, w: 0.18, h: H, fill: { color: ORANGE }, line: { type: "none" } });
  // decorative diamonds
  diamond(s, 11.7, 1.4, 0.5, ORANGE);
  diamond(s, 12.4, 2.2, 0.28, "27384D");
  diamond(s, 11.2, 2.5, 0.18, "27384D");
  // brand eyebrow
  diamond(s, M + 0.12, 1.05, 0.24, ORANGE);
  s.addText("NOTCH × BULLET", { x: M + 0.4, y: 0.9, w: 8, h: 0.35, color: "AEB8C7", bold: true, fontSize: 13, charSpacing: 4, fontFace: F, margin: 0, valign: "middle" });
  // title
  s.addText("Project Kickoff Plan", { x: M, y: 2.5, w: 10.5, h: 1.5, color: WHITE, bold: true, fontSize: 54, fontFace: F, margin: 0 });
  s.addText("Standing up Notch's first on-premise AI deployment in insurance", { x: M, y: 4.05, w: 9.5, h: 0.6, color: "CAD3DF", fontSize: 18, fontFace: F, margin: 0 });
  // bottom meta strip
  s.addShape(S.LINE, { x: M, y: 5.5, w: 5.2, h: 0, line: { color: "27384D", width: 1 } });
  s.addText([
    { text: "CUSTOMER  ", options: { color: MUTE, bold: true, charSpacing: 2 } }, { text: "Bullet (carrier + investor)     ", options: { color: "E6EDF3" } },
    { text: "FIRST CHANNEL  ", options: { color: MUTE, bold: true, charSpacing: 2 } }, { text: "WhatsApp V0", options: { color: "E6EDF3" } },
  ], { x: M, y: 5.7, w: 11, h: 0.4, fontSize: 12.5, fontFace: F, margin: 0 });
  s.addText([
    { text: "TIMELINE  ", options: { color: MUTE, bold: true, charSpacing: 2 } }, { text: "1 Nov 2025  →  end Q1 2026     ", options: { color: "E6EDF3" } },
    { text: "MODEL  ", options: { color: MUTE, bold: true, charSpacing: 2 } }, { text: "On-prem · binary-only · self-hosted LLM", options: { color: "E6EDF3" } },
  ], { x: M, y: 6.15, w: 11.5, h: 0.4, fontSize: 12.5, fontFace: F, margin: 0 });
})();

// ============ SLIDE 2 — PURPOSE ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "01", "Purpose");
  title(s, "Why this engagement carries outsized weight");
  const items = [
    ["Proves the on-premise model", "Binary-only, pull-based deployment is exactly what regulated industries demand. Get it right here, and it becomes the template."],
    ["First large US enterprise", "A working reference in a Fortune-scale regulated buyer is the credential that opens the US enterprise market."],
    ["A reusable playbook", "Insurance-specific work - compliance, guardrails, data sensitivity - is built once and inherited by the next regulated customer."],
    ["The customer is also an investor", "Execution here is visible to the people funding Notch's next round. Delivery is a commercial and an investor signal at once."],
  ];
  let y = 2.35;
  items.forEach(([h, b], i) => {
    diamond(s, M + 0.13, y + 0.18, 0.22, ORANGE);
    s.addText(h, { x: M + 0.45, y: y - 0.02, w: 6.7, h: 0.34, color: INK, bold: true, fontSize: 15.5, fontFace: F, margin: 0 });
    s.addText(b, { x: M + 0.45, y: y + 0.32, w: 6.7, h: 0.6, color: BODY, fontSize: 12.5, fontFace: F, margin: 0 });
    y += 1.07;
  });
  // right stat card
  card(s, 8.5, 2.35, 4.1, 4.3, NAVY, { line: { type: "none" }, shadow: true });
  s.addText("NOTCH TARGET", { x: 8.5, y: 2.65, w: 4.1, h: 0.3, align: "center", color: "AEB8C7", bold: true, fontSize: 11, charSpacing: 2, fontFace: F, margin: 0 });
  const stats = [["90%", "average automation"], ["~50%", "CS headcount reduction"], ["200%", "ROI within a year"]];
  let sy = 3.2;
  stats.forEach(([n, l]) => {
    s.addText(n, { x: 8.5, y: sy, w: 4.1, h: 0.62, align: "center", color: ORANGE, bold: true, fontSize: 40, fontFace: F, margin: 0 });
    s.addText(l, { x: 8.5, y: sy + 0.62, w: 4.1, h: 0.3, align: "center", color: "CAD3DF", fontSize: 12.5, fontFace: F, margin: 0 });
    sy += 1.12;
  });
  footer(s, 2);
})();

// ============ SLIDE 3 — CONTEXT ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "02", "Context");
  title(s, "What Bullet asked for");
  const rows = [
    [BLUE, "On-premise deployment", "Three environments (Dev / Staging / Production) on Bullet's own cloud. Notch never gets push access."],
    [PURPLE, "Multi-channel", "Voice, WhatsApp, mobile App, and Website - the App is Bullet's stated 2026 priority."],
    [ORANGE, "Nine core features", "IVR replacement, FAQ, OTP, data integration, guardrails, Glassix, scraping, deeplinks, prompt safety."],
    [RED, "Aggressive timeline", "Kickoff 1 Nov 2025, App targeted for the end-of-Q1-2026 deadline. Five months, on-prem, from scratch."],
  ];
  let y = 2.4;
  rows.forEach(([c, h, b]) => {
    card(s, M, y, W - 2 * M, 0.95, WHITE, { shadow: true });
    s.addShape(S.OVAL, { x: M + 0.28, y: y + 0.26, w: 0.44, h: 0.44, fill: { color: c }, line: { type: "none" } });
    s.addText(h, { x: M + 1.0, y: y + 0.14, w: 4.2, h: 0.7, valign: "middle", color: INK, bold: true, fontSize: 16, fontFace: F, margin: 0 });
    s.addText(b, { x: M + 5.2, y: y + 0.14, w: 6.5, h: 0.7, valign: "middle", color: BODY, fontSize: 12.5, fontFace: F, margin: 0 });
    y += 1.12;
  });
  footer(s, 3);
})();

// ============ SLIDE 4 — STRATEGY ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "03", "Strategy");
  title(s, "Two projects, not one");
  s.addText("Different people, different risks, different reasons to fail. They run in parallel and meet at exactly one handoff.",
    { x: M, y: 2.15, w: 9.5, h: 0.4, color: BODY, fontSize: 14, fontFace: F, margin: 0 });
  // two columns
  const colY = 2.9, colH = 2.5, colW = 4.6;
  // DevOps
  card(s, M, colY, colW, colH, "EFF4FE", { line: { color: "C7D7F5", width: 1 } });
  s.addText("DEVOPS PROJECT", { x: M, y: colY + 0.22, w: colW, h: 0.3, align: "center", color: BLUE, bold: true, fontSize: 13, charSpacing: 2, fontFace: F, margin: 0 });
  ["Workshops + binary pipeline", "Dev → Staging → Production", "Per-channel connectivity"].forEach((t, i) => {
    s.addText(t, { x: M + 0.3, y: colY + 0.75 + i * 0.55, w: colW - 0.6, h: 0.45, align: "center", valign: "middle", color: INK, fontSize: 13.5, fontFace: F, margin: 0, fill: { color: WHITE } });
  });
  // Product
  const px = W - M - colW;
  card(s, px, colY, colW, colH, OSOFT, { line: { color: "FAD2BD", width: 1 } });
  s.addText("PRODUCT PROJECT", { x: px, y: colY + 0.22, w: colW, h: 0.3, align: "center", color: "C2410C", bold: true, fontSize: 13, charSpacing: 2, fontFace: F, margin: 0 });
  ["Build flows on Notch platform", "Mock-first, then real integration", "Validated binaries"].forEach((t, i) => {
    s.addText(t, { x: px + 0.3, y: colY + 0.75 + i * 0.55, w: colW - 0.6, h: 0.45, align: "center", valign: "middle", color: INK, fontSize: 13.5, fontFace: F, margin: 0, fill: { color: WHITE } });
  });
  // center converge
  s.addText("∥", { x: (M + colW + px) / 2 - 0.3, y: colY + 0.9, w: 0.6, h: 0.7, align: "center", color: MUTE, fontSize: 30, fontFace: F, margin: 0 });
  // converge node
  card(s, W / 2 - 3, 5.75, 6, 0.95, NAVY, { line: { type: "none" }, shadow: true });
  s.addText([{ text: "The single convergence point\n", options: { bold: true, color: WHITE, fontSize: 14 } }, { text: "Validated binary, pulled into Bullet's environment through the DevOps pipeline", options: { color: "CAD3DF", fontSize: 11.5 } }],
    { x: W / 2 - 3, y: 5.75, w: 6, h: 0.95, align: "center", valign: "middle", fontFace: F, margin: 0 });
  footer(s, 4);
})();

// ============ SLIDE 5 — SEQUENCING ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "04", "Sequencing");
  title(s, "One channel at a time, deliberately");
  const steps = [
    ["1", "WhatsApp", "Pilot", "Has a Glassix human fallback - the only safe place to find failure modes.", ORANGE],
    ["2", "Mobile App", "Priority", "Bullet's 2026 goal. Reuses the proven core rather than discovering it.", PURPLE],
    ["3", "Voice", "Q2", "Adds the hard part - real-time speech - once text is stable.", TEAL],
    ["4", "Website", "Q2", "Lowest marginal value, cheapest once the core is fully proven.", GREEN],
  ];
  const cw = 2.85, gap = 0.33, x0 = M, y = 2.5;
  steps.forEach(([n, h, tag, b, c], i) => {
    const x = x0 + i * (cw + gap);
    card(s, x, y, cw, 3.2, WHITE, { shadow: true });
    s.addShape(S.OVAL, { x: x + cw / 2 - 0.33, y: y + 0.32, w: 0.66, h: 0.66, fill: { color: c }, line: { type: "none" } });
    s.addText(n, { x: x + cw / 2 - 0.33, y: y + 0.32, w: 0.66, h: 0.66, align: "center", valign: "middle", color: WHITE, bold: true, fontSize: 22, fontFace: F, margin: 0 });
    s.addText(h, { x: x, y: y + 1.15, w: cw, h: 0.4, align: "center", color: INK, bold: true, fontSize: 18, fontFace: F, margin: 0 });
    chip(s, x + cw / 2 - (0.22 + tag.length * 0.085) / 2, y + 1.6, tag, "C2410C", OSOFT);
    s.addText(b, { x: x + 0.25, y: y + 2.05, w: cw - 0.5, h: 1.0, align: "center", color: BODY, fontSize: 12, fontFace: F, margin: 0 });
    if (i < 3) s.addText("›", { x: x + cw + 0.02, y: y + 1.2, w: gap, h: 0.5, align: "center", color: MUTE, fontSize: 24, fontFace: F, margin: 0 });
  });
  card(s, M, 5.95, W - 2 * M, 0.75, OSOFT, { line: { color: "FAD2BD", width: 1 } });
  s.addText([{ text: "The reframe:  ", options: { bold: true, color: "C2410C" } }, { text: "WhatsApp-first is not a detour from the App deadline - it is the first recoverable increment of the exact core the App depends on.", options: { color: BODY } }],
    { x: M + 0.3, y: 5.95, w: W - 2 * M - 0.6, h: 0.75, valign: "middle", fontSize: 13, fontFace: F, margin: 0 });
  footer(s, 5);
})();

// ============ SLIDE 6 — ROADMAP ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "05", "Roadmap");
  title(s, "MVP committed, the rest sequenced");
  // timeline geometry
  const tx = M + 0.2, tw = W - 2 * M - 0.4, ty = 3.6;
  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const n = months.length;
  const colW = tw / n;
  // committed (Q1) shading
  s.addShape(S.RECTANGLE, { x: tx, y: ty - 0.9, w: colW * 5, h: 1.8, fill: { color: "F0FDF7" }, line: { type: "none" } });
  s.addShape(S.RECTANGLE, { x: tx + colW * 5, y: ty - 0.9, w: colW * 2, h: 1.8, fill: { color: LIGHT }, line: { type: "none" } });
  // baseline
  s.addShape(S.LINE, { x: tx, y: ty, w: tw, h: 0, line: { color: "C9CED6", width: 1.5 } });
  // month ticks + labels
  months.forEach((m, i) => {
    const x = tx + i * colW;
    s.addShape(S.LINE, { x, y: ty - 0.08, w: 0, h: 0.16, line: { color: "C9CED6", width: 1 } });
    s.addText(m, { x: x - 0.3, y: ty + 0.12, w: 0.6, h: 0.28, align: "center", color: MUTE, fontSize: 11, fontFace: F, margin: 0 });
  });
  // deadline line at end of Mar (index 5)
  const dx = tx + 5 * colW;
  s.addShape(S.LINE, { x: dx, y: ty - 1.0, w: 0, h: 2.0, line: { color: RED, width: 1.5, dashType: "dash" } });
  s.addText("Q1 2026 deadline", { x: dx - 1.2, y: ty - 1.3, w: 2.4, h: 0.25, align: "center", color: RED, bold: true, fontSize: 10, fontFace: F, margin: 0 });
  // quarter labels
  s.addText("Q4 2025", { x: tx, y: ty - 1.35, w: colW * 2, h: 0.25, align: "center", color: GRAY, bold: true, fontSize: 10.5, charSpacing: 1, fontFace: F, margin: 0 });
  s.addText("Q2 2026", { x: tx + colW * 5, y: ty - 1.35, w: colW * 2, h: 0.25, align: "center", color: GRAY, bold: true, fontSize: 10.5, charSpacing: 1, fontFace: F, margin: 0 });
  // milestones (month index fractional)
  const ms = [[1.0, "WA V0", "Dec", true], [2.3, "WA V1", "Jan", true], [3.5, "WA V2", "Feb", true], [4.5, "App", "Mar", true], [5.6, "Voice", "Apr", false], [6.4, "Web", "May", false]];
  ms.forEach(([mi, lab, mon, committed]) => {
    const x = tx + mi * colW;
    diamond(s, x, ty, 0.26, committed ? ORANGE : MUTE);
    s.addText(lab, { x: x - 0.7, y: ty - 0.62, w: 1.4, h: 0.26, align: "center", color: INK, bold: true, fontSize: 12, fontFace: F, margin: 0 });
    s.addText(mon, { x: x - 0.7, y: ty - 0.4, w: 1.4, h: 0.22, align: "center", color: MUTE, fontSize: 9.5, fontFace: F, margin: 0 });
  });
  // two summary cards
  card(s, M, 4.55, 5.85, 2.0, "F0FDF7", { line: { color: "BBF7D0", width: 1 } });
  s.addText("COMMITTED · by end Q1 2026", { x: M + 0.3, y: 4.75, w: 5.3, h: 0.3, color: "047857", bold: true, fontSize: 12, charSpacing: 1, fontFace: F, margin: 0 });
  s.addText([
    { text: "WA V0", options: { bold: true } }, { text: " (Dec)  ·  ", options: {} },
    { text: "WA V1", options: { bold: true } }, { text: " (Jan)  ·  ", options: {} },
    { text: "WA V2", options: { bold: true } }, { text: " (Feb)  ·  ", options: {} },
    { text: "Mobile App", options: { bold: true } }, { text: " (Mar)", options: {} },
  ], { x: M + 0.3, y: 5.1, w: 5.3, h: 0.6, color: INK, fontSize: 12.5, fontFace: F, margin: 0 });
  s.addText("V0-V2: WhatsApp pilot through complete. App - Bullet's priority - lands just inside the deadline.", { x: M + 0.3, y: 5.75, w: 5.3, h: 0.55, color: BODY, fontSize: 11.5, italic: true, fontFace: F, margin: 0 });
  const rx = W - M - 5.85;
  card(s, rx, 4.55, 5.85, 2.0, LIGHT, { line: { color: LINE, width: 1 } });
  s.addText("SEQUENCED · into Q2 2026", { x: rx + 0.3, y: 4.75, w: 5.3, h: 0.3, color: GRAY, bold: true, fontSize: 12, charSpacing: 1, fontFace: F, margin: 0 });
  s.addText([{ text: "Voice", options: { bold: true } }, { text: " (Apr)  ·  ", options: {} }, { text: "Web", options: { bold: true } }, { text: " (May)", options: {} }],
    { x: rx + 0.3, y: 5.15, w: 5.3, h: 0.4, color: INK, fontSize: 13, fontFace: F, margin: 0 });
  s.addText("Hyper Care follows each go-live immediately. Optimization starts once a channel is stable. We protect the must-haves rather than force all five into five months.", { x: rx + 0.3, y: 5.6, w: 5.3, h: 0.8, color: BODY, fontSize: 11.5, italic: true, fontFace: F, margin: 0 });
  footer(s, 6);
})();

// ============ SLIDE 7 — MVP & DOD ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "06", "MVP & DOD");
  title(s, "Start small, go live fast");
  s.addText("All four flows (A, B, C, D) are live in V0. The only change in V1 is Flow B coverage: one intent in V0, all remaining intents in V1.", { x: M, y: 2.15, w: 10, h: 0.4, color: BODY, fontSize: 14, fontFace: F, margin: 0 });
  // V0 column
  card(s, M, 2.8, 5.6, 2.8, WHITE, { shadow: true });
  s.addText("V0 - PILOT · ALL FOUR FLOWS", { x: M + 0.35, y: 3.05, w: 5, h: 0.3, color: "047857", bold: true, fontSize: 12.5, charSpacing: 1, fontFace: F, margin: 0 });
  [["Flow A", "Routing & Handoff - IVR + Glassix fallback"], ["Flow B", "ONE intent only - proves pipeline, first containment"], ["Flow C", "OTP + identity - customer identified from day one"], ["Flow D", "Safety & Compliance baseline - always on"]].forEach(([a, b], i) => {
    const yy = 3.45 + i * 0.5;
    s.addText("✓", { x: M + 0.35, y: yy, w: 0.3, h: 0.35, color: GREEN, bold: true, fontSize: 13, fontFace: F, margin: 0 });
    s.addText([{ text: a + " ", options: { bold: true, color: INK } }, { text: "- " + b, options: { color: BODY } }], { x: M + 0.7, y: yy, w: 4.7, h: 0.42, valign: "middle", fontSize: 12, fontFace: F, margin: 0 });
  });
  // V1/V2 column
  const ox = M + 5.9;
  card(s, ox, 2.8, 5.6, 2.8, LIGHT, { line: { color: LINE, width: 1 } });
  s.addText("V1 - WHATSAPP FULL", { x: ox + 0.35, y: 3.05, w: 5, h: 0.3, color: GRAY, bold: true, fontSize: 12.5, charSpacing: 1, fontFace: F, margin: 0 });
  s.addText("= V0 unchanged + Flow B expanded (all remaining top intents). This is the only difference.", { x: ox + 0.35, y: 3.4, w: 5.0, h: 0.5, color: BODY, fontSize: 12, fontFace: F, margin: 0 });
  s.addText("V2 - WHATSAPP COMPLETE", { x: ox + 0.35, y: 4.05, w: 5, h: 0.3, color: GRAY, bold: true, fontSize: 12.5, charSpacing: 1, fontFace: F, margin: 0 });
  [["Full KB:", "all intents, not just top-N"], ["Hardening:", "adversarial + prompt injection"], ["Scraping:", "Bullet's web content auto-indexed"]].forEach(([a, b], i) => {
    const yy = 4.4 + i * 0.43;
    s.addText([{ text: a + " ", options: { bold: true, color: INK } }, { text: b, options: { color: BODY } }], { x: ox + 0.35, y: yy, w: 5.0, h: 0.38, valign: "middle", fontSize: 12, fontFace: F, margin: 0 });
  });
  // success metrics strip
  s.addText("SUCCESS METRICS", { x: M, y: 5.7, w: 4, h: 0.3, color: GRAY, bold: true, fontSize: 11.5, charSpacing: 2, fontFace: F, margin: 0 });
  const metrics = [["Containment", "% resolved E2E (calibrate target at kickoff)", ORANGE], ["Handoff quality", "% handed off with context", BLUE], ["Compliance", "guardrail pass rate - zero PII tolerance", GREEN]];
  const mw = (W - 2 * M - 0.6) / 3;
  metrics.forEach(([h, b, c], i) => {
    const x = M + i * (mw + 0.3);
    card(s, x, 6.05, mw, 0.8, WHITE, { line: { color: LINE, width: 1 } });
    s.addShape(S.RECTANGLE, { x, y: 6.05, w: 0.07, h: 0.8, fill: { color: c }, line: { type: "none" } });
    s.addText(h, { x: x + 0.25, y: 6.13, w: mw - 0.4, h: 0.28, color: INK, bold: true, fontSize: 13.5, fontFace: F, margin: 0 });
    s.addText(b, { x: x + 0.25, y: 6.43, w: mw - 0.4, h: 0.32, color: BODY, fontSize: 11, fontFace: F, margin: 0 });
  });
  footer(s, 7);
})();

// ============ SLIDE 8 — DELIVERY ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "07", "Delivery");
  title(s, "Discover, mock, build, integrate");
  s.addText("Almost everything we don't know is Bullet-specific. The expensive, access-dependent step is deliberately last.", { x: M, y: 2.15, w: 10.5, h: 0.4, color: BODY, fontSize: 14, fontFace: F, margin: 0 });
  const steps = [
    ["1", "Discover", "Receive Swagger + API comprehension Q&A with Bullet's engineers."],
    ["2", "Mock", "Build accurate mocks from understood contracts. A deliverable in itself."],
    ["3", "Build", "Flows built on Notch's platform - no Bullet network needed yet."],
    ["4", "Integrate", "Swap mocks for real APIs once the logic is already mature."],
  ];
  const cw = 2.85, gap = 0.33, y = 2.95;
  steps.forEach(([n, h, b], i) => {
    const x = M + i * (cw + gap);
    card(s, x, y, cw, 2.3, WHITE, { shadow: true });
    s.addText(n, { x: x + 0.25, y: y + 0.22, w: 0.8, h: 0.7, color: OSOFT, bold: true, fontSize: 44, fontFace: F, margin: 0 });
    s.addText(n, { x: x + 0.3, y: y + 0.3, w: 0.6, h: 0.5, color: ORANGE, bold: true, fontSize: 22, fontFace: F, margin: 0 });
    s.addText(h, { x: x + 0.25, y: y + 1.0, w: cw - 0.5, h: 0.4, color: INK, bold: true, fontSize: 16.5, fontFace: F, margin: 0 });
    s.addText(b, { x: x + 0.25, y: y + 1.45, w: cw - 0.5, h: 0.8, color: BODY, fontSize: 12, fontFace: F, margin: 0 });
    if (i < 3) s.addText("→", { x: x + cw + 0.02, y: y + 0.85, w: gap, h: 0.5, align: "center", color: MUTE, fontSize: 20, fontFace: F, margin: 0 });
  });
  card(s, M, 5.65, W - 2 * M, 1.05, NAVY, { line: { type: "none" }, shadow: true });
  s.addText([{ text: "Why mock-first is the whole game.  ", options: { bold: true, color: ORANGE } }, { text: "Everything buildable without Bullet is built against mocks - fast and parallel. Bullet's access timeline becomes a constraint on the last mile, not a blocker on the whole build.", options: { color: "E6EDF3" } }],
    { x: M + 0.4, y: 5.65, w: W - 2 * M - 0.8, h: 1.05, valign: "middle", fontSize: 13.5, fontFace: F, margin: 0 });
  footer(s, 8);
})();

// ============ SLIDE 9 — RESOURCES ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "08", "Resources");
  title(s, "Who we need on both sides");
  const colW = 5.7;
  // Notch
  card(s, M, 2.35, colW, 4.65, WHITE, { shadow: true });
  s.addShape(S.RECTANGLE, { x: M, y: 2.35, w: colW, h: 0.6, fill: { color: ORANGE }, line: { type: "none" } });
  s.addText("NOTCH TEAM", { x: M + 0.35, y: 2.35, w: colW - 0.7, h: 0.6, valign: "middle", color: WHITE, bold: true, fontSize: 15, charSpacing: 1, fontFace: F, margin: 0 });
  [["Project Manager", "delivery lead, dependency tracker, external sync"], ["Implementation Manager", "business relationship, scope decisions (advisory)"], ["Product", "requirements, backlog, acceptance criteria"], ["DevOps / Infra Engineer", "owns the on-prem foundation"], ["2 × Platform Developers", "the core build capacity"], ["AI / Prompt Engineer", "agents, guardrails, tuning"], ["QA / Test Engineer", "owns the testing funnel"]].forEach(([a, b], i) => {
    const yy = 3.05 + i * 0.52;
    diamond(s, M + 0.45, yy + 0.13, 0.15, ORANGE);
    s.addText([{ text: a, options: { bold: true, color: INK } }, { text: "   " + b, options: { color: GRAY, fontSize: 10.5 } }], { x: M + 0.7, y: yy, w: colW - 1.0, h: 0.4, valign: "middle", fontSize: 12.5, fontFace: F, margin: 0 });
  });
  // Bullet
  const bx = W - M - colW;
  card(s, bx, 2.35, colW, 4.65, WHITE, { shadow: true });
  s.addShape(S.RECTANGLE, { x: bx, y: 2.35, w: colW, h: 0.6, fill: { color: NAVY }, line: { type: "none" } });
  s.addText("BULLET TEAM  ·  the critical path", { x: bx + 0.35, y: 2.35, w: colW - 0.7, h: 0.6, valign: "middle", color: WHITE, bold: true, fontSize: 15, charSpacing: 1, fontFace: F, margin: 0 });
  [["Owner", "single coordination point - the must-have"], ["DevOps / Cloud Engineer", "provisions envs, access, GPU"], ["API / Backend owners", "Swagger + comprehension Q&A"], ["Security / Compliance lead", "scanning, pentest, prod access"], ["QA", "top intents, UAT, AI response correctness"]].forEach(([a, b], i) => {
    const yy = 3.05 + i * 0.52;
    diamond(s, bx + 0.45, yy + 0.13, 0.15, NAVY);
    s.addText([{ text: a, options: { bold: true, color: INK } }, { text: "   " + b, options: { color: GRAY, fontSize: 10.5 } }], { x: bx + 0.7, y: yy, w: colW - 1.0, h: 0.4, valign: "middle", fontSize: 12.5, fontFace: F, margin: 0 });
  });
  footer(s, 9);
})();

// ============ SLIDE 10 — TESTING & ROLLOUT ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "09", "Quality & Rollout");
  title(s, "Six gates, then Hyper Care");
  s.addText("Every channel passes the same funnel, ordered by cost of failure - then a post-launch tail.", { x: M, y: 2.15, w: 10.5, h: 0.4, color: BODY, fontSize: 14, fontFace: F, margin: 0 });
  const phases = [["Stage testing", GRAY], ["Bullet UAT", GRAY], ["Pentest + load", GRAY], ["Prod validation", GRAY], ["PVT", AMBER], ["Go-live", ORANGE], ["Hyper Care", RED], ["Optimization", GREEN]];
  const pw = 1.42, gap = 0.12, y = 3.1, x0 = M;
  phases.forEach(([t, c], i) => {
    const x = x0 + i * (pw + gap);
    card(s, x, y, pw, 1.0, WHITE, { line: { color: LINE, width: 1 } });
    s.addShape(S.RECTANGLE, { x, y, w: pw, h: 0.1, fill: { color: c }, line: { type: "none" } });
    s.addText(String(i + 1), { x, y: y + 0.18, w: pw, h: 0.3, align: "center", color: c, bold: true, fontSize: 15, fontFace: F, margin: 0 });
    s.addText(t, { x: x + 0.05, y: y + 0.5, w: pw - 0.1, h: 0.45, align: "center", valign: "top", color: INK, bold: true, fontSize: 11, fontFace: F, margin: 0 });
    if (i < phases.length - 1) s.addText("›", { x: x + pw - 0.02, y: y + 0.3, w: gap + 0.04, h: 0.4, align: "center", color: MUTE, fontSize: 14, fontFace: F, margin: 0 });
  });
  // notes
  card(s, M, 4.65, 5.85, 1.9, OSOFT, { line: { color: "FAD2BD", width: 1 } });
  s.addText("Hyper Care", { x: M + 0.35, y: 4.85, w: 5.2, h: 0.32, color: "C2410C", bold: true, fontSize: 14, fontFace: F, margin: 0 });
  s.addText("Starts immediately after go-live - part of the delivery sequence, not deferred. 2-3 intensive weeks: elevated monitoring, a dedicated responder, a fast incident loop - before the channel is treated as steady-state.", { x: M + 0.35, y: 5.2, w: 5.2, h: 1.2, color: BODY, fontSize: 12.5, fontFace: F, margin: 0 });
  const rx = W - M - 5.85;
  card(s, rx, 4.65, 5.85, 1.9, "F0FDF7", { line: { color: "BBF7D0", width: 1 } });
  s.addText("Optimization", { x: rx + 0.35, y: 4.85, w: 5.2, h: 0.32, color: "047857", bold: true, fontSize: 14, fontFace: F, margin: 0 });
  s.addText("Starts once Hyper Care is complete and the channel is stable. Tuning prompts and guardrails against real conversations, expanding intent coverage. Starts after all preceding phases - unless Bullet's priorities direct otherwise.", { x: rx + 0.35, y: 5.2, w: 5.2, h: 1.2, color: BODY, fontSize: 12.5, fontFace: F, margin: 0 });
  footer(s, 10);
})();

// ============ SLIDE 11 — RISKS ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "10", "Risks");
  title(s, "Scored, not just listed");
  s.addText("Each risk is typed and scored on a 5×5 matrix (impact × probability), ranked by score.", { x: M, y: 2.15, w: 10, h: 0.4, color: BODY, fontSize: 14, fontFace: F, margin: 0 });
  // heatmap 5x5
  const gx = M + 0.5, gy = 2.95, cell = 0.62;
  const band = (sc) => sc >= 16 ? "FCA5A5" : sc >= 10 ? "FDBA74" : sc >= 5 ? "FDE68A" : "BBF7D0";
  const placed = { "4_4": "1", "5_3": "2", "4_3": "3", "2_4": "4", "2_2": "5" };
  for (let r = 5; r >= 1; r--) {
    for (let c = 1; c <= 5; c++) {
      const x = gx + (c - 1) * cell, y = gy + (5 - r) * cell;
      s.addShape(S.RECTANGLE, { x, y, w: cell - 0.06, h: cell - 0.06, fill: { color: band(r * c) }, line: { type: "none" } });
      const key = r + "_" + c;
      if (placed[key]) {
        s.addShape(S.OVAL, { x: x + (cell - 0.06) / 2 - 0.16, y: y + (cell - 0.06) / 2 - 0.16, w: 0.32, h: 0.32, fill: { color: "1F2937" }, line: { type: "none" } });
        s.addText(placed[key], { x: x + (cell - 0.06) / 2 - 0.16, y: y + (cell - 0.06) / 2 - 0.16, w: 0.32, h: 0.32, align: "center", valign: "middle", color: WHITE, bold: true, fontSize: 12, fontFace: F, margin: 0 });
      }
    }
  }
  s.addText("IMPACT →", { x: gx - 0.85, y: gy + cell * 2.5 - 0.15, w: 1.6, h: 0.3, align: "center", color: MUTE, bold: true, fontSize: 9, charSpacing: 1, fontFace: F, margin: 0, rotate: 270 });
  s.addText("PROBABILITY →", { x: gx, y: gy + cell * 5 + 0.05, w: cell * 5, h: 0.3, align: "center", color: MUTE, bold: true, fontSize: 9, charSpacing: 1, fontFace: F, margin: 0 });
  // risk list
  const lx = gx + cell * 5 + 0.7;
  const lw = W - M - lx;
  const risks = [
    ["1", "Production access refused", "Compliance", "16", RED],
    ["2", "Containment below target", "Product", "15", "C2410C"],
    ["3", "Resource contention", "Resourcing", "12", "C2410C"],
    ["4", "Binary fails security scan", "Technical", "8", AMBER],
    ["5", "Tooling ownership unresolved", "Commercial", "4", "047857"],
  ];
  risks.forEach(([n, t, ty, sc, c], i) => {
    const y = gy + i * 0.66;
    s.addShape(S.OVAL, { x: lx, y: y + 0.04, w: 0.34, h: 0.34, fill: { color: "1F2937" }, line: { type: "none" } });
    s.addText(n, { x: lx, y: y + 0.04, w: 0.34, h: 0.34, align: "center", valign: "middle", color: WHITE, bold: true, fontSize: 12, fontFace: F, margin: 0 });
    s.addText(t, { x: lx + 0.5, y: y, w: lw - 2.0, h: 0.24, color: INK, bold: true, fontSize: 13, fontFace: F, margin: 0 });
    s.addText(ty, { x: lx + 0.5, y: y + 0.24, w: lw - 2.0, h: 0.22, color: GRAY, fontSize: 10.5, fontFace: F, margin: 0 });
    chip(s, W - M - 1.35, y + 0.06, sc + " · " + (sc >= 16 ? "Critical" : sc >= 10 ? "High" : sc >= 5 ? "Medium" : "Low"), c === RED ? "B91C1C" : c, "F7F8FA");
  });
  s.addText("Dependencies (what Bullet owes us) are tracked separately - they become risks only when a due date is missed.", { x: M, y: 6.55, w: W - 2 * M, h: 0.4, color: GRAY, italic: true, fontSize: 12, fontFace: F, margin: 0 });
  footer(s, 11);
})();

// ============ SLIDE 12 — KICKOFF ============
(() => {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  sectionTag(s, "11", "Kickoff");
  title(s, "The kickoff meeting");
  // left: agenda + decisions
  s.addText("AGENDA", { x: M, y: 2.25, w: 5, h: 0.3, color: ORANGE, bold: true, fontSize: 12, charSpacing: 2, fontFace: F, margin: 0 });
  s.addText([
    "Strategy & sequencing", "Timeline & scope vs the Q1 2026 deadline", "The deployment model", "Lock the critical decisions", "Access & discovery sign-off", "First four weeks & owners",
  ].map((t, i) => ({ text: t, options: { bullet: { type: "number" }, color: BODY, breakLine: true, paraSpaceAfter: 4 } })), { x: M, y: 2.6, w: 5.5, h: 2.1, fontSize: 12.5, fontFace: F, margin: 0 });
  s.addText("CRITICAL DECISIONS", { x: M, y: 4.85, w: 5, h: 0.3, color: ORANGE, bold: true, fontSize: 12, charSpacing: 2, fontFace: F, margin: 0 });
  s.addText(["Scope vs deadline (all 5 channels, or App?)", "Build/buy boundary & vendors", "Subscription ownership (recommend Bullet)", "Production access model"].map(t => ({ text: t, options: { bullet: true, color: BODY, breakLine: true, paraSpaceAfter: 3 } })), { x: M, y: 5.2, w: 5.5, h: 1.5, fontSize: 12, fontFace: F, margin: 0 });
  // right: questions by priority
  const rx = M + 6.0;
  s.addText("KEY QUESTIONS, BY PRIORITY", { x: rx, y: 2.25, w: 6, h: 0.3, color: ORANGE, bold: true, fontSize: 12, charSpacing: 2, fontFace: F, margin: 0 });
  const groups = [
    ["P0 · BLOCKING", "B91C1C", "FEF2F2", ["Is the Q1 2026 deadline immovable - all 5 channels or just App?", "LLM self-hosted - does any data leave?", "APIs documented (Swagger) and reachable?", "Named Bullet Owner (single coordination point)?", "Security scanning toolchain?"]],
    ["P1 · HIGH", "C2410C", "FFF7ED", ["Which 3rd-party tools does Bullet already run?", "Per tool - who owns the subscription?", "Top intents / volumes for the MVP?", "GPU capacity for the self-hosted LLM?"]],
    ["P2 · BEFORE PHASE", "6B7280", "F3F4F6", ["Swagger / API docs for Policy & Claims endpoints?", "Pentest owner & vendor?", "PVT feasible per channel?"]],
  ];
  let y = 2.55;
  groups.forEach(([lab, fg, bg, qs]) => {
    chip(s, rx, y, lab, fg, bg);
    qs.forEach((q, i) => {
      s.addText("•", { x: rx + 0.05, y: y + 0.38 + i * 0.25, w: 0.2, h: 0.25, color: MUTE, fontSize: 11, fontFace: F, margin: 0 });
      s.addText(q, { x: rx + 0.28, y: y + 0.38 + i * 0.25, w: 6.0, h: 0.25, color: BODY, fontSize: 11.5, fontFace: F, margin: 0 });
    });
    y += 0.38 + qs.length * 0.25 + 0.13;
  });
  footer(s, 12);
})();

// ============ SLIDE 13 — CLOSING ============
(() => {
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(S.RECTANGLE, { x: 0, y: 0, w: 0.18, h: H, fill: { color: ORANGE }, line: { type: "none" } });
  diamond(s, 11.9, 1.5, 0.55, ORANGE);
  diamond(s, 12.5, 2.4, 0.3, "27384D");
  s.addText("WHAT WINNING LOOKS LIKE", { x: M, y: 1.1, w: 9, h: 0.4, color: "AEB8C7", bold: true, fontSize: 14, charSpacing: 3, fontFace: F, margin: 0 });
  s.addText("Live fast, recoverable, reusable", { x: M, y: 1.7, w: 11, h: 1.0, color: WHITE, bold: true, fontSize: 40, fontFace: F, margin: 0 });
  [["WhatsApp live fast and safely", "the MVP recoverable behind a Glassix safety net"], ["The App live on its priority timeline", "by the end-of-Q1-2026 deadline"], ["An architecture proven reusable", "the next regulated customer inherits it, integration layer swapped not rebuilt"]].forEach(([h, b], i) => {
    const y = 3.15 + i * 0.85;
    diamond(s, M + 0.13, y + 0.2, 0.24, ORANGE);
    s.addText([{ text: h, options: { bold: true, color: WHITE, fontSize: 17 } }, { text: "   —  " + b, options: { color: "CAD3DF", fontSize: 13 } }], { x: M + 0.45, y, w: 11.5, h: 0.55, valign: "middle", fontFace: F, margin: 0 });
  });
  s.addShape(S.LINE, { x: M, y: 6.1, w: W - 2 * M, h: 0, line: { color: "27384D", width: 1 } });
  s.addText([{ text: "NEXT  ", options: { color: ORANGE, bold: true, charSpacing: 2 } }, { text: "Send the pre-requisites this week  ·  lock the critical decisions at kickoff  ·  start the build on day one.", options: { color: "E6EDF3" } }],
    { x: M, y: 6.3, w: 12, h: 0.4, fontSize: 13.5, fontFace: F, margin: 0 });
})();

pres.writeFile({ fileName: "Notch-Bullet-Kickoff.pptx" }).then(f => console.log("WROTE", f));
