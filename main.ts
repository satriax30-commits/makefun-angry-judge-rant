// Angry Judge: The Short Rant Contest
// Writes one fixed, funny rant about an everyday annoyance to /output/entry.txt.
// Fully deterministic: no clock, no randomness, no network, no reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The rant: the self-checkout machine accusing an innocent shopper.
// Chosen because it is concrete (one machine, one bag of rice, one teenager),
// universally shared, and fresh against the brief's own clichés
// (broken printer, slow bus, Monday morning, "circling back").
// The joke lands on the reversal: the machine plays cop, the bored teenager
// plays the actual expert, and the shopper is the suspect for buying rice.
const RANT =
  "The self-checkout yelled 'unexpected item in the bagging area' at a bag of rice I hadn't even touched. " +
  "I stood there, hands up like I'd robbed the place, while a teenager strolled over, tapped the screen once, " +
  "and fixed in two seconds what the machine spent a minute accusing me of.";

// The gate requires 1-400 characters of non-whitespace text; enforce it here
// so a bad edit fails loudly instead of shipping an invalid entry.
if (RANT.trim().length === 0 || [...RANT].length > 400) {
  throw new Error("Rant must be 1-400 characters of non-whitespace text.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, RANT, "utf8");
