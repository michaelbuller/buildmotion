/**
 * Use this enumeration to determine the state of the Validation Context.
 */
export var ValidationContextState;
(function (ValidationContextState) {
    /**
     * Indicates that no rules have been evaluated by the validation context.
     */
    ValidationContextState["NotEvaluated"] = "NotEvaluated";
    /** Use to indicate that all rules evaluated without any violations. */
    ValidationContextState["Success"] = "Success";
    /** Use to indicate that one or more evaluated rules contain violations. */
    ValidationContextState["Failure"] = "Failure";
})(ValidationContextState || (ValidationContextState = {}));
//# sourceMappingURL=ValidationContextState.js.map