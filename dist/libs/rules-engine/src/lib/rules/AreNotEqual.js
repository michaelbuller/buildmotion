"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreNotEqual = void 0;
const SimpleRule_1 = require("./SimpleRule");
const RuleResult_1 = require("./RuleResult");
const Compare_1 = require("./core/Compare");
/**
 * Use to determine if the target is not equal to the comparison target.
 */
class AreNotEqual extends SimpleRule_1.SimpleRule {
    /**
     * The constructor for the [AreNotEqualRule] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param comparison The comparison target the rules are evaluated against.
     * @param isDisplayable: (Optional) Indicates if the rule violation is displayable. Default is [true].
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
        if ((0, Compare_1.compare)(this.target, this.comparison, true) === 0 /* CompareResult.Equal */) {
            this.isValid = false;
        }
        return new RuleResult_1.RuleResult(this, this.target);
    }
}
exports.AreNotEqual = AreNotEqual;
//# sourceMappingURL=AreNotEqual.js.map