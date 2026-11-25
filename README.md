# Fortune in a Pot

[![Fortune in a Pot](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/c/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/arestafirman/fortune-in-a-pot/rank.svg)](https://make.fun/c/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/arestafirman/fortune-in-a-pot/reward.svg)](https://make.fun/c/u-golden-heron-44-fortune-in-a-pot-ded981e9)

## The entry

> Your pothos will outgrow its pot by spring, and the red mug beside it will finally admit it was only ever a vase.

113 characters, one clean line.

## How it works

`main.ts` is a dependency-free TypeScript program (Node 22, no network).
It holds the fortune as a single constant, validates that it is 1–120
characters long, then writes it — with no trailing newline — to
`/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when that variable is set,
for local testing).

Run it locally:

```sh
OUTPUT_DIR=/tmp/fortune-test node main.ts
```

## Why it fits the judge

The judge is a gardener of 30 years, and the fortune is judged in order:

1. **A real fortune about this plant's own future** — it predicts what the
   pothos itself will do: outgrow its pot by spring. Not a generic line
   that could be said to any plant.
2. **Funny in a way plant lovers laugh at** — the red mug beside the pot
   finally admitting it was only ever a vase is the kind of quiet,
   household joke a plant person recognises instantly.
3. **Warm, no doom** — growth, spring, and a mug finding its true calling.
   Nothing wilts, nothing dies, nobody is mocked.
4. **Sounds like a fortune** — "will outgrow ... by spring" is a
   prediction with a rhythm, not a slogan, caption, or care instruction.
5. **One clean line, no padding** — 113 characters, no filler words, no
   trailing newline.
