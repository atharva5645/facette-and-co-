# TRD — FACETTE & CO Website

Companion to PRD.md. Agents (Antigravity or Nemotron): read PRD.md, TRD.md and PROGRESS.md before every task. Do ONE task, then tick it in PROGRESS.md.

## 1. Stack
- HTML5 + CSS3 + vanilla JS (ES modules). No framework.
- GSAP 3 + ScrollTrigger (cdnjs, pinned version, e.g. 3.12.5). Lenis for smooth scroll (optional, pinned).
- Map: inline SVG from a world GeoJSON (Natural Earth 110m), projected with equirectangular math or d3-geo (pinned CDN).
- Hosting: Netlify or Vercel (static). Form backend: Netlify Forms or Formspree.
- Why no framework: small static site, fewer tokens per edit, simpler handoff between AI models.

## 2. Folder Structure
```
facette-site/
├── docs/                      brief texts (read-only)
├── assets/
│   ├── logo/                  svg variants
│   ├── fonts/                 woff2 files
│   ├── images/                webp + jpg fallbacks
│   ├── video/                 mp4/webm, short loops
│   ├── sequence/ring/         ring-001.webp ... ring-120.webp
│   └── map/world.json
├── css/  tokens.css  base.css  header.css  hero.css  verticals.css  philosophy.css  map.css  enquiry.css  footer.css
├── js/   main.js  hero.js  reveal.js  map.js  form.js
├── index.html
├── gemstones.html  design-manufacturing.html  fashion-hardware.html  corporate-gifting.html
├── PRD.md  TRD.md  PROGRESS.md
```
Keep one concern per file so that edits stay small.

## 3. Design Tokens (css/tokens.css)
```css
:root{
  --deep-emerald:#0E3D3D; --rich-emerald:#05624C; --gold:#D5B581;
  --ivory:#E9E4DC; --charcoal:#232A36; --bone:#D6D5D0; --black:#070d0d;
  --grad-emerald:linear-gradient(90deg,#0E3D3D,#05624C);
  --grad-gold:linear-gradient(90deg,#D5B581,#E9E4DC);
  --font-head:"IvyPresto Headline","Cormorant Garamond",serif;
  --font-accent:"Nohemi","Manrope",sans-serif;
  --font-body:"Ronzoni","Manrope",sans-serif;
  --ease:cubic-bezier(.22,.7,.2,1);
  --pad:clamp(20px,5vw,80px);
}
```
@font-face with `font-display:swap`, woff2 only, preload the head font.

## 4. Hero: Scroll Ring Animation
**Approach (recommended): image sequence on canvas.**
1. Generate or render 90 to 150 frames of the ring: rotation → camera push-in → deconstruction → fragments. Export as WebP, 1920×1080, about 60 to 120 KB each.
2. `hero.js`: preload frames (first 10 immediately, the rest lazily), draw to `<canvas>` with `requestAnimationFrame`, and map `ScrollTrigger` progress (0 to 1) to the frame index with eased smoothing (`gsap.to(obj,{frame:..., ease:"none", scrub:0.5})`).
3. Section is `position:sticky` inside a ~400vh track. Text layers fade by progress ranges:
   - 0.00–0.15 eyebrow + headline + sentence visible
   - 0.15–0.35 copy fades out, camera push
   - 0.35–0.65 labels MATERIAL → DESIGN → CRAFT
   - 0.65–1.00 fragments, then a handoff to the verticals section
4. Fallbacks: mobile uses fewer frames (about 60 at 1080×1350 or smaller). `prefers-reduced-motion` shows a single static frame, no scrubbing.
5. **Alternative (cheaper):** Three.js with a GLB ring model and MeshPhysicalMaterial plus an HDRI. Heavier and riskier to get photoreal. Use only if a 3D model exists.

Performance: total hero payload ≤ 8 MB desktop, ≤ 4 MB mobile. Decode off the main thread (`createImageBitmap`).

