# AGENTS.md — Wedding Abang

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — next lint (no other formatter/typecheck)

## Architecture
- **Next.js 14 App Router**, JSX (no TypeScript). Single page at `src/app/page.js`.
- **Path alias**: `@/*` → `./src/*` (via `jsconfig.json`).
- **Supabase**: Client instantiated in `src/utils/supabase/client.js` uses `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. RSVP inserts into `rsvps` table. Server/middleware Supabase utils exist but no `src/middleware.js` is configured.
- **Tailwind theme**: Custom colors (`cream`, `stone`, `amber`) and font families (`serif`/`sans`/`parisienne`). Google Fonts loaded via `<link>` in `layout.js` (not `next/font`).
- **Envelope animation**: Gated by `sessionStorage.getItem('envelope-seen')`. Cleared on session end, not on navigation.
- **Media**: `public/videos/hero.mp4` is the only local asset. Gallery images are external Unsplash URLs. `public/images/` is unused.

## Conventions
- All components in `src/components/`, flat (no subdirectories).
- Client components use `'use client'` directive; server components are default.
- No routing beyond the root page — all sections are anchored `#id` links.

# CRITICAL RULES - MUST FOLLOW

## RESPONSES

- Keep responses concise and to the point - unless the user asks otherwise

## PLANNING MODE

- Always ask clarifying questions
- Never assume design, tech stack or features
- Use deep-dive sub-agents to assist with research
- Use deep-dive sub-agents to review the different aspects of your plan before presenting to the user

## CHANGE / EDIT MODE

- Never implement features yourself when possible - use sub-agents!
- Identify changes from the plan that can be implemented in parallel, and use sub-agents to implement the features efficiently
- When using sub-agents to implement features, act as a coordinator only
- Use the best model for the task - premium models for complex tasks (like coding) and mid-tier models for simpler tasks, like documentation
- After completing features (large or small), always run commands like lint, type check and next build to check code quality

## DATABASE SCHEMA CHANGES

- Whenever you make changes to the database schema, ALWAYS run the drizzle generate and migrate commands
- NEVER run drizzle push!

## TESTING

- Use any testing tools, libraries available to the project for testing your changes
- Never assume your changes simply work, always test!
- If the project does not have any testing tools, scripts, MCP tools, skills, etc. available for testing, ask the user whether testing should be skipped.

## UI DESIGN

- Always follow the UI design system when creating or reviewing components or pages.
- Design System: @DESIGN.md