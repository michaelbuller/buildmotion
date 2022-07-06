"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringIsValidDateString = void 0;
const IsTrue_1 = require("./IsTrue");
const CompositeRule_1 = require("./CompositeRule");
const IsNotNullOrUndefined_1 = require("./IsNotNullOrUndefined");
/**
 * Use this rule to determine if a string value represents a valid Date/Time
 * string value - that can be used to hydrate a [Date] object.
 *
 * Example: '2022-01-31T07:08:00.000Z'
 *
 * 24 characters
 * contains year, month, date, hours, minutes, and seconds, TZ offset
 */
class StringIsValidDateString extends CompositeRule_1.CompositeRule {
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rule(s) will be evaluated against.
     */
    constructor(name, message, target, isDisplayable = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.configureRules();
    }
    /**
     * A helper method to configure/add rules to the validation context.
     */
    configureRules() {
        this.rules.push(new IsNotNullOrUndefined_1.IsNotNullOrUndefined('StringIsNotNull', 'The string target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new IsTrue_1.IsTrue('DateStringIsValid', `The date string value is not valid. Cannot create a date with value of [${this.target}]`, !isNaN(new Date(this.target).getDate())));
        }
    }
}
exports.StringIsValidDateString = StringIsValidDateString;
//# sourceMappingURL=StringIsValidDateString.js.map