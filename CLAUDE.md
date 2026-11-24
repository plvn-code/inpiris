# IN PIRIS — перетяжка, реставрация, изготовление мягкой мебели (Алматы)

Client: IN PIRIS «мебельная компания» (Instagram @in_piris, 4K; since 14 Nov 2005 — 21 год in 2026), ул. Черноморская 12, Алматы 050050. WhatsApp +7 705 181 18 19, тел. +7 (727) 327-54-73, сайты в их сторис: 3275473.kz / inpiris.kz, руководитель Дмитрий Геннадиевич. Claims used (all from their posts): 1500+ тканей, бесплатный выезд технолога с образцами, договор с фиксированной ценой, гарантия 12 мес, расчёт по фото за 15 минут, перетяжка в 2–3 раза дешевле нового.
Brief 2026-11-24: «как OLBERG, но круче и красивее в цветах и шрифтах», **бордово-вишнёвый + графитовый**. **Talk to the user in Russian; site copy Russian.** Read `docs/STATUS.md` first.

## Commands
```bash
npm run build && npm start               # production on :3030
kill $(lsof -ti tcp:3030 -sTCP:LISTEN)   # restart only our port
npm run lint && npx tsc --noEmit         # must stay clean
open -a "Google Chrome" http://localhost:3030
```
`node_modules` → symlink to `~/Desktop/nudes/node_modules`; `research/.venv` → `~/Desktop/nudes/research/.venv`. `/img/*` is served `immutable` — when replacing an image, give it a new filename.

## Stack
Next.js 15 App Router · React 19 · TS strict · plain CSS (`src/app/globals.css`) · **Unbounded** (display, uppercase) + **Manrope** (text) · no UI/animation libs.
Palette: graphite #141416/#19191c/#222226, paper #efedea, cherry #8e1b2e / #6e1222 / #4a0b16, hi #c0394d.

## Layout (single landing page)
```
src/lib/site.ts           all copy & data: contacts, stats, services, before/after cases, steps, fabrics, compare table, projects, FAQ, promo (auto-hides after 2026-11-30)
src/components/Chrome     Logo (IN + SVG cherry slash + PIRIS), Header (hide on scroll, circle-reveal mobile menu), MobileBar (call / WhatsApp)
src/components/BeforeAfter draggable comparison slider (+ keyboard range, one-time hint sweep)
src/components/Sections   Services (panels video on hover), Cases (filter tabs), Quote (builds a WhatsApp message), Promo
src/app/page.tsx          hero (title line reveal, BA slider, cherry glow, ticker) · stats · services · до/после · process + price parts · quote · fabrics · projects masonry · compare · promo · FAQ · contacts/footer
public/img/w              ba-<case>-b / -a (4:5), w-* works, h-* HoReCa, detail-*, fabric · public/video/panels.mp4
research/                 feed.json (IG posts + captions; media URLs expire) + crops.py (crop spec; raw photos deleted for disk)
```
No backend: every CTA opens WhatsApp (wa.me) with a prefilled message. Never put state classes on `[data-reveal]`.
Don't open IG stories/highlights in the user's Chrome (marks their account as a viewer).
