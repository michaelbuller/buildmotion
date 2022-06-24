(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@buildmotion/actions'), require('@buildmotion/core'), require('@buildmotion/logging'), require('@buildmotion/rules-engine'), require('rxjs'), require('@angular/router'), require('guid-typescript')) :
        typeof define === 'function' && define.amd ? define('@buildmotion/foundation', ['exports', '@angular/core', '@angular/common', '@buildmotion/actions', '@buildmotion/core', '@buildmotion/logging', '@buildmotion/rules-engine', 'rxjs', '@angular/router', 'guid-typescript'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.foundation = {}), global.ng.core, global.ng.common, global.actions, global.core, global.logging, global.rulesEngine, global.rxjs, global.ng.router, global.guidTypescript));
})(this, (function (exports, i0, common, actions, core, logging, rulesEngine, rxjs, router, guidTypescript) { 'use strict';

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

        var FoundationModule = /** @class */ (function () {
            function FoundationModule() {
            }
            return FoundationModule;
        }());
        FoundationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FoundationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        FoundationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FoundationModule, imports: [common.CommonModule] });
        FoundationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FoundationModule, imports: [[common.CommonModule]] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FoundationModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            imports: [common.CommonModule],
                        }]
                }] });

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

        var ServiceResponse = /** @class */ (function () {
            function ServiceResponse() {
                this.Errors = new Array();
            }
            return ServiceResponse;
        }());

        var ErrorResponse = /** @class */ (function (_super) {
            __extends(ErrorResponse, _super);
            function ErrorResponse() {
                var _this = _super.call(this) || this;
                _this.IsSuccess = false;
                return _this;
            }
            return ErrorResponse;
        }(ServiceResponse));

        /**
         * Use to indicate the type for the [ServiceMessage].
         */
        exports.MessageType = void 0;
        (function (MessageType) {
            /**
             * Use to indicate the message type is informational.
             */
            MessageType[MessageType["Information"] = 1] = "Information";
            /**
             * Use to indicate the message type is warning.
             */
            MessageType[MessageType["Warning"] = 2] = "Warning";
            /**
             * Use to indicate the message type is error.
             */
            MessageType[MessageType["Error"] = 3] = "Error";
        })(exports.MessageType || (exports.MessageType = {}));

        /**
         * Use this class to manage the context of a single service call. This
         * class will contain a list of any service messages added during the processing
         * of a service request.
         */
        var ServiceContext = /** @class */ (function () {
            function ServiceContext() {
                /**
                 * A list of service messages added by the application during the processing of the
                 * specified service request.
                 */
                this.Messages = new Array();
            }
            /**
             * Use this method to add a new message to the [ServiceContext].
             */
            ServiceContext.prototype.addMessage = function (message) {
                this.Messages.push(message);
            };
            /**
             * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
             */
            ServiceContext.prototype.hasErrors = function () {
                if (this.Messages && this.Messages.length > 0) {
                    var errorMessages = this.Messages.filter(function (f) { return f.MessageType === exports.MessageType.Error; });
                    if (errorMessages.length > 0) {
                        return true;
                    }
                }
                return false;
            };
            /**
             * Use to determine if the current [ServiceContext] does not contain any errors.
             */
            ServiceContext.prototype.isGood = function () {
                if (this.Messages && this.Messages.length > 0) {
                    var errorMessages = this.Messages.filter(function (f) { return f.MessageType === exports.MessageType.Error; });
                    if (errorMessages.length > 0) {
                        return false;
                    }
                }
                return true;
            };
            return ServiceContext;
        }());
        ServiceContext.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ServiceContext, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        ServiceContext.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ServiceContext, providedIn: 'root' });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ServiceContext, decorators: [{
                    type: i0.Injectable,
                    args: [{
                            providedIn: 'root',
                        }]
                }] });

        /**
         * Use this class to create a message for the current [ServiceContext].
         */
        var ServiceMessage = /** @class */ (function () {
            /**
             *
             * @param name The name of the message.
             * @param message The display text of the message.
             * @param messageType: Indicates the type of message.
             * @param source: Indicates the source of the message.
             * @param displayToUser Use to indicate if the specified message should be displayed to the user.
             */
            function ServiceMessage(name, message, messageType, source, displayToUser) {
                if (displayToUser === void 0) { displayToUser = false; }
                /** Use to specify  */
                this.MessageType = exports.MessageType.Information;
                /** Use to indicate the source of the message. */
                this.Source = '';
                /** Use to indicate if the specified message should be displayed to the user. */
                this.DisplayToUser = false;
                this.Name = name;
                this.Message = message;
                if (message) {
                    this.MessageType = messageType;
                }
                if (source) {
                    this.Source = source;
                }
                this.DisplayToUser = displayToUser;
            }
            /**
             * Use this extension method to add the name of the message.
             * @param name The name of the service message.
             */
            ServiceMessage.prototype.WithName = function (name) {
                this.Name = name;
                return this;
            };
            /**
             * Use this extension method to add the message text to the ServiceMessage item.
             * @param message The display text of the service message.
             */
            ServiceMessage.prototype.WithMessage = function (message) {
                this.Message = message;
                return this;
            };
            /**
             * Use this extension method to set the [MessageType] of the ServiceMessage item.
             * @param messageType: Use to indicate the message type.
             */
            ServiceMessage.prototype.WithMessageType = function (messageType) {
                this.MessageType = messageType;
                return this;
            };
            /**
             * Use this extension method to set the [Source] of the ServiceMessage item.
             * @param source: Use to indicate the source of the message.
             */
            ServiceMessage.prototype.WithSource = function (source) {
                this.Source = source;
                return this;
            };
            /**
             * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
             * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
             */
            ServiceMessage.prototype.WithDisplayToUser = function (displayToUser) {
                this.DisplayToUser = displayToUser;
                return this;
            };
            /**
             * Use this method return a string representing the ServiceMessage.
             */
            ServiceMessage.prototype.toString = function () {
                return "Name: " + this.Name + "; Message: " + this.Message + "; MessageType: " + this.MessageType.toString() + "; Source: " + this.Source + "; DisplayToUser: " + this.DisplayToUser;
            };
            return ServiceMessage;
        }());

        /**
         * This is the application's base Action class that provides implementation of pipeline methods - pre/post
         * execution methods.
         *
         * The pre-execute methods that can be implemented are:
         *		1. start();
         *		2. audit();
         *		3. preValidateAction();
         *		4. evaluateRules();
         *		5. postValidateAction();
         *		6. preExecuteAction();
         *
         *If the status of action is good, the business logic will be executed using the:
         *		1. processAction();
         *
         * The post-execution methods that can be implemented are:
         *		1. postExecuteAction();
         *		2. validateActionResult();
         *		3. finish();
         */
        var ActionBase = /** @class */ (function (_super) {
            __extends(ActionBase, _super);
            function ActionBase(actionName) {
                var _this = _super.call(this) || this;
                _this.serviceContext = new ServiceContext();
                _this.response = _this.createUnknownResponse();
                _this.actionName = actionName !== null && actionName !== void 0 ? actionName : '';
                return _this;
            }
            ActionBase.prototype.start = function () {
                // this.loggingService?.log(
                //   this.actionName,
                //   Severity.Information,
                //   `Preparing to [start] action.`
                // );
            };
            ActionBase.prototype.audit = function () {
                var _a;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Preparing to [audit] action.");
            };
            ActionBase.prototype.createUnknownResponse = function () {
                var response = new core.ApiResponse();
                return rxjs.of(response);
            };
            ActionBase.prototype.preExecuteAction = function () {
                var _a;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Preparing to [preExecuteAction] action.");
            };
            ActionBase.prototype.performAction = function () {
                var _a;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Preparing to perform [" + this.actionName + "].");
            };
            ActionBase.prototype.preValidateAction = function () {
                var _a;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Preparing to preValidateAction [" + this.actionName + "].");
            };
            ActionBase.prototype.finish = function () {
                var _a;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Preparing to [finish] action.");
            };
            /**
             * This is a required implementation if you want to render/execute the rules that
             * are associated to the specified action.
             */
            ActionBase.prototype.validateAction = function () {
                return this.validationContext.renderRules();
            };
            ActionBase.prototype.postValidateAction = function () {
                var _this = this;
                var _a, _b;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Preparing to determine if the action contains validation errors in " + this.actionName);
                if (this.validationContext.hasRuleViolations()) {
                    (_b = this.loggingService) === null || _b === void 0 ? void 0 : _b.log(this.actionName, logging.Severity.Information, "The target contains validation errors in " + this.actionName);
                    // Load the error/rule violations into the ServiceContext so that the information bubbles up to the caller of the service;
                    this.validationContext.results.forEach(function (result) {
                        if (!result.isValid) {
                            _this.publishRuleResult(result);
                            _this.retrieveRuleDetails(result);
                        }
                    });
                    this.response = this.createFailResponse();
                }
            };
            ActionBase.prototype.createFailResponse = function () {
                var apiResponse = new core.ApiResponse();
                apiResponse.isSuccess = false;
                apiResponse.message = "Request failed.";
                var messages = new Array();
                if (this.serviceContext.hasErrors() && this.serviceContext.Messages.length > 0) {
                    this.serviceContext.Messages.map(function (m) {
                        var error = new core.ApiMessage();
                        error.message = m.Message;
                        error.messageType = core.ApiMessageType.Error;
                        error.code = m.Name;
                        messages.push(error);
                    });
                }
                apiResponse.messages = messages.length > 0 ? messages : [];
                return rxjs.of(apiResponse);
            };
            ActionBase.prototype.postExecuteAction = function () {
                var _this = this;
                if (this.actionResult === actions.ActionResult.Fail) {
                    this.serviceContext.Messages.forEach(function (e) {
                        var _a;
                        if (e.MessageType === exports.MessageType.Error) {
                            (_a = _this.loggingService) === null || _a === void 0 ? void 0 : _a.log(_this.actionName, logging.Severity.Error, e.toString());
                        }
                    });
                }
            };
            /**
             * All concrete actions must override and implement this method. It is defined in the [Action] framework class.
             */
            ActionBase.prototype.validateActionResult = function () {
                var _a, _b;
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Information, "Running [validateActionResult] for " + this.actionName + ".");
                // determine the status of the action based on any rule violations;
                if (this.validationContext.hasRuleViolations()) {
                    (_b = this.loggingService) === null || _b === void 0 ? void 0 : _b.log(this.actionName, logging.Severity.Error, "The " + this.actionName + " contains rule violations.");
                    this.actionResult = actions.ActionResult.Fail;
                    var errorResponse = new ErrorResponse();
                    errorResponse.IsSuccess = false;
                    errorResponse.Message = "Validation errors exist.";
                    this.response = rxjs.throwError(errorResponse);
                }
                this.actionResult = this.serviceContext.isGood() ? actions.ActionResult.Success : actions.ActionResult.Fail;
                return this.actionResult;
            };
            /**
             * Use to process rule results for composite rules. Note, that this function is recursive
             * and will process all composite rules in the rule set contained in the ValidationContext.
             * @param ruleResult The result of a rendered rule.
             */
            ActionBase.prototype.retrieveRuleDetails = function (ruleResult) {
                var _this = this;
                if (ruleResult.rulePolicy instanceof rulesEngine.CompositeRule) {
                    var composite = ruleResult.rulePolicy;
                    if (composite && composite.hasErrors) {
                        var errors = composite.results.filter(function (result) { return !result.isValid && result.rulePolicy && result.rulePolicy.isDisplayable; });
                        errors.forEach(function (errorResult) {
                            _this.publishRuleResult(errorResult);
                            if (errorResult.rulePolicy instanceof rulesEngine.CompositeRule) {
                                _this.retrieveRuleDetails(errorResult);
                            }
                        });
                    }
                }
            };
            /**
             * A helper function to publish a new [ServiceMessage] to the [ServiceContext.Messages] list.
             * @param ruleResult
             */
            ActionBase.prototype.publishRuleResult = function (ruleResult) {
                var _a;
                var serviceMessage = new ServiceMessage(ruleResult.rulePolicy.name, ruleResult.rulePolicy.message, exports.MessageType.Error);
                serviceMessage.DisplayToUser = ruleResult.rulePolicy.isDisplayable;
                serviceMessage.Source = this.actionName;
                this.serviceContext.Messages.push(serviceMessage);
                (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, logging.Severity.Error, "" + serviceMessage.toString());
            };
            return ActionBase;
        }(actions.Action));

        /**
         * Use to provide the alert type information for the AlertNotification and AlertComponent.
         */
        var AlertTypes = /** @class */ (function () {
            function AlertTypes() {
            }
            return AlertTypes;
        }());
        AlertTypes.Information = 'alert-info';
        AlertTypes.Warning = 'alert-warning';
        AlertTypes.Danger = 'alert-danger';
        AlertTypes.Success = 'alert-success';

        var AlertNotification = /** @class */ (function () {
            function AlertNotification(header, title, messages, type) {
                this.type = AlertTypes.Information; // alert-warning, alert-success, alert-info, alert-danger
                this.messages = new Array();
                this.showAlert = false;
                if (type) {
                    this.type = type;
                }
                this.header = header;
                this.title = title;
                if (messages) {
                    this.messages = messages;
                }
                if (this.header && this.title) {
                    this.showAlert = true; // used to trigger the display of the notification.
                }
            }
            return AlertNotification;
        }());

        /**
         * Use the business provider base class to access common elements of the business provider.
         *
         * serviceContext: This is initialized for each instance of a business provider - its purpose is to collect information during the processing of business logic.
         */
        var BusinessProviderBase = /** @class */ (function () {
            function BusinessProviderBase(providerName, loggingService) {
                this.loggingService = loggingService;
                this.providerName = providerName;
                this.loggingService.log(this.providerName, logging.Severity.Information, "Running constructor for the [" + this.providerName + "].");
            }
            /**
             * Use to handle an unexpected error in the application. The error should implement
             * the specified interface. The method will add a new [ServiceMessage] to the
             * specified [ServiceContext].
             * @param error An unexpected application error that implements the [Error] interface.
             *
             * interface Error {
             *  name: string;
             *  message: string;
             *  stack?: string;
             * }
             */
            BusinessProviderBase.prototype.handleUnexpectedError = function (error) {
                var message = new ServiceMessage(error.name, error.message)
                    .WithDisplayToUser(true)
                    .WithMessageType(exports.MessageType.Error)
                    .WithSource(this.providerName);
                var logItem = message.toString() + "; " + error.stack;
                this.loggingService.log(this.providerName, logging.Severity.Error, logItem);
                this.serviceContext.addMessage(message);
            };
            BusinessProviderBase.prototype.finishRequest = function (sourceName) {
                var _this = this;
                this.loggingService.log(this.providerName, logging.Severity.Information, "Request for [" + sourceName + "] by " + this.providerName + " is complete.");
                if (this.serviceContext.hasErrors()) {
                    this.loggingService.log(this.providerName, logging.Severity.Information, "Preparing to write out the errors.");
                    this.serviceContext.Messages.filter(function (f) { return f.DisplayToUser && f.MessageType === exports.MessageType.Error; }).forEach(function (e) { return _this.loggingService.log(_this.providerName, logging.Severity.Error, e.toString()); });
                }
            };
            return BusinessProviderBase;
        }());

        exports.ComponentBase = /** @class */ (function () {
            function ComponentBase(componentName, loggingService, router) {
                this.loggingService = loggingService;
                this.router = router;
                this.navSubscription = new rxjs.Subscription();
                this.id = guidTypescript.Guid.create();
                this.subscriptions = [];
                this.componentName = componentName;
                this.alertNotification = new AlertNotification('', '');
                this.loggingService.log(this.componentName, logging.Severity.Information, "Preparing to load [" + this.componentName + "] component.", ["ComponentId:" + this.id]);
            }
            /**
             * Add a subscription to the component
             * @param subscription
             */
            ComponentBase.prototype.subscribe = function (subscription) {
                this.subscriptions.push(subscription);
            };
            /**
             * Unsubscribe to any registered subscriptions
             */
            ComponentBase.prototype.ngOnDestroy = function () {
                this.subscriptions.forEach(function (sub) {
                    if (sub && typeof sub.unsubscribe === 'function') {
                        sub.unsubscribe();
                    }
                });
            };
            /**
             * Use to set the URLs for when navigation ends. Provides the values
             * for the current and previous URL paths.
             * @param event Is a [NavigationEnd] type.
             */
            ComponentBase.prototype.updateUrls = function (event) {
                if (event.urlAfterRedirects) {
                    this.previousUrl = this.currentUrl;
                    this.currentUrl = event.urlAfterRedirects;
                }
            };
            /**
             * Use to send an analytic event to [Google Analytics].
             * @param category A category is a name that you supply as a way to group objects that you want to track. Typically,
             * you will use the same category name multiple times over related UI elements that you want to group under a given category.
             * @param action Use the action parameter to name the type of event or interaction you want to track for a particular
             * web object (i.e., play, stop, pause, download). A unique event is determined by a unique action name. You can use
             * duplicate action names across categories, but this can affect how unique events are calculated. See the suggestions
             * below and the Implicit Count section for more details.
             * @param label Provide additional information for events that you want to track, such as the movie title in the
             * video examples above, or the name of a file when tracking downloads. All labels are listed independently from
             * their parent categories and actions. This provides you with another useful way to segment the event data for
             * your reports. All labels are listed independently from their parent categories and actions. This provides you
             * with another useful way to segment the event data for your reports.
             * @param value Any numeric value indicating a [value] that will be summarized for the analytic item(s).
             *
             * More information at: https://support.google.com/analytics/answer/1033068
             * or https://developers.google.com/analytics/devguides/collection/analyticsjs/events
             */
            ComponentBase.prototype.googleAnalyticsSendEvent = function (category, action, label, value) {
                window.gtag('event', action, {
                    event_category: category,
                    event_label: label,
                    value: value,
                });
            };
            /**
             * Use to create a simple [ErrorResponse] with the specified message.
             * @param message The message to display to the user.
             */
            ComponentBase.prototype.createErrorResponse = function (message) {
                this.loggingService.log(this.componentName, logging.Severity.Information, "Preparing to create error response for component.");
                var errorResponse = new ErrorResponse();
                errorResponse.Message = message;
                return errorResponse;
            };
            /**
             * Use to handle service errors. These are error response [See: ErrorResponse] from
             * the application business layers (Action(s) or Http) that will bubble up to the
             * caller (i.e., a component) in a specified format:
             *
             * IsSuccess = false; // default for ErrorResponse
             * Message: string;
             * Errors: Array<ServiceError> = new Array<ServiceError>();
             * Exception: any;
             */
            ComponentBase.prototype.handleServiceErrors = function (errorResponse, serviceContext) {
                this.loggingService.log(this.componentName, logging.Severity.Information, "Preparing to handle service errors for component.");
                if (serviceContext && serviceContext.hasErrors()) {
                    this.loggingService.log(this.componentName, logging.Severity.Information, "Retrieving error messages from the ServiceContext/ValidationContext;");
                    var messages = this.retrieveServiceContextErrorMessages(serviceContext);
                    this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
                }
                else {
                    if (errorResponse && errorResponse.Message) {
                        this.loggingService.log(this.componentName, logging.Severity.Information, "Retrieving error messages from the [ErrorResponse].");
                        var errors = this.retrieveResponseErrorMessages(errorResponse);
                        this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                        this.loggingService.log(this.componentName, logging.Severity.Error, "Error: " + errorResponse.Message);
                    }
                }
            };
            /**
             * Use to mark the form as touched; includes all form controls;
             */
            ComponentBase.prototype.markFormAsTouched = function (form) {
                form.markAsTouched({ onlySelf: false });
                Object.values(form.controls).forEach(function (control) {
                    control.markAsTouched();
                });
            };
            /**
             * Use to log an unexpected error.
             */
            ComponentBase.prototype.logError = function (error, message) {
                if (error instanceof Error) {
                    this.loggingService.log(this.componentName, logging.Severity.Error, message, ["" + error.stack]);
                }
                else {
                    this.loggingService.log(this.componentName, logging.Severity.Error, message);
                }
            };
            /**
             * Use to retrieve the error messages from the specified [ServiceContext].
             *
             * @parm: serviceContext: A context object containing messages for the specified request.
             */
            ComponentBase.prototype.retrieveServiceContextErrorMessages = function (serviceContext) {
                var messages = Array();
                serviceContext.Messages.forEach(function (e) {
                    if (e.MessageType === exports.MessageType.Error && e.DisplayToUser) {
                        messages.push(e.Message);
                    }
                });
                return messages;
            };
            /**
             * Use to retrieve the error messages from the specified Web API response.
             */
            ComponentBase.prototype.retrieveResponseErrorMessages = function (errorResponse) {
                var errors = new Array();
                if (errorResponse && errorResponse.Errors) {
                    errorResponse.Errors.forEach(function (e) {
                        if (e.DisplayToUser) {
                            errors.push(e.Message);
                        }
                    });
                }
                return errors;
            };
            /**
             * Use to reset the [AlertNotification] to the initial state. Removes
             * existing messages and hides the AlertComponent.
             */
            ComponentBase.prototype.resetAlertNotifications = function () {
                this.alertNotification = new AlertNotification('', '');
            };
            /**
             * Use to navigate to the specified route.
             * @parm routeName The name of the target route.
             */
            ComponentBase.prototype.routeTo = function (routeName) {
                try {
                    this.router.navigate([routeName]);
                }
                catch (error) {
                    this.loggingService.log(this.componentName, logging.Severity.Error, "Error while attempting to navigate to [" + routeName + "] route from " + this.componentName + ". Error: " + error.toString());
                }
            };
            /**
             * Use to retrieve and show any response error messages.
             */
            ComponentBase.prototype.showResponseErrors = function (response) {
                this.handleServiceErrors(response, undefined);
            };
            ComponentBase.prototype.finishRequest = function (message) {
                this.loggingService.log(this.componentName, logging.Severity.Information, this.componentName + ": " + message);
            };
            ComponentBase.prototype.showAlertMessage = function (message) {
                alert(message);
            };
            return ComponentBase;
        }());
        exports.ComponentBase = __decorate([
            i0.Inject({}),
            __metadata("design:paramtypes", [String, logging.LoggingService, router.Router])
        ], exports.ComponentBase);

        /**
         * Use the [ServiceBase] to provide common behavior for Angular
         * services.
         */
        exports.ServiceBase = /** @class */ (function () {
            /**
             * Use the constructor to provide required elements to the base class.
             *
             * @param loggingService The [LoggingService] is a required dependency of this
             * class. It should be injected into any Angular Services that extend from
             * this base class. It will allow the members of the base class to log information
             * using the common LoggingService.
             */
            function ServiceBase(serviceName, loggingService, serviceContext) {
                this.serviceName = serviceName;
                this.loggingService = loggingService;
                this.serviceContext = serviceContext;
                this.accessToken = '';
                this.id = guidTypescript.Guid.create().toString();
                this.subscriptions = [];
                this.loggingService.log(this.serviceName, logging.Severity.Information, "Initializing " + this.serviceName + " at " + Date.now() + " with id: " + this.id);
            }
            /**
             * Use to extract the contents of the HTTP body and return a JSON
             * representation of the data.
             * @param response: contains the HTTP response.
             */
            ServiceBase.prototype.extractData = function (response) {
                var body = response.json();
                return body || {};
            };
            /**
             * Use to handle an unexpected error in the application. The error should implement
             * the specified interface. The method will add a new [ServiceMessage] to the
             * specified [ServiceContext].
             * @param error An unexpected application error that implements the [Error] interface.
             *
             * interface Error {
             *  name: string;
             *  message: string;
             *  stack?: string;
             * }
             */
            ServiceBase.prototype.handleUnexpectedError = function (error) {
                var message = new ServiceMessage(error.name, error.message).WithDisplayToUser(false).WithMessageType(exports.MessageType.Error).WithSource(this.serviceName);
                var tags = ["" + this.serviceName];
                var logItem = message.toString() + "; " + error.stack;
                this.loggingService.log(this.serviceName, logging.Severity.Error, logItem, tags);
                this.serviceContext.addMessage(message);
            };
            /**
             * Use to handle an error that contains a [name] and a [message].
             * @param error
             */
            ServiceBase.prototype.handleError = function (error) {
                var message = new ServiceMessage(error.name, error.message).WithDisplayToUser(false).WithMessageType(exports.MessageType.Error).WithSource(this.serviceName);
                var tags = ["" + this.serviceName];
                this.loggingService.log(this.serviceName, logging.Severity.Error, message.toString(), tags);
                this.serviceContext.addMessage(message);
            };
            /**
             * Use to create a new [ErrorResponse] with the specified message.
             * @param message The message for the specified [ErrorResponse].
             */
            ServiceBase.prototype.createErrorResponse = function (message) {
                var response = new ErrorResponse();
                response.Message = message;
                return response;
            };
            /**
             * Use to create a API Response.
             *
             * @param message a simple message related to the operation (not for user notifications).
             * @param data the data payload (if any) for the response.
             * @returns Observable<ApiResponse<T>>
             */
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ServiceBase.prototype.createAPIResponse = function (message, data, isSuccess) {
                if (isSuccess === void 0) { isSuccess = true; }
                var response = {
                    id: guidTypescript.Guid.create().toString(),
                    isSuccess: isSuccess,
                    data: data,
                    message: message,
                    messages: [],
                    timestamp: new Date()
                };
                return rxjs.of(response);
            };
            /**
             * Use a generic method to finish service requests that return [Observables].
             * @param sourceName
             */
            ServiceBase.prototype.finishRequest = function (sourceName) {
                var _this = this;
                this.loggingService.log(this.serviceName, logging.Severity.Information, "Request for [" + sourceName + "] by " + this.serviceName + " is complete.");
                if (this.serviceContext.hasErrors()) {
                    this.loggingService.log(this.serviceName, logging.Severity.Information, "Preparing to write any messages.");
                    this.serviceContext.Messages.filter(function (f) { return f.MessageType === exports.MessageType.Error && f.DisplayToUser; }).forEach(function (e) { return _this.loggingService.log(_this.serviceName, logging.Severity.Error, e.toString()); });
                }
            };
            ServiceBase.prototype.logError = function (error, errorMessage) {
                this.loggingService.log(this.serviceName, logging.Severity.Error, errorMessage + "; Error: " + error.message);
            };
            ServiceBase.prototype.ngOnDestroy = function () {
                this.unsubscribeAllSubscriptions();
            };
            /**
             * Use to reset the service context when you want to clear messages from the [ServiceContext]. If you want to
             * append messages from subsequent service calls, do not use this method.
             */
            ServiceBase.prototype.resetServiceContext = function () {
                this.loggingService.log(this.serviceName, logging.Severity.Information, "Preparing to reset the Messages of the current [ServiceContext].");
                if (this.serviceContext && this.serviceContext.Messages) {
                    if (this.serviceContext.Messages.length > 0) {
                        this.loggingService.log(this.serviceName, logging.Severity.Information, "Resetting the Messages of the current [ServiceContext].");
                        this.serviceContext.Messages = new Array();
                    }
                    else {
                        this.loggingService.log(this.serviceName, logging.Severity.Information, "The current [ServiceContext] does not contain any [Messages].");
                    }
                }
                else {
                    this.loggingService.log(this.serviceName, logging.Severity.Warning, "The current [ServiceContext] is not valid.");
                }
                this.loggingService.log(this.serviceName, logging.Severity.Information, "Finished  processing request to [reset] the Messages of the current [ServiceContext].");
            };
            /**
             * Register a Subscription
             * @param subscription
             */
            ServiceBase.prototype.subscribe = function (subscription) {
                this.subscriptions.push(subscription);
            };
            /**
             * Unsubscribe all Subjections
             */
            ServiceBase.prototype.unsubscribeAllSubscriptions = function () {
                this.subscriptions.forEach(function (sub) {
                    if (sub && typeof sub.unsubscribe === 'function') {
                        sub.unsubscribe();
                    }
                });
            };
            /**
             * Use to write the current messages contained in the [ServiceContext]. Written messages are limited
             * to items that are marked as [DisplayToUser = true].
             */
            ServiceBase.prototype.writeMessages = function () {
                var _this = this;
                if (this.serviceContext && this.serviceContext.Messages) {
                    this.serviceContext.Messages.forEach(function (e) {
                        if (e.MessageType === exports.MessageType.Error && e.DisplayToUser) {
                            _this.loggingService.log(_this.serviceName, logging.Severity.Error, e.toString());
                        }
                    });
                }
            };
            return ServiceBase;
        }());
        exports.ServiceBase = __decorate([
            i0.Inject({}),
            __param(1, i0.Inject(logging.LoggingService)),
            __metadata("design:paramtypes", [String, Object, ServiceContext])
        ], exports.ServiceBase);

        /**
         * Use this model to represent service error/message information from the
         * application's service APIs.
         *
         * The DisplayToUser boolean value indicates whether the message should be
         * displayed to the user if desired.
         */
        var ServiceError = /** @class */ (function () {
            function ServiceError() {
            }
            return ServiceError;
        }());

        var SingletonServiceBase = /** @class */ (function (_super) {
            __extends(SingletonServiceBase, _super);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function SingletonServiceBase(type, loggingService, serviceName, serviceContext) {
                var _this = _super.call(this, serviceName, loggingService, serviceContext) || this;
                // eslint-disable-next-line no-bitwise
                var parent = i0.inject(type, i0.InjectFlags.Optional | i0.InjectFlags.SkipSelf);
                if (parent) {
                    throw Error("Cannot create multiple instances of provider: [" + type + "]");
                }
                return _this;
            }
            return SingletonServiceBase;
        }(exports.ServiceBase));

        /**
         * Generated bundle index. Do not edit.
         */

        exports.ActionBase = ActionBase;
        exports.AlertNotification = AlertNotification;
        exports.AlertTypes = AlertTypes;
        exports.BusinessProviderBase = BusinessProviderBase;
        exports.ErrorResponse = ErrorResponse;
        exports.FoundationModule = FoundationModule;
        exports.ServiceContext = ServiceContext;
        exports.ServiceError = ServiceError;
        exports.ServiceMessage = ServiceMessage;
        exports.ServiceResponse = ServiceResponse;
        exports.SingletonServiceBase = SingletonServiceBase;

        Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=buildmotion-foundation.umd.js.map
