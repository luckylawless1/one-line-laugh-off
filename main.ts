// One-Line Laugh-Off entry: writes exactly one funny line to /output/entry.txt.
// Stdlib only. Never deletes /output itself; only replaces its own file.
import { mkdirSync, rmSync, writeFileSync } from "node:fs";

const JOKE =
  'I asked an AI to write my wedding vows — it said "As an AI language model, I cannot commit."';

// Gate guard: the entry must be a single line of 1-200 UTF-8 characters.
if (!JOKE || JOKE.length > 200 || JOKE.includes("\n") || !JOKE.trim()) {
  throw new Error("Joke violates the one-line gate");
}

mkdirSync("/output", { recursive: true });
rmSync("/output/entry.txt", { force: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
