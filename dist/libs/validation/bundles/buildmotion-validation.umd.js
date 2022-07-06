(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@buildmotion/rules-engine')) :
        typeof define === 'function' && define.amd ? define('@buildmotion/validation', ['exports', '@angular/core', '@angular/common', '@buildmotion/rules-engine'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.validation = {}), global.ng.core, global.ng.common, global.rulesEngine));
})(this, (function (exports, i0, common, rulesEngine) { 'use strict';

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

        var ValidationModule = /** @class */ (function () {
            function ValidationModule() {
            }
            return ValidationModule;
        }());
        ValidationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValidationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        ValidationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValidationModule, imports: [common.CommonModule] });
        ValidationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValidationModule, imports: [[common.CommonModule]] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValidationModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            imports: [common.CommonModule],
                        }]
                }] });

        function passwordValidator() {
            var passwordRegularExpressions = [
                rulesEngine.RuleConstants.lowercaseAlphaCharacterRegEx,
                rulesEngine.RuleConstants.uppercaseAlphaCharacterRegEx,
                rulesEngine.RuleConstants.numericCharactersRegEx,
                rulesEngine.RuleConstants.specialCharacterRegEx,
            ];
            return function (control) {
                return passwordRegularExpressions.some(function (regExp) { return !regExp.test(control.value); }) ? { passwordCharacterConstraints: true } : null;
            };
        }
        function passwordSpecialCharValidator() {
            return function (control) {
                return !rulesEngine.RuleConstants.specialCharacterRegEx.test(control.value) ? { missingSpecialChar: true } : null;
            };
        }
        function passwordNumericCharValidator() {
            return function (control) {
                return !rulesEngine.RuleConstants.numericCharactersRegEx.test(control.value) ? { missingNumericChar: true } : null;
            };
        }
        function passwordUpperCaseCharValidator() {
            return function (control) {
                return !rulesEngine.RuleConstants.uppercaseAlphaCharacterRegEx.test(control.value) ? { missingUpperCaseChar: true } : null;
            };
        }
        function passwordLowerCaseCharValidator() {
            return function (control) {
                return !rulesEngine.RuleConstants.lowercaseAlphaCharacterRegEx.test(control.value) ? { missingLowerCaseChar: true } : null;
            };
        }
        function nameValidator() {
            return function (control) {
                return !rulesEngine.RuleConstants.unicodeName.test(control.value) ? { invalidName: true } : null;
            };
        }

        /**
         * Generated bundle index. Do not edit.
         */

        exports.ValidationModule = ValidationModule;
        exports.nameValidator = nameValidator;
        exports.passwordLowerCaseCharValidator = passwordLowerCaseCharValidator;
        exports.passwordNumericCharValidator = passwordNumericCharValidator;
        exports.passwordSpecialCharValidator = passwordSpecialCharValidator;
        exports.passwordUpperCaseCharValidator = passwordUpperCaseCharValidator;
        exports.passwordValidator = passwordValidator;

        Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=buildmotion-validation.umd.js.map
