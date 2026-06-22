# Mah Jongg — A Family Learning Guide

A single-page learning hub for **American Mah Jongg (NMJL)** — built so a whole family can learn the game together. Covers the rules, the 152-tile set, the Charleston, jokers, scoring, and a first family game. Includes interactive tile flashcards, sample hand patterns, a rules quiz, and a printable cheat sheet for the table.

## What this covers

- **9 progressive lessons** — Welcome, The Tiles, The Goal, Sets &amp; Pungs, The Charleston, Jokers, A Turn of Play, Winning &amp; Scoring, Your First Family Game
- **Tile Trainer** — flashcard drills for all 34 tile types (152 tiles in the full set), filterable by suit family
- **Hand Examples** — 6 sample card-hand structures showing how NMJL patterns work (these are illustrative; the actual NMJL card is copyrighted and must be ordered from the National Mah Jongg League)
- **Quick Quiz** — 12 questions on the rules, with explanations after each answer
- **Cheat Sheet** — a printable one-pager with Charleston rules, joker rules, turn order, and standard payouts

## Style

Built around **American Mah Jongg** (NMJL) rules — the most common version in the US. If your set has **8 Jokers** and **8 Flowers marked "F"**, it's an American set. Other styles (Chinese, Japanese) are different games — let me know if your set turns out to be something else and we can adapt.

## Files

- **`index.html`** — the full single-page app (HTML, CSS, JS)
- **`data.js`** — the tile database (152 tiles, 34 types), lesson content, quiz, hand examples
- **`README.md`** — this file

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `mahjong-learn`). Public.
2. Upload all three files to the root.
3. Settings → Pages → Source: Deploy from a branch → main / root → Save.
4. Wait ~30 seconds, then visit `https://<your-username>.github.io/mahjong-learn/`.

## Important: You'll still need the actual NMJL card

This site teaches you how the game works and how to read a card. **You cannot legally play American Mah Jongg without the official NMJL card** — it changes every year, the league publishes it, and it's the only authoritative source for valid winning hands. Order the 2026 card directly from the National Mah Jongg League at [nationalmahjonggleague.org](https://www.nationalmahjonggleague.org/store.aspx). Cards are inexpensive ($9-15 depending on size) and come in regular print and large print.

## Suggested learning path for the family

1. **Together (30 min):** Read lessons 1-3 (Welcome, Tiles, Goal). Pour the tiles onto the table and identify each family.
2. **Solo (15 min/day, a few days):** Drill the Tile Trainer. Each player should get fluent at identifying tiles within 2 seconds.
3. **Together (30 min):** Read lessons 4-7 (Sets, Charleston, Jokers, A Turn).
4. **Together (one evening):** Read lessons 8-9 (Scoring, First Game). Print the cheat sheet (one per player).
5. **First game:** Order the 2026 NMJL card. Set up the table. Take it slow. Use the cheat sheets.

## Customizing the content

All editable content lives in `data.js`:

- `TILES` — the 34 tile types with count, name, and teaching note for each
- `LESSONS` — the 9 lesson sections with HTML content
- `QUIZ` — the 12 quiz questions
- `HAND_EXAMPLES` — 6 sample hand structures

You can add lessons, quiz questions, or hand examples by adding entries to these arrays. The site will render them automatically.

---

*No affiliation with the National Mah Jongg League. All references to NMJL cards and rules are for educational purposes — the official rules and the annual card are published and sold by the National Mah Jongg League, Inc.*
