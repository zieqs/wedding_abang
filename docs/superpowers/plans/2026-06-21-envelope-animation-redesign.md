# Envelope Animation Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the envelope intro animation to open like a book (double doors) with proper timing and minimalist envelope face details.

**Architecture:** Single file change to `src/components/Envelope.jsx`. Flip rotation direction, re-time animation phases, add decorative elements (border, sender text). No other files need changes.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, CSS 3D transforms.

## Global Constraints

- No TypeScript — project uses JSX only
- All Tailwind classes must use existing theme tokens (cream, stone, amber)
- Fonts: Playfair Display (serif/cursive), Lato (sans), Parisienne
- Envelope component is `'use client'`
- Wax seal must use `sealPulse` animation from `globals.css`

---

### Task 1: Rewrite Envelope.jsx

**Files:**
- Modify: `src/components/Envelope.jsx` (entire file)

**Interfaces:**
- Consumes: `onOpen` callback from parent `EnvelopeWrapper`
- Produces: Updated component with book-style opening animation

- [ ] **Step 1: Read current file**

```bash
cat src/components/Envelope.jsx
```

- [ ] **Step 2: Rewrite Envelope.jsx**

Replace the entire file with corrected rotation, timing, and visual details:

```jsx
'use client'

import { useState, useEffect, useCallback } from 'react'

const texture = {
  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.07\'/%3E%3C/svg%3E")',
  backgroundRepeat: 'repeat',
  backgroundSize: '200px 200px',
}

export default function Envelope({ onOpen }) {
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    try {
      if (sessionStorage.getItem('envelope-seen')) {
        onOpen()
      }
    } catch {
      // sessionStorage unavailable
    }
  }, [onOpen])

  const handleTap = useCallback(() => {
    if (phase !== 'idle') return
    setPhase('opening')
    // seal cracks + halves start opening with overlap
    setTimeout(() => setPhase('open'), 850)
    setTimeout(() => setPhase('exiting'), 1050)
    setTimeout(() => {
      try {
        sessionStorage.setItem('envelope-seen', 'true')
      } catch {
        // ignore
      }
      onOpen()
    }, 1450)
  }, [phase, onOpen])

  const isIdle = phase === 'idle'
  const isOpening = phase === 'opening'
  const isOpen = phase === 'open'
  const isExiting = phase === 'exiting'
  const isVisible = phase !== 'exiting'

  return (
    <div
      className="absolute inset-0 z-50 select-none"
      onClick={handleTap}
      style={{
        cursor: isIdle ? 'pointer' : 'default',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.4s ease',
        perspective: '1200px',
        backgroundColor: '#f5f0eb',
      }}
    >
      {/* Decorative border */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          border: '1.5px solid rgba(180, 83, 9, 0.25)',
          margin: '14px',
          borderRadius: '4px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Sender text — top left */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          top: '28px',
          left: '28px',
          opacity: isIdle ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <p className="font-serif italic text-xs text-stone-400 leading-tight">
          Hariez &amp; Sofea
        </p>
      </div>

      {/* Left half — swings open to the left */}
      <div
        className="absolute top-0 left-0 bottom-0 w-1/2 z-20"
        style={{
          backgroundColor: '#f5f0eb',
          ...texture,
          transformOrigin: 'right center',
          transform: isIdle
            ? 'rotateY(0deg)'
            : 'rotateY(-140deg)',
          transition:
            'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: isIdle ? '0s' : '0.25s',
          boxShadow:
            !isIdle
              ? 'inset -12px 0 20px -10px rgba(0,0,0,0.12)'
              : 'none',
        }}
      />

      {/* Right half — swings open to the right */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 z-20"
        style={{
          backgroundColor: '#f5f0eb',
          ...texture,
          transformOrigin: 'left center',
          transform: isIdle
            ? 'rotateY(0deg)'
            : 'rotateY(140deg)',
          transition:
            'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: isIdle ? '0s' : '0.25s',
          boxShadow:
            !isIdle
              ? 'inset 12px 0 20px -10px rgba(0,0,0,0.12)'
              : 'none',
        }}
      />

      {/* Wax seal — cracks and shrinks as flaps start to open */}
      <div
        className="absolute z-30"
        style={{
          top: '50%',
          left: '50%',
          transform:
            'translate(-50%, -50%) scale(' +
            (isIdle ? 1 : 0) +
            ') rotate(' +
            (isIdle ? 0 : 15) +
            'deg)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <div
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-700 border-[3px] border-amber-500 flex items-center justify-center shadow-lg shadow-amber-900/30"
          style={{
            animation: isIdle
              ? 'sealPulse 2.5s ease-in-out infinite'
              : 'none',
          }}
        >
          <span className="text-cream font-serif font-bold tracking-tight text-lg md:text-xl">
            H&amp;S
          </span>
        </div>
      </div>

      {/* Tap hint */}
      {isIdle && (
        <p className="absolute bottom-16 left-0 right-0 text-center text-stone-400 text-sm animate-pulse font-sans tracking-wide z-10">
          Sentuh untuk membuka
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Start dev server to verify**

```bash
npm run dev
```

Open browser at `http://localhost:3000`. Verify:
- Envelope shows as flat cream surface with border, sender text, wax seal pulsing at center
- Tap triggers: seal shrinks → flaps swing open outward → envelope fades → site revealed
- Refresh page: envelope does NOT show again (sessionStorage)
- Open in private window: envelope shows again

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: No errors.

- [ ] **Step 5: Verify build**

```bash
npm run build
```

Expected: Successful build, no errors.
