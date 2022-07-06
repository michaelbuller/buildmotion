"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleConstants = void 0;
class RuleConstants {
}
exports.RuleConstants = RuleConstants;
/* eslint-disable max-len, no-control-regex, no-useless-escape */
RuleConstants.emailAddressFormatRegEx = /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
RuleConstants.alphaNumericCaseInsensitiveRegEx = /^[a-zA-Z0-9\-\s]*$/;
RuleConstants.lowercaseAlphaCharacterRegEx = /[a-z]+/;
RuleConstants.numericCharactersRegEx = /[0-9]+/;
/**
 * Use to determine if the target string contains a special character:
 * !@#$%^&*()-_+=.,<>'"|
 */
// eslint-disable-next-line no-control-regex, no-useless-escape
RuleConstants.specialCharacterRegEx = /[!@#$%^&*()\-_\+=.,<>'"\|]+/;
RuleConstants.uppercaseAlphaCharacterRegEx = /[A-Z]+/;
RuleConstants.unicodeName = /^([\p{L}'][ \p{L}'-]*[\p{L}])*$/u;
RuleConstants.phoneNumberRegEx = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
//# sourceMappingURL=rule-constants.js.map