"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulePolicy = void 0;
const RenderType_1 = require("./RenderType");
const Severity_1 = require("./Severity");
/**
 * This is the base class for all rules. All rules will extend from this class. New rules
 * should extend [SimpleRule] or [CompositeRule] - these rule abstractions extend [RulePolicy].
 */
class RulePolicy {
    /**
     * Overloaded constructor for the [RulePolicy] class.
     * @param name The name of the rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param isDisplayable: Indicates if the rule violation is displayable.
     * @param severity (Optional) Use to indicate the rule violation severity. Default is [Exception].
     * @param priority (Optional) Use to indicate the rule's evaluation priority. Higher numeric values are priority. 0 is default and lowest priority.
     */
    constructor(name, message, isDisplayable = false, severity = Severity_1.Severity.Exception, priority = 1) {
        /** Use to indicate the status of the rule. Value is false when the rule contains violations. */
        this.isValid = true;
        /** Use to indicate the display message for a rule violation. */
        this.message = '';
        /** Use to indicate the name of the specified rule. */
        this.name = '';
        /** Use to determine how the rule is evaluated. */
        this.renderType = RenderType_1.RenderType.EvaluateAllRules;
        /** Use to indicate the severity for a rule violation. The default severity is [Exception]. */
        this.severity = Severity_1.Severity.Exception;
        /** Use to indicate the source of the specified rule. */
        this.source = '';
        this.name = name;
        this.message = message;
        this.isDisplayable = isDisplayable;
        this.priority = priority;
        this.severity = severity;
    }
    /**
     * Use to execute the rule. This is the [template] method of the [template method] design
     * pattern. It will coordinate the execution of any required methods in the processing
     * pipeline.
     */
    execute() {
        return this.render();
    }
    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    render() {
        throw new Error('Each concrete rule must implement this function and return a valid Result.');
    }
}
exports.RulePolicy = RulePolicy;
//# sourceMappingURL=RulePolicy.js.map