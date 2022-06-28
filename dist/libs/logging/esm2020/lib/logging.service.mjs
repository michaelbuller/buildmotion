import { Injectable, Optional } from '@angular/core';
import { ConfigurationService } from '@buildmotion/configuration';
import { Guid } from 'guid-typescript';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { LogEntry } from './log-entry';
import { Severity } from './severity.enum';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/configuration";
export class LoggingService {
    /**
     * The [LoggingService] constructor.
     */
    constructor(configService) {
        this.configService = configService;
        this.serviceName = 'LoggingService';
        this.timestamp = new Date();
        this.id = Guid.create();
        this.logEntriesSubject = new ReplaySubject(1);
        this.logEntries$ = this.logEntriesSubject.asObservable();
        this.log(this.serviceName, Severity.Information, `Starting logging service [${this.id.toString()}] at: ${this.timestamp}`);
        this.initializeService(configService);
    }
    /**
     * Use to initialize the logging service. Retrieves
     * application configuration settings.
     *
     * @param configService contains the configuration settings for the application
     */
    initializeService(configService) {
        if (configService) {
            this.configService.settings$.pipe(take(1)).subscribe((settings) => this.handleSettings(settings));
        }
    }
    /**
     * Use to handle settings from the configuration service.
     * @param settings
     */
    handleSettings(settings) {
        if (settings) {
            this.config = settings.loggingConfig;
            this.applicationName = this.config && this.config.applicationName ? this.config.applicationName : 'Angular';
            this.isProduction = this.config && this.config.isProduction ? this.config.isProduction : false;
        }
    }
    /**
     * Use this method to send a log message with severity and source information
     * to the application's logger.
     *
     * If the application environment mode is [Production], the information will
     * be sent to a centralized repository.
     *
     * @param source
     * @param severity
     * @param message
     */
    log(source, severity, message, tags) {
        this.source = this.applicationName !== source ? `${this.applicationName}.${source}` : this.applicationName;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        if (tags) {
            tags.push(`LoggerId:${this.id.toString()}`);
        }
        else {
            tags = [`LoggerId:${this.id.toString()}`];
        }
        const logEntry = new LogEntry(this.applicationName, this.source, this.severity, this.message, tags);
        this.logEntriesSubject.next(logEntry);
    }
}
LoggingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingService, deps: [{ token: i1.ConfigurationService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
LoggingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9sb2dnaW5nL3NyYy9saWIvbG9nZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBaUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQW1CM0MsTUFBTSxPQUFPLGNBQWM7SUFlekI7O09BRUc7SUFDSCxZQUErQixhQUFtQztRQUFuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFqQmxFLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFJL0IsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFLN0IsT0FBRSxHQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVqQixzQkFBaUIsR0FBNkIsSUFBSSxhQUFhLENBQVksQ0FBQyxDQUFDLENBQUM7UUFDdEUsZ0JBQVcsR0FBMEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBTXpGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLDZCQUE2QixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxpQkFBaUIsQ0FBQyxhQUFtQztRQUMzRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbkc7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLFFBQXdCO1FBQ3JDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBRXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM1RyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDaEc7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILEdBQUcsQ0FBQyxNQUFjLEVBQUUsUUFBa0IsRUFBRSxPQUFlLEVBQUUsSUFBZTtRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDM0csSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OzJHQXpFVSxjQUFjOytHQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsVUFBVTs7MEJBbUJJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UsIElDb25maWd1cmF0aW9uLCBMb2dnaW5nQ29uZmlnIH0gZnJvbSAnQGJ1aWxkbW90aW9uL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gJ2d1aWQtdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUxvZ0VudHJ5IH0gZnJvbSAnLi9pLWxvZy1lbnRyeSc7XG5pbXBvcnQgeyBMb2dFbnRyeSB9IGZyb20gJy4vbG9nLWVudHJ5JztcbmltcG9ydCB7IFNldmVyaXR5IH0gZnJvbSAnLi9zZXZlcml0eS5lbnVtJztcblxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2luZ1NlcnZpY2Uge1xuICBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuICBzb3VyY2U6IHN0cmluZztcbiAgc2V2ZXJpdHk6IFNldmVyaXR5O1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogRGF0ZTtcbiAgYXBwbGljYXRpb25OYW1lOiBzdHJpbmc7XG4gIHZlcnNpb246IHN0cmluZztcbiAgaXNQcm9kdWN0aW9uOiBib29sZWFuO1xuICBjb25maWc6IExvZ2dpbmdDb25maWc7XG4gIGlkOiBHdWlkO1xuICBsb2dFbnRyaWVzJDogT2JzZXJ2YWJsZTxJTG9nRW50cnk+O1xuICAvLyBjb25maWdTZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZTtcbiAgaGFuZGxlU2V0dGluZ3Moc2V0dGluZ3M6IElDb25maWd1cmF0aW9uKTogdm9pZDtcbiAgbG9nKHNvdXJjZTogc3RyaW5nLCBzZXZlcml0eTogU2V2ZXJpdHksIG1lc3NhZ2U6IHN0cmluZywgdGFncz86IHN0cmluZ1tdKTogdm9pZDtcbn1cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnaW5nU2VydmljZSBpbXBsZW1lbnRzIElMb2dnaW5nU2VydmljZSB7XG4gIHNlcnZpY2VOYW1lID0gJ0xvZ2dpbmdTZXJ2aWNlJztcbiAgc291cmNlITogc3RyaW5nO1xuICBzZXZlcml0eSE6IFNldmVyaXR5O1xuICBtZXNzYWdlITogc3RyaW5nO1xuICB0aW1lc3RhbXA6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBhcHBsaWNhdGlvbk5hbWUhOiBzdHJpbmc7XG4gIHZlcnNpb24hOiBzdHJpbmc7XG4gIGlzUHJvZHVjdGlvbiE6IGJvb2xlYW47XG4gIGNvbmZpZyE6IExvZ2dpbmdDb25maWc7XG4gIGlkOiBHdWlkID0gR3VpZC5jcmVhdGUoKTtcblxuICBwcml2YXRlIGxvZ0VudHJpZXNTdWJqZWN0OiBSZXBsYXlTdWJqZWN0PElMb2dFbnRyeT4gPSBuZXcgUmVwbGF5U3ViamVjdDxJTG9nRW50cnk+KDEpO1xuICBwdWJsaWMgcmVhZG9ubHkgbG9nRW50cmllcyQ6IE9ic2VydmFibGU8SUxvZ0VudHJ5PiA9IHRoaXMubG9nRW50cmllc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBbTG9nZ2luZ1NlcnZpY2VdIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBTdGFydGluZyBsb2dnaW5nIHNlcnZpY2UgWyR7dGhpcy5pZC50b1N0cmluZygpfV0gYXQ6ICR7dGhpcy50aW1lc3RhbXB9YCk7XG4gICAgdGhpcy5pbml0aWFsaXplU2VydmljZShjb25maWdTZXJ2aWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gaW5pdGlhbGl6ZSB0aGUgbG9nZ2luZyBzZXJ2aWNlLiBSZXRyaWV2ZXNcbiAgICogYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBzZXR0aW5ncy5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1NlcnZpY2UgY29udGFpbnMgdGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZSBhcHBsaWNhdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBpbml0aWFsaXplU2VydmljZShjb25maWdTZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZSkge1xuICAgIGlmIChjb25maWdTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmNvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChzZXR0aW5ncykgPT4gdGhpcy5oYW5kbGVTZXR0aW5ncyhzZXR0aW5ncykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gaGFuZGxlIHNldHRpbmdzIGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gc2VydmljZS5cbiAgICogQHBhcmFtIHNldHRpbmdzXG4gICAqL1xuICBoYW5kbGVTZXR0aW5ncyhzZXR0aW5nczogSUNvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoc2V0dGluZ3MpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ3MubG9nZ2luZ0NvbmZpZztcblxuICAgICAgdGhpcy5hcHBsaWNhdGlvbk5hbWUgPSB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5hcHBsaWNhdGlvbk5hbWUgPyB0aGlzLmNvbmZpZy5hcHBsaWNhdGlvbk5hbWUgOiAnQW5ndWxhcic7XG4gICAgICB0aGlzLmlzUHJvZHVjdGlvbiA9IHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzUHJvZHVjdGlvbiA/IHRoaXMuY29uZmlnLmlzUHJvZHVjdGlvbiA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBhIGxvZyBtZXNzYWdlIHdpdGggc2V2ZXJpdHkgYW5kIHNvdXJjZSBpbmZvcm1hdGlvblxuICAgKiB0byB0aGUgYXBwbGljYXRpb24ncyBsb2dnZXIuXG4gICAqXG4gICAqIElmIHRoZSBhcHBsaWNhdGlvbiBlbnZpcm9ubWVudCBtb2RlIGlzIFtQcm9kdWN0aW9uXSwgdGhlIGluZm9ybWF0aW9uIHdpbGxcbiAgICogYmUgc2VudCB0byBhIGNlbnRyYWxpemVkIHJlcG9zaXRvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2VcbiAgICogQHBhcmFtIHNldmVyaXR5XG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuICBsb2coc291cmNlOiBzdHJpbmcsIHNldmVyaXR5OiBTZXZlcml0eSwgbWVzc2FnZTogc3RyaW5nLCB0YWdzPzogc3RyaW5nW10pIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuYXBwbGljYXRpb25OYW1lICE9PSBzb3VyY2UgPyBgJHt0aGlzLmFwcGxpY2F0aW9uTmFtZX0uJHtzb3VyY2V9YCA6IHRoaXMuYXBwbGljYXRpb25OYW1lO1xuICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMudGltZXN0YW1wID0gbmV3IERhdGUoKTtcblxuICAgIGlmICh0YWdzKSB7XG4gICAgICB0YWdzLnB1c2goYExvZ2dlcklkOiR7dGhpcy5pZC50b1N0cmluZygpfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWdzID0gW2BMb2dnZXJJZDoke3RoaXMuaWQudG9TdHJpbmcoKX1gXTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dFbnRyeSA9IG5ldyBMb2dFbnRyeSh0aGlzLmFwcGxpY2F0aW9uTmFtZSwgdGhpcy5zb3VyY2UsIHRoaXMuc2V2ZXJpdHksIHRoaXMubWVzc2FnZSwgdGFncyk7XG4gICAgdGhpcy5sb2dFbnRyaWVzU3ViamVjdC5uZXh0KGxvZ0VudHJ5KTtcbiAgfVxufVxuIl19