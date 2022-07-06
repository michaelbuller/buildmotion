import { CompositeRule } from './CompositeRule';
/**
 * Use this rule to validate the target to determine if it is a valid
 * GUID value.
 */
export declare class GuidIsValid extends CompositeRule {
    private target;
    /**
     * Constructor for the [GuidIsValid] composite rule.
     * @param name Use to indicate the name of the rule.
     * @param message Use to indicate the message to display for a false evaluation.
     * @param target Use to specify the target value to evaluate.
     * @param isDisplayable Use to indicate if the rule result is displayable.
     */
    constructor(name: string, message: string, target: string, isDisplayable: boolean);
    /**
     * Use to configure the rules for evaluation.
     */
    private configureRules;
}
