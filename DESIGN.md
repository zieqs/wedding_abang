# Design System — Wedding Abang

## Layout
- **Mobile-first**: Container maxes at 430px, centered on `bg-stone-300` for a "phone in hand" feel.
- **Full-height sections** stacked vertically, anchored by `#id` links — no page routing.
- **Body**: `font-sans text-stone-800 antialiased`.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#fefce8` | Page background |
| `stone-50` | `#faf8f5` | Gallery section background |
| `stone-100` | `#f5f0eb` | RSVP section background, envelope paper |
| `stone-300` | `#d4c5b8` | Outer body background |
| `stone-800` | `#4f3f39` | Primary text |
| `stone-900` | `#3d322e` | Footer background |
| `amber-500` | `#b45309` | Dividers, accent borders |
| `amber-700` | `#78350f` | Buttons, wax seal |
| `[#FEFEFE]` | `#FEFEFE` | Card surface (Details section) |

## Typography

| Tailwind Class | Font | Weights | Usage |
|---|---|---|---|
| `font-sans` | Lato | 300, 400, 700 | Body text, labels, buttons, small print |
| `font-serif` / `font-cursive` | Playfair Display | 400, 600, 700 (incl. italic) | Section headings, formal/ceremonial text |
| `font-parisienne` | Parisienne | 400 (cursive only) | Couple names (planned for replacement — low legibility) |

Google Fonts loaded via `<link>` in `layout.js` (not `next/font`).

## Spacing
- **Section vertical padding**: `py-16` or `py-20`
- **Horizontal padding**: `px-4`
- **Card padding**: `p-8 md:p-10`
- **Max content width within sections**: `max-w-[400px]` or `max-w-2xl`

## Key Components

### Dividers
`w-12 h-0.5 bg-amber-500/50 mx-auto` — thin amber rule used between content blocks.

### Cards
`bg-[#FEFEFE] rounded-2xl p-8 md:p-10 shadow-lg shadow-stone-200/50 border border-stone-100` — Details section card.

### Buttons
- **Solid (RSVP form)**: `bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition`
- **Outline (map links)**: `rounded-full border border-amber-400/40 text-amber-700 text-sm hover:bg-amber-50 transition-colors`

### Gallery Grid
2 columns (3 on `md+`), `aspect-square`, `rounded-xl`, `object-cover`, hover `scale-110`.

### Hero
Full-screen `<video>` (`object-cover`, autoPlay, muted, loop) at `public/videos/hero.mp4`.

## Envelope Animation
- Two paper halves with `rotateY(±130deg)` folded state, animate to `rotateY(0)` on tap.
- Wax seal: amber-700 circle with amber-500 border, `sealPulse` keyframe (2.5s infinite pulse).
- **Sequence**: tap → opening (400ms) → unfolding (+500ms) → exit (+500ms) → site revealed.
- **Gate**: `sessionStorage.getItem('envelope-seen')` — triggers once per browser session.
