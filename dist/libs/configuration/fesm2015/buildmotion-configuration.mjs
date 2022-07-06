import * as i0 from '@angular/core';
import { NgModule, Injectable, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaySubject } from 'rxjs';

class ConfigurationContext {
}

class ConfigurationModule {
    static forRoot(configContext) {
        return {
            ngModule: ConfigurationModule,
            providers: [
                {
                    provide: ConfigurationContext,
                    useValue: configContext,
                },
            ],
        };
    }
}
ConfigurationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConfigurationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationModule, imports: [CommonModule] });
ConfigurationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

var AppEnvironment;
(function (AppEnvironment) {
    AppEnvironment["development"] = "development";
    AppEnvironment["local"] = "local";
    AppEnvironment["production"] = "production";
    AppEnvironment["qa"] = "qa";
    AppEnvironment["stage"] = "stage";
})(AppEnvironment || (AppEnvironment = {}));

const AppConfigMock = {
    apiConfig: {
        apiURL: 'http://localhost:3333/api',
        baseUrl: 'https://api.buildmotion.io/',
        csrf: 'https://api-dev.buildmotion.io/auth2/csrf',
        health: 'https://api.buildmotion-ui.net/v1/dev/health',
        version: 'https://api-dev.buildmotion.io/version',
    },
    dataDogConfig: {
        logs: {
            clientToken: 'MOCK-TOKEN-HERE',
            forwardErrorsToLogs: false,
            sampleRate: 100,
            site: 'datadoghq.com'
        },
        realUserMonitoring: {
            applicationId: 'BEEF-TACO-CORN-GOOD-CORN',
            clientToken: 'pubCORNBEEFISGOOD0fbc',
            site: 'datadoghq.com',
            service: 'buildmotion360nonprod',
            env: 'non-prod',
            version: '42.0.0',
            sampleRate: 100,
            trackInteractions: true
        }
    },
    loggingConfig: {
        applicationName: 'buildmotion',
        isProduction: false,
    },
    errorHandlingConfig: {
        applicationName: 'buildmotion',
        includeDefaultErrorHandling: true,
    },
    webConfig: {
        applicationName: 'buildmotion',
        blogURL: 'https://www.medium.com/@angularlicious',
        companyEffectiveDate: new Date(2020, 10, 1),
        companyName: 'buildmotion',
        defaultPageSize: 25,
        email: 'info@buildmotion.io',
        googleTagManagerId: 'GTM-12341234',
        keywordValidationInMilliseconds: 750,
        pageSizeOptions: [25, 50, 100],
        reloadDelayAfterNoticeInMinutes: 0,
        reloadDelayInMinutes: 1439,
        reloadNoticeDisplayInSeconds: 30,
        social: {
            instagram: {
                name: '',
                URL: '',
            },
            twitter: { name: '', URL: '' },
        },
        version: '42.42.42',
        website: 'buildmotion.io',
    },
    version: {
        environment: AppEnvironment.local,
        displayNotification: true,
    },
};

class ConfigurationService {
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
ConfigurationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationService, deps: [{ token: ConfigurationContext, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () {
        return [{ type: ConfigurationContext, decorators: [{
                        type: Optional
                    }] }];
    } });

class ConfigurationServiceMock {
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
ConfigurationServiceMock.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationServiceMock, deps: [{ token: ConfigurationContext, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationServiceMock.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationServiceMock });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ConfigurationServiceMock, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: ConfigurationContext, decorators: [{
                        type: Optional
                    }] }];
    } });

class ErrorHandlingConfig {
    constructor() {
        this.includeDefaultErrorHandling = false;
    }
}

class LoggingConfig {
    constructor() {
        this.isProduction = false;
    }
}
LoggingConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoggingConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: LoggingConfig, decorators: [{
            type: Injectable
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AppConfigMock, AppEnvironment, ConfigurationContext, ConfigurationModule, ConfigurationService, ConfigurationServiceMock, ErrorHandlingConfig, LoggingConfig };
//# sourceMappingURL=buildmotion-configuration.mjs.map
