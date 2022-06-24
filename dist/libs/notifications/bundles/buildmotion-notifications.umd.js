(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@buildmotion/foundation'), require('@buildmotion/logging'), require('@buildmotion/core'), require('rxjs'), require('@buildmotion/rules-engine'), require('@buildmotion/actions')) :
        typeof define === 'function' && define.amd ? define('@buildmotion/notifications', ['exports', '@angular/core', '@angular/common', '@angular/router', '@buildmotion/foundation', '@buildmotion/logging', '@buildmotion/core', 'rxjs', '@buildmotion/rules-engine', '@buildmotion/actions'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.notifications = {}), global.ng.core, global.ng.common, global.ng.router, global.i2, global.i1$1, global.core, global.rxjs, global.rulesEngine, global.actions));
})(this, (function (exports, i0, common, i1, i2, i1$1, core, rxjs, rulesEngine, actions) { 'use strict';

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
        var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
        var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

        var NotificationsModule = /** @class */ (function () {
            function NotificationsModule() {
            }
            return NotificationsModule;
        }());
        NotificationsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        NotificationsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationsModule, imports: [common.CommonModule, i1__namespace.RouterModule] });
        NotificationsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationsModule, imports: [[
                    common.CommonModule,
                    i1.RouterModule.forChild([
                    /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
                    ]),
                ]] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationsModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            imports: [
                                common.CommonModule,
                                i1.RouterModule.forChild([
                                /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
                                ]),
                            ],
                        }]
                }] });

        /**
         * Use as the container for API error state management.
         */
        var ErrorState = /** @class */ (function () {
            function ErrorState() {
            }
            return ErrorState;
        }());

        /**
         * Use to define error state mappings for a specific API operation.
         */
        var ErrorStateOperation = /** @class */ (function () {
            function ErrorStateOperation(operation, domain) {
                this.errors = new Map();
                this.operation = operation;
                this.domain = domain;
            }
            return ErrorStateOperation;
        }());

        exports.NotificationSeverity = void 0;
        (function (NotificationSeverity) {
            NotificationSeverity["information"] = "information";
            NotificationSeverity["warning"] = "warning";
            NotificationSeverity["error"] = "error";
            NotificationSeverity["success"] = "success";
        })(exports.NotificationSeverity || (exports.NotificationSeverity = {}));

        exports.NotifierType = void 0;
        (function (NotifierType) {
            NotifierType["Unknown"] = "Unknown";
            NotifierType["Banner"] = "Banner";
            NotifierType["Dialog"] = "Dialog";
            NotifierType["Snackbar"] = "Snackbar";
            NotifierType["Confirmation"] = "Confirmation";
            NotifierType["Toast"] = "Toast";
        })(exports.NotifierType || (exports.NotifierType = {}));

        var Notification = /** @class */ (function () {
            function Notification(title, description, notifierType, severity, messages, options) {
                this.messages = [];
                this.severity = exports.NotificationSeverity.information;
                this.title = title;
                this.description = description;
                this.messages = messages ? messages : [];
                this.severity = severity ? severity : exports.NotificationSeverity.information;
                this.notifierType = notifierType ? notifierType : exports.NotifierType.Unknown;
                this.options = options;
            }
            return Notification;
        }());

        var NotificationOptions = /** @class */ (function () {
            function NotificationOptions(actionButtonText, cancelButtonText) {
                this.actionButtonText = actionButtonText;
                this.cancelButtonText = cancelButtonText;
            }
            return NotificationOptions;
        }());

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

        /**
         * A helper class to provide the action with required dependencies and
         * starting the execution of the action life-cycle pipeline.
         */
        var BusinessActionBase = /** @class */ (function (_super) {
            __extends(BusinessActionBase, _super);
            function BusinessActionBase(actionName) {
                var _this = _super.call(this) || this;
                _this.showRuleMessages = true;
                _this.hideRuleMessages = false;
                _this.actionName = actionName;
                return _this;
            }
            /**
             * Use the [Do] method to perform the action. Also uses [inversion of control]
             * and provides the action the same instance of the [service context] and
             * [logging service].
             */
            BusinessActionBase.prototype.Do = function (businessProvider) {
                this.businessProvider = businessProvider;
                this.serviceContext = businessProvider.serviceContext;
                this.loggingService = businessProvider.loggingService;
                this.execute();
                return this.response;
            };
            return BusinessActionBase;
        }(i2.ActionBase));

        var ValidateApiResponseAction = /** @class */ (function (_super) {
            __extends(ValidateApiResponseAction, _super);
            function ValidateApiResponseAction(apiResponse) {
                var _this = _super.call(this, 'ValidateApiResponseAction') || this;
                _this.apiResponse = apiResponse;
                return _this;
            }
            ValidateApiResponseAction.prototype.preValidateAction = function () {
                var _this = this;
                this.loggingService.log(this.actionName, i1$1.Severity.Information, "Preparing to validate the API response for error messages.");
                this.validationContext.addRule(new rulesEngine.IsNotNullOrUndefined('ApiResponseIsValid', 'The API response cannot be null or undefined.', this.apiResponse, false));
                if (this.apiResponse) {
                    this.validationContext.addRule(new rulesEngine.IsNotNullOrUndefined('ApiMessagesNotNullUndefined', 'The API response messages is not valid. Cannot be null or undefined.', this.apiResponse.messages, false)).addRule(new rulesEngine.IsTrue("ContainsValidMessage", 'The API response requires a valid message.', this.apiResponse.messages.length > 0, this.hideRuleMessages));
                }
                if (this.apiResponse && this.apiResponse.messages) {
                    this.validationContext.addRule(new rulesEngine.Range('MessagesLengthMin', 'The API response must contain at least one valid message item.', this.apiResponse.messages.length, 1, 99));
                    this.apiResponse.messages.forEach(function (item) {
                        _this.validationContext.addRule(new rulesEngine.StringIsNotNullEmptyRange('MessageErrorCodeIsValid', 'The message does not contain a valid error code.', item.code, 1, 200));
                    });
                }
            };
            ValidateApiResponseAction.prototype.performAction = function () {
                this.actionResult = actions.ActionResult.Success;
                var result = this.apiResponse.messages;
                var successApiMessage = new core.ApiResponse();
                successApiMessage.isSuccess = true;
                successApiMessage.data = result;
                this.response = rxjs.of(successApiMessage);
            };
            return ValidateApiResponseAction;
        }(BusinessActionBase));

        var ValidateNotificationAction = /** @class */ (function (_super) {
            __extends(ValidateNotificationAction, _super);
            /**
             * Use the constructor to provide any required inputs for the action.
             */
            function ValidateNotificationAction(notification) {
                var _this = _super.call(this, 'ValidateNotificationAction') || this;
                _this.doNotDisplayToUser = false;
                _this.notification = notification;
                return _this;
            }
            /**
             * Use this pipeline method as an opportunity to
             * setup the action for processing, validating business rules, and/or
             * performing other data validation.
             *
             * This method runs before [validationAction] and [performAction].
             */
            ValidateNotificationAction.prototype.preValidateAction = function () {
                var _this = this;
                this.validationContext
                    .addRule(new rulesEngine.IsNotNullOrUndefined('FormMessageIsNotNull', 'The form message cannot be null or undefined.', this.notification, this.doNotDisplayToUser))
                    .addRule(new rulesEngine.StringIsNotNullEmptyRange('MessageTitleIsValid', 'The message title is not valid. Must be within 2 and 45 characters.', this.notification.title, 2, 45, this.doNotDisplayToUser))
                    .addRule(new rulesEngine.StringIsNotNullEmptyRange('MessageDescriptionIsValid', 'The message description is not valid. Must be within 1 and 200 characters.', this.notification.description, 1, 200, this.doNotDisplayToUser))
                    .addRule(new rulesEngine.IsNotNullOrUndefined('NotifierTypeIsValid', 'The notifier type is not valid.', this.notification.notifierType, this.doNotDisplayToUser));
                this.notification.messages.forEach(function (item) {
                    _this.validationContext.addRule(new rulesEngine.StringIsNotNullEmptyRange('MessageIsValid', 'The message item is not valid. Must be within 2 and 125 characters.', item, 2, 125));
                });
            };
            /**
             * Use this method to implement the action's business logic. This
             * method will execute if there are no validation or business rule violations.
             *
             * Wraps the response in an ApiResponse to return the value using the action's [response] property.
             */
            ValidateNotificationAction.prototype.performAction = function () {
                this.actionResult = actions.ActionResult.Success;
                var data = this.notification;
                var successApiMessage = new core.ApiResponse();
                successApiMessage.isSuccess = true;
                successApiMessage.data = data;
                this.response = rxjs.of(successApiMessage);
            };
            return ValidateNotificationAction;
        }(BusinessActionBase));

        var BusinessProviderService = /** @class */ (function (_super) {
            __extends(BusinessProviderService, _super);
            function BusinessProviderService(logger, serviceContext) {
                return _super.call(this, 'NotificationService.BusinessProviderService', logger, serviceContext) || this;
            }
            /**
             * Use to execute one or more actions to process the business operation.
             * @param message a message to display form information to a user.
             */
            BusinessProviderService.prototype.validateNotification = function (message) {
                var action = new ValidateNotificationAction(message);
                return action.Do(Object.assign({}, this));
            };
            BusinessProviderService.prototype.validateApiResponse = function (apiResponse) {
                var action = new ValidateApiResponseAction(apiResponse);
                return action.Do(Object.assign({}, this));
            };
            return BusinessProviderService;
        }(i2.ServiceBase));
        BusinessProviderService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessProviderService, deps: [{ token: i1__namespace$1.LoggingService }, { token: i2__namespace.ServiceContext }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        BusinessProviderService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessProviderService, providedIn: 'root' });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessProviderService, decorators: [{
                    type: i0.Injectable,
                    args: [{
                            providedIn: 'root',
                        }]
                }], ctorParameters: function () { return [{ type: i1__namespace$1.LoggingService }, { type: i2__namespace.ServiceContext }]; } });

        /**
         * The NotificationService is used to manage the publishing of notifications
         * messages for an application. This service will publish notifications, however,
         * the application will require a subscription or a notifier that will handle new
         * published notifications for display.
         */
        var NotificationService = /** @class */ (function (_super) {
            __extends(NotificationService, _super);
            function NotificationService(logger, serviceContext, businessProvider) {
                var _this = _super.call(this, 'NotificationService', logger, serviceContext) || this;
                _this.businessProvider = businessProvider;
                _this.apiMessagesSubject = new rxjs.ReplaySubject(1);
                _this.notificationsSubject$ = new rxjs.ReplaySubject(1);
                _this.browserNotificationSubject$ = new rxjs.ReplaySubject();
                _this.apiMessages$ = _this.apiMessagesSubject.asObservable();
                _this.notifications$ = _this.notificationsSubject$.asObservable();
                _this.browserNotification$ = _this.browserNotificationSubject$.asObservable();
                return _this;
            }
            /**
             * Use to publish a new API error message.
             * @param apiResponse
             */
            NotificationService.prototype.addApiResponse = function (apiResponse) {
                var _this = this;
                this.addApiResponseSubscription = this.businessProvider.validateApiResponse(apiResponse).subscribe(function (response) { return _this.handleAddApiResponse(response); }, function (error) { return _this.handleServiceErrors(error); }, function () { return _this.finishAddApiRequest(); });
            };
            /**
             * Use to add a new [Notification] to the service. Valid notifications
             * are published to all subscribers (for display).
             */
            NotificationService.prototype.addMessage = function (message, options) {
                var _this = this;
                this.addMessageSubscription = this.businessProvider.validateNotification(message).subscribe(function (response) { return _this.handleAddMessage(response, options); }, function (error) { return _this.handleServiceErrors(error); }, function () { return _this.finishAddMessageRequest(); });
            };
            /**
             * Use to reset the notification service - removes all messages.
             */
            NotificationService.prototype.reset = function () {
                this.notificationsSubject$.next(undefined);
                this.apiMessagesSubject.next(undefined);
            };
            /**
             * Use to handle the validation response for an API that contains
             * error response messages to publish.
             * @param response
             */
            NotificationService.prototype.handleAddApiResponse = function (response) {
                if (response instanceof core.ApiResponse) {
                    if (response.isSuccess && response instanceof core.ApiResponse) {
                        this.loggingService.log(this.serviceName, i1$1.Severity.Information, "Preparing to notify [API Message] subscribers.");
                        this.apiMessagesSubject.next(response.data);
                    }
                    else if (!response.isSuccess && response instanceof core.ApiResponse) {
                        this.handleServiceErrors(response);
                    }
                }
            };
            /**
             * Use to handle the response of a notification validation.
             * @param response an ApiResponse<Notification> where the [Data] payload is of type [Notification]
             *
             */
            NotificationService.prototype.handleAddMessage = function (response, options) {
                if (response instanceof core.ApiResponse) {
                    if (response.isSuccess && response instanceof core.ApiResponse && response.data) {
                        var message = response.data;
                        this.loggingService.log(this.serviceName, i1$1.Severity.Information, "Preparing to notify notification subscribers of new message: " + message.title);
                        if (message instanceof Notification && options) {
                            message.options = options;
                        }
                        this.notificationsSubject$.next(message);
                    }
                    else if (!response.isSuccess && response instanceof core.ApiResponse) {
                        this.handleServiceErrors(response);
                    }
                }
            };
            NotificationService.prototype.handleServiceErrors = function (response) {
                if (!response.IsSuccess && response instanceof i2.ServiceResponse && response.Errors) {
                    var message = new Notification();
                    message.messages = [response.Message];
                    message.severity = exports.NotificationSeverity.error;
                    message.notifierType = exports.NotifierType.Toast;
                    message.title = response.Message;
                    message.description = response.Message;
                    this.loggingService.log(this.serviceName, i1$1.Severity.Information, "Preparing to notify notification subscribers of new message: " + message.title);
                    this.notificationsSubject$.next(message);
                }
                this.loggingService.log(this.serviceName, i1$1.Severity.Error, "Failed to process notification message. " + response);
            };
            /**
             * Use to manage the subscription for processing a new notification message.
             */
            NotificationService.prototype.finishAddMessageRequest = function () {
                this.finishRequest(this.serviceName);
                if (this.addMessageSubscription) {
                    this.addMessageSubscription.unsubscribe();
                }
            };
            /**
             * Use to finish processing API messages.
             * @param serviceName
             */
            NotificationService.prototype.finishAddApiRequest = function () {
                this.finishRequest(this.serviceName);
                if (this.addApiResponseSubscription) {
                    this.addApiResponseSubscription.unsubscribe();
                }
            };
            return NotificationService;
        }(i2.ServiceBase));
        NotificationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationService, deps: [{ token: i1__namespace$1.LoggingService }, { token: i2__namespace.ServiceContext, optional: true }, { token: BusinessProviderService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        NotificationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationService, providedIn: 'root' });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotificationService, decorators: [{
                    type: i0.Injectable,
                    args: [{
                            providedIn: 'root',
                        }]
                }], ctorParameters: function () {
                return [{ type: i1__namespace$1.LoggingService }, { type: i2__namespace.ServiceContext, decorators: [{
                                type: i0.Optional
                            }] }, { type: BusinessProviderService }];
            } });

        var NotificationServiceMock = /** @class */ (function () {
            function NotificationServiceMock() {
            }
            NotificationServiceMock.prototype.addApiResponse = function () {
                return null;
            };
            NotificationServiceMock.prototype.addMessage = function () {
                return null;
            };
            NotificationServiceMock.prototype.reset = function () {
                return null;
            };
            return NotificationServiceMock;
        }());

        /**
         * Generated bundle index. Do not edit.
         */

        exports.ErrorState = ErrorState;
        exports.ErrorStateOperation = ErrorStateOperation;
        exports.Notification = Notification;
        exports.NotificationOptions = NotificationOptions;
        exports.NotificationService = NotificationService;
        exports.NotificationServiceMock = NotificationServiceMock;
        exports.NotificationsModule = NotificationsModule;

        Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=buildmotion-notifications.umd.js.map
