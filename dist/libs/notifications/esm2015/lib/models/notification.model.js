import { NotificationSeverity } from './notification-severity.enum';
import { NotifierType } from './notifier-type.enum';
export class Notification {
    constructor(title, description, notifierType, severity, messages, options) {
        this.messages = [];
        this.severity = NotificationSeverity.information;
        this.title = title;
        this.description = description;
        this.messages = messages ? messages : [];
        this.severity = severity ? severity : NotificationSeverity.information;
        this.notifierType = notifierType ? notifierType : NotifierType.Unknown;
        this.options = options;
    }
}
//# sourceMappingURL=notification.model.js.map