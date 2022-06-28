import { Injectable, Optional } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
import * as i1 from "./configuration-context";
export class ConfigurationService {
    constructor(context) {
        this.settingsSubject = new ReplaySubject(1);
        this.settings$ = this.settingsSubject.asObservable();
        if (context) {
            this.settingsSubject.next(context.config);
        }
    }
    set settings(value) {
        this.config = value;
        this.settingsSubject.next(this.config);
    }
    get settings() {
        return this.config;
    }
}
ConfigurationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationService, deps: [{ token: i1.ConfigurationContext, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationContext, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9jb25maWd1cmF0aW9uL3NyYy9saWIvY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBVyxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUsvRCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQXdCLE9BQTZCO1FBSDdDLG9CQUFlLEdBQTRCLElBQUksYUFBYSxDQUFpQixDQUFDLENBQUMsQ0FBQztRQUN4RSxjQUFTLEdBQStCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHMUYsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztpSEFuQlUsb0JBQW9CO3FIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9pLWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbkNvbnRleHQgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24tY29udGV4dCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSBpbXBsZW1lbnRzIElDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIGNvbmZpZyE6IElDb25maWd1cmF0aW9uO1xuXG4gIHByaXZhdGUgc2V0dGluZ3NTdWJqZWN0OiBTdWJqZWN0PElDb25maWd1cmF0aW9uPiA9IG5ldyBSZXBsYXlTdWJqZWN0PElDb25maWd1cmF0aW9uPigxKTtcbiAgcHVibGljIHJlYWRvbmx5IHNldHRpbmdzJDogT2JzZXJ2YWJsZTxJQ29uZmlndXJhdGlvbj4gPSB0aGlzLnNldHRpbmdzU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb250ZXh0OiBDb25maWd1cmF0aW9uQ29udGV4dCkge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnNldHRpbmdzU3ViamVjdC5uZXh0KGNvbnRleHQuY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBzZXQgc2V0dGluZ3ModmFsdWUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHZhbHVlO1xuICAgIHRoaXMuc2V0dGluZ3NTdWJqZWN0Lm5leHQodGhpcy5jb25maWcpO1xuICB9XG5cbiAgZ2V0IHNldHRpbmdzKCk6IElDb25maWd1cmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcbiAgcmVhZG9ubHkgc2V0dGluZ3MkOiBPYnNlcnZhYmxlPElDb25maWd1cmF0aW9uPlxufVxuIl19