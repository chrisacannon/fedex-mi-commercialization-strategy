const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

const PURPLE_DK = "2E0E5C";
const PURPLE = "4D148C";
const PURPLE_MID = "6A3AA8";
const LILAC = "E9E1F5";
const ORANGE = "FF6600";
const WHITE = "FFFFFF";
const OFFWHITE = "F7F6FA";
const INK = "231F35";
const GRAY = "6E6A7C";

const FONT_HEAD = "Cambria";
const FONT_BODY = "Calibri";

const SLIDE_W = 13.333;

function footer(slide, label) {
  slide.addText(label, {
    x: 0.5, y: 7.13, w: 8, h: 0.3, fontFace: FONT_BODY, fontSize: 9,
    color: GRAY, align: "left",
  });
  slide.addText("Chris Cannon  |  FedEx Business Strategy Principal Interview", {
    x: SLIDE_W - 6.5, y: 7.13, w: 6, h: 0.3, fontFace: FONT_BODY, fontSize: 9,
    color: GRAY, align: "right",
  });
}

function circleIcon(slide, {x, y, d, bg, char, charColor, fontSize}) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: bg }, line: { type: "none" } });
  slide.addText(char, {
    x, y, w: d, h: d, align: "center", valign: "middle",
    fontFace: FONT_BODY, fontSize: fontSize || 22, bold: true, color: charColor,
  });
}

// =========================================================
// SLIDE 1 — TITLE
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: PURPLE_DK };

  s.addShape("ellipse", { x: 9.9, y: 0.6, w: 3.6, h: 3.6, fill: { color: PURPLE, transparency: 40 }, line: { type: "none" } });
  s.addShape("ellipse", { x: 11.1, y: 2.1, w: 3.0, h: 3.0, fill: { color: PURPLE_MID, transparency: 35 }, line: { type: "none" } });
  s.addShape("ellipse", { x: 9.6, y: 3.3, w: 2.4, h: 2.4, fill: { color: ORANGE, transparency: 55 }, line: { type: "none" } });

  s.addText("BUSINESS STRATEGY PRINCIPAL  \u2014  GO-TO-MARKET & COMMERCIALIZATION", {
    x: 0.7, y: 2.15, w: 9.5, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: "C9B8E8",
    charSpacing: 1.5, bold: true,
  });

  s.addText("Protect It. Monitor It. Find It.", {
    x: 0.7, y: 2.65, w: 9.6, h: 1.3, fontFace: FONT_HEAD, fontSize: 44, bold: true,
    color: WHITE, lineSpacingMultiple: 1.05,
  });

  s.addText("A commercialization strategy for FedEx Monitoring & Intervention and Sensor Solutions", {
    x: 0.7, y: 3.95, w: 8.8, h: 0.5, fontFace: FONT_BODY, fontSize: 15, color: "D8CDEF", italic: true,
  });

  s.addShape("line", { x: 0.7, y: 4.7, w: 1.1, h: 0, line: { color: ORANGE, width: 3 } });

  s.addText("Chris Cannon", { x: 0.7, y: 4.9, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: WHITE });
  s.addText("Candidate Presentation  \u2014  July 17, 2026", { x: 0.7, y: 5.25, w: 5, h: 0.3, fontFace: FONT_BODY, fontSize: 11, color: "B9A9DA" });

  s.addNotes("Opening: sets up the commercialization strategy for FedEx's M&I and Sensor portfolio.");
}

