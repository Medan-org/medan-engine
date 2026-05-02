export function showEnv() {
  console.log("Medan Environment");
  console.log("-----------------");
  console.log(`Platform: ${process.platform}`);
  console.log(`Node Version: ${process.version}`);
  console.log(`Working Directory: ${process.cwd()}`);
}
