"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateIsGreaterThanComparisonDate = void 0;
const CompositeRule_1 = require("./CompositeRule");
const IsNotNullOrUndefined_1 = require("./IsNotNullOrUndefined");
const IsTrue_1 = require("./IsTrue");
const StringIsValidDateString_1 = require("./StringIsValidDateString");
/**
 * Use this rule to determine if a string value represents a valid Date/Time
 * string value - that can be used to hydrate a [Date] object.
 *
 * Example: '2022-01-31T07:08:00.000Z'
 *
 * 24 characters
 * contains year, month, date, hours, minutes, and seconds, TZ offset
 */
class DateIsGreaterThanComparisonDate extends CompositeRule_1.CompositeRule {
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rule(s) will be evaluated against.
     */
    constructor(name, message, target, comparisonDate, isDisplayable = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.comparisonDate = comparisonDate;
        this.configureRules();
    }
    /**
     * A helper method to configure/add rules to the validation context.
     */
    configureRules() {
        this.rules.push(new IsNotNullOrUndefined_1.IsNotNullOrUndefined('StringIsNotNull', 'The target cannot be null or undefined.', this.target));
        this.rules.push(new IsNotNullOrUndefined_1.IsNotNullOrUndefined('StringIsNotNull', 'The comparison date cannot be null or undefined.', this.comparisonDate));
        if (this.target != null && this.comparisonDate != null) {
            // target and comparison date values are valid
            this.rules.push(new StringIsValidDateString_1.StringIsValidDateString('TargetDateStringIsValidDateString', `The target date value [${this.target.toString()}] is not valid.`, this.target, true));
            this.rules.push(new StringIsValidDateString_1.StringIsValidDateString('ComparisonDateStringIsValidDateString', `The comparison date value [${this.comparisonDate.toString()}] is not valid.`, this.comparisonDate, true));
            // target date is greater than the comparison date;
            this.rules.push(new IsTrue_1.IsTrue('TargetDateIsGreater', `The target date [${this.target.toLocaleString()}] is not greater than the comparison date [${this.comparisonDate.toLocaleString()}].`, this.target.valueOf() > this.comparisonDate.valueOf()));
        }
    }
}
exports.DateIsGreaterThanComparisonDate = DateIsGreaterThanComparisonDate;
//# sourceMappingURL=DateIsGreaterThanComparisonDate.js.map