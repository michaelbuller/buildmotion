import { NotificationOptions } from './notification-options.model';
import { NotificationSeverity } from './notification-severity.enum';
import { NotifierType } from './notifier-type.enum';
export declare class Notification {
    title: string;
    description: string;
    messages: string[];
    severity: NotificationSeverity;
    notifierType?: NotifierType;
    options?: NotificationOptions;
    constructor(title?: string, description?: string, notifierType?: NotifierType, severity?: NotificationSeverity, messages?: string[], options?: NotificationOptions);
    constructor(title: string, description?: string, notifierType?: NotifierType, severity?: NotificationSeverity, messages?: string[], options?: NotificationOptions);
    constructor(title: string, description: string, notifierType?: NotifierType, severity?: NotificationSeverity, messages?: string[], options?: NotificationOptions);
    constructor(title: string, description: string, notifierType: NotifierType, severity?: NotificationSeverity, messages?: string[], options?: NotificationOptions);
    constructor(title: string, description: string, notifierType: NotifierType, severity: NotificationSeverity, messages?: string[], options?: NotificationOptions);
}
