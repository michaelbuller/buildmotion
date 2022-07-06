"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTrue = void 0;
const SimpleRule_1 = require("./SimpleRule");
const RuleResult_1 = require("./RuleResult");
/**
 * Use to determine if the target is truthy.
 */
class IsTrue extends SimpleRule_1.SimpleRule {
    /**
     * The constructor for the [IsTrue] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayable. Default value is [true].
     */
    constructor(name, message, target, isDisplayable = true) {
        super(name, message, isDisplayable);
        this.target = target;
    }
    /**
     * Use to render the evaluated result for the specified rule. This method
     * returns a [RuleResult] with the evaluated result and rule information.
     */
    render() {
        this.isValid = true;
        if (this.target === false) {
            //if(not true)-->false;
            this.isValid = false;
        }
        return new RuleResult_1.RuleResult(this, this.target);
    }
}
exports.IsTrue = IsTrue;
//# sourceMappingURL=IsTrue.js.map