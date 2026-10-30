# HalloweenOverlay

A Vencord user plugin that puts the Halloween overlay over Discord: spiders, bats, ghosts and friends wander in from the edges of the screen, and clicking one banishes it. It follows Discord's light/dark theme and only makes sounds when you click a creature.

## Install

From your Vencord source checkout:

```bash
git clone https://github.com/RNDev666/halloweenOverlay src/userplugins/halloweenOverlay
pnpm build
```

Restart Discord, then enable **HalloweenOverlay** in Settings → Vencord → Plugins.

## Settings

- **Sound**: play sounds when you click a creature.
- **Debug panel**: show a panel for summoning any creature and forcing a jump scare.

## Updating the overlay

`tt-halloween.js` is a copy. The real one lives in the halloween-overlay repo, and a GitHub Action there commits every change to it into this repo automatically, so don't edit the copy here. To update, `git pull` in this folder, then rebuild Vencord.
