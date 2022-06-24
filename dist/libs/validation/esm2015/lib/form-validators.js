import { RuleConstants } from '@buildmotion/rules-engine';
export function passwordValidator() {
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
export function passwordSpecialCharValidator() {
    return (control) => {
        return !RuleConstants.specialCharacterRegEx.test(control.value) ? { missingSpecialChar: true } : null;
    };
}
export function passwordNumericCharValidator() {
    return (control) => {
        return !RuleConstants.numericCharactersRegEx.test(control.value) ? { missingNumericChar: true } : null;
    };
}
export function passwordUpperCaseCharValidator() {
    return (control) => {
        return !RuleConstants.uppercaseAlphaCharacterRegEx.test(control.value) ? { missingUpperCaseChar: true } : null;
    };
}
export function passwordLowerCaseCharValidator() {
    return (control) => {
        return !RuleConstants.lowercaseAlphaCharacterRegEx.test(control.value) ? { missingLowerCaseChar: true } : null;
    };
}
export function nameValidator() {
    return (control) => {
        return !RuleConstants.unicodeName.test(control.value) ? { invalidName: true } : null;
    };
}
//# sourceMappingURL=form-validators.js.map