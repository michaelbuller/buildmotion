"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNullOrUndefined = void 0;
const SimpleRule_1 = require("./SimpleRule");
const RuleResult_1 = require("./RuleResult");
/**
 * Use to determine if the target is [null] or [undefined].
 */
class IsNullOrUndefined extends SimpleRule_1.SimpleRule {
    /**
     * The constructor for the [IsNullOrUndefined] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayable. Default value is [false].
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(name, message, target, isDisplayable = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }
    /**
     * Use to render the evaluated result for the specified rule. This method
     * returns a [RuleResult] with the evaluated result and rule information.
     */
    render() {
        if (this.target == null || typeof this.target === undefined || typeof this.target === 'undefined') {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        return new RuleResult_1.RuleResult(this, this.target);
    }
}
exports.IsNullOrUndefined = IsNullOrUndefined;
//# sourceMappingURL=IsNullOrUndefined.js.map