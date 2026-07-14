# generator-websites

A content-series project: each site in this repo is generated from a character
+ business type + vibe combo (from my generator) and showcased on social media.
Each site lives in its own folder (e.g. `loki/`).

## Iron rule: English-first, LTR — always

**Every site in this project is built in English with LTR direction, by
default and without exception.** This applies to every future site in the
series, even when the brief / generator output / conversation is in Hebrew.

Why: the sites are showcased in short videos on social networks. Instagram
translates voice, captions and descriptions — but never the pixels of the
site itself. Hebrew pixels = a global viewer can't read the proof of work.
English also converts better with Israeli clients (global-looking brand).
No compromise: English serves both worldwide reach and local conversion.

Practically:
- All copy is written directly in **witty, native-sounding English** in the
  character's voice — never literal translation from a Hebrew brief.
- `<html lang="en" dir="ltr">`, LTR text alignment, LTR-aware animations
  (e.g. marquees scroll right-to-left visually: `translateX(0 → -50%)`).
- brand.json copy fields are English; structural notes stay English too.
- No Hebrew strings anywhere in the shipped site (UI text, aria-labels,
  alt text, metadata, `toLocaleString` locales).

## Stack conventions (inherited from the loki pilot)

- Next.js 15 + React 19, Tailwind v4 CSS-first (`@theme` in globals.css,
  no tailwind.config).
- Scaffolded with the `rtl-landing-scaffold` skill (override its RTL bits to
  LTR per the iron rule), composed with `gsap-scroll-reveal`.
- Visual identity per site comes from its `brand.json` (single source of
  truth for copy, palette, tone).
- Dev servers: never run `npm run build` while `next dev` is running on the
  same `.next` (corrupts the cache); kill orphaned node processes before
  restarting.
