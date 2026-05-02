// src/registry/registry.ts

export const REGISTRY_URL = "https://medan-org.github.io/registry";

export interface RegistryPackageInfo {
  name: string;
  version: string;
  description?: string;
}

export function getRegistryUrl() {
  return REGISTRY_URL;
}

export function fetchPackageInfo(name: string): RegistryPackageInfo {
  // Placeholder until real HTTP fetch is added
  return {
    name,
    version: "0.0.0",
    description: "Registry fetch not implemented yet"
  };
}

export function showRegistryStatus() {
  console.log("Medan Registry");
  console.log("--------------");
  console.log(`URL: ${REGISTRY_URL}`);
  console.log("Status: OK (placeholder)");
}
