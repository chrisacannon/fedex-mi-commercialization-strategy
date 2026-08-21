const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

const PURPLE_DK = "2E0E5C";
const PURPLE = "4D148C";
const ORANGE = "FF6600";
const WHITE = "FFFFFF";
const OFFWHITE = "F7F6FA";
const LILAC = "E9E1F5";
const INK = "231F35";
const GRAY = "6E6A7C";
const GREEN_BG = "E1F5EE";
const GREEN_TXT = "0F6E56";
const BLUE_BG = "E6F1FB";
const BLUE_TXT = "185FA5";
const PURPLE_BG = "EEEDFE";
const PURPLE_TXT = "3C3489";

const FONT_HEAD = "Cambria";
const FONT_BODY = "Calibri";
const SLIDE_W = 13.333;

const s = pres.addSlide();
s.background = { color: WHITE };

s.addText("APPENDIX (OPTIONAL) \u2014 SALES ENABLEMENT MOCKUP", { x: 0.5, y: 0.32, w: 10, h: 0.3, fontFace: FONT_BODY, fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });
s.addText("M&I / Sensors \u2014 product & tier selector", {
  x: 0.5, y: 0.62, w: 12.3, h: 0.55, fontFace: FONT_HEAD, fontSize: 24, bold: true, color: PURPLE_DK,
});
s.addText("Sales one-pager \u2014 match industry and shipment need to the right offering in under two minutes", {
  x: 0.5, y: 1.18, w: 12.3, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: GRAY,
});

const rows = [
  { label: "Healthcare", cells: [
    { text: "Surround Premium", bg: PURPLE_BG, txt: PURPLE_TXT },
    { text: "SenseAware Subscription", bg: GREEN_BG, txt: GREEN_TXT },
    { text: "\u2014", bg: OFFWHITE, txt: GRAY },
  ]},
  { label: "Aerospace (AOG)", cells: [
    { text: "Surround Premium", bg: PURPLE_BG, txt: PURPLE_TXT },
    { text: "SenseAware Single Journey", bg: GREEN_BG, txt: GREEN_TXT },
    { text: "\u2014", bg: OFFWHITE, txt: GRAY },
  ]},
  { label: "Data Centers", cells: [
    { text: "Surround Preferred", bg: BLUE_BG, txt: BLUE_TXT },
    { text: "SenseAware Subscription", bg: GREEN_BG, txt: GREEN_TXT },
    { text: "RFID (future)", bg: OFFWHITE, txt: GRAY },
  ]},
  { label: "General High-Value", cells: [
    { text: "Surround Select / Preferred", bg: BLUE_BG, txt: BLUE_TXT },
    { text: "SenseAware Single Journey", bg: GREEN_BG, txt: GREEN_TXT },
    { text: "\u2014", bg: OFFWHITE, txt: GRAY },
  ]},
];

const colHeaders = ["Time-Critical Intervention", "Environmental Monitoring", "Asset Visibility Only"];

const labelW = 2.6, colW = 3.2, gap = 0.06, startX = 0.5, startY = 1.75, rowH = 0.95, headerH = 0.55;

// column headers
s.addShape("rect", { x: startX, y: startY, w: labelW, h: headerH, fill: { color: OFFWHITE }, line: { color: WHITE, width: 1 } });
colHeaders.forEach((h, i) => {
  const x = startX + labelW + gap + i * (colW + gap);
  s.addShape("rect", { x, y: startY, w: colW, h: headerH, fill: { color: OFFWHITE }, line: { color: WHITE, width: 1 } });
  s.addText(h, { x: x + 0.1, y: startY, w: colW - 0.2, h: headerH, fontFace: FONT_BODY, fontSize: 11, bold: true, color: GRAY, valign: "middle" });
});

rows.forEach((row, r) => {
  const y = startY + headerH + r * (rowH + gap);
  s.addShape("rect", { x: startX, y, w: labelW, h: rowH, fill: { color: WHITE }, line: { color: OFFWHITE, width: 1 } });
  s.addText(row.label, { x: startX + 0.15, y, w: labelW - 0.3, h: rowH, fontFace: FONT_BODY, fontSize: 13, bold: true, color: INK, valign: "middle" });
  row.cells.forEach((c, ci) => {
    const x = startX + labelW + gap + ci * (colW + gap);
    s.addShape("rect", { x, y, w: colW, h: rowH, fill: { color: c.bg }, line: { color: WHITE, width: 1 } });
    s.addText(c.text, { x: x + 0.15, y, w: colW - 0.3, h: rowH, fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: c.txt, valign: "middle" });
  });
});

const noteY = startY + headerH + rows.length * (rowH + gap) + 0.2;
s.addShape("roundRect", { x: 0.5, y: noteY, w: 12.3, h: 0.9, rectRadius: 0.06, fill: { color: LILAC }, line: { type: "none" } });
s.addText("This is a starting hypothesis, not a validated map \u2014 refine using shipment volume, intervention frequency, and tenure data by tier and industry as it becomes available.", {
  x: 0.75, y: noteY, w: 11.8, h: 0.9, fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: PURPLE_DK, valign: "middle", lineSpacingMultiple: 1.2,
});

s.addText("Illustrative mapping for candidate use \u2014 not a confirmed FedEx segmentation. Priority Alert intentionally omitted; consolidates into Surround Premium per portfolio strategy.", {
  x: 0.5, y: noteY + 1.05, w: 12.3, h: 0.35, fontFace: FONT_BODY, fontSize: 9.5, color: GRAY,
});

s.addText("Optional Appendix \u2014 Sales Enablement Mockup (standalone, not in core deck)", {
  x: 0.5, y: 7.13, w: 8, h: 0.3, fontFace: FONT_BODY, fontSize: 9, color: GRAY,
});
s.addText("Chris Cannon  |  FedEx Business Strategy Principal Interview", {
  x: SLIDE_W - 6.5, y: 7.13, w: 6, h: 0.3, fontFace: FONT_BODY, fontSize: 9, color: GRAY, align: "right",
});

s.addNotes("Standalone reference slide. Not part of the core 6-slide deck. Add to the main file only if you decide during rehearsal that Slide 4's Beat 3 (sales enablement) benefits from a visual anchor. If used, keep the caveat text visible — the matrix is intentionally simplified to a primary-scenario-per-vertical view, not a complete decision tool.");

pres.writeFile({ fileName: "../output/Sales_Enablement_Mockup_STANDALONE.pptx" }).then(() => {
  console.log("standalone mockup done");
});
