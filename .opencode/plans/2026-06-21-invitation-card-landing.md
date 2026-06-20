# Invitation Card Landing Page — Implementation Plan

## Spec
Replace envelope intro with a centered invitation card that flips 180° to reveal the site.

**Card design:** `max-w-[320px]`, cream bg, `rounded-2xl`, subtle shadow, stone-200 border. Couple names in Alex Brush, amber divider with "✦", date in Playfair Display italic. "Sentuh untuk membuka" hint below.

**Animation:** Tap → card flips 180° (600ms) → overlay fades (400ms) → card removed (1000ms).

**sessionStorage:** Same `envelope-seen` key gating.

## Files Changed
- `src/components/Envelope.jsx` — rewrite as invitation card

---

### Task 1: Rewrite Envelope.jsx as InvitationCard

- [ ] **Step 1: Write new Envelope.jsx**

```jsx
'use client'

import { useState, useEffect, useCallback } from 'react'

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
    setPhase('flipping')
    setTimeout(() => {
      setPhase('fading')
    }, 600)
    setTimeout(() => {
      try {
        sessionStorage.setItem('envelope-seen', 'true')
      } catch {
        // ignore
      }
      onOpen()
    }, 1000)
  }, [phase, onOpen])

  const isIdle = phase === 'idle'
  const isFading = phase === 'fading'

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center select-none"
      onClick={handleTap}
      style={{
        cursor: isIdle ? 'pointer' : 'default',
        backgroundColor: '#d4c5b8',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Card */}
      <div
        style={{
          perspective: '1000px',
          width: '100%',
          maxWidth: '320px',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: isIdle ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Front face */}
          <div
            className="bg-cream rounded-2xl p-10 md:p-12 shadow-xl shadow-stone-300/50 border border-stone-200 text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="font-brush text-3xl md:text-4xl text-stone-800 leading-tight mb-1">
              Muhammad Hariez Aiman
            </p>

            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-12 h-px bg-amber-500/50" />
              <span className="text-amber-500/70 text-sm">✦</span>
              <div className="w-12 h-px bg-amber-500/50" />
            </div>

            <p className="font-brush text-3xl md:text-4xl text-stone-800 leading-tight mb-8">
              Anushka Sofea
            </p>

            <div className="w-8 h-px bg-amber-400/40 mx-auto mb-6" />

            <p className="font-serif italic text-sm text-stone-500">
              11 Oktober 2026
            </p>
          </div>
        </div>
      </div>

      {/* Tap hint */}
      {isIdle && (
        <p className="absolute bottom-16 left-0 right-0 text-center text-stone-500 text-sm animate-pulse font-sans tracking-wide">
          Sentuh untuk membuka
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: No errors.

- [ ] **Step 3: Run build**

```bash
npm run build
```

Expected: Successful build.
