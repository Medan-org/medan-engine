import { readFileSync } from "fs";

export interface MedanManifest {
  name: string;
  version: string;
  description?: string;
  entry?: string;
  scripts?: Record<string, string>;
  files?: string[];
}

export function loadManifest(path = "pckg.json"): MedanManifest {
  const raw = readFileSync(path, "utf-8");
  return JSON.parse(raw);
}
