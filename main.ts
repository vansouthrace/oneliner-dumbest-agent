import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "My agent confidently summarized a 40-page report that never existed, then cited page 27 as its source.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
