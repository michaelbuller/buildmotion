"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Max = void 0;
const SimpleRule_1 = require("./SimpleRule");
const RuleResult_1 = require("./RuleResult");
const Compare_1 = require("./core/Compare");
/**
 * Use the [Max] rule to determine if the target value is equal to or less than
 * the comparison value.
 */
class Max extends SimpleRule_1.SimpleRule {
    /**
     * The constructor for the [Max] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param comparison The comparison target the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayable. Default value is [false].
     */
    constructor(name, message, target, comparison, isDisplayable = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparison = comparison;
    }
    /**
     * Use to render the evaluated result for the specified rule. This method
     * returns a [RuleResult] with the evaluated result and rule information.
     */
    render() {
        const compareResult = (0, Compare_1.compare)(this.target, this.comparison, true);
        if (compareResult === 1 /* CompareResult.Greater */) {
            this.isValid = false;
        }
        return new RuleResult_1.RuleResult(this, this.target);
    }
}
exports.Max = Max;
//# sourceMappingURL=Max.js.map