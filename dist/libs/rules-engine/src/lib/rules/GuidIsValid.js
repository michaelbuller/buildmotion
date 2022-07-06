"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidIsValid = void 0;
const CompositeRule_1 = require("./CompositeRule");
const StringIsNotNullEmptyRange_1 = require("./StringIsNotNullEmptyRange");
const StringIsRegExMatch_1 = require("./StringIsRegExMatch");
/**
 * Use this rule to validate the target to determine if it is a valid
 * GUID value.
 */
class GuidIsValid extends CompositeRule_1.CompositeRule {
    /**
     * Constructor for the [GuidIsValid] composite rule.
     * @param name Use to indicate the name of the rule.
     * @param message Use to indicate the message to display for a false evaluation.
     * @param target Use to specify the target value to evaluate.
     * @param isDisplayable Use to indicate if the rule result is displayable.
     */
    constructor(name, message, target, isDisplayable) {
        super(name, message, isDisplayable);
        this.target = target;
        this.configureRules();
    }
    /**
     * Use to configure the rules for evaluation.
     */
    configureRules() {
        const doNotShowRuleViolation = false;
        const guidLength = 36; // Length with hyphens.
        const guidExpression = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i; // Guid RegExp (with hyphens)
        // determine if the target is a valid guid;
        this.rules.push(new StringIsNotNullEmptyRange_1.StringIsNotNullEmptyRange('GuidStringIsNotNullOrUndefined', 'The target value is null or undefined.', this.target, guidLength, guidLength, doNotShowRuleViolation));
        if (this.target) {
            this.rules.push(new StringIsRegExMatch_1.StringIsRegExMatch('GuidIsValid', 'The target value is not a valid guid.', this.target, guidExpression, doNotShowRuleViolation));
        }
    }
}
exports.GuidIsValid = GuidIsValid;
//# sourceMappingURL=GuidIsValid.js.map