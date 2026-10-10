# PRD — FACETTE & CO Website

Version 1.0 · Source of truth: /docs/homepage-brief.md, /docs/vertical-pages.md, /docs/brand-guidelines.md
Rule for any AI agent: copy must match the docs EXACTLY. Do not invent or add text.

## 1. Product Summary
A cinematic, editorial B2B website for FACETTE & CO, a design-led house across four verticals:
Gemstones · Design & Manufacturing · Fashion Hardware · Corporate Gifting.
It must feel like a modern luxury house × design studio × precision manufacturer. NOT a jewellery ecommerce site.

## 2. Goals
1. Capture attention with a scroll-driven hero.
2. Show the four capabilities visually.
3. Establish the brand philosophy.
4. Demonstrate global reach.
5. Convert visitors into B2B enquiries.

Success metrics: enquiry form submissions, scroll depth to the enquiry section, clicks from verticals to their pages.

## 3. Audience
Jewellery designers, fashion/accessory brands, manufacturers, retail buyers, corporate gifting managers. Global B2B.

## 4. Brand Requirements
- Personality: refined, precise, dependable, modern, authentic. Quiet authority, never showy.
- Colours: Deep Emerald #0E3D3D · Rich Emerald #05624C · Champagne Gold #D5B581 · Soft Ivory #E9E4DC · Deep Charcoal #232A36 · Bone White #D6D5D0
- Gradients (sparingly): Deep→Rich Emerald; Champagne Gold→Soft Ivory
- Fonts: IvyPresto Headline (headlines, hero, editorial statements) · Nohemi (subheadings, callouts) · Ronzoni (body, captions)
- Logo: Primary (stacked), Horizontal, Wordmark, Brandmark. Clear space = ⅓ of logo width. Never alter the proportions.
- Hero/dark sections use black/charcoal-to-emerald environments with gold accents.

## 5. Scope
### In scope (Phase 1): Homepage
| # | Section | Requirements |
|---|---|---|
| 01 | Header | Logo FACETTE & CO. Nav: Gemstones, Design & Manufacturing, Fashion Hardware, Corporate Gifting, About, Enquire. Minimal, understated. |
| 02 | Hero | Scroll-triggered ring animation (no static image). Ring is photorealistic, sculptural, on deep black/charcoal. Scroll story: full ring rotating → camera moves closer to gemstone → ring deconstructs (MATERIAL → DESIGN → CRAFT) → fragments of gemstones, jewellery, metal, hardware, objects → resolves into the next section. Smooth, restrained, cinematic easing. Copy: eyebrow "MATERIAL • DESIGN • CRAFT"; headline "WHERE MATERIAL BECOMES POSSIBILITY."; sentence "Exceptional materials, considered design and precise execution — created for those who imagine beyond the ordinary."; line "GEMSTONES · DESIGN & MANUFACTURING · FASHION HARDWARE · CORPORATE GIFTING". No buttons clutter. |
| 03 | Four verticals | Large image/video compositions with refined borders (Anduril-style grid). No conventional cards. Each: category name + ONE sentence only. |
| 04 | Philosophy | Typography-led, scroll-based text reveals. Eyebrow BEYOND THE CONVENTIONAL; statements and closing "MATERIALS WITH POSSIBILITY. OBJECTS WITH INTENT." (exact text in brief). |
| 05 | Connected by Craft | Dark world map, subtle gold outlines, glowing pulsing markers, markers illuminate on scroll. Headline "WE MOVE WHERE / WHERE MATERIAL, EXPERTISE AND OPPORTUNITY MEET." (second line italic serif). Three columns: Europe (Antwerp, Milan, Brussels, Paris), Middle East (Dubai, Riyadh), Asia (Surat, Jaipur, Hong Kong, Tokyo) with descriptors. No large paragraph. |
| 06 | Enquiry | Two columns. Left: eyebrow, headline, supporting copy, optional line "INDIA · GLOBAL B2B ENQUIRIES". Right: form. |
| 07 | Footer | Logo, four verticals line, Instagram · LinkedIn · Contact · Privacy, closing "CRAFTED FOR THOSE WHO CREATE." |

Vertical copy (exact):
- GEMSTONES: Natural gemstones selected for colour, character and possibility.
- DESIGN & MANUFACTURING: From an idea to a precisely finished piece.
- FASHION HARDWARE: Distinctive metal components made to define the details.
- CORPORATE GIFTING: Thoughtfully crafted objects made to be remembered.

Enquiry form fields: Full Name · Company & Role · Country/Region · Product Interest (Gemstones, Design & Manufacturing, Fashion Hardware, Corporate Gifting, Multiple / Not sure) · Project/Requirement · optional file upload (reference/specification/brief) · How did you hear about us? (Referral, LinkedIn, Instagram, Exhibition, Search, Other). Fields use thin gold lines, not boxes. CTA: "SEND ENQUIRY →" full-width muted gold. Under it: "YOUR REQUIREMENT WILL BE REVIEWED BY OUR TEAM." Do NOT promise a response time.

### In scope (Phase 2): Four vertical landing pages
Pages: Gemstones, Design & Manufacturing, Fashion Hardware, Corporate Gifting.
Rules: one major visual integrated into the hero; no separate gallery, no scroll interaction, no reassurance/proof section.
Page structure per vertical (copy lives in /docs/vertical-pages.md):
- Gemstones: Hero · What you need · How we work (4 steps) · Specifications · Requirement builder · Enquire
- Design & Manufacturing: Hero · What you need · Why Facette · Development process (6 steps) · Capabilities · Development & confidentiality · Requirement builder · Enquire
- Fashion Hardware: Hero · What you need · Why Facette · How we work (4 steps) · Capabilities · Requirement builder · Enquire
- Corporate Gifting: Hero · What you need · How we work (4 steps) · Gifting applications · Requirement builder · Enquire

### Out of scope
Ecommerce, cart, payments, user accounts, blog, multi-language (initial).

## 6. Content Rules
- Show only locations that reflect real presence, network or sourcing relationships. Client must confirm the list before launch.
- Do not promise response times.
- Claims on certification (IGI/GIA) and NDA/single-piece sampling are as written in the vertical docs. Client confirms before launch.
- Image/video content must be text-light, luxury and macro-detail driven.

## 7. Experience Requirements
- Hierarchy: Hero → Four verticals → Philosophy → Global presence → Enquiry.
- Motion: slow, smooth, restrained. Respect prefers-reduced-motion.
- Responsive: desktop, tablet, mobile. The hero must degrade gracefully on mobile.
- Accessibility: contrast AA, keyboard navigable, alt text, labelled form fields.

## 8. Assets Needed From Client
Official logo SVGs (all variants) · font files (IvyPresto, Nohemi, Ronzoni) · brand photography · confirmed location list · social links · enquiry email/CRM destination · privacy policy text.

## 9. Acceptance Criteria
- All copy matches the docs word for word.
- Only brand palette and fonts are used.
- The hero animation is scroll-controlled and runs at a smooth frame rate on a mid-range laptop.
- Form validates and delivers submissions to the client inbox/CRM.
- Lighthouse: Performance ≥ 80, Accessibility ≥ 90 on desktop.
- Works on the latest Chrome, Safari, Edge, Firefox and iOS/Android browsers.

## 10. Milestones
M1 Setup + design tokens · M2 Header + hero · M3 Verticals + philosophy · M4 Map + enquiry + footer · M5 Responsive + QA · M6 Four vertical pages · M7 Launch checks.
