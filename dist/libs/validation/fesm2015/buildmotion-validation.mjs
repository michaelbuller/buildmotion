import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleConstants } from '@buildmotion/rules-engine';

class ValidationModule {
}
ValidationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ValidationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ValidationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: ValidationModule, imports: [CommonModule] });
ValidationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ValidationModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ValidationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });

function passwordValidator() {
    const passwordRegularExpressions = [
        RuleConstants.lowercaseAlphaCharacterRegEx,
        RuleConstants.uppercaseAlphaCharacterRegEx,
        RuleConstants.numericCharactersRegEx,
        RuleConstants.specialCharacterRegEx,
    ];
    return (control) => {
        return passwordRegularExpressions.some((regExp) => !regExp.test(control.value)) ? { passwordCharacterConstraints: true } : null;
    };
}
function passwordSpecialCharValidator() {
    return (control) => {
        return !RuleConstants.specialCharacterRegEx.test(control.value) ? { missingSpecialChar: true } : null;
    };
}
function passwordNumericCharValidator() {
    return (control) => {
        return !RuleConstants.numericCharactersRegEx.test(control.value) ? { missingNumericChar: true } : null;
    };
}
function passwordUpperCaseCharValidator() {
    return (control) => {
        return !RuleConstants.uppercaseAlphaCharacterRegEx.test(control.value) ? { missingUpperCaseChar: true } : null;
    };
}
function passwordLowerCaseCharValidator() {
    return (control) => {
        return !RuleConstants.lowercaseAlphaCharacterRegEx.test(control.value) ? { missingLowerCaseChar: true } : null;
    };
}
function nameValidator() {
    return (control) => {
        return !RuleConstants.unicodeName.test(control.value) ? { invalidName: true } : null;
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { ValidationModule, nameValidator, passwordLowerCaseCharValidator, passwordNumericCharValidator, passwordSpecialCharValidator, passwordUpperCaseCharValidator, passwordValidator };
//# sourceMappingURL=buildmotion-validation.mjs.map
