import { Injectable, Optional } from '@angular/core';
import { ConfigurationService } from '@buildmotion/configuration';
import { LoggingService } from '../logging.service';
import { LogWriter } from './log-writer';
import { datadogLogs } from '@datadog/browser-logs';
import { Severity } from '../severity.enum';
import { datadogRum } from '@datadog/browser-rum';
import * as i0 from "@angular/core";
import * as i1 from "@buildmotion/configuration";
import * as i2 from "../logging.service";
export class DataDogWriterService extends LogWriter {
    constructor(configService, loggingService) {
        super();
        this.configService = configService;
        this.loggingService = loggingService;
        if (this.configService && this.loggingService) {
            this.configService.settings$.subscribe((settings) => this.handleSettings(settings));
            this.loggingService.logEntries$.subscribe((entry) => this.handleLogEntry(entry));
        }
    }
    handleLogEntry(entry) {
        if (this.hasWriter) {
            this.targetEntry = entry;
            this.execute();
        }
    }
    handleSettings(settings) {
        if (settings) {
            this.config = settings.dataDogConfig;
            this.hasWriter = true;
            console.log(`Initializing [DataDog] writer for logging.`);
            /**
             * Use to initialize client-browser log transfer to DataDog;
             */
            datadogLogs.init({
                clientToken: this.config.logs.clientToken,
                site: this.config.logs.site,
                forwardErrorsToLogs: this.config.logs.forwardErrorsToLogs,
                sampleRate: this.config.logs.sampleRate
            });
            /**
             * Note: The trackInteractions initialization parameter enables the automatic collection of user
             * clicks in your application.Sensitive and private data contained on your pages may be included to
             * identify the elements interacted with.
             *
             * version: Specify a version number to identify the deployed version of your application in Datadog
             */
            datadogRum.init({
                applicationId: this.config.realUserMonitoring.applicationId,
                clientToken: this.config.realUserMonitoring.clientToken,
                site: this.config.realUserMonitoring.site,
                service: this.config.realUserMonitoring.service,
                env: this.config.realUserMonitoring.env,
                // Specify a version number to identify the deployed version of your application in Datadog
                version: this.config.realUserMonitoring.version,
                sampleRate: this.config.realUserMonitoring.sampleRate,
                trackInteractions: this.config.realUserMonitoring.trackInteractions
            });
        }
    }
    /**
     * Use to perform an setup or configuration of the [writer].
     * The [setup] method runs on all executions of the writer - and
     * is called before the [write] method.
     */
    setup() {
        if (this.hasWriter && this.config && this.targetEntry) {
            try {
                // FIXME: DO WE NEED TO SOMETHING HERE? Nope.
            }
            catch (error) {
                if (error && error instanceof Error) {
                    const message = `${this.targetEntry.application}.DataDogWriter: ${error?.message ?? ''}, ${error?.stack ?? error.stack}`;
                    console.error(message);
                }
            }
        }
    }
    /**
     * Use to implement the actual write of the [Log Entry].
     */
    write() {
        if (this.targetEntry) {
            switch (this.targetEntry.severity) {
                case Severity.Information:
                    datadogLogs.logger.info(this.targetEntry.application, { ...this.targetEntry });
                    break;
                case Severity.Warning:
                    datadogLogs.logger.warn(this.targetEntry.application, { ...this.targetEntry });
                    break;
                case Severity.Error:
                    datadogLogs.logger.error(this.targetEntry.application, { ...this.targetEntry });
                    break;
                case Severity.Critical:
                    datadogLogs.logger.error(this.targetEntry.application, { ...this.targetEntry });
                    break;
                case Severity.Debug:
                    datadogLogs.logger.info(this.targetEntry.application, { ...this.targetEntry });
                    break;
                default:
                    datadogLogs.logger.info(this.targetEntry.application, { ...this.targetEntry });
            }
        }
    }
}
DataDogWriterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DataDogWriterService, deps: [{ token: i1.ConfigurationService, optional: true }, { token: i2.LoggingService }], target: i0.ɵɵFactoryTarget.Injectable });
DataDogWriterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DataDogWriterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DataDogWriterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService, decorators: [{
                    type: Optional
                }] }, { type: i2.LoggingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1kb2ctd3JpdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2xvZ2dpbmcvc3JjL2xpYi9sb2ctd3JpdGVycy9kYXRhLWRvZy13cml0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQWtDLE1BQU0sNEJBQTRCLENBQUM7QUFFbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLbEQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7SUFHakQsWUFDc0IsYUFBbUMsRUFDL0MsY0FBOEI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUFIWSxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDL0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3RDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUMz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Q0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDL0UsTUFBTTtnQkFDUixLQUFLLFFBQVEsQ0FBQyxLQUFLO29CQUNqQixXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ2hGLE1BQU07Z0JBQ1IsS0FBSyxRQUFRLENBQUMsUUFBUTtvQkFDcEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUNoRixNQUFNO2dCQUNSLEtBQUssUUFBUSxDQUFDLEtBQUs7b0JBQ2pCLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDL0UsTUFBTTtnQkFDUjtvQkFDRSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDbEY7U0FDRjtJQUNILENBQUM7O2lIQXpHVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUtJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UsIElDb25maWd1cmF0aW9uLCBJRGF0YURvZ0NvbmZpZyB9IGZyb20gJ0BidWlsZG1vdGlvbi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IElMb2dFbnRyeSB9IGZyb20gJy4uL2ktbG9nLWVudHJ5JztcbmltcG9ydCB7IExvZ2dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ1dyaXRlciB9IGZyb20gJy4vbG9nLXdyaXRlcic7XG5pbXBvcnQgeyBkYXRhZG9nTG9ncyB9IGZyb20gJ0BkYXRhZG9nL2Jyb3dzZXItbG9ncyc7XG5pbXBvcnQgeyBTZXZlcml0eSB9IGZyb20gJy4uL3NldmVyaXR5LmVudW0nO1xuaW1wb3J0IHsgZGF0YWRvZ1J1bSB9IGZyb20gJ0BkYXRhZG9nL2Jyb3dzZXItcnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YURvZ1dyaXRlclNlcnZpY2UgZXh0ZW5kcyBMb2dXcml0ZXIge1xuICBjb25maWc6IElEYXRhRG9nQ29uZmlnIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHRoaXMuY29uZmlnU2VydmljZSAmJiB0aGlzLmxvZ2dpbmdTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmNvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MkLnN1YnNjcmliZSgoc2V0dGluZ3MpID0+XG4gICAgICAgIHRoaXMuaGFuZGxlU2V0dGluZ3Moc2V0dGluZ3MpXG4gICAgICApO1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2dFbnRyaWVzJC5zdWJzY3JpYmUoKGVudHJ5KSA9PlxuICAgICAgICB0aGlzLmhhbmRsZUxvZ0VudHJ5KGVudHJ5KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dFbnRyeShlbnRyeTogSUxvZ0VudHJ5KSB7XG4gICAgaWYgKHRoaXMuaGFzV3JpdGVyKSB7XG4gICAgICB0aGlzLnRhcmdldEVudHJ5ID0gZW50cnk7XG4gICAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZXR0aW5ncyhzZXR0aW5nczogSUNvbmZpZ3VyYXRpb24pIHtcbiAgICBpZiAoc2V0dGluZ3MpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ3MuZGF0YURvZ0NvbmZpZztcbiAgICAgIHRoaXMuaGFzV3JpdGVyID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKGBJbml0aWFsaXppbmcgW0RhdGFEb2ddIHdyaXRlciBmb3IgbG9nZ2luZy5gKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2UgdG8gaW5pdGlhbGl6ZSBjbGllbnQtYnJvd3NlciBsb2cgdHJhbnNmZXIgdG8gRGF0YURvZztcbiAgICAgICAqL1xuICAgICAgZGF0YWRvZ0xvZ3MuaW5pdCh7XG4gICAgICAgIGNsaWVudFRva2VuOiB0aGlzLmNvbmZpZy5sb2dzLmNsaWVudFRva2VuLFxuICAgICAgICBzaXRlOiB0aGlzLmNvbmZpZy5sb2dzLnNpdGUsXG4gICAgICAgIGZvcndhcmRFcnJvcnNUb0xvZ3M6IHRoaXMuY29uZmlnLmxvZ3MuZm9yd2FyZEVycm9yc1RvTG9ncyxcbiAgICAgICAgc2FtcGxlUmF0ZTogdGhpcy5jb25maWcubG9ncy5zYW1wbGVSYXRlXG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBOb3RlOiBUaGUgdHJhY2tJbnRlcmFjdGlvbnMgaW5pdGlhbGl6YXRpb24gcGFyYW1ldGVyIGVuYWJsZXMgdGhlIGF1dG9tYXRpYyBjb2xsZWN0aW9uIG9mIHVzZXJcbiAgICAgICAqIGNsaWNrcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlNlbnNpdGl2ZSBhbmQgcHJpdmF0ZSBkYXRhIGNvbnRhaW5lZCBvbiB5b3VyIHBhZ2VzIG1heSBiZSBpbmNsdWRlZCB0b1xuICAgICAgICogaWRlbnRpZnkgdGhlIGVsZW1lbnRzIGludGVyYWN0ZWQgd2l0aC5cbiAgICAgICAqXG4gICAgICAgKiB2ZXJzaW9uOiBTcGVjaWZ5IGEgdmVyc2lvbiBudW1iZXIgdG8gaWRlbnRpZnkgdGhlIGRlcGxveWVkIHZlcnNpb24gb2YgeW91ciBhcHBsaWNhdGlvbiBpbiBEYXRhZG9nXG4gICAgICAgKi9cbiAgICAgIGRhdGFkb2dSdW0uaW5pdCh7XG4gICAgICAgIGFwcGxpY2F0aW9uSWQ6IHRoaXMuY29uZmlnLnJlYWxVc2VyTW9uaXRvcmluZy5hcHBsaWNhdGlvbklkLFxuICAgICAgICBjbGllbnRUb2tlbjogdGhpcy5jb25maWcucmVhbFVzZXJNb25pdG9yaW5nLmNsaWVudFRva2VuLFxuICAgICAgICBzaXRlOiB0aGlzLmNvbmZpZy5yZWFsVXNlck1vbml0b3Jpbmcuc2l0ZSxcbiAgICAgICAgc2VydmljZTogdGhpcy5jb25maWcucmVhbFVzZXJNb25pdG9yaW5nLnNlcnZpY2UsXG4gICAgICAgIGVudjogdGhpcy5jb25maWcucmVhbFVzZXJNb25pdG9yaW5nLmVudixcbiAgICAgICAgLy8gU3BlY2lmeSBhIHZlcnNpb24gbnVtYmVyIHRvIGlkZW50aWZ5IHRoZSBkZXBsb3llZCB2ZXJzaW9uIG9mIHlvdXIgYXBwbGljYXRpb24gaW4gRGF0YWRvZ1xuICAgICAgICB2ZXJzaW9uOiB0aGlzLmNvbmZpZy5yZWFsVXNlck1vbml0b3JpbmcudmVyc2lvbixcbiAgICAgICAgc2FtcGxlUmF0ZTogdGhpcy5jb25maWcucmVhbFVzZXJNb25pdG9yaW5nLnNhbXBsZVJhdGUsXG4gICAgICAgIHRyYWNrSW50ZXJhY3Rpb25zOiB0aGlzLmNvbmZpZy5yZWFsVXNlck1vbml0b3JpbmcudHJhY2tJbnRlcmFjdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gcGVyZm9ybSBhbiBzZXR1cCBvciBjb25maWd1cmF0aW9uIG9mIHRoZSBbd3JpdGVyXS5cbiAgICogVGhlIFtzZXR1cF0gbWV0aG9kIHJ1bnMgb24gYWxsIGV4ZWN1dGlvbnMgb2YgdGhlIHdyaXRlciAtIGFuZFxuICAgKiBpcyBjYWxsZWQgYmVmb3JlIHRoZSBbd3JpdGVdIG1ldGhvZC5cbiAgICovXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNXcml0ZXIgJiYgdGhpcy5jb25maWcgJiYgdGhpcy50YXJnZXRFbnRyeSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRklYTUU6IERPIFdFIE5FRUQgVE8gU09NRVRISU5HIEhFUkU/IE5vcGUuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHt0aGlzLnRhcmdldEVudHJ5LmFwcGxpY2F0aW9ufS5EYXRhRG9nV3JpdGVyOiAke2Vycm9yPy5tZXNzYWdlID8/ICcnfSwgJHtlcnJvcj8uc3RhY2sgPz8gZXJyb3Iuc3RhY2t9YDtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBpbXBsZW1lbnQgdGhlIGFjdHVhbCB3cml0ZSBvZiB0aGUgW0xvZyBFbnRyeV0uXG4gICAqL1xuICBwdWJsaWMgd3JpdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFyZ2V0RW50cnkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy50YXJnZXRFbnRyeS5zZXZlcml0eSkge1xuICAgICAgICBjYXNlIFNldmVyaXR5LkluZm9ybWF0aW9uOlxuICAgICAgICAgIGRhdGFkb2dMb2dzLmxvZ2dlci5pbmZvKHRoaXMudGFyZ2V0RW50cnkuYXBwbGljYXRpb24sIHsgLi4udGhpcy50YXJnZXRFbnRyeSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTZXZlcml0eS5XYXJuaW5nOlxuICAgICAgICAgIGRhdGFkb2dMb2dzLmxvZ2dlci53YXJuKHRoaXMudGFyZ2V0RW50cnkuYXBwbGljYXRpb24sIHsgLi4udGhpcy50YXJnZXRFbnRyeSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTZXZlcml0eS5FcnJvcjpcbiAgICAgICAgICBkYXRhZG9nTG9ncy5sb2dnZXIuZXJyb3IodGhpcy50YXJnZXRFbnRyeS5hcHBsaWNhdGlvbiwgeyAuLi50aGlzLnRhcmdldEVudHJ5IH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFNldmVyaXR5LkNyaXRpY2FsOlxuICAgICAgICAgIGRhdGFkb2dMb2dzLmxvZ2dlci5lcnJvcih0aGlzLnRhcmdldEVudHJ5LmFwcGxpY2F0aW9uLCB7IC4uLnRoaXMudGFyZ2V0RW50cnkgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU2V2ZXJpdHkuRGVidWc6XG4gICAgICAgICAgZGF0YWRvZ0xvZ3MubG9nZ2VyLmluZm8odGhpcy50YXJnZXRFbnRyeS5hcHBsaWNhdGlvbiwgeyAuLi50aGlzLnRhcmdldEVudHJ5IH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRhdGFkb2dMb2dzLmxvZ2dlci5pbmZvKHRoaXMudGFyZ2V0RW50cnkuYXBwbGljYXRpb24sIHsgLi4udGhpcy50YXJnZXRFbnRyeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19