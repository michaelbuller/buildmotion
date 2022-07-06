import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { Severity } from './severity.enum';
import * as i0 from "@angular/core";
export class LoggingServiceMock {
    constructor() {
        this.applicationName = 'application';
        this.id = Guid.create();
        this.logEntries$ = new Subject();
        this.serviceName = 'LoggingServiceMock';
        this.version = '0.0.0';
    }
    setupConfiguration(settings) {
        if (settings) {
            this.log(this.serviceName, Severity.Information, `Logging for [${settings.loggingConfig.applicationName}].`);
        }
        this.isProduction = false;
    }
    log(source, severity, message) {
        this.source = source;
        this.severity = severity;
        this.message = message;
    }
}
LoggingServiceMock.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingServiceMock, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoggingServiceMock.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingServiceMock });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingServiceMock, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5zZXJ2aWNlLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2xvZ2dpbmcvc3JjL2xpYi9sb2dnaW5nLnNlcnZpY2UubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFJM0MsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVFLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBSWhDLE9BQUUsR0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFekIsZ0JBQVcsR0FBdUIsSUFBSSxPQUFPLEVBQWEsQ0FBQztRQUczRCxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBS25DLFlBQU8sR0FBRyxPQUFPLENBQUM7S0FjbkI7SUFaQyxrQkFBa0IsQ0FBQyxRQUF3QjtRQUN6QyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLGdCQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7U0FDOUc7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQWMsRUFBRSxRQUFrQixFQUFFLE9BQWU7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzs7K0dBNUJVLGtCQUFrQjttSEFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ29uZmlndXJhdGlvbiwgSUxvZ2dpbmdDb25maWcsIExvZ2dpbmdDb25maWcgfSBmcm9tICdAYnVpbGRtb3Rpb24vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnZ3VpZC10eXBlc2NyaXB0JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElMb2dFbnRyeSB9IGZyb20gJy4vaS1sb2ctZW50cnknO1xuaW1wb3J0IHsgSUxvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V2ZXJpdHkgfSBmcm9tICcuL3NldmVyaXR5LmVudW0nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnaW5nU2VydmljZU1vY2sgaW1wbGVtZW50cyBJTG9nZ2luZ1NlcnZpY2Uge1xuICBhcHBsaWNhdGlvbk5hbWUgPSAnYXBwbGljYXRpb24nO1xuICBjb25maWchOiBMb2dnaW5nQ29uZmlnO1xuICBjb25maWdTZXJ2aWNlITogdW5kZWZpbmVkO1xuICBoYW5kbGVTZXR0aW5ncyE6ICgpID0+IHsgdW5rbm93bjogYW55IH07XG4gIGlkOiBHdWlkID0gR3VpZC5jcmVhdGUoKTtcbiAgaXNQcm9kdWN0aW9uITogYm9vbGVhbjtcbiAgbG9nRW50cmllcyQ6IFN1YmplY3Q8SUxvZ0VudHJ5PiA9IG5ldyBTdWJqZWN0PElMb2dFbnRyeT4oKTtcbiAgbG9nZ2luZ0NvbmZpZyE6IElMb2dnaW5nQ29uZmlnO1xuICBtZXNzYWdlITogc3RyaW5nO1xuICBzZXJ2aWNlTmFtZSA9ICdMb2dnaW5nU2VydmljZU1vY2snO1xuICBzZXZlcml0eSE6IFNldmVyaXR5O1xuICBzb3VyY2UhOiBzdHJpbmc7XG4gIHN0YWNrITogc3RyaW5nO1xuICB0aW1lc3RhbXAhOiBEYXRlO1xuICB2ZXJzaW9uID0gJzAuMC4wJztcblxuICBzZXR1cENvbmZpZ3VyYXRpb24oc2V0dGluZ3M6IElDb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKHNldHRpbmdzKSB7XG4gICAgICB0aGlzLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYExvZ2dpbmcgZm9yIFske3NldHRpbmdzLmxvZ2dpbmdDb25maWcuYXBwbGljYXRpb25OYW1lfV0uYCk7XG4gICAgfVxuICAgIHRoaXMuaXNQcm9kdWN0aW9uID0gZmFsc2U7XG4gIH1cblxuICBsb2coc291cmNlOiBzdHJpbmcsIHNldmVyaXR5OiBTZXZlcml0eSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cbn1cbiJdfQ==