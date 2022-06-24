import { RulePolicy } from './RulePolicy';
import { RuleResult } from './RuleResult';
/**
 * Use the [CompositeRule] as a base class for a complex rule - a rule that contains
 * other rules.
 *
 * A [RulePolicy] is an abstraction of the "composite" pattern
 *
 * A [CompositeRule] --> [RulePolicy]
 * - has a list of [RulePolicy] items; it is the [composite] of the "composite" pattern
 *
 * A [SimpleRule]    --> [RulePolicy]
 * - does NOT have a list of rules; it is the [leaf] of the "composite" pattern.
 */
export class CompositeRule extends RulePolicy {
    /**
     *
     * @param name The name of the rule.
     * @param message The message to display if the rule is violated.
     * @param isDisplayable Indicates if the rule is displayable.
     */
    constructor(name, message, isDisplayable) {
        super(name, message, isDisplayable);
        /**
         * Indicates if the rule has any rule violations.
         */
        this.hasErrors = false;
        /**
         * A list of results for evaluated rules. Rules must be rendered/executed before
         * any results are available.
         */
        this.results = new Array();
        /**
         * A list of rules for the specified composite rule.
         */
        this.rules = new Array();
    }
    /**
     * Use to render the evaluated result for the specified rule. This method
     * returns a [RuleResult] with the evaluated result and rule information.
     */
    render() {
        this.rules.sort((s) => s.priority).forEach((r) => this.results.push(r.execute()));
        return this.processResults();
    }
    /**
     * Use to determine if the composite rule has child-rules that are
     * members of the specified rule.
     */
    hasRules() {
        if (this.rules && this.rules.length > 0) {
            return true;
        }
        return false;
    }
    /**
     * Use to process the results of the specified rule result collection. Composite
     * rules will have one or more rule results for all child-rules.
     *
     * This method will return result with the evaluation summary and rule information.
     */
    processResults() {
        if (this.results.filter((r) => r.isValid === false).length > 0) {
            this.isValid = false;
            this.hasErrors = true;
        }
        return new RuleResult(this);
    }
}
//# sourceMappingURL=CompositeRule.js.map