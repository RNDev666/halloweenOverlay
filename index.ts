/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 RNDev
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";
// the same overlay the websites load (a copy from the halloween-overlay repo), kept as text and run on start
import overlayCode from "file://tt-halloween.js";

declare global {
    interface Window {
        __tthCfg?: object;
        __tthStop?: () => void;
    }
}

function start() {
    window.__tthCfg = { site: "discord", sound: settings.store.sound, lab: settings.store.debugPanel, labOpen: settings.store.debugPanel };
    new Function(overlayCode)();
}

function stop() {
    window.__tthStop?.();
}

function restart() {
    stop();
    start();
}

const settings = definePluginSettings({
    sound: {
        type: OptionType.BOOLEAN,
        description: "Play sounds when you click a creature",
        default: true,
        onChange: restart,
    },
    debugPanel: {
        type: OptionType.BOOLEAN,
        description: "Show the debug panel (summon any creature, force a jump scare)",
        default: false,
        onChange: restart,
    },
});

export default definePlugin({
    name: "HalloweenOverlay",
    description: "Spiders, bats, ghosts and friends wander over Discord; click one to banish it",
    authors: [{ name: "RNDev", id: 454590946756263936n }],
    settings,
    start,
    stop,
});
