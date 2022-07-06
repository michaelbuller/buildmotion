import { CompositeRule } from './CompositeRule';
/**
 * Use this rule to determine if a string value represents a valid Date/Time
 * string value - that can be used to hydrate a [Date] object.
 *
 * Example: '2022-01-31T07:08:00.000Z'
 *
 * 24 characters
 * contains year, month, date, hours, minutes, and seconds, TZ offset
 */
export declare class DateIsGreaterThanComparisonDate extends CompositeRule {
    /**
     * Use to provide the target [Primitive] to evaluate for the specified rule.
     */
    target: string | Date | undefined;
    comparisonDate: string | Date | undefined;
    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rule(s) will be evaluated against.
     */
    constructor(name: string, message: string, target: string | Date | undefined, comparisonDate: string | Date | undefined, isDisplayable?: boolean);
    /**
     * A helper method to configure/add rules to the validation context.
     */
    configureRules(): void;
}
