// Real-Life Patch Notes: The Comedy Changelog
// One terse changelog entry for a bug in human biology, written exactly
// like a real release note — version, fix, and the bug itself doing the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "v1.9.2: fixed a bug where the brain replayed embarrassing moments from 2009 at 3 a.m. with full audio.";

// The gate: entry.txt must be UTF-8 text of 1 to 160 characters, one line.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry length ${LINE.length} is outside the 1-160 gate`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
