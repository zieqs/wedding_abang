# Envelope Animation Redesign

## Overview
Fix the envelope intro animation so it properly opens like a book (double doors) instead of closing. Add minimalist envelope face details for a polished look.

## Current Problems
1. Halves start at `rotateY(130deg)` (already swung toward viewer) and animate to `0deg` (flat) — this closes the envelope rather than opening it
2. Wax seal shrinks to 0 in first 400ms but halves don't move until 400ms — seal vanishes before anything happens
3. No envelope visual — just two bare divs with texture

## Solution: Approach 1 — Fix existing animation

### Visual Design
- Cream background (`bg-stone-100`) with SVG noise texture (keep existing)
- Thin amber decorative border (inset ~12px from edges)
- "Hariez & Sofea" in Playfair Display italic at top-left (return address)
- Wax seal centered: amber-700 circle with amber-500 border, pulsing "H&S"
- Initial state: both halves flat against screen (`rotateY(0deg)`) — clean envelope face

### Animation Sequence

| Time | Event |
|------|-------|
| 0ms (tap) | Wax seal begins shrinking (scale 1→0, 500ms, 15deg rotation) |
| 250ms | Halves start swinging open: left → rotateY(-140deg), right → rotateY(140deg) (600ms ease-in-out) |
| 850ms | Halves fully open (edge-on), site fully revealed |
| 1050ms | Envelope fades out (opacity 1→0 over 400ms) |
| 1450ms | `onOpen` called, envelope removed from DOM |

Seal crack + flap open overlap creates a natural "seal breaks, envelope opens" sequence.

### Wax Seal Behavior
- Initial: visible, pulsing (`sealPulse` keyframe)
- On tap: shrinks and slightly rotates (scale 1→0, rotate 0→15deg, 500ms, starts immediately)
- Removed from view before flaps fully open

### Changes to Envelope.jsx
1. Flip rotation: folded state = `rotateY(0deg)`, opened state = `rotateY(-140deg / 140deg)`
2. Remove `isFolded` concept — track opened vs closed phase directly
3. Timing: eliminate gaps between seal and flap movement
4. Add sender text element (top-left "Hariez & Sofea" in Playfair Display)
5. Add decorative border element
6. Remove crease line / center shadow (visible on flat envelope breaks illusion)

### Changes to EnvelopeWrapper.jsx
- None needed — already handles `showSite` state

### Changes to globals.css
- None needed — `sealPulse` keyframe already exists

### Files Modified
- `src/components/Envelope.jsx` — main animation logic

### Testing
- `npm run dev` — visual check that envelope opens correctly
- `npm run lint` — no lint errors
- Verify `sessionStorage` gating still works (reload doesn't show envelope, new tab does)
- Test mobile viewport (430px width)
