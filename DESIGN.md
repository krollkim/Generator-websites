# Design standard — generator landing pages

Every page in this repo is built to be filmed and judged in thirty seconds by a
business owner scrolling on a phone. A page that reads as "a template with the
content swapped" has failed, even if it is tidy and accessible.

This file overrides any default layout instinct. When a choice is not covered
here, choose the more committed option, not the safer one.

## The nine rules

**1. No cards.**
No bordered boxes, no rounded containers, no drop-shadowed rectangles holding
content. A card is the default container and it flattens everything inside it to
the same importance. Content sits on the page directly.

**2. Something must be huge.**
Every page needs at least one element at a scale that feels almost too big — a
headline, an image, a number. If every element is between 16px and 48px, the page
reads as generic. Aim for a 6:1 ratio or more between the largest and smallest
type on the page.

**3. Full bleed by default.**
Images and colour fields run to the edges of the screen and off them. Do not put
everything inside a centred column with equal padding on both sides. The page
should touch its own edges.

**4. One image per section, big enough to carry it.**
No icon-sized graphics. If an image cannot fill most of the viewport width, it
does not belong. A section built around four small icons is a list, not a design.

**5. Asymmetry and alternation.**
Alternate which side content sits on from section to section so the eye zigzags
down. Off-centre beats centred. Equal-width columns are a last resort.

**6. Overlap.**
At least once per page, two elements must overlap: text over an image, an image
crossing a section boundary, a heading breaking out of its container. Generic
pages never overlap anything. This single move does more than any other.

**7. One signature moment.**
Exactly one scroll-driven moment per page where something happens that a static
page could not do. Tied to scroll position, not autoplay. One, not three.

**8. Type does the work.**
One typeface family, used at extremes of size and weight, beats three families.
Set real line-height and real letter-spacing on display sizes. Hebrew pages use
a Hebrew-native face — never a Latin face with Hebrew fallback.

**9. Space is structure.**
Section padding is measured in viewport height, not pixels. If sections are
separated by 40px, they read as one long list. A section should be able to own
the screen.

## Colour

Two colours plus a neutral, maximum. One accent, used rarely enough that it still
reads as an accent. Where the brief names a warm/cold split or similar, that rule
outranks everything in this section.

## Before it ships

Screenshot any single section on its own. If it could be dropped into an unrelated
business's site without anyone noticing, it is not finished.

## What this does not change

The build is still one screen, four sections maximum, static, design only.

These rules are about which choice you make, not about doing more work. A
full-bleed image is not slower to build than a card. Overlapping two elements is
not slower than stacking them. Only rule 7 adds real time, and it is capped at one
moment per page.
