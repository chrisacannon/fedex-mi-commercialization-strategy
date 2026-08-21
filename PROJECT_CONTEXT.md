# Project Context: FedEx M&I Commercialization Strategy

This document captures the research and reasoning behind the deck in `/output` — what's verified versus inferred, structural approaches that were tried and rejected, and errors that were caught and corrected along the way. The deck itself shows the conclusions; this shows the work.

## The assignment

FedEx's Monitoring & Intervention (M&I) and Sensors portfolio — shipment visibility, active intervention services (Surround, Priority Alert), sensor hardware (SenseAware), and RFID asset tracking — evolved as separate products with inconsistent packaging, pricing, and positioning. The task: a commercialization strategy covering Portfolio Strategy, Packaging & Pricing Strategy, Positioning & Promotion Strategy, Distribution & Adoption Strategy, and Success Metrics.

## Verified data and sourcing

Every factual claim about FedEx in the deck is sourced to public materials, not assumed:

- FedEx FY26 total revenue: $94.7B. Healthcare transportation revenue: "nearly $10 billion" exiting FY26 (~10.6%, "approaching 11%" of total) — verified word-for-word against FedEx's own Q4 FY26 earnings presentation and call transcript (Brie Carere, EVP & Chief Customer Officer). The "~11% of total revenue" figure is a derived calculation, not something FedEx stated directly, and the deck's citation is written to keep that distinction clear rather than presenting the math as part of the quote.
- CEO Raj Subramaniam, on FedEx's Supply Chain divestiture: "enables FedEx to further increase our focus on providing our unique expertise for high-value verticals, including healthcare, automotive, aerospace and data centers" — a direct, on-record quote used to ground why aerospace and data centers appear as the deck's next-priority verticals, rather than treating that as a guess.
- FedEx Life Sciences (launched July 2026) consolidates capability that already existed in fragmented form — a certification, regional service centers, existing leadership — under one organization. This is the basis for the deck's central structural argument, but is explicitly treated as a *directional* precedent, not literal proof that FedEx has already solved the specific pricing/packaging problem this strategy addresses. That distinction is stated in the deck's own speaker notes.
- Surround's three tiers (Select, Preferred, Premium) and Priority Alert's positioning were built from FedEx's public product pages. Priority Alert reading as a legacy product that predates Surround's platform — an inference, not a confirmed internal fact — is flagged as such directly in the deck.
- RFID's role as internal infrastructure (not yet a mature customer product), and its plausible connection to Surround's predictive engine, are grounded in FedEx's own public statements (2026 Investor Day, Chief Data & Analytics Officer commentary) but the *connection* between the two is the author's own synthesis of two separate statements, not something FedEx has said directly — again, flagged as such.

Full source list is in the deck's Appendix slide.

## Structural decisions, corrections, and rejected approaches

**The SenseAware naming problem.** "SenseAware" turned out to name two commercially unrelated things: SenseAware ID, a feature bundled into Surround's top tier, and SenseAware Mobile, a genuinely standalone hardware product with its own pricing model. Early drafts used "SenseAware" generically; once the distinction surfaced, every reference in the deck was corrected to specify which one is meant, and the naming collision itself became a named recommendation in the Pricing section.

**Priority Alert as a legacy-consolidation candidate.** Comparing Priority Alert's product description (a single assigned account analyst, marketed by industry vertical) against Surround Premium's (a dashboard-and-team model, also with 24/7 specialists) initially looked like a contradiction — both claim similar service levels. The actual distinction is *how* the service is delivered — a system-orchestrated team versus a dedicated personal relationship — not whether humans are involved at all. Getting this distinction right mattered because the original, looser phrasing didn't hold up under scrutiny.

**Rejected: a single shared pricing ladder for Surround and SenseAware Mobile.** An early idea was to force both products onto one Core/Advanced/Premium-style tier structure. This was reconsidered for two reasons: the products answer genuinely different questions (Surround scales *how much FedEx does for you*; SenseAware Mobile scales *how you commit to paying*), and the deck's own healthcare example requires a customer to use both products simultaneously at their highest tiers — which a single ladder structure can't represent, since you don't need step 2 and step 4 of one ladder at the same time. The two products stayed structurally separate, unified instead by a shared way of describing any offering rather than a shared tier list.

**Correcting an overclaim on the Positioning slide.** An early draft asserted that the deck's central marketing narrative ("we protect it") was "proven" by healthcare's results. On review, that conflated two different things: the underlying mechanic (active protection, continuous monitoring) has real, measurable revenue behind it — but the specific narrative framing was never tested by FedEx at all. The slide was rewritten to make the honest claim (the mechanic works) rather than the unearned one (the story is proven).

**Correcting an overclaim in a sales-enablement mockup.** A draft sales tool mapped each customer industry to a single "correct" product tier, presented as settled guidance. Without real usage data (shipment volume by tier, intervention frequency, customer tenure), that's an asserted hypothesis, not a validated fact — so the mockup and its accompanying language were revised to say exactly that: a starting framework meant to be refined with real data, not a finished rulebook.

## Tools

The deck is generated programmatically with [pptxgenjs](https://gitbrent.github.io/PptxGenJS/) — see `/build`. Building it as code rather than by hand in PowerPoint made it straightforward to catch and propagate corrections (like the SenseAware naming fix) consistently across every place a term appeared, rather than hunting through slides manually.