## 5. Section Implementation Notes
- **Header:** sticky, transparent over the hero, solid `--black` with a gold hairline after scroll. Mobile: full-screen menu overlay.
- **Verticals:** CSS grid (2 columns: one tall tile + stacked tiles, as in the Anduril reference), 1px gold-tinted border, image/video `object-fit:cover`, hover scale 1.04 over 1.2s, label bottom-left, arrow bottom-right. Entire tile is a link to the vertical page. Video: muted, loop, playsinline, `preload="none"` and play on intersection.
- **Philosophy:** each line wrapped in a span; ScrollTrigger reveals opacity and y per line. The final statement is large (clamp 40–120px).
- **Map:** SVG paths with `fill:#0f1a18; stroke:var(--gold); stroke-opacity:.25`. Markers are `<circle>` pairs, with the outer ring animated via CSS keyframes (slow pulse). ScrollTrigger lights the markers in sequence. Optional slow pan/zoom by animating the viewBox. Location columns underneath; hovering a name highlights the matching marker.
- **Enquiry:** CSS grid 2 columns (1 on mobile). Inputs have `border:0;border-bottom:1px solid var(--gold)` and transparent backgrounds. Native `<select>`; file input styled with a label.
- **Footer:** minimal, centred.

## 6. Form Handling
- `<form name="enquiry" method="POST" data-netlify="true" enctype="multipart/form-data">` (or Formspree endpoint).
- Client-side validation (required: name, email or company, product interest, requirement). Add an **Email** field. The homepage brief omits it but the vertical forms include it, and without it the team cannot reply.
- Honeypot field plus rate limiting via the provider. Success message replaces the form (no page reload, using fetch).
- File upload: allow pdf, jpg, png, dwg, stl, zip; max 10 MB; validate type and size client-side AND server-side.
- Email notification to the client inbox. Optional CRM webhook (HubSpot/Zoho).
- Privacy: link to the Privacy page; do not log files in analytics.

## 7. Vertical Pages
Shared template: same header/footer/tokens. Each page has:
- hero with ONE integrated visual (static or short muted loop, no scroll interaction)
- sections as listed in PRD §5 Phase 2
- a "Requirement builder" section is a structured form posting to the same backend with a hidden `vertical` field
- `<title>` and meta description per page
Copy is loaded from /docs/vertical-pages.md; do not paraphrase.

## 8. Performance
- Images: WebP/AVIF with `srcset`, explicit width/height, lazy-load below the fold.
- JS: defer, ≤ 150 KB total excluding GSAP; no render-blocking scripts.
- CSS: critical styles inline for the header and hero.
- LCP target < 2.5 s, CLS < 0.1, INP < 200 ms. Check on a throttled mid-tier mobile profile.
- Cache static assets for 1 year (hashed names); HTML no-cache.

## 9. Accessibility and SEO
- Semantic landmarks, one H1 per page (hero headline), skip link, visible focus rings in gold.
- Colour contrast ≥ 4.5:1 for body text (ivory on emerald/black passes).
- Animations pause for `prefers-reduced-motion`; the canvas hero has an `aria-label` describing it.
- SEO: meta titles and descriptions, Open Graph image, `sitemap.xml`, `robots.txt`, JSON-LD Organization.

## 10. Security
- HTTPS only, HSTS, CSP restricting scripts to self and the CDN hosts used.
- Pin all CDN script versions (use versions at least two weeks old).
- Sanitise the form; no inline `eval`; validate uploads server-side.

## 11. Analytics
Privacy-friendly analytics (Plausible) or GA4 with cookie consent. Events: enquiry_submit, vertical_click, hero_complete, map_view.

## 12. Browser Support
Last 2 versions of Chrome, Edge, Firefox, Safari. iOS Safari 16+. Android Chrome.

## 13. QA Checklist
- [ ] Copy diff against docs shows zero differences
- [ ] Only brand colours and fonts used
- [ ] Hero scrubs smoothly forward and backward; the reduced-motion fallback works
- [ ] Verticals have no extra text
- [ ] Map locations confirmed by client
- [ ] Form delivers to the inbox; upload tested
- [ ] Responsive at 360, 768, 1024, 1440, 1920
- [ ] Lighthouse targets met
- [ ] No console errors; links work; favicon (brandmark) set

## 14. AI Agent Workflow (Antigravity → Nemotron handoff)
1. Always read PRD.md, TRD.md and PROGRESS.md first.
2. Work on one task only; edit only the files it names.
3. Never rewrite whole files for small changes.
4. After each task, tick PROGRESS.md and add a one-line note: files touched and what remains.
5. End each session with "NEXT TASK:" written in PROGRESS.md so any model can continue.
