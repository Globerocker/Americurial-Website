<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Americurial Site Notes

- This is the Americurial agency/brand site, not the primary CapturePilot SaaS dashboard.
- Verify changes with `npm run lint` and `npm run build`.
- Lint currently passes with warnings; do not introduce new errors.
- Keep the visual language polished, sober, and B2B credible. Avoid generic gradient-heavy AI styling.
- Do not expose `.env.local` values or Gemini/API keys in pages, docs, or logs.
