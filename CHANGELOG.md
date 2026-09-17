# Berty's Botz changelog (structured)

**Chip: BB 0.1.0** · 2026-09-17 · channel **live**  
Source of truth: `js/version.js` + this file.  
If the intern and an old zip disagree, the chip wins.

English notes for the period board. Teachers do not need to code.

---

## Version law

| Kind | Looks like | Where it goes |
| --- | --- | --- |
| Spec / scaffold | `BB 0.0.x` | Repo only. No cart. |
| Debug drop | `BB 0.1.0-d3` | Workshop / intern. Chip must say **DEBUG**. Not the classroom URL. |
| Live classroom | `BB 0.1.0` | `tw.kulibert.net/bertybots/` after it is copied to the cart. |

Rules:

1. One job per version. Pause until GO.
2. Every push that changes play or save bumps the chip **in the same commit**.
3. Debug increments the `-dN` suffix (`-d1`, `-d2`…). Do not skip. Do not reuse.
4. Promote a debug train by dropping `-dN` and writing the teacher notes for that live number.
5. Never leave DEBUG on the projector. Hard refresh (Ctrl+Shift+R) if a cart still shows an old chip.
6. Student `.bertybots.json` may store `app` + `format` + `title` only. No names.
7. Do not graft third-party game assets, official layouts, or `fcsim`.

---

## Current train (0.1.x live)

### 0.1.0 — Playable shop — 2026-09-17

Students can:

- Build on the Shop Floor with Drive-R, Drive-L, Roller, Steel Bar, Ghost Bar
- Play / Stop (Space). Stop puts the shop back the way they left it
- Save / Open a local `.bertybots.json` (level + machine, no names)
- Author a course: Shop Floor, Drop Zone, slabs, Bot Core
- Try three starter courses: Roll Out, Up the Curb, Mind the Pit
- Clear machine without wiping the course

Shop look is navy / orange / paper / crate. Wheels are stamped R / L / O. Bot Core is a crate. Not affiliated with Northway Games.

Physics: Planck.js 0.3.14. Ghost Bar hits the world and the crate, not the rest of the machine. Win = every crate center inside the Drop Zone for one second.

**Cap:** 48 parts. **Keys:** 1–5 tools, M move, E erase, Space play/stop.

Serve the folder over http(s), not `file://`.

Full playable tree: classroom pack `BertysBotz-0.1.0.zip` / folder `BertysBotz/`.

---

## Earlier

### 0.0.1 — Repo + law — 2026-09-17

Public repo. Privacy page. Product rules written down. Not playable.

---

## Next

### 0.2.0 — Full original 12-level pack (planned)

### 0.3.0 — Level editor polish + slow-mo replay (planned)

---

## Not live (do not put back)

- Student names, aliases, roster ids, class codes in JSON
- Accounts, analytics, public design gallery
- Copied third-party art or official layouts from other games
- Magnets, springs, moving platforms
- WASM / `fcsim` fork
