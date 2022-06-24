import { ILogEntry } from './i-log-entry';
import { Severity } from './severity.enum';
export declare class LogEntry implements ILogEntry {
    application: string;
    source: string;
    severity: Severity;
    message: string;
    timestamp: Date;
    tags?: string[];
    constructor(application: string, source: string, severity: Severity, message: string, tags?: string[] | undefined);
}
