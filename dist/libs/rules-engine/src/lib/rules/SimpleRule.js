"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleRule = void 0;
const RulePolicy_1 = require("./RulePolicy");
/**
 * Use this class as a base [extends] class for simple rules. A simple rule contains
 * a single rule and target to evaluate.
 *
 * If you require a rule that will contain more than one rule, you should
 * use extend the [CompositeRule] class.
 */
class SimpleRule extends RulePolicy_1.RulePolicy {
    /**
     * The constructor for the simple rule.
     * @param name The name of the rule.
     * @param message The message to display if the rule is violated.
     */
    constructor(name, message, isDisplayable) {
        super(name, message, isDisplayable);
    }
}
exports.SimpleRule = SimpleRule;
//# sourceMappingURL=SimpleRule.js.map