// =========================================================
// SLIDE 2 — PORTFOLIO STRATEGY
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };

  s.addText("1  \u2014  PORTFOLIO STRATEGY", { x: 0.5, y: 0.32, w: 8, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
  s.addText("Turn a disjointed product set into one platform \u2014 the same bet FedEx just made elsewhere", {
    x: 0.5, y: 0.6, w: 12.3, h: 0.75, fontFace: FONT_HEAD, fontSize: 22, bold: true, color: PURPLE_DK,
  });

  s.addShape("roundRect", { x: 0.5, y: 1.4, w: 12.3, h: 0.68, rectRadius: 0.06, fill: { color: LILAC }, line: { type: "none" } });
  s.addText([
    { text: "\u201CNearly $10 billion in healthcare transportation revenue exiting FY26 \u2014 approaching 11% of total revenue.\u201D  ", options: { italic: true, color: PURPLE_DK, bold: true } },
    { text: "\u2014 FedEx Q4 FY26 earnings call", options: { color: GRAY, fontSize: 10.5 } },
  ], { x: 0.75, y: 1.4, w: 11.8, h: 0.68, fontFace: FONT_BODY, fontSize: 12.5, valign: "middle" });

  const cards = [
    { need: "\u201CProtect it\u201D", product: "FedEx Surround", desc: "High-value, time-sensitive shipments needing active, expert-led intervention. Embeds SenseAware ID at top tiers.", icon: "P" },
    { need: "\u201CMonitor it\u201D", product: "SenseAware Mobile", desc: "Condition-sensitive shipments needing continuous, self-managed environmental data.", icon: "M" },
  ];
  const cardW = 5.95, gap = 0.4, startX = 0.5, cardY = 2.28, cardH = 1.95;
  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape("roundRect", { x, y: cardY, w: cardW, h: cardH, rectRadius: 0.08, fill: { color: OFFWHITE }, line: { type: "none" }, shadow: { type: "outer", color: "808080", opacity: 0.2, blur: 5, offset: 2, angle: 90 } });
    circleIcon(s, { x: x + 0.28, y: cardY + 0.28, d: 0.58, bg: PURPLE, char: c.icon, charColor: WHITE, fontSize: 19 });
    s.addText(c.need, { x: x + 1.0, y: cardY + 0.22, w: cardW - 1.3, h: 0.35, fontFace: FONT_HEAD, fontSize: 17, bold: true, color: PURPLE_DK });
    s.addText(c.product, { x: x + 1.0, y: cardY + 0.58, w: cardW - 1.3, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE });
    s.addText(c.desc, { x: x + 0.28, y: cardY + 1.05, w: cardW - 0.56, h: 0.8, fontFace: FONT_BODY, fontSize: 11, color: INK, lineSpacingMultiple: 1.15 });
  });

  s.addShape("roundRect", { x: 0.5, y: 4.42, w: 12.3, h: 0.62, rectRadius: 0.06, fill: { color: WHITE }, line: { color: "B9A9DA", width: 1, dashType: "dash" } });
  s.addText([
    { text: "Find It \u2014 RFID: ", options: { bold: true, color: PURPLE_DK } },
    { text: "Internal Visibility Infrastructure (Emerging Customer Capability)", options: { color: GRAY, italic: true } },
  ], { x: 0.8, y: 4.42, w: 11.7, h: 0.62, fontFace: FONT_BODY, fontSize: 11.5, valign: "middle" });

  s.addShape("roundRect", { x: 0.5, y: 5.2, w: 12.3, h: 1.55, rectRadius: 0.08, fill: { color: PURPLE_DK }, line: { type: "none" } });
  s.addText([
    { text: "Position as one coherent platform \u2014 ", options: { color: WHITE, bold: true } },
    { text: "FedEx Intelligent Logistics", options: { color: ORANGE, bold: true } },
    { text: " \u2014 where Protect It and Monitor It already share a proven commercial motion.", options: { color: WHITE } },
  ], { x: 0.85, y: 5.34, w: 11.6, h: 0.55, fontFace: FONT_BODY, fontSize: 13.5, valign: "top" });
  s.addText("RFID is architected in deliberately as it matures \u2014 not forced into false equivalence with the other two.", {
    x: 0.85, y: 5.85, w: 11.6, h: 0.4, fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: "D8CDEF",
  });
  s.addText("In July 2026, FedEx consolidated fragmented healthcare capability under one organization. This presentation asks for the same discipline here \u2014 across pricing, packaging, and positioning.", {
    x: 0.85, y: 6.22, w: 11.6, h: 0.45, fontFace: FONT_BODY, fontSize: 10.5, italic: true, color: "B9A9DA",
  });

  footer(s, "Portfolio Strategy");

  s.addNotes(
    "\u2022 FedEx's own consolidation of healthcare capability under Life Sciences (July 2026) is the model for this recommendation\n" +
    "\u2022 Surround and SenseAware Mobile both deliver continuous shipment signal; they differ in who acts on it (FedEx vs. the customer)\n" +
    "\u2022 Healthcare's revenue track record plus FedEx's own CEO commentary support extending this approach to aerospace next\n" +
    "\u2022 RFID remains internal infrastructure today; its data quality already benefits Surround's predictive model, and it's the seed of a future Control Tower capability\n" +
    "\u2022 Recommend a recurring cross-business-unit governance cadence as FedEx stands up more dedicated verticals"
  );
}

