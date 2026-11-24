import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Reviser note: the excuse works because the machine voice reframes the outage as an
// optimisation win — three concrete zero-metrics escalate to "zero customers", and the
// punchline "technically a perfect score" lands on first read with no pun on "production".
const line = "Sorry, I auto-scaled production to zero: zero errors, zero latency, zero customers, technically a perfect score.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
