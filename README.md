# Super EOY Wrapped 2026

A personalized End of Year Wrapped experience for Super, showcasing usage,
insights, sources, archetypes, and super powers.

**Live demo:** https://super-eoy-wrapped.vercel.app/

![Super EOY Wrapped preview](./public/SuperEOYWrappedAnton.png)

## What this is

This is a Next.js App Router project that renders a multi-page wrapped flow.
Copy and update the data in `data/superData.ts` to generate new users and
content.

## Key areas

- `data/superData.ts` — core data for each user
- `components/superDataProvider.tsx` — context + hooks for selected user data
- `components/insightBlock.tsx` — inline highlights and image inserts
- `app/*/page.tsx` — page layout per section

## Provider flow

```mermaid
flowchart TD
  A[SuperDataProvider] --> B[Context state]
  B --> C[selectedUser]
  B --> D[data by user]
  E[Header dropdown] -->|setSelectedUser| C
  F[Page component] -->|useSuperData| D
  F -->|useSelectedUser| C
  D --> G[Section data]
```

## Local development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization notes

- Fonts are in `public/` and wired in `app/layout.tsx`.
- The favicon is generated from `public/Super_Symbol_Dark.svg`.
