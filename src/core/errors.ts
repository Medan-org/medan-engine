export class MedanError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MedanError";
  }
}

export class ManifestError extends MedanError {
  constructor(message: string) {
    super(message);
    this.name = "ManifestError";
  }
}

export class ScriptError extends MedanError {
  constructor(message: string) {
    super(message);
    this.name = "ScriptError";
  }
}

export class InstallError extends MedanError {
  constructor(message: string) {
    super(message);
    this.name = "InstallError";
  }
}
