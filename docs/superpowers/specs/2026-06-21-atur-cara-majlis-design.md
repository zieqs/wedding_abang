# Atur Cara Majlis (Event Program) Section

## Overview

Add a new "Atur Cara Majlis" (Order of Events) section to the wedding landing page, placed between the existing Details section and the RSVP section. Displays the day's program timeline in a card format matching the existing Details component.

## Sections

### Layout & Placement

- Section ID: `program`
- Placed between `<Details />` and `<section id="rsvp">` in `src/app/page.js`
- Background: `bg-cream` (matching Details)
- Container: `max-w-[400px] mx-auto` centered
- Card: `bg-[#FEFEFE] rounded-2xl p-8 md:p-10 shadow-lg shadow-stone-200/50 border border-stone-100 text-center`

### Component: `src/components/Program.jsx`

Server component (no `'use client'` directive — static content only). The component renders a `<section>` wrapper with the card inside.

### Content

**Heading:**
- Title: "Atur Cara Majlis" in `font-serif text-4xl md:text-5xl text-stone-800 leading-tight`
- Underline divider: `w-12 h-0.5 bg-amber-500/50 mx-auto`

**Program Events (in order):**

| Label | Value |
|-------|-------|
| Jamuan Makan | 12 tengah hari — 4 petang |
| Ketibaan Pengantin | 12.30 tengah hari |

Each event follows the Details pattern:
- Label: `text-amber-700 font-sans font-bold text-sm uppercase tracking-wider`
- Value: `text-stone-700 font-sans`

Separator divider (`w-12 h-0.5 bg-amber-500/50 mx-auto`) between heading and events for visual grouping.

**Footer note (amber divider + italic text):**
- Divider: `w-12 h-0.5 bg-amber-500/50 mx-auto`
- Text: "Sila RSVP kehadiran anda sebelum 11 September 2026" in `text-stone-600 font-sans text-sm italic`

### Styling

- Section padding: `py-16 px-4`
- Space between events: `space-y-6`
- Italic note at bottom: `mt-6 italic`

### Files Changed

1. **Create** `src/components/Program.jsx` — new component
2. **Edit** `src/app/page.js` — import Program and insert between Details and RSVP

## Relationship to Existing Code

Follows the same patterns as `Details.jsx` — same card, same typography, same spacing tokens. No new dependencies or utilities needed. No state, effects, or client-side logic.
