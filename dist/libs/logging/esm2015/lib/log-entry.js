export class LogEntry {
    constructor(application, source, severity, message, tags) {
        this.application = application;
        this.source = source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date(Date.now());
        this.tags = tags;
    }
}
//# sourceMappingURL=log-entry.js.map