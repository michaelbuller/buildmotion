(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@buildmotion/logging'), require('@buildmotion/foundation'), require('@buildmotion/configuration'), require('@buildmotion/core'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('guid-typescript')) :
        typeof define === 'function' && define.amd ? define('@buildmotion/http-service', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@buildmotion/logging', '@buildmotion/foundation', '@buildmotion/configuration', '@buildmotion/core', 'rxjs', 'rxjs/operators', '@angular/router', 'guid-typescript'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.buildmotion = global.buildmotion || {}, global.buildmotion["http-service"] = {}), global.ng.core, global.ng.common, global.ng.common.http, global.i2, global.i3, global.i4, global.core, global.rxjs, global.rxjs.operators, global.ng.router, global.guidTypescript));
})(this, (function (exports, i0, common, i1, i2, i3, i4, core, rxjs, operators, i1$1, guidTypescript) { 'use strict';

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
        var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
        var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
        var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

        var HttpServiceModule = /** @class */ (function () {
            function HttpServiceModule() {
            }
            return HttpServiceModule;
        }());
        HttpServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        HttpServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpServiceModule, imports: [common.CommonModule] });
        HttpServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpServiceModule, imports: [[common.CommonModule]] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpServiceModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            imports: [common.CommonModule],
                        }]
                }] });

        /**
         * Use to indicate the request method to use.
         */
        exports.HttpRequestMethod = void 0;
        (function (HttpRequestMethod) {
            HttpRequestMethod["get"] = "GET";
            HttpRequestMethod["post"] = "POST";
            HttpRequestMethod["put"] = "PUT";
            HttpRequestMethod["delete"] = "DELETE";
            HttpRequestMethod["options"] = "OPTIONS";
            HttpRequestMethod["head"] = "HEAD";
            HttpRequestMethod["patch"] = "PATCH";
        })(exports.HttpRequestMethod || (exports.HttpRequestMethod = {}));

        /**
         * Use to configure the HTTP options for a request.
         */
        var HttpRequestOptions = /** @class */ (function () {
            function HttpRequestOptions() {
                this.requestMethod = exports.HttpRequestMethod.get;
                this.requestUrl = '';
            }
            HttpRequestOptions.prototype.toString = function () {
                return "Method: " + this.requestMethod;
            };
            return HttpRequestOptions;
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

        var HttpService = /** @class */ (function (_super) {
            __extends(HttpService, _super);
            function HttpService(httpClient, loggingService, serviceContext, configService) {
                var _this = _super.call(this, 'HttpService', loggingService, serviceContext) || this;
                _this.httpClient = httpClient;
                _this.configService = configService;
                _this.csrfToken = '';
                if (configService.settings)
                    _this.getCsrfToken().subscribe(function (resp) { return _this.handleCsrfResponse(resp); });
                return _this;
            }
            /**
             * Use to create [options] for the API request.
             * @param method Use to indicate the HttpRequest verb to target.
             * @param headers Use to provide any [HttpHeaders] with the request.
             * @param url Use to indicate the target URL for the API request.
             * @param body Use to provide a JSON object with the payload for the request.
             * @param withCredentials Use to indicate if request will include credentials (cookies), default value is [false].
             */
            HttpService.prototype.createOptions = function (method, headers, url, body, params, withCredentials) {
                if (withCredentials === void 0) { withCredentials = false; }
                var options = new HttpRequestOptions();
                options.requestMethod = method;
                options.headers = headers || new i1.HttpHeaders();
                options.requestUrl = url;
                options.body = body;
                options.params = params;
                options.withCredentials = withCredentials;
                return options;
            };
            /**
             * Use to create a new [HttpHeaders] object for the HTTP/API request.
             * @param includeCsrf Include CSRF header
             * @returns
             */
            HttpService.prototype.createHeader = function (includeCsrf) {
                if (includeCsrf === void 0) { includeCsrf = false; }
                var headers = new i1.HttpHeaders();
                headers = headers.set('content-type', 'application/json');
                if (includeCsrf) {
                    headers = headers.set('x-csrf-token', this.csrfToken);
                }
                return headers;
            };
            /**
             * Use to execute an HTTP request using the specified options in the [HttpRequestOptions].
             * @param requestOptions
             */
            // execute<T>(requestOptions: HttpRequestOptions): Observable<HttpResponse<T>> {
            HttpService.prototype.execute = function (requestOptions) {
                return this.httpClient.request(requestOptions.requestMethod.toString(), requestOptions.requestUrl, {
                    body: requestOptions.body,
                    headers: requestOptions.headers,
                    reportProgress: requestOptions.reportProgress,
                    observe: 'response',
                    params: requestOptions.params,
                    responseType: requestOptions.responseType,
                    withCredentials: requestOptions.withCredentials,
                });
            };
            HttpService.prototype.executeObserveBody = function (requestOptions) {
                return this.httpClient.request(requestOptions.requestMethod.toString(), requestOptions.requestUrl, {
                    body: requestOptions.body,
                    headers: requestOptions.headers,
                    reportProgress: requestOptions.reportProgress,
                    observe: 'body',
                    params: requestOptions.params,
                    responseType: requestOptions.responseType,
                    withCredentials: requestOptions.withCredentials,
                });
            };
            /**
             * Get CSRF token
             * @returns Observable
             */
            HttpService.prototype.getCsrfToken = function () {
                var requestUrl = this.configService.settings.apiConfig.csrf;
                this.loggingService.log(this.serviceName, i2.Severity.Information, "Preparing to get CSRF token.");
                var options = this.createOptions(exports.HttpRequestMethod.get, null, requestUrl, null, null, false);
                return this.execute(options);
            };
            /**
             * Handle Request to get CSRF Token
             * @param response
             */
            HttpService.prototype.handleCsrfResponse = function (response) {
                var _a;
                var requestName = "CSRF token request";
                if (response) {
                    var body = response.body;
                    this.csrfToken = (_a = body === null || body === void 0 ? void 0 : body.data) === null || _a === void 0 ? void 0 : _a.token;
                    this.loggingService.log(this.serviceName, i2.Severity.Information, "Preparing to handle successful response for " + requestName + ".");
                }
                else {
                    this.loggingService.log(this.serviceName, i2.Severity.Warning, "Received unexpected null/undefined response for " + requestName + ".");
                }
            };
            return HttpService;
        }(i3.ServiceBase));
        HttpService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpService, deps: [{ token: i1__namespace.HttpClient }, { token: i2__namespace.LoggingService }, { token: i3__namespace.ServiceContext }, { token: i4__namespace.ConfigurationService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        HttpService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpService, providedIn: 'root' });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpService, decorators: [{
                    type: i0.Injectable,
                    args: [{ providedIn: 'root' }]
                }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }, { type: i2__namespace.LoggingService }, { type: i3__namespace.ServiceContext }, { type: i4__namespace.ConfigurationService }]; } });

        /* eslint-disable @typescript-eslint/no-explicit-any */
        var HttpErrorInterceptor = /** @class */ (function () {
            function HttpErrorInterceptor(router) {
                this.router = router;
                this.displayToUser = true;
                this.doNotDisplayToUser = false;
                return;
            }
            HttpErrorInterceptor.prototype.intercept = function (request, next) {
                var _this = this;
                return next.handle(request).pipe(operators.retry(1), operators.catchError(function (error) {
                    return _this.handleError(error);
                }));
            };
            /**
             * Use to handle errors during HTTP/Web API operations. The caller expects
             * an Observable response - this method will either return the response from
             * the server or a new [ApiResponse] as an Observable for the client to
             * handle.
             *
             * @param error The error from the HTTP response.
             */
            HttpErrorInterceptor.prototype.handleError = function (error) {
                var _a;
                var apiErrorResponse = new core.ApiResponse();
                apiErrorResponse.isSuccess = false;
                apiErrorResponse.message = 'Unexpected HTTP error.';
                apiErrorResponse.timestamp = new Date();
                if (error.status === 401) {
                    this.router.navigateByUrl('/auth/login');
                }
                // Use the base error object to determine if the error type is a general or an all-purpose error.
                if (error.error instanceof ErrorEvent) {
                    // A client-side or network error occurred. Handle it accordingly.
                    apiErrorResponse.messages.push(new core.ApiMessage("HTTP_ERROR", "A client-side or network error occurred.", core.ApiMessageType.Error));
                    return rxjs.throwError(apiErrorResponse);
                }
                else {
                    // The API returned an unsuccessful response (failure status code).
                    if (error instanceof core.ApiResponse) {
                        /**
                         * A known error response format from the API/Server; rethrow this response.
                         *
                         * Throwing the error sends the Observable to the subscriber of the response.
                         * The subscriber or consumer should handle the response and display of messages.
                         */
                        return rxjs.throwError(error);
                    }
                    else {
                        if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.error_description) {
                            apiErrorResponse.message = error.error.error_description;
                        }
                        // An unhandled error/exception - may not want to display this information to an end-user.
                        apiErrorResponse.messages.push(new core.ApiMessage("HTTP_ERROR", error.status + ": " + error.statusText + ". " + error.message, core.ApiMessageType.Error));
                        return rxjs.throwError(apiErrorResponse);
                    }
                }
            };
            return HttpErrorInterceptor;
        }());
        HttpErrorInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpErrorInterceptor, deps: [{ token: i1__namespace$1.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        HttpErrorInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpErrorInterceptor });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpErrorInterceptor, decorators: [{
                    type: i0.Injectable
                }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }]; } });

        /* eslint-disable @typescript-eslint/no-explicit-any */
        var HttpResponseInterceptor = /** @class */ (function () {
            function HttpResponseInterceptor() {
                this.displayToUser = true;
                this.doNotDisplayToUser = false;
            }
            HttpResponseInterceptor.prototype.intercept = function (request, next) {
                var _this = this;
                return next.handle(request).pipe(operators.map(function (event) {
                    if (event instanceof i1.HttpResponse) {
                        if (event.body && event.body.id && event.body.data) {
                            return event;
                        }
                        else {
                            // FIXME: WRAP API RESPONSE; REMOVE WHEN API RETURNS DATA IN PROPER FORMAT/SCHEMA;
                            var apiResponse = new core.ApiResponse();
                            apiResponse.data = event.body;
                            apiResponse.message = 'API response wrapped by [HttpResponseInterceptor].';
                            apiResponse.timestamp = new Date();
                            apiResponse.isSuccess = _this.determineResponseStatus(event.status);
                            apiResponse.id = guidTypescript.Guid.create().toString();
                            // return the new response/wrapped;
                            return event.clone({
                                body: apiResponse
                            });
                        }
                    }
                    return event;
                }));
            };
            HttpResponseInterceptor.prototype.determineResponseStatus = function (status) {
                if (status === 200) {
                    return true;
                }
                return false;
            };
            return HttpResponseInterceptor;
        }());
        HttpResponseInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpResponseInterceptor, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        HttpResponseInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpResponseInterceptor });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpResponseInterceptor, decorators: [{
                    type: i0.Injectable
                }] });

        /* eslint-disable @typescript-eslint/no-explicit-any */
        var HttpTokenInterceptor = /** @class */ (function () {
            function HttpTokenInterceptor(configService) {
                this.configService = configService;
            }
            HttpTokenInterceptor.prototype.intercept = function (request, next) {
                var token = localStorage.getItem('r360-portal-token');
                var sysAccId = localStorage.getItem('r360-portal-sysAccId');
                if (request.url.includes(this.configService.config.apiConfig.apiURL) &&
                    !request.url.endsWith('auth/token') &&
                    token &&
                    sysAccId) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: "Bearer " + token,
                        }
                    });
                }
                return next.handle(request);
            };
            return HttpTokenInterceptor;
        }());
        HttpTokenInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpTokenInterceptor, deps: [{ token: i4__namespace.ConfigurationService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
        HttpTokenInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpTokenInterceptor });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpTokenInterceptor, decorators: [{
                    type: i0.Injectable
                }], ctorParameters: function () { return [{ type: i4__namespace.ConfigurationService }]; } });

        /**
         * Generated bundle index. Do not edit.
         */

        exports.HttpErrorInterceptor = HttpErrorInterceptor;
        exports.HttpRequestOptions = HttpRequestOptions;
        exports.HttpResponseInterceptor = HttpResponseInterceptor;
        exports.HttpService = HttpService;
        exports.HttpServiceModule = HttpServiceModule;
        exports.HttpTokenInterceptor = HttpTokenInterceptor;

        Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=buildmotion-http-service.umd.js.map
