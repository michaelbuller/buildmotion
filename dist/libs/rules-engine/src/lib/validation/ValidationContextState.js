"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationContextState = void 0;
/**
 * Use this enumeration to determine the state of the Validation Context.
 */
var ValidationContextState;
(function (ValidationContextState) {
    /**
     * Indicates that no rules have been evaluated by the validation context.
     */
    ValidationContextState["NotEvaluated"] = "NotEvaluated";
    /** Use to indicate that all rules evaluated without any violations. */
    ValidationContextState["Success"] = "Success";
    /** Use to indicate that one or more evaluated rules contain violations. */
    ValidationContextState["Failure"] = "Failure";
})(ValidationContextState = exports.ValidationContextState || (exports.ValidationContextState = {}));
//# sourceMappingURL=ValidationContextState.js.map