// =========================================================
// SLIDE 3 — PACKAGING & PRICING STRATEGY
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };

  s.addText("2  \u2014  PACKAGING & PRICING STRATEGY", { x: 0.5, y: 0.32, w: 9, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
  s.addText("One shared language, not one forced ladder", {
    x: 0.5, y: 0.6, w: 12.3, h: 0.6, fontFace: FONT_HEAD, fontSize: 24, bold: true, color: PURPLE_DK,
  });
  s.addText("Pricing evolved as three separate systems, plus a fourth product with no pricing model yet. Surround and SenseAware Mobile answer different questions \u2014 forcing one ladder onto both would be artificial.", {
    x: 0.5, y: 1.22, w: 12.3, h: 0.42, fontFace: FONT_BODY, fontSize: 12, italic: true, color: GRAY,
  });

  const axW = 5.95, axGap = 0.4, axX = 0.5, axY = 1.85, axH = 2.15;
  s.addShape("roundRect", { x: axX, y: axY, w: axW, h: axH, rectRadius: 0.08, fill: { color: LILAC }, line: { type: "none" } });
  s.addText("ASSISTED \u2014 FedEx Surround", { x: axX + 0.3, y: axY + 0.2, w: axW - 0.6, h: 0.4, fontFace: FONT_BODY, fontSize: 13, bold: true, color: PURPLE_DK });
  s.addText("FedEx's team acts on your behalf", { x: axX + 0.3, y: axY + 0.62, w: axW - 0.6, h: 0.3, fontFace: FONT_BODY, fontSize: 11, italic: true, color: ORANGE });
  s.addText("Select = visibility only. Preferred = in-network intervention. Premium = out-of-network, white-glove recovery, embedded SenseAware ID.", {
    x: axX + 0.3, y: axY + 1.0, w: axW - 0.6, h: 1.0, fontFace: FONT_BODY, fontSize: 11, color: INK, lineSpacingMultiple: 1.2,
  });
  s.addShape("roundRect", { x: axX + axW + axGap, y: axY, w: axW, h: axH, rectRadius: 0.08, fill: { color: PURPLE_MID }, line: { type: "none" } });
  s.addText("SELF-DIRECTED \u2014 SenseAware Mobile", { x: axX + axW + axGap + 0.3, y: axY + 0.2, w: axW - 0.6, h: 0.4, fontFace: FONT_BODY, fontSize: 13, bold: true, color: WHITE });
  s.addText("You act on the data yourself", { x: axX + axW + axGap + 0.3, y: axY + 0.62, w: axW - 0.6, h: 0.3, fontFace: FONT_BODY, fontSize: 11, italic: true, color: "FFD9B3" });
  s.addText("Subscription = recurring, self-managed monitoring. Single Journey = one-off, low-friction way in \u2014 the trial entry point.", {
    x: axX + axW + axGap + 0.3, y: axY + 1.0, w: axW - 0.6, h: 1.0, fontFace: FONT_BODY, fontSize: 11, color: "F0E9FA", lineSpacingMultiple: 1.2,
  });

  s.addText("Separately, how customers commit to paying varies too \u2014 Surround is contract-based; SenseAware Mobile offers Subscription or Single Journey. Same discipline, different structure, because they solve different problems.", {
    x: 0.5, y: 4.08, w: 12.3, h: 0.4, fontFace: FONT_BODY, fontSize: 10, italic: true, color: GRAY,
  });

  s.addShape("roundRect", { x: 0.5, y: 4.6, w: 12.3, h: 1.15, rectRadius: 0.08, fill: { color: OFFWHITE }, line: { color: ORANGE, width: 1.5 } });
  circleIcon(s, { x: 0.75, y: 4.85, d: 0.6, bg: ORANGE, char: "!", charColor: WHITE, fontSize: 20 });
  s.addText([
    { text: "Two naming fixes worth calling out: ", options: { bold: true, color: PURPLE_DK } },
    { text: "Priority Alert predates Surround's platform build and should fold in. And \u201CSenseAware\u201D currently names two different things \u2014 a bundled Surround feature and a standalone product \u2014 which blurs the line for sales and customers alike.", options: { color: INK } },
  ], { x: 1.55, y: 4.72, w: 10.95, h: 0.9, fontFace: FONT_BODY, fontSize: 11.5, valign: "middle", lineSpacingMultiple: 1.15 });

  s.addShape("roundRect", { x: 0.5, y: 5.87, w: 12.3, h: 1.05, rectRadius: 0.08, fill: { color: PURPLE_DK }, line: { type: "none" } });
  circleIcon(s, { x: 0.75, y: 6.05, d: 0.62, bg: ORANGE, char: "$", charColor: WHITE, fontSize: 20 });
  s.addText([
    { text: "Subscription-first, guardrail intact. ", options: { bold: true, color: WHITE } },
    { text: "Strengthen the nudge from Single Journey to Subscription \u2014 but keep Single Journey available. Low-frequency, high-value shippers who lose that option may go to a competitor instead.", options: { color: "E9E1F5" } },
  ], { x: 1.55, y: 5.97, w: 10.95, h: 0.85, fontFace: FONT_BODY, fontSize: 11, valign: "middle", lineSpacingMultiple: 1.1 });

  footer(s, "Packaging & Pricing Strategy");

  s.addNotes(
    "\u2022 Pricing evolved as three separate systems (Surround, SenseAware Mobile, Priority Alert) plus RFID with no pricing model yet\n" +
    "\u2022 Surround and SenseAware Mobile solve different problems (assisted vs. self-directed) \u2014 the fix is shared discipline, not a forced shared ladder\n" +
    "\u2022 Two naming/consolidation fixes: Priority Alert should fold into Surround's platform; \u201CSenseAware\u201D branding should apply only to the standalone Mobile product\n" +
    "\u2022 Recommend subscription-first with a stronger conversion nudge, while preserving Single Journey as a standing option for low-frequency shippers"
  );
}

// =========================================================
// SLIDE 4 — POSITIONING & PROMOTION STRATEGY
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: PURPLE_DK };

  s.addText("3  \u2014  POSITIONING & PROMOTION STRATEGY", { x: 0.5, y: 0.32, w: 9, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
  s.addText("One story, built on what already works", {
    x: 0.5, y: 0.6, w: 12.3, h: 0.65, fontFace: FONT_HEAD, fontSize: 24, bold: true, color: WHITE,
  });

  s.addText([
    { text: "\u201CFedEx doesn\u2019t just ship your shipment. ", options: { color: "D8CDEF" } },
    { text: "We protect it.\u201D", options: { color: ORANGE, bold: true } },
  ], { x: 0.5, y: 1.4, w: 12.3, h: 0.55, fontFace: FONT_HEAD, fontSize: 21, italic: true });

  const proofs = [
    { title: "Healthcare", sub: "Real \u2014 FedEx Life Sciences", icon: "H", note: "Consolidated org, ~$10B revenue base" },
    { title: "Aerospace", sub: "Named FedEx growth vertical", icon: "A", note: "No dedicated commercial motion yet" },
    { title: "Data Centers", sub: "Named FedEx growth vertical", icon: "D", note: "Illustrative \u2014 SenseAware sensors suit server hardware" },
  ];
  const pW = 3.85, pGap = 0.35, pX = 0.5, pY = 2.15, pH = 2.05;
  proofs.forEach((p, i) => {
    const x = pX + i * (pW + pGap);
    s.addShape("roundRect", { x, y: pY, w: pW, h: pH, rectRadius: 0.08, fill: { color: PURPLE, transparency: 15 }, line: { type: "none" } });
    circleIcon(s, { x: x + 0.28, y: pY + 0.28, d: 0.56, bg: ORANGE, char: p.icon, charColor: WHITE, fontSize: 19 });
    s.addText(p.title, { x: x + 0.95, y: pY + 0.24, w: pW - 1.2, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: WHITE, valign: "middle" });
    s.addText(p.sub, { x: x + 0.95, y: pY + 0.58, w: pW - 1.2, h: 0.35, fontFace: FONT_BODY, fontSize: 10.5, color: "C9B8E8", valign: "middle" });
    s.addShape("line", { x: x + 0.28, y: pY + 1.05, w: pW - 0.56, h: 0, line: { color: "6A3AA8", width: 1 } });
    s.addText(p.note, {
      x: x + 0.28, y: pY + 1.2, w: pW - 0.56, h: 0.75, fontFace: FONT_BODY, fontSize: 10.5, color: "E9E1F5", lineSpacingMultiple: 1.2, italic: true,
    });
  });

  s.addShape("roundRect", { x: 0.5, y: 4.55, w: 12.3, h: 1.35, rectRadius: 0.08, fill: { color: WHITE }, line: { type: "none" } });
  circleIcon(s, { x: 0.78, y: 4.88, d: 0.6, bg: PURPLE, char: "S", charColor: WHITE, fontSize: 20 });
  s.addText("Sales enablement:", { x: 1.6, y: 4.7, w: 3, h: 0.35, fontFace: FONT_BODY, fontSize: 13, bold: true, color: PURPLE_DK });
  s.addText("A starting decision framework, not a finished rulebook \u2014 industry against shipment sensitivity, initial tier recommendation at the intersection. Refined over time using real shipment volume, intervention frequency, and tenure data by tier.", {
    x: 1.6, y: 5.05, w: 10.8, h: 0.75, fontFace: FONT_BODY, fontSize: 12, color: INK, lineSpacingMultiple: 1.2,
  });

  footer(s, "Positioning & Promotion Strategy");

  s.addNotes(
    "\u2022 One consistent narrative (\u201Cwe protect it\u201D), grounded in the mechanic that already drives healthcare's results\n" +
    "\u2022 Three proof points at different maturity: healthcare (real), aerospace (named FedEx vertical, no dedicated motion), data centers (illustrative fit, not a claimed customer story)\n" +
    "\u2022 Sales enablement: a starting decision framework mapping industry and shipment sensitivity to an initial tier recommendation \u2014 a hypothesis to refine with real usage data, not a finished rulebook (see optional standalone mockup file)"
  );
}

// =========================================================
// SLIDE 5 — DISTRIBUTION & ADOPTION STRATEGY
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };

  s.addText("4  \u2014  DISTRIBUTION & ADOPTION STRATEGY", { x: 0.5, y: 0.32, w: 9, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
  s.addText("Accelerate trial, prove value, reward loyalty", {
    x: 0.5, y: 0.6, w: 12.3, h: 0.6, fontFace: FONT_HEAD, fontSize: 24, bold: true, color: PURPLE_DK,
  });
  s.addText("Customer value and business outcomes aren't consistently measured or communicated today \u2014 that's the problem these four steps solve.", {
    x: 0.5, y: 1.22, w: 12.3, h: 0.35, fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: GRAY,
  });

  const steps = [
    { n: "1", title: "Lower the trial barrier", desc: "Single Journey as the default suggested option at booking for eligible shipments" },
    { n: "2", title: "Define value milestones", desc: "First intervention or cost-avoidance event flagged within 24 hours" },
    { n: "3", title: "Build the renewal playbook", desc: "One-page ROI summary auto-generated 60 days before renewal" },
    { n: "4", title: "Embed in account conversations", desc: "Fixed line item on quarterly business review agendas" },
  ];
  const stW = 2.85, stGap = 0.25, stX = 0.5, stY = 1.68, stH = 2.05;
  steps.forEach((st, i) => {
    const x = stX + i * (stW + stGap);
    s.addShape("roundRect", { x, y: stY, w: stW, h: stH, rectRadius: 0.08, fill: { color: OFFWHITE }, line: { type: "none" }, shadow: { type: "outer", color: "808080", opacity: 0.2, blur: 5, offset: 2, angle: 90 } });
    circleIcon(s, { x: x + (stW - 0.55) / 2, y: stY + 0.22, d: 0.55, bg: PURPLE, char: st.n, charColor: WHITE, fontSize: 17 });
    s.addText(st.title, { x: x + 0.15, y: stY + 0.95, w: stW - 0.3, h: 0.6, align: "center", fontFace: FONT_HEAD, fontSize: 12.5, bold: true, color: PURPLE_DK, lineSpacingMultiple: 1.05 });
    s.addText(st.desc, { x: x + 0.15, y: stY + 1.55, w: stW - 0.3, h: 0.55, align: "center", fontFace: FONT_BODY, fontSize: 9.5, color: INK, lineSpacingMultiple: 1.15 });
    if (i < steps.length - 1) {
      s.addText("\u2192", { x: x + stW - 0.02, y: stY + stH / 2 - 0.2, w: stGap + 0.04, h: 0.4, align: "center", valign: "middle", fontFace: FONT_BODY, fontSize: 16, bold: true, color: ORANGE });
    }
  });

  s.addText("Two proactive additions \u2014 named, not generic:", {
    x: 0.5, y: 4.0, w: 12.3, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: GRAY,
  });

  const adds = [
    { icon: "M", title: "Priority Alert migration path", desc: "Consolidating Priority Alert means real customers on a real product need an explicit migration path \u2014 not a flip of a switch. This is an adoption problem, not just a pricing one." },
    { icon: "R", title: "Pre-build RFID's funnel now", desc: "RFID is heading toward a customer-facing product. Build the same trial-to-subscription motion for it today, so it launches with commercial discipline instead of needing to be fixed later." },
  ];
  const adW = 5.95, adGap = 0.4, adX = 0.5, adY = 4.42, adH = 2.15;
  adds.forEach((a, i) => {
    const x = adX + i * (adW + adGap);
    s.addShape("roundRect", { x, y: adY, w: adW, h: adH, rectRadius: 0.08, fill: { color: PURPLE_DK }, line: { type: "none" } });
    circleIcon(s, { x: x + 0.3, y: adY + 0.28, d: 0.6, bg: ORANGE, char: a.icon, charColor: WHITE, fontSize: 20 });
    s.addText(a.title, { x: x + 1.1, y: adY + 0.24, w: adW - 1.4, h: 0.7, fontFace: FONT_BODY, fontSize: 13.5, bold: true, color: WHITE, valign: "top", lineSpacingMultiple: 1.1 });
    s.addText(a.desc, { x: x + 0.3, y: adY + 1.05, w: adW - 0.6, h: 1.15, fontFace: FONT_BODY, fontSize: 11, color: "E9E1F5", lineSpacingMultiple: 1.2 });
  });

  footer(s, "Distribution & Adoption Strategy");

  s.addNotes(
    "\u2022 Addresses the prompt's stated gap: customer value and outcomes aren't consistently measured or communicated today\n" +
    "\u2022 Four steps, each with a concrete mechanism: default-suggested Single Journey at booking, 24-hour milestone flagging, auto-generated renewal ROI summaries, and a standing QBR agenda item\n" +
    "\u2022 Two additional considerations: a phased Priority Alert migration path (not an abrupt cutover), and pre-building RFID's trial-to-subscription funnel ahead of its customer launch"
  );
}

// =========================================================
// SLIDE 6 — SUCCESS METRICS
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: PURPLE_DK };

  s.addText("5  \u2014  SUCCESS METRICS", { x: 0.5, y: 0.32, w: 9, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
  s.addText("Four metrics, each tied to a specific move in this strategy", {
    x: 0.5, y: 0.6, w: 12.3, h: 0.65, fontFace: FONT_HEAD, fontSize: 24, bold: true, color: WHITE,
  });

  const kpis = [
    { label: "ADOPTION RATE", desc: "% of eligible shipment volume using M&I or Sensor products" },
    { label: "SUBSCRIPTION CONVERSION", desc: "% of Single Journey users converting to a subscription" },
    { label: "LEGACY MIGRATION RATE", desc: "% of Priority Alert accounts transitioned to the unified platform tier" },
    { label: "NET REVENUE RETENTION", desc: "Revenue retained plus expansion at renewal \u2014 the outcome metric" },
  ];
  const kW = 5.9, kH = 1.75, kGapX = 0.5, kGapY = 0.3, kStartX = 0.5, kStartY = 1.65;
  kpis.forEach((k, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = kStartX + col * (kW + kGapX);
    const y = kStartY + row * (kH + kGapY);
    s.addShape("roundRect", { x, y, w: kW, h: kH, rectRadius: 0.08, fill: { color: PURPLE, transparency: 15 }, line: { type: "none" } });
    s.addShape("roundRect", { x, y, w: 0.14, h: kH, rectRadius: 0, fill: { color: k.label === "LEGACY MIGRATION RATE" ? ORANGE : "6A3AA8" }, line: { type: "none" } });
    s.addText(k.label, { x: x + 0.4, y: y + 0.22, w: kW - 0.7, h: 0.45, fontFace: FONT_HEAD, fontSize: 15.5, bold: true, color: ORANGE, charSpacing: 0.5 });
    s.addText(k.desc, { x: x + 0.4, y: y + 0.78, w: kW - 0.7, h: 0.85, fontFace: FONT_BODY, fontSize: 12.5, color: "E9E1F5", lineSpacingMultiple: 1.2 });
    if (k.label === "LEGACY MIGRATION RATE") {
      s.addText("NEW", { x: x + kW - 0.9, y: y + 0.22, w: 0.6, h: 0.3, fontFace: FONT_BODY, fontSize: 9, bold: true, color: ORANGE, align: "right" });
    }
  });

  s.addText("Subscription conversion shouldn't be static \u2014 test trial length, milestone timing, and incentive structure systematically, not just track the number.", {
    x: 0.5, y: 5.55, w: 12.3, h: 0.5, fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: "C9B8E8",
  });

  footer(s, "Success Metrics");

  s.addNotes(
    "\u2022 Four KPIs, each tied to a specific move in the strategy rather than a generic scorecard\n" +
    "\u2022 Legacy Migration Rate is new \u2014 tracks whether Priority Alert accounts actually transition, not just whether the policy exists\n" +
    "\u2022 Recommend treating subscription conversion as a testable lever (trial length, milestone timing, incentive structure) rather than a static number"
  );
}

// =========================================================
// APPENDIX — SOURCES
// =========================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };

  s.addText("APPENDIX", { x: 0.5, y: 0.35, w: 9, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
  s.addText("Sources", {
    x: 0.5, y: 0.65, w: 12.3, h: 0.65, fontFace: FONT_HEAD, fontSize: 26, bold: true, color: PURPLE_DK,
  });

  const sources = [
    { org: "FedEx Q4 FY26 Earnings Call", detail: "June 23, 2026 (Brie Carere, EVP & Chief Customer Officer) \u2014 healthcare transportation revenue figure" },
    { org: "FedEx Newsroom", detail: "FedEx Supply Chain divestiture announcement \u2014 CEO Raj Subramaniam on healthcare, automotive, aerospace, and data centers as strategic focus verticals" },
    { org: "FedEx Newsroom / SEC 8-K", detail: "FedEx Freight spin-off, completed June 1, 2026" },
    { org: "FedEx Newsroom", detail: "\u201CFedEx Launches Dedicated Life Sciences Organization,\u201D July 9, 2026 \u2014 Nick Gennari appointment and background" },
    { org: "FedEx.com Product Pages", detail: "Surround, SenseAware ID, and Priority Alert \u2014 tier structure and service details" },
    { org: "FedEx 2026 Investor Day", detail: "February 2026 (Vishal Talwar, EVP & Chief Digital/Information Officer) \u2014 AI integration target, RFID strategy" },
    { org: "FedEx Chief Data & Analytics Officer", detail: "Public statements on RFID customer-facing piloting status" },
  ];

  let curY = 1.55;
  const rowH = 0.72;
  sources.forEach((src, i) => {
    if (i % 2 === 0) {
      s.addShape("roundRect", { x: 0.5, y: curY, w: 12.3, h: rowH, rectRadius: 0.05, fill: { color: OFFWHITE }, line: { type: "none" } });
    }
    s.addText(src.org, { x: 0.75, y: curY, w: 3.6, h: rowH, fontFace: FONT_BODY, fontSize: 11.5, bold: true, color: PURPLE_DK, valign: "middle" });
    s.addText(src.detail, { x: 4.5, y: curY, w: 8.1, h: rowH, fontFace: FONT_BODY, fontSize: 10.5, color: INK, valign: "middle", lineSpacingMultiple: 1.1 });
    curY += rowH;
  });

  footer(s, "Appendix \u2014 Sources");

  s.addNotes("Sources referenced throughout this presentation.");
}

pres.writeFile({ fileName: "../output/FedEx_MI_Commercialization_Strategy_HANDOFF.pptx" }).then(() => {
  console.log("main deck done");
});
