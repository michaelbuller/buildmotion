import { CompositeRule } from './CompositeRule';
/**
 * Use this rule to determine if the string value matches the specified
 * regular expression.
 */
export declare class StringIsRegExArrayMatch extends CompositeRule {
    private target;
    private expressions;
    /**
     * The constructor for the [IsNotNullOrUndefined] rule.
     * @param name The name of the rule.
     * @param message The message to display when the rule is violated.
     * @param target The target that the rules are evaluated against.
     * @param isDisplayable: Indicates if the rule violation is displayable. Default value is [false].
     */
    constructor(name: string, message: string, target: string, expressions: RegExp[], isDisplayable: boolean);
    /**
     * Use to configure the rules to be evaluated.
     */
    private configureRules;
}
