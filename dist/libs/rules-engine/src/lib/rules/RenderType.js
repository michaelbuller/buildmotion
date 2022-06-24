/**
 * Use to indicate how the rule-set is rendered.
 */
export var RenderType;
(function (RenderType) {
    /**
     * Use to indicate the rule rendering stops when a rule's evaluation is false - rule contains violations.
     */
    RenderType["ExitOnFirstFalseEvaluation"] = "ExitOnFirstFalseEvaluation";
    /**
     * Use to indicate the rule rendering stops when a rule's evaluation is true (no rule violations).
     */
    RenderType["ExitOnFirstTrueEvaluation"] = "ExitOnFirstTrueEvaluation";
    /**
     * Use to indicate that all rules of the rule set are rendered - returns all rule results.
     */
    RenderType["EvaluateAllRules"] = "EvaluateAllRules";
})(RenderType || (RenderType = {}));
//# sourceMappingURL=RenderType.js.map