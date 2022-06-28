"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringIsNotNullEmptyRange = void 0;
const CompositeRule_1 = require("./CompositeRule");
const IsNotNullOrUndefined_1 = require("./IsNotNullOrUndefined");
const Range_1 = require("./Range");
/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maximum length.
 */
class StringIsNotNullEmptyRange extends CompositeRule_1.CompositeRule {
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rule(s) will be evaluated against.
     * @param minLength The minimum allowed length of the target value.
     * @param maxLength The maximum allowed length of the target value.
     */
    constructor(name, message, target, minLength, maxLength, isDisplayable = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.configureRules();
    }
    /**
     * A helper method to configure/add rules to the validation context.
     */
    configureRules() {
        this.rules.push(new IsNotNullOrUndefined_1.IsNotNullOrUndefined('StringIsNotNull', 'The string target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new Range_1.Range('TargetLengthIsWithinRange', 'The string value is not within the specified range.', this.target.toString().length, this.minLength, this.maxLength));
        }
    }
}
exports.StringIsNotNullEmptyRange = StringIsNotNullEmptyRange;
//# sourceMappingURL=StringIsNotNullEmptyRange.js.map