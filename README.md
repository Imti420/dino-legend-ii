# Dino Legend II

**12 levels · 5 bosses · Legend+ · Gauntlet · daily seed**

New public repo so you can import a **fresh** Vercel project (avoids the Hobby deploy collision on the old app).

## What shipped in the game logic
- Levels 7–12 (Rift, Storm, Crystal, Foundry, Marsh, Omega)
- Bosses: Tempest Wyrm, Obsidian Warden, Omega Rex (3 phases)
- Enemies: geyser, thunderbird, lightning, stalactite, beetle, saw, drone, shade
- Legend+, Gauntlet, daily seed, `window.__dino` debug

## Deploy
Import **this** repo as a **new** Vercel project from `main`.

Sprites auto-fetch on `npm install` from `Imti420/dino-legend`.

## Note
Game payload is gzip+base64 under `public/payload/*.txt` and loaded by `src/game/legend.js`.
