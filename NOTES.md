# Zeta Advantage · ZIP™ one-pager (Claude Fable 5.1 build)

Plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies.
Open `index.html` directly, or serve the folder with any static server.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content and structure, section by section, with comments |
| `styles.css` | Design system, layout, animation, responsive rules |
| `main.js` | Contact email wiring, mobile nav, reveal-on-scroll, stat count-up |

Fonts load from Google Fonts (Sora, Inter, IBM Plex Mono) with system fallbacks, so the page still renders offline.

## One thing to set before launch

The contact email is pending. In `main.js`, set:

```js
var CONTACT_EMAIL = "hello@zetadvantage.com";
```

Every "Start a Conversation" and "Request an Ingredient" button opens the visitor's mail app with that address and a prefilled subject. The "Direct email: coming soon" line in the closing section fills in automatically.

## Images needed

The page is intentionally light on imagery. Only one visible placeholder exists.

1. **Founder portrait, Richard Drucker.** Founder section. Replace the `.img-placeholder` block with an `<img>`. Recommended 4:5 crop, at least 800 × 1000 px.
2. **Logo.** The header and footer use a text wordmark plus a small code-drawn hexagon mark as a stand-in. Swap in the real logo when available.
3. **Optional, later.** A facility or blending photo could sit in the Scale section. An HTML comment marks the spot.

Everything else on the page is drawn in code: the hero bond graphic, the shelf visual, process icons, card icons, the scale bar, and the timeline.

## Decisions reflected in this build

- Hero headline "Carbon Bond Technology. Now in powder." with eyebrow "Introducing ZIP™ by Zeta Advantage."
- Speed claim written as "under a minute" / "< 1 min" everywhere it appears.
- Stats strip: 30+ years, 100+ ingredients in development, under 1 minute, 10 to 1,000 kg.
- Short problem section limited to the crowded-shelf argument, headlined with the banner line "Give your product the cutting edge."
- Three-step business process diagram, followed by a separate "Why carbon?" science section drawn from the Carbon Bond Technology resource.
- The Zeta Difference section carries the four words (Activator, Catalyst, Carrier, Accelerator) written as design intent, plus the printed banner's bullet list under "ZIP™ at a glance."
- Three exploratory benefit cards. The "Powered by ZIP™" mark appears as a small concept badge on the third card only.
- Curated ingredient showcase of ten named ingredients from the Aug 6 list. No live search in this version.
- "Request an Ingredient" kept. "ZIP Blends" held.
- Three audience groups. Practitioner and private-label lines mentioned inside the brands group.
- Scale section with the 10 to 1,000 kg range and three tiers.
- Founder section uses "The hard part wasn't carbon bonding. It was making it powder." with the failed-first-attempt beat framed as Richard's own expectation. Name only, no title or credentials. No personal health story.
- Four FAQ questions.
- One SupplySide Global line, no numbers, no ordering promise.
- Closing headline "Give your next formula the Zeta Advantage." with a mailto button and a pending email line. No form.
- No evidence section, no dark-field images, no QR code, no "People, Planet, Purpose," and no company-name references beyond Richard Drucker's own name.
- Banner tagline "Advanced Nutrition. Superior Absorption. Engineered for rapid nutrient delivery." closes the page above the footer.

## Copy worth a second look before the conference

- The founder pull quote is lightly edited from the Sept 2 transcript: "I didn't know if I'd be able to do this in my lifetime, let alone this year." Confirm Richard is comfortable with it on the page.
- The "ZIP™ at a glance" list reproduces the printed banner bullets, including "cellular detoxification" and "cost-per-serving efficiency." They are there because the banner content was requested. Remove any line Richard would rather not defend in a clinical room.
- The footer carries the standard FDA disclaimer. Keep or adjust per counsel.
