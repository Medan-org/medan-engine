import { loadManifest } from "../core/manifest";
import { execSync } from "child_process";

export function run(script: string) {
  const manifest = loadManifest();

  if (!manifest.scripts) {
    console.error("This package has no scripts section in pckg.json");
    return;
  }

  const command = manifest.scripts[script];

  if (!command) {
    console.error(`Script "${script}" not found in pckg.json`);
    return;
  }

  console.log(`Running script "${script}"...`);
  try {
    execSync(command, { stdio: "inherit" });
  } catch (err) {
    console.error(`Script "${script}" failed to run`);
  }
}
