/* eslint-disable @typescript-eslint/no-explicit-any */
import { RulePolicy } from './RulePolicy';
/**
 * This class defines the result of a single rule evaluation.
 */
export class RuleResult {
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
        this.rulePolicy = new RulePolicy('', '', false);
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
//# sourceMappingURL=RuleResult.js.map