// ============================================================
//  MAHJONG LEARNING — TILE DATABASE & CORE DATA
//  Encodes the 152-tile American Mah Jongg set (NMJL)
// ============================================================

// Each tile entry has:
//   id      - unique slug for this tile type (multiple physical tiles share an id)
//   group   - category for filtering
//   suit    - 'crak' | 'bam' | 'dot' | 'wind' | 'dragon' | 'flower' | 'joker'
//   name    - human-readable name
//   short   - short label (used on the rendered tile face)
//   count   - how many of these tiles are in a complete 152-tile set
//   notes   - quick teaching note
const TILES = [
  // SUIT: CRAKS (Characters) — numbered 1-9, four of each
  { id: 'c1', group: 'suit', suit: 'crak', number: 1, name: 'One Crak', short: '1萬', count: 4, notes: 'The Craks suit is also called Characters or Wan. Number tile, four of each in the set.' },
  { id: 'c2', group: 'suit', suit: 'crak', number: 2, name: 'Two Crak', short: '2萬', count: 4, notes: 'Craks use Chinese characters for the number. 萬 (wàn) means "ten thousand".' },
  { id: 'c3', group: 'suit', suit: 'crak', number: 3, name: 'Three Crak', short: '3萬', count: 4, notes: 'Craks are sometimes nicknamed "Cracks" or "Characters" at the table.' },
  { id: 'c4', group: 'suit', suit: 'crak', number: 4, name: 'Four Crak', short: '4萬', count: 4, notes: 'Number tile — Craks suit.' },
  { id: 'c5', group: 'suit', suit: 'crak', number: 5, name: 'Five Crak', short: '5萬', count: 4, notes: 'The middle Crak. Number tile.' },
  { id: 'c6', group: 'suit', suit: 'crak', number: 6, name: 'Six Crak', short: '6萬', count: 4, notes: 'Number tile — Craks suit.' },
  { id: 'c7', group: 'suit', suit: 'crak', number: 7, name: 'Seven Crak', short: '7萬', count: 4, notes: 'Number tile — Craks suit.' },
  { id: 'c8', group: 'suit', suit: 'crak', number: 8, name: 'Eight Crak', short: '8萬', count: 4, notes: 'Number tile — Craks suit.' },
  { id: 'c9', group: 'suit', suit: 'crak', number: 9, name: 'Nine Crak', short: '9萬', count: 4, notes: 'The highest Crak. Together with 1 it forms the "terminals".' },

  // SUIT: BAMS (Bamboo) — numbered 1-9, four of each
  { id: 'b1', group: 'suit', suit: 'bam', number: 1, name: 'One Bam', short: '1🎋', count: 4, notes: 'The 1 Bam is special — usually depicted as a bird (often a sparrow or peacock), NOT a bamboo stalk.' },
  { id: 'b2', group: 'suit', suit: 'bam', number: 2, name: 'Two Bam', short: '2🎋', count: 4, notes: 'Bams are bamboo sticks. Easy to count visually.' },
  { id: 'b3', group: 'suit', suit: 'bam', number: 3, name: 'Three Bam', short: '3🎋', count: 4, notes: 'Number tile — Bams suit.' },
  { id: 'b4', group: 'suit', suit: 'bam', number: 4, name: 'Four Bam', short: '4🎋', count: 4, notes: 'Number tile — Bams suit.' },
  { id: 'b5', group: 'suit', suit: 'bam', number: 5, name: 'Five Bam', short: '5🎋', count: 4, notes: 'The middle Bam. Number tile.' },
  { id: 'b6', group: 'suit', suit: 'bam', number: 6, name: 'Six Bam', short: '6🎋', count: 4, notes: 'Number tile — Bams suit.' },
  { id: 'b7', group: 'suit', suit: 'bam', number: 7, name: 'Seven Bam', short: '7🎋', count: 4, notes: 'Number tile — Bams suit.' },
  { id: 'b8', group: 'suit', suit: 'bam', number: 8, name: 'Eight Bam', short: '8🎋', count: 4, notes: 'Number tile — Bams suit.' },
  { id: 'b9', group: 'suit', suit: 'bam', number: 9, name: 'Nine Bam', short: '9🎋', count: 4, notes: 'The highest Bam. Together with 1 it forms the "terminals".' },

  // SUIT: DOTS (Circles) — numbered 1-9, four of each
  { id: 'd1', group: 'suit', suit: 'dot', number: 1, name: 'One Dot', short: '1●', count: 4, notes: 'Dots are circles (also called "Coins" historically). The 1 Dot is a single circle.' },
  { id: 'd2', group: 'suit', suit: 'dot', number: 2, name: 'Two Dot', short: '2●', count: 4, notes: 'Number tile — Dots suit.' },
  { id: 'd3', group: 'suit', suit: 'dot', number: 3, name: 'Three Dot', short: '3●', count: 4, notes: 'Number tile — Dots suit.' },
  { id: 'd4', group: 'suit', suit: 'dot', number: 4, name: 'Four Dot', short: '4●', count: 4, notes: 'Number tile — Dots suit.' },
  { id: 'd5', group: 'suit', suit: 'dot', number: 5, name: 'Five Dot', short: '5●', count: 4, notes: 'The middle Dot. Number tile.' },
  { id: 'd6', group: 'suit', suit: 'dot', number: 6, name: 'Six Dot', short: '6●', count: 4, notes: 'Number tile — Dots suit.' },
  { id: 'd7', group: 'suit', suit: 'dot', number: 7, name: 'Seven Dot', short: '7●', count: 4, notes: 'Number tile — Dots suit.' },
  { id: 'd8', group: 'suit', suit: 'dot', number: 8, name: 'Eight Dot', short: '8●', count: 4, notes: 'Number tile — Dots suit.' },
  { id: 'd9', group: 'suit', suit: 'dot', number: 9, name: 'Nine Dot', short: '9●', count: 4, notes: 'The highest Dot. Together with 1 it forms the "terminals".' },

  // WINDS — four of each
  { id: 'wn', group: 'wind', suit: 'wind', name: 'North Wind', short: 'N', count: 4, notes: 'One of four winds. Spells NEWS together with E, S, W — many hands use this.' },
  { id: 'we', group: 'wind', suit: 'wind', name: 'East Wind', short: 'E', count: 4, notes: 'East is the dealer\'s wind in classical mahjong. Also part of NEWS.' },
  { id: 'ww', group: 'wind', suit: 'wind', name: 'West Wind', short: 'W', count: 4, notes: 'One of four winds. Part of NEWS.' },
  { id: 'ws', group: 'wind', suit: 'wind', name: 'South Wind', short: 'S', count: 4, notes: 'One of four winds. Part of NEWS.' },

  // DRAGONS — four of each
  { id: 'dr', group: 'dragon', suit: 'dragon', name: 'Red Dragon', short: 'R', count: 4, notes: 'Red Dragon is associated with the Craks suit on the NMJL card.' },
  { id: 'dg', group: 'dragon', suit: 'dragon', name: 'Green Dragon', short: 'G', count: 4, notes: 'Green Dragon is associated with the Bams suit on the NMJL card.' },
  { id: 'dw', group: 'dragon', suit: 'dragon', name: 'White Dragon (Soap)', short: 'W·D', count: 4, notes: 'White Dragon — also called Soap or Zero. Used as the "0" in 2026 hands. Associated with Dots.' },

  // FLOWERS — 8 in the set (American sets typically have 8 generic Flowers marked "F")
  { id: 'f', group: 'flower', suit: 'flower', name: 'Flower', short: 'F', count: 8, notes: 'In American Mah Jongg, all 8 flowers are interchangeable — they all count as "Flower" (F). The decorative art on each one is purely cosmetic.' },

  // JOKERS — 8 in active play (NMJL standard); our set has 10 total but we play with 8
  { id: 'j', group: 'joker', suit: 'joker', name: 'Joker', short: 'JOKER', count: 8, notes: 'Wild tile. Can substitute in any pung, kong, quint, or sextet — but NEVER in pairs, singles, or NEWS. Cannot be passed during the Charleston. Our Oh My Mahjong set comes with 10 jokers — we keep 2 in the box as spares and play with 8 (the NMJL standard).' }
];

