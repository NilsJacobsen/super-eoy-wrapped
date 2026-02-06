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

## Architecture (simple + maintainable)

The app is a wizard-style set of routes (`/usage`, `/sources`, `/archetype`,
`/super-power`, `/summary`). Each page consumes the provider state and asks for
only the data it needs: a specific user and a specific topic.

Data lives in a single place (`data/superData.ts`). The provider exposes a
selected user and a tiny hook API:

- `useSelectedUser()` to set the active user (one change updates all pages).
- `useSuperData(username, topic)` to read just the section needed for that page.

This keeps the system simple, maintainable, and easy to extend with new users or
sections.

## Local development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization notes

- Fonts are in `public/` and wired in `app/layout.tsx`.
- The favicon is generated from `public/Super_Symbol_Dark.svg`.
