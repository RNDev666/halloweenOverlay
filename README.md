# HalloweenOverlay

A Vencord user plugin that puts the Halloween overlay over Discord: spiders, bats, ghosts and friends wander in from the edges of the screen, and clicking one banishes it. It follows Discord's light/dark theme and only makes sounds when you click a creature.

## Install

From your Vencord source checkout:

```bash
git clone <this repo> src/userplugins/halloweenOverlay
pnpm build
```

Restart Discord, then enable **HalloweenOverlay** in Settings → Vencord → Plugins.

## Settings

- **Sound**: play sounds when you click a creature.
- **Debug panel**: show a panel for summoning any creature and forcing a jump scare.

## Updating the overlay

`tt-halloween.js` is a copy of the file from the halloween-overlay repo. After changing it there, copy it over this one, then rebuild Vencord.
