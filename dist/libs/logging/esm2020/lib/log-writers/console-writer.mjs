import { Injectable } from '@angular/core';
import { LogWriter } from './log-writer';
import { LoggingService } from '../logging.service';
import { Severity } from '../severity.enum';
import { noop } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../logging.service";
/**
 * Use this writer to log information to the browser console.
 */
export class ConsoleWriter extends LogWriter {
    constructor(loggingService) {
        super();
        this.loggingService = loggingService;
        if (loggingService.config.isProduction === false) {
            this.loggingService.logEntries$.subscribe((logEntry) => this.handleLogEntry(logEntry));
        }
    }
    handleLogEntry(logEntry) {
        this.targetEntry = logEntry;
        this.execute();
    }
    /**
     * No setup required for the console writer.
     */
    setup() {
        noop();
    }
    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    write() {
        switch (this.targetEntry.severity) {
            /* eslint-disable no-restricted-syntax */
            /* eslint-disable no-console */
            case Severity.Debug:
                console.debug(this.targetEntry);
                break;
            case Severity.Information:
                console.info(this.targetEntry);
                break;
            case Severity.Warning:
                console.warn(this.targetEntry);
                break;
            case Severity.Error:
                console.error(this.targetEntry);
                break;
            case Severity.Critical:
                console.error(this.targetEntry);
                break;
            default:
                break;
            /* eslint-enable no-restricted-syntax */
            /* eslint-enable no-console */
        }
    }
}
ConsoleWriter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConsoleWriter, deps: [{ token: i1.LoggingService }], target: i0.ɵɵFactoryTarget.Injectable });
ConsoleWriter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConsoleWriter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConsoleWriter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LoggingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS13cml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2xvZ2dpbmcvc3JjL2xpYi9sb2ctd3JpdGVycy9jb25zb2xlLXdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFNUI7O0dBRUc7QUFFSCxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQVM7SUFDMUMsWUFBb0IsY0FBOEI7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFaEQsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQW1CO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1YsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUNWLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDakMseUNBQXlDO1lBQ3pDLCtCQUErQjtZQUMvQixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssUUFBUSxDQUFDLFdBQVc7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1lBQ1IsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtZQUNSLHdDQUF3QztZQUN4Qyw4QkFBOEI7U0FDL0I7SUFDSCxDQUFDOzswR0FoRFUsYUFBYTs4R0FBYixhQUFhOzJGQUFiLGFBQWE7a0JBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9nRW50cnkgfSBmcm9tICcuLi9pLWxvZy1lbnRyeSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dXcml0ZXIgfSBmcm9tICcuL2xvZy13cml0ZXInO1xuaW1wb3J0IHsgTG9nZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9sb2dnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V2ZXJpdHkgfSBmcm9tICcuLi9zZXZlcml0eS5lbnVtJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBVc2UgdGhpcyB3cml0ZXIgdG8gbG9nIGluZm9ybWF0aW9uIHRvIHRoZSBicm93c2VyIGNvbnNvbGUuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zb2xlV3JpdGVyIGV4dGVuZHMgTG9nV3JpdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChsb2dnaW5nU2VydmljZS5jb25maWcuaXNQcm9kdWN0aW9uID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2dFbnRyaWVzJC5zdWJzY3JpYmUoKGxvZ0VudHJ5KSA9PiB0aGlzLmhhbmRsZUxvZ0VudHJ5KGxvZ0VudHJ5KSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTG9nRW50cnkobG9nRW50cnk6IElMb2dFbnRyeSkge1xuICAgIHRoaXMudGFyZ2V0RW50cnkgPSBsb2dFbnRyeTtcbiAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBObyBzZXR1cCByZXF1aXJlZCBmb3IgdGhlIGNvbnNvbGUgd3JpdGVyLlxuICAgKi9cbiAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuICAgIG5vb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgYWJzdHJhY3QgbWV0aG9kLiBUaGlzIHdpbGwgcGVyZm9ybSB0aGVcbiAgICogYWN0dWFsIGB3cml0ZWAgYWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIHdyaXRlci5cbiAgICovXG4gIHB1YmxpYyB3cml0ZSgpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMudGFyZ2V0RW50cnkuc2V2ZXJpdHkpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBjYXNlIFNldmVyaXR5LkRlYnVnOlxuICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMudGFyZ2V0RW50cnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2V2ZXJpdHkuSW5mb3JtYXRpb246XG4gICAgICAgIGNvbnNvbGUuaW5mbyh0aGlzLnRhcmdldEVudHJ5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNldmVyaXR5Lldhcm5pbmc6XG4gICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnRhcmdldEVudHJ5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNldmVyaXR5LkVycm9yOlxuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMudGFyZ2V0RW50cnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2V2ZXJpdHkuQ3JpdGljYWw6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy50YXJnZXRFbnRyeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICB9XG4gIH1cbn1cbiJdfQ==