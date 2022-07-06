"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringIsRegExArrayMatch = void 0;
const IsNotNullOrUndefined_1 = require("./IsNotNullOrUndefined");
const IsTrue_1 = require("./IsTrue");
const CompositeRule_1 = require("./CompositeRule");
/**
 * Use this rule to determine if the string value matches the specified
 * regular expression.
 */
class StringIsRegExArrayMatch extends CompositeRule_1.CompositeRule {
    /**
     * The constructor for the [IsNotNullOrUndefined] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayable. Default value is [false].
     */
    constructor(name, message, target, expressions, isDisplayable) {
        super(name, message, isDisplayable);
        this.target = target;
        this.expressions = expressions;
        this.configureRules();
    }
    /**
     * Use to configure the rules to be evaluated.
     */
    configureRules() {
        const showRuleViolations = true;
        const doNotShowRuleViolation = false;
        // determine if the target is a valid object;
        this.rules.push(new IsNotNullOrUndefined_1.IsNotNullOrUndefined('StringIsNotNullOrUndefined', 'The target value is null or undefined.', this.target, doNotShowRuleViolation));
        if (this.target) {
            this.expressions.forEach(e => {
                this.rules.push(new IsTrue_1.IsTrue('StringIsReExMatch', `The target value does not match the regular expressions: \\${e}\\`, e.test(this.target), showRuleViolations));
            });
        }
    }
}
exports.StringIsRegExArrayMatch = StringIsRegExArrayMatch;
//# sourceMappingURL=StringIsRegExArrayMatch.js.map