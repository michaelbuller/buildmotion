(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@buildmotion/rules-engine'), require('rxjs'), require('guid-typescript'), require('rxjs/operators'), require('@buildmotion/configuration'), require('@datadog/browser-logs'), require('@datadog/browser-rum'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@buildmotion/logging', ['exports', '@angular/core', '@buildmotion/rules-engine', 'rxjs', 'guid-typescript', 'rxjs/operators', '@buildmotion/configuration', '@datadog/browser-logs', '@datadog/browser-rum', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.logging = {}), global.ng.core, global.rulesEngine, global.rxjs, global.guidTypescript, global.rxjs.operators, global.i1, global.browserLogs, global.browserRum, global.ng.common));
})(this, (function (exports, i0, rulesEngine, rxjs, guidTypescript, operators, i1, browserLogs, browserRum, common) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var LogWriter = /** @class */ (function () {
        function LogWriter() {
        }
        /**
         * Use this method to execute the write process for the
         * specified [Log Entry] item.
         *
         * Using the [template method] design pattern.
         */
        LogWriter.prototype.execute = function () {
            this.setup();
            if (this.validateEntry()) {
                this.write();
            }
            this.finish();
        };
        /**
         * Use to validate the [log entry] before attempting to write
         * using the specified [log writer].
         *
         * Returns a [false] boolean to indicate the item is not valid.
         */
        LogWriter.prototype.validateEntry = function () {
            var validationContext = new rulesEngine.ValidationContext();
            validationContext.addRule(new rulesEngine.IsTrue('LogWriterExists', 'The log writer is not configured.', this.hasWriter));
            validationContext.addRule(new rulesEngine.IsNotNullOrUndefined('EntryIsNotNull', 'The entry cannot be null.', this.targetEntry));
            validationContext.addRule(new rulesEngine.StringIsNotNullEmptyRange('SourceIsRequired', 'The entry source is not valid.', this.targetEntry.source, 1, 100));
            validationContext.addRule(new rulesEngine.StringIsNotNullEmptyRange('MessageIsValid', 'The message is required for the [Log Entry].', this.targetEntry.message, 1, 2000));
            validationContext.addRule(new rulesEngine.IsNotNullOrUndefined('TimestampIsRequired', 'The timestamp must be a valid DateTime value.', this.targetEntry.timestamp));
            return validationContext.renderRules().isValid;
        };
        /**
         * Use to finish the process or clean-up any resources.
         */
        LogWriter.prototype.finish = function () {
            rxjs.noop();
        };
        return LogWriter;
    }());

    exports.Severity = void 0;
    (function (Severity) {
        Severity["Information"] = "Information";
        Severity["Warning"] = "Warning";
        Severity["Error"] = "Error";
        Severity["Critical"] = "Critical";
        Severity["Debug"] = "Debug";
    })(exports.Severity || (exports.Severity = {}));

    var LogEntry = /** @class */ (function () {
        function LogEntry(application, source, severity, message, tags) {
            this.application = application;
            this.source = source;
            this.severity = severity;
            this.message = message;
            this.timestamp = new Date(Date.now());
            this.tags = tags;
        }
        return LogEntry;
    }());

    var LoggingService = /** @class */ (function () {
        /**
         * The [LoggingService] constructor.
         */
        function LoggingService(configService) {
            this.configService = configService;
            this.serviceName = 'LoggingService';
            this.timestamp = new Date();
            this.id = guidTypescript.Guid.create();
            this.logEntriesSubject = new rxjs.ReplaySubject(1);
            this.logEntries$ = this.logEntriesSubject.asObservable();
            this.log(this.serviceName, exports.Severity.Information, "Starting logging service [" + this.id.toString() + "] at: " + this.timestamp);
            this.initializeService(configService);
        }
        /**
         * Use to initialize the logging service. Retrieves
         * application configuration settings.
         *
         * @param configService contains the configuration settings for the application
         */
        LoggingService.prototype.initializeService = function (configService) {
            var _this = this;
            if (configService) {
                this.configService.settings$.pipe(operators.take(1)).subscribe(function (settings) { return _this.handleSettings(settings); });
            }
        };
        /**
         * Use to handle settings from the configuration service.
         * @param settings
         */
        LoggingService.prototype.handleSettings = function (settings) {
            if (settings) {
                this.config = settings.loggingConfig;
                this.applicationName = this.config && this.config.applicationName ? this.config.applicationName : 'Angular';
                this.isProduction = this.config && this.config.isProduction ? this.config.isProduction : false;
            }
        };
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
        LoggingService.prototype.log = function (source, severity, message, tags) {
            this.source = this.applicationName !== source ? this.applicationName + "." + source : this.applicationName;
            this.severity = severity;
            this.message = message;
            this.timestamp = new Date();
            if (tags) {
                tags.push("LoggerId:" + this.id.toString());
            }
            else {
                tags = ["LoggerId:" + this.id.toString()];
            }
            var logEntry = new LogEntry(this.applicationName, this.source, this.severity, this.message, tags);
            this.logEntriesSubject.next(logEntry);
        };
        return LoggingService;
    }());
    LoggingService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingService, deps: [{ token: i1__namespace.ConfigurationService, optional: true }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoggingService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: i1__namespace.ConfigurationService, decorators: [{
                            type: i0.Optional
                        }] }];
        } });

    /**
     * Use this writer to log information to the browser console.
     */
    var ConsoleWriter = /** @class */ (function (_super) {
        __extends(ConsoleWriter, _super);
        function ConsoleWriter(loggingService) {
            var _this = _super.call(this) || this;
            _this.loggingService = loggingService;
            if (loggingService.config.isProduction === false) {
                _this.loggingService.logEntries$.subscribe(function (logEntry) { return _this.handleLogEntry(logEntry); });
            }
            return _this;
        }
        ConsoleWriter.prototype.handleLogEntry = function (logEntry) {
            this.targetEntry = logEntry;
            this.execute();
        };
        /**
         * No setup required for the console writer.
         */
        ConsoleWriter.prototype.setup = function () {
            rxjs.noop();
        };
        /**
         * Implementation of the abstract method. This will perform the
         * actual `write` action for the specified writer.
         */
        ConsoleWriter.prototype.write = function () {
            switch (this.targetEntry.severity) {
                /* eslint-disable no-restricted-syntax */
                /* eslint-disable no-console */
                case exports.Severity.Debug:
                    console.debug(this.targetEntry);
                    break;
                case exports.Severity.Information:
                    console.info(this.targetEntry);
                    break;
                case exports.Severity.Warning:
                    console.warn(this.targetEntry);
                    break;
                case exports.Severity.Error:
                    console.error(this.targetEntry);
                    break;
                case exports.Severity.Critical:
                    console.error(this.targetEntry);
                    break;
                default:
                    break;
                /* eslint-enable no-restricted-syntax */
                /* eslint-enable no-console */
            }
        };
        return ConsoleWriter;
    }(LogWriter));
    ConsoleWriter.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConsoleWriter, deps: [{ token: LoggingService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ConsoleWriter.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConsoleWriter });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConsoleWriter, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: LoggingService }]; } });

    var DataDogWriterService = /** @class */ (function (_super) {
        __extends(DataDogWriterService, _super);
        function DataDogWriterService(configService, loggingService) {
            var _this = _super.call(this) || this;
            _this.configService = configService;
            _this.loggingService = loggingService;
            if (_this.configService && _this.loggingService) {
                _this.configService.settings$.subscribe(function (settings) { return _this.handleSettings(settings); });
                _this.loggingService.logEntries$.subscribe(function (entry) { return _this.handleLogEntry(entry); });
            }
            return _this;
        }
        DataDogWriterService.prototype.handleLogEntry = function (entry) {
            if (this.hasWriter) {
                this.targetEntry = entry;
                this.execute();
            }
        };
        DataDogWriterService.prototype.handleSettings = function (settings) {
            if (settings) {
                this.config = settings.dataDogConfig;
                this.hasWriter = true;
                console.log("Initializing [DataDog] writer for logging.");
                /**
                 * Use to initialize client-browser log transfer to DataDog;
                 */
                browserLogs.datadogLogs.init({
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
                browserRum.datadogRum.init({
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
        };
        /**
         * Use to perform an setup or configuration of the [writer].
         * The [setup] method runs on all executions of the writer - and
         * is called before the [write] method.
         */
        DataDogWriterService.prototype.setup = function () {
            var _a, _b;
            if (this.hasWriter && this.config && this.targetEntry) {
                try {
                    // FIXME: DO WE NEED TO SOMETHING HERE? Nope.
                }
                catch (error) {
                    if (error && error instanceof Error) {
                        var message = this.targetEntry.application + ".DataDogWriter: " + ((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : '') + ", " + ((_b = error === null || error === void 0 ? void 0 : error.stack) !== null && _b !== void 0 ? _b : error.stack);
                        console.error(message);
                    }
                }
            }
        };
        /**
         * Use to implement the actual write of the [Log Entry].
         */
        DataDogWriterService.prototype.write = function () {
            if (this.targetEntry) {
                switch (this.targetEntry.severity) {
                    case exports.Severity.Information:
                        browserLogs.datadogLogs.logger.info(this.targetEntry.application, Object.assign({}, this.targetEntry));
                        break;
                    case exports.Severity.Warning:
                        browserLogs.datadogLogs.logger.warn(this.targetEntry.application, Object.assign({}, this.targetEntry));
                        break;
                    case exports.Severity.Error:
                        browserLogs.datadogLogs.logger.error(this.targetEntry.application, Object.assign({}, this.targetEntry));
                        break;
                    case exports.Severity.Critical:
                        browserLogs.datadogLogs.logger.error(this.targetEntry.application, Object.assign({}, this.targetEntry));
                        break;
                    case exports.Severity.Debug:
                        browserLogs.datadogLogs.logger.info(this.targetEntry.application, Object.assign({}, this.targetEntry));
                        break;
                    default:
                        browserLogs.datadogLogs.logger.info(this.targetEntry.application, Object.assign({}, this.targetEntry));
                }
            }
        };
        return DataDogWriterService;
    }(LogWriter));
    DataDogWriterService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DataDogWriterService, deps: [{ token: i1__namespace.ConfigurationService, optional: true }, { token: LoggingService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataDogWriterService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DataDogWriterService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DataDogWriterService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.ConfigurationService, decorators: [{
                            type: i0.Optional
                        }] }, { type: LoggingService }];
        } });

    var LoggingModule = /** @class */ (function () {
        function LoggingModule() {
        }
        return LoggingModule;
    }());
    LoggingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LoggingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingModule, imports: [common.CommonModule] });
    LoggingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingModule, imports: [[common.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }] });

    var LoggingServiceConfig = /** @class */ (function () {
        function LoggingServiceConfig() {
            this.applicationName = 'APP_NAME_NOT_PROVIDED';
        }
        return LoggingServiceConfig;
    }());

    var LoggingServiceMock = /** @class */ (function () {
        function LoggingServiceMock() {
            this.applicationName = 'application';
            this.id = guidTypescript.Guid.create();
            this.logEntries$ = new rxjs.Subject();
            this.serviceName = 'LoggingServiceMock';
            this.version = '0.0.0';
        }
        LoggingServiceMock.prototype.setupConfiguration = function (settings) {
            if (settings) {
                this.log(this.serviceName, exports.Severity.Information, "Logging for [" + settings.loggingConfig.applicationName + "].");
            }
            this.isProduction = false;
        };
        LoggingServiceMock.prototype.log = function (source, severity, message) {
            this.source = source;
            this.severity = severity;
            this.message = message;
        };
        return LoggingServiceMock;
    }());
    LoggingServiceMock.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingServiceMock, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoggingServiceMock.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingServiceMock });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoggingServiceMock, decorators: [{
                type: i0.Injectable
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ConsoleWriter = ConsoleWriter;
    exports.DataDogWriterService = DataDogWriterService;
    exports.LogEntry = LogEntry;
    exports.LogWriter = LogWriter;
    exports.LoggingModule = LoggingModule;
    exports.LoggingService = LoggingService;
    exports.LoggingServiceConfig = LoggingServiceConfig;
    exports.LoggingServiceMock = LoggingServiceMock;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=buildmotion-logging.umd.js.map