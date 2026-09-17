# Berty's Botz changelog (structured)

**Chip: BB 0.0.1** · 2026-09-17 · channel **spec** · not playable  
Source of truth: `js/version.js` + this file.  
If the intern and an old zip disagree, the chip wins.

English notes for the period board. Teachers do not need to code.

---

## Version law

| Kind | Looks like | Where it goes |
| --- | --- | --- |
| Spec / scaffold | `BB 0.0.x` | Repo only. No cart. |
| Debug drop | `BB 0.1.0-d3` | Workshop / intern. Chip must say **DEBUG**. Not the classroom URL. |
| Live classroom | `BB 0.1.0` | `tw.kulibert.net/bertybots/` after GO. |

Rules:

1. One job per version. Pause until GO.
2. Every push that changes play or save bumps the chip **in the same commit**.
3. Debug increments the `-dN` suffix (`-d1`, `-d2`…). Do not skip. Do not reuse.
4. Promote a debug train by dropping `-dN` and writing the teacher notes for that live number.
5. Never leave DEBUG on the projector. Hard refresh (Ctrl+Shift+R) if a cart still shows an old chip.
6. Student `.bertybots.json` may store `app` + `format` + `title` only. No names. Optional `appVersion` is the chip string, not a person.
7. Do not graft Fantastic Contraption assets, level XML, or `fcsim`.

---

## Current train (0.0.x spec)

### 0.0.1 — Repo + law — 2026-09-17
Public repo. Privacy page. Local-save / no-names / student level-author rules written down. Original navy/orange shop look specified. Not affiliated with Northway Games.

**Not playable.** No canvas yet.

---

## Next train (not started)

### 0.1.0-d1 — Playground debug (planned)
Planck world, five parts, snap, Play / Stop restores shop, Save / Open `.bertybots.json`. Chip: `BB 0.1.0-d1 DEBUG`.

### 0.1.0 — Playground live (planned)
Same job, boringly stable on a Chromebook. Chip: `BB 0.1.0`.

### 0.2.0 — Original 12-level pack (planned)

### 0.3.0 — Student level editor (planned)

---

## Not live (do not put back)

- Student names, aliases, roster ids, class codes in JSON
- Accounts, analytics, public design gallery
- Copied third-party art, colors-as-trade-dress, official layouts from other games
- Magnets, springs, moving platforms (later unit, not this train)
- WASM / `fcsim` fork
