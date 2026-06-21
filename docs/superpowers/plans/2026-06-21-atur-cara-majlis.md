# Atur Cara Majlis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an "Atur Cara Majlis" (Event Program) section between Details and RSVP on the wedding page.

**Architecture:** A new server component `Program.jsx` matching the card layout of `Details.jsx`, imported and inserted in `page.js`.

**Tech Stack:** Next.js 14 App Router, JSX, Tailwind CSS

## Global Constraints

- No `'use client'` directive — static server component only
- Follow existing card pattern: `bg-[#FEFEFE] rounded-2xl p-8 md:p-10 shadow-lg shadow-stone-200/50 border border-stone-100 text-center`
- Section background: `bg-cream`, padding: `py-16 px-4`
- Container max-width: `max-w-[400px] mx-auto`
- Use same typography tokens as Details (font-sans, font-serif, amber-700 labels, stone-700 values)

---

### Task 1: Create Program.jsx component

**Files:**
- Create: `src/components/Program.jsx`
- Modify: `src/app/page.js` (import + insert)

**Interfaces:**
- Consumes: nothing (standalone server component)
- Produces: `<Program />` component with `id="program"` section

- [ ] **Step 1: Create Program.jsx**

```jsx
export default function Program() {
  return (
    <section id="program" className="py-16 px-4 bg-cream">
      <div className="max-w-[400px] mx-auto">
        <div className="bg-[#FEFEFE] rounded-2xl p-8 md:p-10 shadow-lg shadow-stone-200/50 border border-stone-100 text-center">

          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
            Atur Cara Majlis
          </h2>
          <div className="w-12 h-0.5 bg-amber-500/50 mx-auto mt-6 mb-8" />

          <div className="space-y-6">
            <div>
              <p className="text-amber-700 font-sans font-bold text-sm uppercase tracking-wider mb-1">
                Jamuan Makan
              </p>
              <p className="text-stone-700 font-sans">
                12 tengah hari — 4 petang
              </p>
            </div>

            <div>
              <p className="text-amber-700 font-sans font-bold text-sm uppercase tracking-wider mb-1">
                Ketibaan Pengantin
              </p>
              <p className="text-stone-700 font-sans">
                12.30 tengah hari
              </p>
            </div>
          </div>

          <div className="w-12 h-0.5 bg-amber-500/50 mx-auto mt-8 mb-6" />

          <p className="text-stone-600 font-sans text-sm italic leading-relaxed">
            Sila RSVP kehadiran anda sebelum 11 September 2026
          </p>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add import and insert into page.js**

Edit `src/app/page.js`:
- Add import: `import Program from '@/components/Program';`
- Insert `<Program />` between `<Details />` and the RSVP section

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: No lint errors

- [ ] **Step 5: Commit**

```bash
git add src/components/Program.jsx src/app/page.js docs/superpowers/plans/2026-06-21-atur-cara-majlis.md
```
