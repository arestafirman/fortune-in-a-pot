// Fortune in a Pot — a one-line fortune for a houseplant.
//
// The entry (beat 1): a fortune about THIS pothos's own future — it will
// outgrow its pot by spring. (beat 2): the red mug beside it finally admits
// it was only ever a vase — a warm, funny, plant-lover joke with no doom,
// no wilting, no mockery, and a prediction rhythm, not a care instruction.
//
// Output: exactly the 113 characters above, no trailing newline, written to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Your pothos will outgrow its pot by spring, and the red mug beside it will finally admit it was only ever a vase.";

if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(
    `Fortune must be 1-120 characters, got ${FORTUNE.length}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), FORTUNE, "utf8");
