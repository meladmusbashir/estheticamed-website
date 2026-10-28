# EstheticaMed Amirzada

Website der Privatpraxis für Ästhetische und Alternative Medizin, Tibarg 11, Hamburg Niendorf.

Technik: React 19 + TanStack Start (serverseitig gerendert), läuft als ein Cloudflare Worker.

## Lokal starten

```
npm install
npm run dev
```

## Veröffentlichen

Cloudflare (Workers Builds) baut und veröffentlicht automatisch bei jedem Push auf `main`.

- Projektname in Cloudflare: `estheticamed` (muss zu `name` in `wrangler.jsonc` passen)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

## Inhalte ändern

- Kontaktdaten: `src/lib/site.ts`
- Behandlungen: `src/lib/treatments.ts`
- Preise: `src/lib/prices.ts`
- Seiten: `src/routes/`
- Bilder, Video, Schriften: `public/`
