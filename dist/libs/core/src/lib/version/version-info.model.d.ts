export declare class VersionInfo {
    application: string;
    version: string;
    buildDate: Date;
    hash?: string;
    constructor(application: string, version: string, buildDate: Date, hash?: string);
}