// Verify the set totals to 152 tiles
const TILE_TOTAL = TILES.reduce((sum, t) => sum + t.count, 0);

// ============================================================
//  TILE RECOGNITION DRILL — quick-lookup arrays
// ============================================================
const DRILL_GROUPS = {
  all: { label: 'All Tiles', tiles: TILES },
  craks: { label: 'Craks (Characters)', tiles: TILES.filter(t => t.suit === 'crak') },
  bams: { label: 'Bams (Bamboo)', tiles: TILES.filter(t => t.suit === 'bam') },
  dots: { label: 'Dots (Circles)', tiles: TILES.filter(t => t.suit === 'dot') },
  winds: { label: 'Winds (NEWS)', tiles: TILES.filter(t => t.suit === 'wind') },
  dragons: { label: 'Dragons', tiles: TILES.filter(t => t.suit === 'dragon') },
  honors: { label: 'Honors (Winds + Dragons)', tiles: TILES.filter(t => t.suit === 'wind' || t.suit === 'dragon') },
  special: { label: 'Special (Flowers + Jokers)', tiles: TILES.filter(t => t.suit === 'flower' || t.suit === 'joker') }
};

// ============================================================
//  TUTORIAL LESSONS
// ============================================================
const LESSONS = [
  {
    id: 'welcome',
    title: 'Welcome to the Table',
    icon: '🀄',
    content: `
      <p><strong>This is your family's guide to American Mah Jongg.</strong> No experience needed — we'll start with the tiles and work up to a full game. By the end you'll know enough to deal a hand, run the Charleston, play it out, and call <em>"Mah Jongg!"</em></p>

      <h3>What is Mah Jongg?</h3>
      <p>It's a four-player tile game that came from China in the 1840s and was adapted in America in the 1920s. The American version (run by the <strong>National Mah Jongg League</strong>, or NMJL) is the most-played style in the US — especially in family rooms, JCCs, senior centers, and country clubs. The game has been called "Bridge with tiles" — it's part luck, part skill, part conversation.</p>

      <h3>What makes American Mah Jongg unique?</h3>
      <ul>
        <li><strong>A yearly card.</strong> The NMJL publishes a new card every spring that lists every legal winning hand for the year. Without the card, you can't play. The current card is the <strong>2026 NMJL card</strong>.</li>
        <li><strong>Jokers.</strong> American sets include 8 wild tiles. Other styles don't.</li>
        <li><strong>The Charleston.</strong> A choreographed tile-passing ritual at the start of every game — unique to the American version.</li>
        <li><strong>152 tiles.</strong> More than the Chinese (144) or Japanese (136) versions.</li>
      </ul>

      <h3>What you need</h3>
      <ol>
        <li>A complete mahjong set (152 tiles + spares — most sets ship with 166)</li>
        <li>Four racks with pushers (helps you organize your hand and push tiles to the center)</li>
        <li>The current year's NMJL card — one per player ideally</li>
        <li>Four players</li>
        <li>A felted mat or tablecloth (softens the shuffle noise — your neighbors will thank you)</li>
      </ol>

      <h3>How to use this site</h3>
      <p>The lessons are progressive — start at the top of the menu and work down. Each lesson is short. Between lessons, drop into the <strong>Tile Trainer</strong> or <strong>Hand Practice</strong> sections to drill what you've learned. The <strong>Cheat Sheet</strong> is a printable one-pager for the table once you're playing.</p>

      <p style="margin-top:24px; padding:16px; background: var(--bg-soft); border-left: 4px solid var(--accent); border-radius: 4px;"><strong>About our family set:</strong> We have an <strong>Oh My Mahjong "Poppy Tiles"</strong> set — a beautifully illustrated modern American set. It includes <strong>10 jokers</strong> (two sets of 5) and <strong>6 Blank tiles</strong>. <strong>We play with the NMJL standard 8 jokers</strong> — the league's hand values and difficulty ratings are calibrated to 8, so this matches how the game is meant to be played. Keep 2 jokers and the 6 Blanks in the box as spares (in case a tile gets damaged or lost). Our playable set: 152 tiles, just like the NMJL reference.</p>
    `
  },
  {
    id: 'tiles',
    title: 'The 152 Tiles',
    icon: '🎴',
    content: `
      <p>Before you can play, you need to recognize every tile at a glance. There are <strong>152 tiles in the set</strong>, but only <strong>34 different kinds</strong> of tile (because most have 4 copies). Once you know those 34, you know the whole set.</p>

      <h3>The five families</h3>
      <p>Every tile belongs to one of these five families:</p>

      <table class="ref-table">
        <thead><tr><th>Family</th><th>Tiles</th><th>Copies</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td><strong>Suits</strong> (Craks, Bams, Dots)</td><td>1-9 in each of three suits</td><td>4 of each</td><td>108</td></tr>
          <tr><td><strong>Winds</strong></td><td>N, E, S, W</td><td>4 of each</td><td>16</td></tr>
          <tr><td><strong>Dragons</strong></td><td>Red, Green, White (Soap)</td><td>4 of each</td><td>12</td></tr>
          <tr><td><strong>Flowers</strong></td><td>All identical (marked F)</td><td>8 total</td><td>8</td></tr>
          <tr><td><strong>Jokers</strong></td><td>Wild — all identical</td><td>8 total</td><td>8</td></tr>
          <tr class="total-row"><td colspan="3"><strong>Grand total</strong></td><td><strong>152</strong></td></tr>
        </tbody>
      </table>

      <p><em>Our Oh My Mahjong set comes with 10 jokers — we keep 2 as spares (along with the 6 Blanks) and play with the NMJL standard 8.</em></p>

      <h3>The three suits</h3>
      <p>Three suits, each numbered 1 through 9, 4 copies of each — 108 suit tiles in total.</p>
      <ul>
        <li><strong>Craks</strong> (also called Characters or Wan) — Chinese characters with a number on top. The Chinese character <span style="font-family: serif; font-size: 1.3em;">萬</span> (wàn) means "ten thousand."</li>
        <li><strong>Bams</strong> (Bamboo) — bamboo sticks. <strong>Important exception:</strong> the 1 Bam is usually drawn as a bird (often a sparrow), not a bamboo. This trips up every beginner.</li>
        <li><strong>Dots</strong> (Circles, sometimes called Coins) — patterns of dots. Easiest to count.</li>
      </ul>

      <h3>Winds and Dragons (the "honors")</h3>
      <p>Winds are <strong>N, E, S, W</strong> — many hands spell <strong>NEWS</strong>. East is special in classical play (the dealer's wind), but in American Mah Jongg all four winds are equal in value.</p>
      <p>Dragons come in <strong>three colors: Red, Green, and White</strong>. The White Dragon is often called <em>"Soap"</em> because it's mostly blank — and it also doubles as the <strong>0 (zero)</strong> in 2026 year-hands on the card.</p>

      <h3>Flowers and Jokers (the "specials")</h3>
      <ul>
        <li><strong>Flowers</strong> (8 in the set) — all interchangeable in the American game. The art on each one is decorative; they're all just "F".</li>
        <li><strong>Jokers</strong> (8 in the set) — wild tiles. They can substitute for any tile in a <em>pung</em>, <em>kong</em>, <em>quint</em>, or <em>sextet</em>, but <strong>never in pairs, singles, or NEWS sequences</strong>. We'll cover this in the Jokers lesson.</li>
      </ul>

      <h3>Practice now</h3>
      <p>Head to the <strong>Tile Trainer</strong> tab and flip through the flashcards. Spend 10-15 minutes per session until you can identify any tile within 2 seconds. This is foundational — every other lesson assumes you know your tiles.</p>
    `
  },
  {
    id: 'goal',
    title: 'The Goal of the Game',
    icon: '🎯',
    content: `
      <p>Mah Jongg is a race to be the first player to build a <strong>14-tile winning hand</strong> that matches one of the patterns on the current NMJL card.</p>

      <h3>What "matching a hand" means</h3>
      <p>Unlike Chinese or Japanese mah jongg, you can't just collect a "good-looking" hand. Your 14 tiles must exactly match <strong>one specific pattern</strong> printed on the NMJL card. The 2026 card has roughly 65-75 hand patterns organized into sections like:</p>
      <ul>
        <li>2026 (year hands — using 2, 0, 2, 6 tiles)</li>
        <li>2468 (even-number hands)</li>
        <li>Any Like Numbers</li>
        <li>Quints (sets of five identical tiles)</li>
        <li>Consecutive Runs</li>
        <li>13579 (odd-number hands)</li>
        <li>Winds &amp; Dragons</li>
        <li>369</li>
        <li>Singles &amp; Pairs (closed hands — no claiming discards)</li>
      </ul>

      <h3>The colors on the card</h3>
      <p>The card uses colored type to encode suit rules — and this is the single most-missed beginner rule:</p>
      <ul>
        <li><strong>Tiles in the same color on the card</strong> must be the <strong>same suit</strong> in your hand.</li>
        <li><strong>Tiles in different colors on the card</strong> must be in <strong>different suits</strong>.</li>
      </ul>
      <p>So if a hand shows "FFFF 2025 2025" with the first 2025 in blue and the second 2025 in red, the two year-sequences must be in two <em>different</em> suits — you can't use Dots for both.</p>

      <h3>Hand values</h3>
      <p>Each hand on the card has a point value printed next to it (usually 25, 30, 35, 40, 50, 60, 75). The harder the hand, the more points. Beginners typically chase 25-30 point hands; advanced players reach for 50-75.</p>

      <h3>How a turn works (the short version)</h3>
      <ol>
        <li>Players take turns going to the right (each player passes to the player on their right). East starts.</li>
        <li>On your turn you <strong>draw a tile</strong> from the wall and then <strong>discard a tile</strong> from your hand. You always end your turn with 13 tiles.</li>
        <li>When you discard, you must <strong>name the tile out loud</strong> (e.g. "Three Bam"). This lets others claim it.</li>
        <li>If someone needs the discarded tile to complete a set of three or more matching tiles, they can <strong>call it</strong> — they take the tile, expose the set on their rack, and then discard to continue play.</li>
        <li>The first player to draw or claim their 14th and final tile, completing their card hand, calls <strong>"Mah Jongg!"</strong> and wins the round.</li>
      </ol>

      <p>That's the skeleton. Next lessons will cover the Charleston (the tile-passing ritual that happens before any of this starts), then jokers, then scoring.</p>
    `
  },
  {
    id: 'card',
    title: 'Reading the 2026 Card',
    icon: '🗂️',
    content: `
      <p>Now that the 2026 NMJL card is in hand, here's how to actually read it. This is the layer where everything from the earlier lessons comes together.</p>

      <h3>The card's own shorthand</h3>
      <p>The back of the card gives you the full notation key. Memorize this:</p>
      <table class="ref-table">
        <thead><tr><th>Symbol</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><code>F</code></td><td>Flower</td></tr>
          <tr><td><code>D</code></td><td>Dragon (color matches its print color — see Matching Dragons below)</td></tr>
          <tr><td><code>0</code></td><td>Soap (White Dragon) — also the literal "0" in 2026 hands</td></tr>
          <tr><td><code>N E W S</code></td><td>North, East, West, South winds</td></tr>
          <tr><td><code>Pair / Pung / Kong / Quint / Sextet</code></td><td>2 / 3 / 4 / 5 / 6 like tiles</td></tr>
          <tr><td><code>Run</code></td><td>Any consecutive numbers</td></tr>
          <tr><td><code>1 color</code></td><td>1 suit</td></tr>
          <tr><td><code>2 colors</code></td><td>2 suits</td></tr>
          <tr><td><code>3 colors</code></td><td>3 suits</td></tr>
          <tr><td><code>X</code></td><td>Exposed allowed</td></tr>
          <tr><td><code>C</code></td><td>Concealed only (must self-draw, no claiming)</td></tr>
        </tbody>
      </table>

      <h3>Matching Dragons</h3>
      <p>The card establishes these permanent pairings:</p>
      <ul>
        <li><strong>Red Dragon ↔ Craks</strong></li>
        <li><strong>Green Dragon ↔ Bams</strong></li>
        <li><strong>White Dragon (Soap) ↔ Dots</strong></li>
      </ul>
      <p>So when a hand says "FFF 33 666 99 DDDD (1 Suit w Matching Dragon)" — if you choose Bams as your suit, your D's must be Green Dragons. The pairing is fixed.</p>

      <h3>The color rule (most important visual cue)</h3>
      <p>Tiles printed in the <strong>same color</strong> on the card must be the <strong>same suit</strong> in your hand. Tiles in <strong>different colors</strong> must be in <strong>different suits</strong>. Three ink colors are used on the card: <strong>black</strong>, <strong>red</strong>, and <strong>green</strong>. They have no inherent suit assignment — they just say "this group goes with that group" or "this group does NOT go with that group."</p>

      <p>Example: <code>222 000 2222 6666 (Any 2 Suits)</code> from the 2026 section. The "222" is one color, "0000" is another, "2222" is another, "6666" is another. The "(Any 2 Suits)" hint at the end confirms you'll be working with two suits total — so two of the color groups must share a suit. Look at which groups share a color to figure out which two.</p>

      <h3>Reading "Any N Suits" vs "1 Suit" vs "These Nos. Only"</h3>
      <ul>
        <li><strong>"Any 1 Suit"</strong> — the whole hand is in one suit. You pick which.</li>
        <li><strong>"Any 2 Suits"</strong> — two suits used. You pick which two.</li>
        <li><strong>"Any 3 Suits"</strong> — all three suits used.</li>
        <li><strong>"Any 1 or 2 Suits"</strong> — flexible. Play it in one suit or two suits, your choice.</li>
        <li><strong>"These Nos. Only"</strong> — the exact numbers shown, not any equivalents. So "2 4 6 8 - These Nos. Only" means you must use 2, 4, 6, and 8 specifically.</li>
        <li><strong>"Any Like Nos."</strong> — pick any number and use it throughout.</li>
        <li><strong>"Any Consec. Nos."</strong> — any run of consecutive numbers (e.g. 1-2-3, 5-6-7, 7-8-9).</li>
      </ul>

      <h3>X vs C — the easiest detail to miss</h3>
      <p>The value column on the right shows things like <strong>X 25</strong>, <strong>X 30</strong>, <strong>C 30</strong>, <strong>C 50</strong>, <strong>C 75</strong>.</p>
      <ul>
        <li><strong>X</strong> = exposed allowed. You can claim discards and expose sets on your rack as you go. Easier.</li>
        <li><strong>C</strong> = concealed only. You must build the entire hand from your own draws (Charleston, then wall picks). You <em>cannot</em> claim any discards — except the very last tile for Mah Jongg. Harder, and worth more points.</li>
      </ul>
      <p>The <strong>Singles &amp; Pairs</strong> section is entirely C hands — that whole section is for advanced players who want to commit to a closed hand early. The biggest hand on the card, <strong>C 75 (FF 2026 2026 2026 — Any 3 Suits)</strong>, lives there.</p>

      <h3>Three beginner-friendly hands to start with</h3>
      <p>For your first family games, highlight or circle these on the card:</p>

      <h4 style="color: var(--accent); margin-top: 14px;">1. 2468 → <code>222 444 6666 8888 (Any 1 or 2 Suits) — X 25</code></h4>
      <p>The "Any 1 or 2 Suits" makes this enormously flexible. Pung-pung-kong-kong structure means you can use jokers freely. Easy Charleston targets — 2s, 4s, 6s, 8s.</p>

      <h4 style="color: var(--accent); margin-top: 14px;">2. Any Like Numbers → <code>1111 FFFFFF 1111 (Any 2 Suits) — X 30</code></h4>
      <p>"Any Like Numbers" means you pick the number — work with whatever you're dealt. Six flowers anchors the hand. If you start with 3-4 flowers, this is your destination.</p>

      <h4 style="color: var(--accent); margin-top: 14px;">3. 2026 → <code>2026 DDD 2222 DDD (Any 2 Suits w Matching Dragons, Kong 2 or 6) — X 25</code></h4>
      <p>The signature year hand. The Matching Dragons rule applies (Red+Craks, Green+Bams, Soap+Dots). If you're dealt some 2s, some 6s, and the right dragon, you're already heading toward this.</p>

      <h3>Charleston targeting based on the card</h3>
      <p>For your first games, target the easy hands above. That means:</p>
      <ul>
        <li><strong>Keep:</strong> 2s, 4s, 6s, 8s, Flowers, Soap (White Dragon), Dragons that match suits you're collecting, all jokers, all pairs</li>
        <li><strong>Pass freely:</strong> 1s, 3s, 5s, 7s, 9s (unless you're chasing 13579), lone winds, dragons that don't match your suit, singletons in suits you don't have</li>
      </ul>
      <p>Once you're more comfortable, you'll start pivoting between hands during the Charleston as your tiles develop. For now, pick one of the three easy hands above and commit.</p>
    `
  },
  {
    id: 'sets',
    title: 'Sets, Pungs, Kongs, and Pairs',
    icon: '🧱',
    content: `
      <p>Winning hands are built from <strong>groups</strong> of tiles. You need to recognize these groups instantly. Here are the names you'll hear at the table:</p>

      <table class="ref-table">
        <thead><tr><th>Name</th><th>How many tiles</th><th>What they are</th></tr></thead>
        <tbody>
          <tr><td><strong>Single</strong></td><td>1 tile</td><td>One specific tile (e.g. a single 5 Bam). Can never use a joker.</td></tr>
          <tr><td><strong>Pair</strong></td><td>2 tiles</td><td>Two identical tiles. <strong>Joker NOT allowed.</strong></td></tr>
          <tr><td><strong>Pung</strong></td><td>3 tiles</td><td>Three identical tiles. Joker allowed.</td></tr>
          <tr><td><strong>Kong</strong></td><td>4 tiles</td><td>Four identical tiles. Joker allowed.</td></tr>
          <tr><td><strong>Quint</strong></td><td>5 tiles</td><td>Five identical tiles (only possible with jokers since the set only has 4 of each). Joker allowed — usually required.</td></tr>
          <tr><td><strong>Sextet</strong></td><td>6 tiles</td><td>Six identical tiles (always requires jokers).</td></tr>
        </tbody>
      </table>

      <h3>Reading the card</h3>
      <p>Hand patterns on the NMJL card list these groups left-to-right. Common notation:</p>
      <ul>
        <li><code>FFFF 2025 2025</code> — Kong of Flowers, then a 4-tile single sequence "2025", then another (in a different suit).</li>
        <li><code>NNNN EEE WWW SSSS</code> — Kong of North, pung of East, pung of West, kong of South.</li>
        <li><code>1111 33 55 77 9999</code> — Kong of 1s, pair of 3s, pair of 5s, pair of 7s, kong of 9s.</li>
      </ul>

      <p>Tile counts in a hand always total <strong>exactly 14</strong>. Always. Count them as you read a hand pattern — that's how you verify you're reading it right.</p>

      <h3>How you build groups during play</h3>
      <p>There are two ways a tile ends up in one of your groups:</p>
      <ol>
        <li><strong>You drew it.</strong> Either from your initial deal, during the Charleston, or from the wall on your turn. These tiles stay <em>concealed</em> behind your rack.</li>
        <li><strong>You claimed it from a discard.</strong> When another player discards a tile and you have two or more matching tiles in your hand, you can call <strong>"Take it!"</strong>, claim that tile, and immediately <strong>expose</strong> the completed set face-up on the front of your rack.</li>
      </ol>

      <p>Once a set is exposed, it's locked — you can't change it. So calling tiles is a commitment. We'll talk about when to call (and when to pass) in a later lesson.</p>

      <h3>The pair gotcha</h3>
      <p>The biggest beginner pitfall: <strong>you cannot claim a discard to complete a pair</strong>. You also cannot use a joker in a pair. The only ways to get a pair are to draw both tiles yourself, or to claim the discard ONLY if it completes your final tile for Mah Jongg.</p>

      <p>That's why "Singles &amp; Pairs" hands are called <em>closed hands</em> — they have to be built almost entirely from your draws.</p>
    `
  },
  {
    id: 'charleston',
    title: 'The Charleston',
    icon: '🔄',
    content: `
      <p>The <strong>Charleston</strong> is a ritualized tile-passing phase that happens before play begins. It's unique to American Mah Jongg and it confuses every beginner, so we'll go slowly.</p>

      <h3>Why it exists</h3>
      <p>When you're dealt your 13 starting tiles, your hand is almost never close to any specific card hand. The Charleston lets you swap out useless tiles for potentially useful ones, three at a time, in a fixed pattern around the table. By the time it ends, you should be aiming at a real hand.</p>

      <h3>The mnemonic: ROLLOR</h3>
      <p>The full Charleston is six passes in this order:</p>
      <ol>
        <li><strong>R</strong>ight — pass 3 tiles to the player on your right</li>
        <li><strong>O</strong>ver — pass 3 tiles across to the player opposite you</li>
        <li><strong>L</strong>eft — pass 3 tiles to the player on your left</li>
        <li><strong>L</strong>eft — pass 3 tiles to your left again</li>
        <li><strong>O</strong>ver — pass 3 tiles across</li>
        <li><strong>R</strong>ight — pass 3 tiles to your right</li>
      </ol>
      <p>Passes 1-3 are the <strong>First Charleston</strong> (mandatory). Passes 4-6 are the <strong>Second Charleston</strong> (optional — any player can stop it after the first Left of the Second Charleston). After both Charlestons end, there's an optional <strong>Courtesy Pass</strong> across the table — 1, 2, or 3 tiles, if the player opposite you agrees.</p>

      <h3>The five iron rules</h3>
      <ol>
        <li><strong>Always pass exactly 3 tiles.</strong> No more, no less, in each pass.</li>
        <li><strong>Never pass a joker.</strong> Ever. Not in any pass, not "by mistake", not as a blind pass. If a joker accidentally goes through, it's returned. Some house rules penalize this — find out yours.</li>
        <li><strong>Blind passes are allowed on the third pass of each Charleston</strong> (the first Left and the second Right). A blind pass means you take some of the tiles you just received and pass them along without looking. You can blind-pass 1, 2, or all 3 tiles. This is your escape hatch when you don't have 3 tiles to spare.</li>
        <li><strong>The Second Charleston can be stopped after the first Left.</strong> Once it starts, the remaining two passes are mandatory.</li>
        <li><strong>You don't have to do the Courtesy Pass.</strong> Both players opposite must agree, and both pass the same number of tiles (1, 2, or 3).</li>
      </ol>

      <h3>What to pass</h3>
      <ul>
        <li><strong>First Right:</strong> Tiles that don't fit any plausible hand. Singletons in lonely suits, isolated winds you won't use, lone flowers if you're not playing a flower-heavy hand.</li>
        <li><strong>Across and Left:</strong> Tiles that don't fit your top 2 or 3 hand candidates.</li>
        <li><strong>Second Charleston:</strong> Only if you still have tiles you don't need. If you only have 3-4 tiles you'd happily part with, stop the Charleston after the first Left.</li>
      </ul>

      <h3>What to KEEP</h3>
      <ul>
        <li><strong>Jokers</strong> — always. You can't pass them anyway. But the rule of "always keep jokers" is foundational.</li>
        <li><strong>Pairs</strong> — even small pairs of useless-looking tiles. Pairs are precious because you can't claim a discard to complete a pair, and many card hands need multiple pairs.</li>
        <li><strong>Flowers</strong> — many hands use 2, 4, 6, or even 8 flowers. Don't pass flowers unless you're sure your target hand has none.</li>
        <li><strong>Dragons that align with a suit you're building</strong> — Red goes with Craks, Green with Bams, White (Soap) with Dots, on many hands.</li>
      </ul>

      <h3>The Rule of Five</h3>
      <p>Before doing the Second Charleston, check: do you have at least 5 tiles you'd happily pass? If yes, continue. If no, stop. You'll need 3 tiles per pass with 2 remaining passes, and you don't want to give away tiles you need.</p>

      <p style="margin-top:24px; padding:16px; background: var(--bg-soft); border-left: 4px solid var(--accent); border-radius: 4px;"><strong>Family practice:</strong> The first dozen times you play, run the Charleston slowly. Talk through what you're passing and why. Once everyone has the rhythm, it'll feel automatic.</p>
    `
  },
  {
    id: 'jokers',
    title: 'Jokers',
    icon: '🃏',
    content: `
      <p>Jokers are the single biggest source of confusion at the American table. Memorize these rules cold.</p>

      <h3>What jokers CAN do</h3>
      <ul>
        <li>Stand in for any tile in a <strong>pung</strong> (3 of a kind)</li>
        <li>Stand in for any tile in a <strong>kong</strong> (4 of a kind)</li>
        <li>Stand in for any tile in a <strong>quint</strong> (5 of a kind)</li>
        <li>Stand in for any tile in a <strong>sextet</strong> (6 of a kind)</li>
      </ul>

      <h3>What jokers CANNOT do</h3>
      <ul>
        <li><strong>Cannot be used in a pair.</strong> A pair must be two natural matching tiles.</li>
        <li><strong>Cannot be used in a single.</strong> If the hand calls for a single 5 Dot, it must be the actual 5 Dot.</li>
        <li><strong>Cannot be used in NEWS or 2026 single-tile sequences.</strong> Any individual tile position on the card (like the N in NEWS, or the 0 in 2026) requires the actual natural tile.</li>
        <li><strong>Cannot be passed in the Charleston.</strong> Ever.</li>
        <li><strong>Cannot be claimed from the discard pile.</strong> If a joker is discarded, it's dead — it stays in the discard pile.</li>
      </ul>

      <h3>Jokers CAN be discarded (but usually shouldn't)</h3>
      <p>The official rule states: <strong>"Jokers may be discarded and named 'Joker,' 'same,' or name of previous discard."</strong> Three things to know about this:</p>
      <ul>
        <li>It's legal — you can choose to throw a joker away</li>
        <li>Once discarded, it's <strong>dead</strong> — nobody can pick it up</li>
        <li>It's almost always a bad move unless you're stuck with one you absolutely can't use and you're trying to be defensive late in the hand</li>
      </ul>
      <p>You'll mostly discard jokers as a sacrifice play — to avoid giving an opponent the natural tile they need.</p>

      <h3>The Joker Exchange (a huge deal)</h3>
      <p>If another player has an exposed set on their rack that contains a joker, and you have the actual natural tile that the joker is substituting for, <strong>you can redeem the joker</strong>. On your turn (after drawing), you offer the natural tile and take their joker. They keep the set complete; you walk away with a joker.</p>
      <p>Example: a player has exposed a pung of "5 Dot, 5 Dot, Joker." You have a real 5 Dot in your hand. On your turn, you can swap your 5 Dot for their joker. Their pung is still "5 Dot, 5 Dot, 5 Dot" — they're not hurt. You now have a joker to use wherever you need one.</p>
      <p>This is one of the most powerful moves in the game. Look for it every turn.</p>

      <h3>Holding jokers vs spending them</h3>
      <p>Early in the game, hold your jokers. As you commit to a specific hand, you'll see where you need them. Try to use jokers in the <em>hardest-to-fill</em> positions — usually pungs, kongs, or quints of less common tiles. Save natural tiles for pairs and singles, where jokers can't go.</p>

      <h3>Joker bait</h3>
      <p>If you have, say, a pair of 7 Bams and a third 7 Bam isn't likely to come, consider exposing a "pung" using your pair and a joker as soon as you can claim a 7 Bam from the discard. You don't actually need the pung for your hand — you're <strong>baiting</strong> another player to exchange their natural 7 Bam for your joker. This is advanced play but worth knowing.</p>
    `
  },
  {
    id: 'play',
    title: 'A Turn of Play',
    icon: '▶️',
    content: `
      <p>This is what every turn looks like, once the Charleston is over.</p>

      <h3>Setup recap</h3>
      <ul>
        <li>The wall (the unused tiles) sits in the middle of the table — usually in stacks of two rows.</li>
        <li>East is the dealer and goes first. Play then proceeds <strong>to the right</strong> (each player passes to the player on their right).</li>
        <li>Every player has 13 tiles on their rack at the start of their turn (after the Charleston). East has 14 — and starts the game by discarding one.</li>
      </ul>

      <h3>The turn — three phases</h3>
      <ol>
        <li><strong>Draw.</strong> Take the next tile from the wall, look at it, add it to your hand. (Skip this on East's very first turn — East just discards to start.)</li>
        <li><strong>Decide.</strong> Now you have 14 tiles. Do you have a winning hand? If yes — call <strong>"Mah Jongg!"</strong>. If no, choose which tile to discard.</li>
        <li><strong>Discard.</strong> Take a tile from your hand, place it face-up in front of you, and <strong>say its name out loud</strong> ("Six Dot"). This is critical — other players need to hear what you discarded so they can decide whether to claim it.</li>
      </ol>

      <h3>Claiming a discard</h3>
      <p>When a tile is discarded, any other player can claim it if they have at least two matching tiles already (to form a pung, kong, etc.) — or if it's their final tile for Mah Jongg.</p>
      <p>To claim, say <strong>"Call!"</strong> (or "Take!" or "I want that!") — the card explicitly accepts any clear verbalization. The window stays open until <strong>the next player has picked AND either racked the tile or discarded</strong>. So if the next player picks a tile and is still holding it deciding, you can still call. Once they rack it (place it behind their rack) or discard, the discard is gone.</p>
      <p>If you call:</p>
      <ol>
        <li>You take the discarded tile.</li>
        <li>You immediately <strong>expose</strong> the completed set face-up on the front of your rack (the matching natural tiles from your hand, plus the called tile, plus any joker substitutions you want to declare).</li>
        <li>You discard a tile from your hand to continue play. Turn order skips back to you — meaning if Player 2 discards and Player 4 claims it, Player 4 plays next and Player 3 is skipped.</li>
        <li>You do <strong>not draw</strong> when you claim — you've already gotten your tile from the discard.</li>
      </ol>

      <h3>When NOT to claim</h3>
      <p>Just because you <em>can</em> claim doesn't mean you <em>should</em>. Exposing a set commits you to one hand — you can't change directions later. Beginners often expose too eagerly and lock themselves out of better hands. As a rule: don't expose anything until you've narrowed down to one or two target hands, ideally by mid-game.</p>

      <h3>Calling for Mah Jongg</h3>
      <p>If the discarded tile is the <strong>last tile you need</strong> to complete your hand, you can call <strong>"Mah Jongg!"</strong> instead of "Take it!". This works even if the tile completes a pair (which you couldn't normally claim).</p>
      <p>When you call Mah Jongg:</p>
      <ol>
        <li>Take the discarded tile.</li>
        <li>Lay your entire hand face-up so everyone can verify.</li>
        <li>Name the hand from the card you completed.</li>
        <li>If everyone agrees, you win the round. Score it (next lesson). Then shuffle and re-deal.</li>
      </ol>

      <h3>The end of the wall (a "wall game")</h3>
      <p>If the wall runs out of tiles and nobody has called Mah Jongg, the round ends as a <strong>wall game</strong> (also called a "push"). No winner. No points. Shuffle and deal again, same dealer.</p>
    `
  },
  {
    id: 'scoring',
    title: 'Winning &amp; Scoring',
    icon: '💰',
    content: `
      <p>Scoring in American Mah Jongg is simpler than you'd think — most groups play for nominal stakes (a quarter a hand) and the scoring formulas are right on the card.</p>

      <h3>The basic payout</h3>
      <p>Each hand on the NMJL card has a point value printed next to it. Common values: 25, 30, 35, 40, 50, 60, 75. Higher numbers = harder hands.</p>
      <p>When you call Mah Jongg, you collect from each of the other three players. How much depends on:</p>
      <ul>
        <li><strong>The hand's value</strong> (the number on the card)</li>
        <li><strong>How you won</strong> — drew the winning tile yourself ("self-pick" / "self-drawn"), or claimed it from a discard</li>
        <li><strong>Whether your hand was concealed</strong> (no exposed sets) — doubles the payout</li>
        <li><strong>Whether you used jokers</strong> — concealed hands with no jokers earn a further bonus in many house rules</li>
      </ul>

      <h3>Standard payouts (from the 2026 NMJL card)</h3>
      <p>Each hand on the card has a base value (X 25, X 30, C 50, etc.). Multiply that base value as follows:</p>
      <table class="ref-table">
        <thead><tr><th>Situation</th><th>Multiplier</th></tr></thead>
        <tbody>
          <tr><td>Won by claiming a discard, exposed hand</td><td>× 1</td></tr>
          <tr><td>Won by self-pick, exposed hand</td><td>× 2</td></tr>
          <tr><td>Won by claiming a discard, concealed hand</td><td>× 2</td></tr>
          <tr><td>Won by self-pick, concealed hand</td><td>× 4</td></tr>
          <tr><td><strong>Bonus: won without using any joker</strong></td><td>× 2 on top of the above (except Singles &amp; Pairs)</td></tr>
        </tbody>
      </table>
      <p><strong>Discarder penalty:</strong> the player whose discard you took (if applicable) pays double — they "fed the winner." So in an exposed claim-win at base value 25: two non-discarder players pay 25 each, the discarder pays 50, total to winner = 100. With a jokerless bonus, double everything.</p>

      <h3>The "no joker" doubler — official rule, often missed</h3>
      <p>If you complete a winning hand <strong>without using a single joker</strong>, the value paid by every player doubles. This is rule 7 on the back of the card. The only exception is Singles &amp; Pairs hands, which never allow jokers anyway. So if you're playing an X 25 hand without jokers and someone discards your winning tile, every player pays 25 × 2 = 50, and the discarder pays 100. This is why jokerless wins are coveted.</p>

      <h3>The "misnamed tile" penalty — official rule, easy to forget</h3>
      <p>You must <strong>name your discard correctly</strong>. If you misname it:</p>
      <ul>
        <li>If another player calls it for an Exposure based on the wrong name, their hand becomes dead. You're not penalized.</li>
        <li>If another player calls Mah Jongg based on the wrong name, <strong>you alone pay them 4 times the value of the hand</strong>. The other two players pay nothing.</li>
      </ul>
      <p>This is why naming tiles correctly matters — it's not just etiquette, it can cost you a small fortune in a single careless turn.</p>

      <h3>Losing hands</h3>
      <p>If no one wins (a wall game), no money changes hands. If someone wins, the three non-winners simply pay according to the table above. There's no penalty for being close — you either win or you don't.</p>

      <h3>Dead hands — be careful</h3>
      <p>A hand is "dead" if it has any of these problems:</p>
      <ul>
        <li>Too few or too many tiles on the rack</li>
        <li>An exposure that doesn't match any possible hand on the card</li>
        <li>A misnamed exposure (you called a tile by the wrong name and exposed with it)</li>
        <li>An incorrect Mah Jongg call where the hand was exposed</li>
      </ul>
      <p>A dead hand stops picking and discarding for the rest of the round, but the player still pays the winner if someone else wins.</p>

      <h3>Three dead hands = wall game</h3>
      <p>If three of the four hands become dead during a round (and not because of a Mah Jongg-in-error situation), the surviving player throws in their hand and <strong>nobody gets paid</strong>. Round over, no winner.</p>

      <h3>Mah Jongg in error — verify before you mix</h3>
      <p style="padding: 12px; background: var(--bg-soft); border-left: 4px solid var(--accent); border-radius: 4px;"><strong>RULE: Players should NOT throw in their hands until Mah Jongg is verified.</strong> When someone calls Mah Jongg, everyone freezes and confirms the hand matches the card. If it doesn't:</p>
      <ul>
        <li>If the declarer didn't expose their hand (and no one else exposed), play continues with no penalty.</li>
        <li>If the declarer exposed an incorrect hand and one other player also exposed in response, the game continues with the two players who kept their tiles intact. The erring declarer <strong>pays double the value</strong> of the incorrect hand to the one player whose hand is still intact.</li>
        <li>If more than one other player exposed in response, the game cannot continue.</li>
      </ul>

      <p style="margin-top:24px; padding:16px; background: var(--bg-soft); border-left: 4px solid var(--accent); border-radius: 4px;"><strong>The official rules cover more than you might expect.</strong> Misnamed-tile penalties, jokerless doublers, and dead-hand mechanics are all printed on the back of the 2026 card. The NMJL rule book <em>Mah Jongg Made Easy</em> covers edge cases (etiquette, redealing, dispute resolution) — order it from the league if you want the full reference. For your first few family games, follow the card and the cheat sheet; you'll be on solid ground.</p>
    `
  },
  {
    id: 'firstgame',
    title: 'Your First Family Game',
    icon: '🎉',
    content: `
      <p>Here's the step-by-step for sitting down at the table for the first time.</p>

      <h3>Before you start</h3>
      <ol>
        <li>Open the table and lay out the felted mat.</li>
        <li>Set up four racks, one at each side.</li>
        <li>Put the NMJL 2026 card next to each rack (one per player if you have them).</li>
        <li>Pour the tiles face-down onto the mat.</li>
      </ol>

      <h3>Shuffle and build the walls</h3>
      <ol>
        <li>Everyone shuffles the tiles face-down with both hands. Make noise — it's tradition.</li>
        <li>Each player builds a wall in front of them: <strong>2 rows tall × 19 tiles long</strong> (or whatever your rack instructions say — racks are usually labeled). You'll use 4 walls totaling 152 tiles.</li>
        <li>Push the walls together to form a square in the center of the table.</li>
      </ol>

      <h3>Choose East (the dealer)</h3>
      <p>Many groups just rotate East each hand. For the first hand, roll dice or pick a random way to choose. East deals first and goes first.</p>

      <h3>Deal the tiles</h3>
      <ol>
        <li>East rolls two dice. Count counter-clockwise from East by the dice total — that's where you "break" the wall to start dealing.</li>
        <li>Deal 4 tiles at a time, counter-clockwise, to each player. After three rounds (12 tiles each), each player takes one more tile to bring them to 13. East takes 2, ending with 14 tiles.</li>
        <li>Players sort their tiles on their racks. Take a minute. Don't rush this.</li>
      </ol>

      <h3>Run the Charleston</h3>
      <p>Right → Over → Left, then optionally Left → Over → Right, then optionally a Courtesy Pass. See the Charleston lesson for what to pass.</p>

      <h3>Play the hand</h3>
      <p>East discards first to start. Then counter-clockwise: draw, decide, discard. Watch for claims. Don't expose tiles until you've committed to a hand. Hold your jokers. Take your time.</p>

      <h3>What success looks like for a first family game</h3>
      <p>Don't try to win. Try to <strong>finish a round legally</strong> — recognize tiles, run the Charleston correctly, take turns smoothly, identify a hand from the card, and either complete it or run out the wall. The win comes later. Confidence comes first.</p>

      <h3>Common first-game mistakes</h3>
      <ul>
        <li>Calling tiles too early and locking into a bad hand</li>
        <li>Passing a flower (always check whether your hand uses flowers!)</li>
        <li>Forgetting that pairs cannot be claimed</li>
        <li>Forgetting that NEWS sequences cannot use jokers</li>
        <li>Forgetting to name your discard out loud</li>
        <li>Drawing two tiles in a row</li>
        <li>Trying to use the 2025 card (last year's) instead of the 2026 card</li>
      </ul>

      <p style="margin-top:24px; padding:16px; background: var(--bg-soft); border-left: 4px solid var(--accent); border-radius: 4px;"><strong>Print the Cheat Sheet</strong> (last menu item) and put a copy at each rack for your first few sessions. Most beginner mistakes are caught by glancing at it.</p>
    `
  }
];

