"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleResult = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const RulePolicy_1 = require("./RulePolicy");
/**
 * This class defines the result of a single rule evaluation.
 */
class RuleResult {
    /**
     * Constructor for the RuleResult class.
     * @param rulePolicy Use to specify the rule.
     * @param target Use to specify the target to be evaluated by the rule.
     */
    constructor(rulePolicy, target) {
        /**
         * Use to indicate if the rule result is valid or not.
         */
        this.isValid = false;
        /**
         * The rule that was evaluated.
         */
        this.rulePolicy = new RulePolicy_1.RulePolicy('', '', false);
        /**
         * The rule message to use when the evaluation [isValid] is [false].
         */
        this.message = '';
        if (rulePolicy != null && rulePolicy.name.length > 0 && rulePolicy.message.length > 0) {
            this.rulePolicy = rulePolicy;
            this.isValid = rulePolicy.isValid;
            this.message = rulePolicy.message;
        }
        this.target = target;
    }
}
exports.RuleResult = RuleResult;
//# sourceMappingURL=RuleResult.js.map