# FedEx M&I Commercialization Strategy — Interview Case Study

A commercialization strategy presentation built for a FedEx Business Strategy Principal (Go-to-Market & Commercialization) interview case prompt, plus the full working record of how it was researched, drafted, and revised.

## What's in this repo

- **`/output`** — the final deliverables:
  - `FedEx_MI_Commercialization_Strategy.pptx` — the presentation deck (title + 5 core sections + sources appendix), with full speaker-note scripts on every slide.
  - `FedEx_MI_Commercialization_Strategy_HANDOFF.pptx` — the same deck with condensed bullet-point notes, intended for sharing with others after a presentation rather than for personal rehearsal.
  - `Sales_Enablement_Mockup_STANDALONE.pptx` — an optional single-slide mockup of a sales enablement decision framework referenced (but not required) by the deck.
- **`/build`** — the source: Node.js scripts (using [pptxgenjs](https://gitbrent.github.io/PptxGenJS/)) that generate the `.pptx` files programmatically. Regenerate any file with `node build/build_main.js` (etc.) from the repo root, or `cd build && npm install && node build_main.js`.
- **`PROJECT_CONTEXT.md`** — a working log capturing the research, decisions, corrections, and reasoning behind the deck's content: verified claims and their sources, structural choices that were tried and rejected, factual errors caught mid-process and fixed, and the case for why the deck says what it says.

## Why the context file is here

Most of the interesting work in a strategy exercise like this isn't the final slide — it's the reasoning that got you there: which claims are verified versus inferred, which framings were tried and abandoned because they didn't hold up under scrutiny, and where the analysis changed because a fact-check surfaced something new. `PROJECT_CONTEXT.md` is that record, left mostly intact (with personal/private details removed) because it's a more honest picture of the process than a polished deck on its own.

## Case prompt (summary)

FedEx was expanding its Monitoring & Intervention (M&I) and Sensors portfolio — Shipment Visibility & Tracking, M&I Services (Surround, Priority Alert), Sensor Solutions (SenseAware, RFID), and related capabilities — but the products had evolved independently, resulting in inconsistent packaging, pricing, and positioning. The assignment: develop a commercialization strategy covering Portfolio Strategy, Packaging & Pricing Strategy, Positioning & Promotion Strategy, Distribution & Adoption Strategy, and Success Metrics.

## Notes

- All factual claims about FedEx in this deck are sourced to public materials (earnings calls, investor day transcripts, newsroom releases, product pages) — see the Sources appendix slide and `PROJECT_CONTEXT.md` for full attribution.
- Several claims are explicitly labeled as illustrative or hypothesis-stage rather than confirmed fact, where the underlying data wasn't publicly available. This is called out directly in the deck and notes rather than presented as more certain than it is.
- This was built as a real interview deliverable, not a generic template — some content is specific to that context and may not generalize cleanly to other uses.
