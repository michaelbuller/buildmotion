"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationContext = void 0;
const ValidationContextState_1 = require("./ValidationContextState");
/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations.
 */
class ValidationContext {
    /**
     * The constructor for the base validation context.
     */
    constructor(source) {
        /**
         * Use to indicate the state of the validation context.
         */
        this.state = ValidationContextState_1.ValidationContextState.NotEvaluated;
        /**
         * A list of results for all evaluated rules that belong to the validation context.
         */
        this.results = new Array();
        /**
         * A list of rules for rendering.
         */
        this.rules = new Array();
        /**
         * The source of the specified validation context instance.
         */
        this.source = '';
        if (source) {
            this.source = source;
        }
        else {
            this.source = '';
        }
    }
    /**
     * Use this method to add a new rule to the ValidationContext.
     */
    addRule(rule) {
        if (this.source) {
            rule.source = this.source;
        }
        this.rules.push(rule);
        return this;
    }
    /**
     * Use this extension method to set the [Source] for the current validation context.
     * @param source
     */
    withSource(source) {
        this.source = source;
        return this;
    }
    /**
     * Use this method to execute the rules added to the [ValidationContext].
     */
    renderRules() {
        this.results = new Array();
        if (this.rules && this.rules.length < 1) {
            return this;
        }
        this.rules.sort((r) => r.priority).forEach((r) => this.results.push(r.execute()));
        return this;
    }
    /**
     * Use to determine if the validation context has any rule violations.
     */
    hasRuleViolations() {
        let hasViolations = false;
        if (this.rules) {
            const ruleViolationsCount = this.rules && this.rules.filter((r) => r.isValid === false).length;
            if (ruleViolationsCount > 0) {
                hasViolations = true;
            }
        }
        return hasViolations;
    }
    /**
     * *Use to indicate if the validation context is valid - no rule violations.
     */
    get isValid() {
        let isRuleValid = true;
        if (this.rules) {
            const invalidRulesCount = this.rules.filter((r) => r.isValid === false).length;
            if (invalidRulesCount > 0) {
                isRuleValid = false;
            }
        }
        return isRuleValid;
    }
}
exports.ValidationContext = ValidationContext;
//# sourceMappingURL=ValidationContext.js.map