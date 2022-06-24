(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@buildmotion/configuration', ['exports', '@angular/core', '@angular/common', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.configuration = {}), global.ng.core, global.ng.common, global.rxjs));
})(this, (function (exports, i0, common, rxjs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var ConfigurationContext = /** @class */ (function () {
        function ConfigurationContext() {
        }
        return ConfigurationContext;
    }());

    var ConfigurationModule = /** @class */ (function () {
        function ConfigurationModule() {
        }
        ConfigurationModule.forRoot = function (configContext) {
            return {
                ngModule: ConfigurationModule,
                providers: [
                    {
                        provide: ConfigurationContext,
                        useValue: configContext,
                    },
                ],
            };
        };
        return ConfigurationModule;
    }());
    ConfigurationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConfigurationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationModule, imports: [common.CommonModule] });
    ConfigurationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationModule, imports: [[common.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }] });

    exports.AppEnvironment = void 0;
    (function (AppEnvironment) {
        AppEnvironment["development"] = "development";
        AppEnvironment["local"] = "local";
        AppEnvironment["production"] = "production";
        AppEnvironment["qa"] = "qa";
        AppEnvironment["stage"] = "stage";
    })(exports.AppEnvironment || (exports.AppEnvironment = {}));

    var AppConfigMock = {
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
            environment: exports.AppEnvironment.local,
            displayNotification: true,
        },
    };

    var ConfigurationService = /** @class */ (function () {
        function ConfigurationService(context) {
            this.settingsSubject = new rxjs.ReplaySubject(1);
            this.settings$ = this.settingsSubject.asObservable();
            if (context) {
                this.settingsSubject.next(context.config);
            }
        }
        Object.defineProperty(ConfigurationService.prototype, "settings", {
            get: function () {
                return this.config;
            },
            set: function (value) {
                this.config = value;
                this.settingsSubject.next(this.config);
            },
            enumerable: false,
            configurable: true
        });
        return ConfigurationService;
    }());
    ConfigurationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationService, deps: [{ token: ConfigurationContext, optional: true }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ConfigurationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () {
            return [{ type: ConfigurationContext, decorators: [{
                            type: i0.Optional
                        }] }];
        } });

    var ConfigurationServiceMock = /** @class */ (function () {
        function ConfigurationServiceMock(context) {
            this.settingsSubject = new rxjs.ReplaySubject(1);
            this.settings$ = this.settingsSubject.asObservable();
            this.config = AppConfigMock;
            if (context) {
                this.settingsSubject.next(context.config);
            }
        }
        Object.defineProperty(ConfigurationServiceMock.prototype, "settings", {
            get: function () {
                return this.config;
            },
            set: function (value) {
                this.config = value;
                if (this.config) {
                    this.settingsSubject.next(this.config);
                }
            },
            enumerable: false,
            configurable: true
        });
        return ConfigurationServiceMock;
    }());
    ConfigurationServiceMock.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationServiceMock, deps: [{ token: ConfigurationContext, optional: true }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ConfigurationServiceMock.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationServiceMock });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConfigurationServiceMock, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: ConfigurationContext, decorators: [{
                            type: i0.Optional
                        }] }];
        } });

    var ErrorHandlingConfig = /** @class */ (function () {
        function ErrorHandlingConfig() {
            this.includeDefaultErrorHandling = false;
        }
        return ErrorHandlingConfig;
    }());

    var LoggingConfig = /** @class */ (function () {
        function LoggingConfig() {
            this.isProduction = false;
        }
        return LoggingConfig;
    }());
    LoggingConfig.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingConfig, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoggingConfig.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingConfig });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingConfig, decorators: [{
                type: i0.Injectable
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AppConfigMock = AppConfigMock;
    exports.ConfigurationContext = ConfigurationContext;
    exports.ConfigurationModule = ConfigurationModule;
    exports.ConfigurationService = ConfigurationService;
    exports.ConfigurationServiceMock = ConfigurationServiceMock;
    exports.ErrorHandlingConfig = ErrorHandlingConfig;
    exports.LoggingConfig = LoggingConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=buildmotion-configuration.umd.js.map
