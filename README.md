# Berty's Botz BB 0.0.1

Classroom 2D physics shop for Solvay Middle School Technology Education
(NYS MST Standard 5 · ITEEA STL · CTE connections).

Students build machines from five shop parts, write their own courses, and
save progress to a local file they pick. No student accounts. No names in
files (Ed Law 2-d / FERPA).

Physics-builder lab for Solvay Tech Ed. Not affiliated with Northway Games
or Fantastic Contraption.

## Classroom URL (planned)

**https://tw.kulibert.net/bertybots/**

Open over HTTPS, not `file://`. Add to Chromebook shelf from Chrome → Install.

## What this repo is

Source of truth for the web app. Student machines and student-authored
levels are **not** stored here. Those live in `.bertybots.json` files the
student saves to Downloads or a class Drive folder.

## Files students create

- `.bertybots.json` — level + machine together. Level title only. No name,
  alias, roster id, or class code inside the JSON.

## Shop parts

- Drive-R / Drive-L / Roller (stamped letters, same size)
- Steel Bar (collides)
- Ghost Bar (passes through the machine, hits the world)
- Bot Core (crate, not a ball)

## Rules locked for this product

- Canvas 2D primitives only. No textures, particles, or copied assets.
- Palette: navy / orange / paper / crate / ink. Not a third-party game look.
- Editor world and play world are separate. Stop restores the shop snapshot.
- Students author levels. Save / Open / Save As from 0.1 onward.
- Official campaign geometry is original. Do not trace other games.

## Run

```bash
python -m http.server 4174
```

Open `http://127.0.0.1:4174`.

## Versions

| Version | Job |
| --- | --- |
| 0.0.1 | Repo + spec |
| 0.1.0 | Playground + local save |
| 0.2.0 | Original 12-level pack |
| 0.3.0 | Student level editor |
