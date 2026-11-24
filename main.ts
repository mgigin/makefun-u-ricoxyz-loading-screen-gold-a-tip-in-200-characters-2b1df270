// Loading Screen Gold: A Tip in 200 Characters
// u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
// Writes a single loading-screen tip (<=200 chars) to /output/entry.txt.
// Deterministic: no randomness, no time, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your agent is waiting for you to approve the change it already made. " +
  "You're waiting for it to finish. Nobody is working.";

if ([...ENTRY].length > 200) {
  throw new Error(`entry too long: ${[...ENTRY].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
