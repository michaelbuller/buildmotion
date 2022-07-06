import { ReplaySubject } from 'rxjs';
import { AppConfigMock } from './app-config.mock';
import { Injectable, Optional } from '@angular/core';
import { ConfigurationContext } from '../configuration-context';
import * as i0 from "@angular/core";
import * as i1 from "../configuration-context";
export class ConfigurationServiceMock {
    constructor(context) {
        this.settingsSubject = new ReplaySubject(1);
        this.settings$ = this.settingsSubject.asObservable();
        this.config = AppConfigMock;
        if (context) {
            this.settingsSubject.next(context.config);
        }
    }
    set settings(value) {
        this.config = value;
        if (this.config) {
            this.settingsSubject.next(this.config);
        }
    }
    get settings() {
        return this.config;
    }
}
ConfigurationServiceMock.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationServiceMock, deps: [{ token: i1.ConfigurationContext, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationServiceMock.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationServiceMock });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationServiceMock, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ConfigurationContext, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbmZpZ3VyYXRpb24vc3JjL2xpYi9tb2Nrcy9jb25maWd1cmF0aW9uLnNlcnZpY2UubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsYUFBYSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBR2hFLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsWUFBd0IsT0FBNkI7UUFKN0Msb0JBQWUsR0FBNEIsSUFBSSxhQUFhLENBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLGNBQVMsR0FBK0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RixXQUFNLEdBQUcsYUFBYSxDQUFDO1FBR3JCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQXFCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7cUhBcEJVLHdCQUF3Qjt5SEFBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVU7OzBCQU1JLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFwcENvbmZpZ01vY2sgfSBmcm9tICcuL2FwcC1jb25maWcubW9jayc7XG5pbXBvcnQgeyBJQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2ktY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBJQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi1jb250ZXh0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlTW9jayBpbXBsZW1lbnRzIElDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgc2V0dGluZ3NTdWJqZWN0OiBTdWJqZWN0PElDb25maWd1cmF0aW9uPiA9IG5ldyBSZXBsYXlTdWJqZWN0PElDb25maWd1cmF0aW9uPigxKTtcbiAgcHVibGljIHJlYWRvbmx5IHNldHRpbmdzJDogT2JzZXJ2YWJsZTxJQ29uZmlndXJhdGlvbj4gPSB0aGlzLnNldHRpbmdzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgY29uZmlnID0gQXBwQ29uZmlnTW9jaztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb250ZXh0OiBDb25maWd1cmF0aW9uQ29udGV4dCkge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnNldHRpbmdzU3ViamVjdC5uZXh0KGNvbnRleHQuY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBzZXQgc2V0dGluZ3ModmFsdWU6IElDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5jb25maWcgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3NTdWJqZWN0Lm5leHQodGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZXR0aW5ncygpOiBJQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG59XG4iXX0=