// ============================================================
//  HAND PRACTICE — example hands inspired by NMJL card sections
//  NOTE: These are illustrative teaching examples. The actual NMJL
//  2026 card hands are copyrighted by the National Mah Jongg League
//  and must be purchased directly from them. Use these to learn the
//  STRUCTURE of card hands.
// ============================================================
const HAND_EXAMPLES = [
  {
    section: 'Year Hand (2026)',
    pattern: 'FF 2026 2026 2026',
    description: 'Two Flowers, then "2026" tiles repeated in three different suits.',
    notes: 'The "0" is the White Dragon (Soap). All three "2026" sequences must be in different suits because they\'re shown in different colors on the card.',
    tiles: ['F', 'F', '2', '0', '2', '6', '2', '0', '2', '6', '2', '0', '2', '6'],
    value: 'Closed hand — high value'
  },
  {
    section: 'Like Numbers',
    pattern: 'NN 222 2222 222 SS',
    description: 'Pair of North, pung of 2s in one suit, kong of 2s in a second suit, pung of 2s in a third suit, pair of South.',
    notes: 'The three groups of 2s must each be in a different suit. Easy hand to learn — focuses on a single number across all three suits.',
    tiles: ['N', 'N', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', 'S', 'S'],
    value: 'Exposed hand — moderate value'
  },
  {
    section: 'Winds &amp; Dragons',
    pattern: 'NN EEEE WWWW SSSS',
    description: 'Pair of North, kong of East, kong of West, kong of South — the classic "NEWS" hand.',
    notes: 'Cannot use any jokers (because NEWS is a sequence — and pairs require natural tiles). This is a hard closed hand worth top points.',
    tiles: ['N', 'N', 'E', 'E', 'E', 'E', 'W', 'W', 'W', 'W', 'S', 'S', 'S', 'S'],
    value: 'Concealed hand — high value'
  },
  {
    section: '13579',
    pattern: '1111 33 55 77 9999',
    description: 'Kong of 1s, pair of 3s, pair of 5s, pair of 7s, kong of 9s — all in one suit.',
    notes: 'Single-suit hands are valuable. Pairs cannot use jokers; the kongs can.',
    tiles: ['1', '1', '1', '1', '3', '3', '5', '5', '7', '7', '9', '9', '9', '9'],
    value: 'Single-suit hand — high value'
  },
  {
    section: 'Consecutive Run',
    pattern: '111 2222 3333 444',
    description: 'Pung of 1s, kong of 2s, kong of 3s, pung of 4s — four consecutive numbers, all same suit.',
    notes: 'One of the most flexible hand types. Many variations on the card depending on which 4 consecutive numbers and which suit.',
    tiles: ['1', '1', '1', '2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '4'],
    value: 'Single-suit run — moderate-to-high value'
  },
  {
    section: '369',
    pattern: '333 6666 999 DDDD',
    description: 'Pung of 3s, kong of 6s, pung of 9s, kong of one Dragon color.',
    notes: 'The 369 family includes hands with all multiples-of-three plus the matching dragon. Red Dragon goes with Craks, Green with Bams, White (Soap) with Dots.',
    tiles: ['3', '3', '3', '6', '6', '6', '6', '9', '9', '9', 'D', 'D', 'D', 'D'],
    value: 'Exposed hand — moderate value'
  }
];

// ============================================================
//  QUICK QUIZ QUESTIONS — small set for "Test Yourself"
// ============================================================
const QUIZ = [
  {
    q: 'How many tiles are in a complete American Mah Jongg set?',
    choices: ['144', '152', '136', '166'],
    answer: 1,
    explain: '152 tiles total — though sets often ship with 14 extras (totalling 166) for replacements.'
  },
  {
    q: 'How many Jokers are in the set?',
    choices: ['4', '6', '8', '10'],
    answer: 2,
    explain: 'American sets contain 8 Jokers. They\'re wild but have strict rules about where they can be used.'
  },
  {
    q: 'What\'s the mnemonic for the Charleston pass order?',
    choices: ['LROORL', 'ROLLOR', 'RLOOLR', 'ORLLRO'],
    answer: 1,
    explain: 'ROLLOR — Right, Over, Left, Left, Over, Right. First three mandatory, last three optional.'
  },
  {
    q: 'Can a joker be used to complete a pair?',
    choices: ['Yes, always', 'Yes, but only on the last tile', 'No, never', 'Only if no jokers are in the discard pile'],
    answer: 2,
    explain: 'Jokers can NEVER substitute in a pair. Pairs must be two natural matching tiles. This is one of the most-forgotten rules.'
  },
  {
    q: 'Which tile doubles as the "0" (zero) in year hands like 2026?',
    choices: ['Joker', 'Flower', 'White Dragon (Soap)', 'Red Dragon'],
    answer: 2,
    explain: 'The White Dragon is also called "Soap" or "Zero" — it doubles as the 0 digit in year-pattern hands.'
  },
  {
    q: 'What does it mean to "expose" a set?',
    choices: ['Show your whole hand to everyone', 'Place the set face-up on the front of your rack', 'Discard the set', 'Pass the set to the next player'],
    answer: 1,
    explain: 'Exposing a set means placing it face-up on the front of your rack. Once exposed, the set is locked in.'
  },
  {
    q: 'Which way does play proceed after East discards first?',
    choices: ['Clockwise', 'Counter-clockwise', 'Skip every other player', 'Whoever has the most tiles'],
    answer: 1,
    explain: 'American Mah Jongg plays counter-clockwise (right to left around the table).'
  },
  {
    q: 'What do you call out when you discard a tile?',
    choices: ['Nothing — just place it', 'Your own name', 'The name of the tile', 'The name of the hand you\'re building'],
    answer: 2,
    explain: 'You must name the tile out loud (e.g. "Three Dot") so other players can decide whether to claim it.'
  },
  {
    q: 'How many tiles are in your hand at the end of your turn?',
    choices: ['12', '13', '14', 'Depends on how many you\'ve exposed'],
    answer: 1,
    explain: 'You always end your turn with 13 tiles in hand. The 14th tile completes a winning hand.'
  },
  {
    q: 'The 1 Bam is usually depicted as what?',
    choices: ['A single bamboo stalk', 'A bird (often a sparrow)', 'A Chinese character', 'A blank tile'],
    answer: 1,
    explain: 'The 1 Bam is traditionally drawn as a bird, not a bamboo stalk — this is a common beginner gotcha.'
  },
  {
    q: 'During the Charleston, can you pass a Joker?',
    choices: ['Yes, anytime', 'Only blind', 'Only in the Second Charleston', 'No, never'],
    answer: 3,
    explain: 'Jokers can NEVER be passed in the Charleston. If you accidentally do, it must be returned. Some tables apply additional penalties.'
  },
  {
    q: 'What\'s the Joker Exchange?',
    choices: [
      'Trading two jokers for one card tile',
      'Swapping your natural tile for an opponent\'s joker in their exposed set',
      'Replacing a joker mid-hand',
      'Passing jokers across the table'
    ],
    answer: 1,
    explain: 'If a joker is substituting in another player\'s exposed set, you can offer the natural tile and take their joker. This is one of the strongest moves in the game.'
  }
];
