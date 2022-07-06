"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
const RuleResult_1 = require("./RuleResult");
const SimpleRule_1 = require("./SimpleRule");
/**
 * Use to determine if the target is equal to the comparison target.
 */
class Enum extends SimpleRule_1.SimpleRule {
    /**
     * The constructor for the [AreEqualRule] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param comparison The comparison target the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayable. Default value is [true].
     */
    constructor(name, message, target, comparison, isDisplayable = true) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }
    /**
     * Use to render the evaluated result for the specified rule. This method
     * returns a [RuleResult] with the evaluated result and rule information.
     */
    render() {
        if (!this.comparison.includes(this.target)) {
            this.isValid = false;
        }
        return new RuleResult_1.RuleResult(this, this.target);
    }
}
exports.Enum = Enum;
//# sourceMappingURL=Enum.js.map