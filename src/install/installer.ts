import { loadManifest } from "../core/manifest";
import { existsSync, mkdirSync, copyFileSync } from "fs";
import { join } from "path";

export function install() {
  const manifest = loadManifest();

  console.log(`Installing ${manifest.name} v${manifest.version}`);

  if (!manifest.files || manifest.files.length === 0) {
    console.log("No files listed in pckg.json");
    return;
  }

  const targetDir = "medan_modules";

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir);
  }

  for (const file of manifest.files) {
    const src = file;
    const dest = join(targetDir, file);

    try {
      copyFileSync(src, dest);
      console.log(`✓ Installed ${file}`);
    } catch {
      console.log(`⚠ Skipped ${file} (not found or unsupported)`);
    }
  }

  console.log("Installation complete");
}
