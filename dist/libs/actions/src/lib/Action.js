import { ValidationContext, ValidationContextState } from '@buildmotion/rules-engine';
import { ActionResult } from './action-result';
/**
 * This is the framework Action class that provides the pipeline of pre/post
 * execution methods. This class implements the [Template Method] pattern. Use
 * it to create and manage the life cycle of an action.
 *
 * The pre-execute functions that can be implemented are:
 *		1. start();
 *		2. audit();
 *		3. preValidateAction();
 *		4. evaluateRules();
 *		5. postValidateAction();
 *		6. preExecuteAction();
 *
 *If the status of action is good, the business logic will be executed using the:
 *		7. processAction();
 *
 * The post-execution functions that can be implemented are:
 *		8. postExecuteAction();
 *		9. validateActionResult();
 *		10. finish();
 */
// export abstract class Action implements IAction {
export class Action {
    constructor() {
        /**
         * Indicates if the action is allowed execution. If there are any rule
         * violations in the validation context, the action is not allowed to
         * execute.
         */
        this.allowExecution = true;
        /**
         * The validation context for the specified action instance.
         */
        this._validationContext = new ValidationContext();
        /**
         * The result of the action. The default value is [Unknown], until the action
         * is executed.
         */
        this.actionResult = ActionResult.Unknown;
    }
    /**
     * Use to retrieve the [ValidationContext] for the specified action.
     */
    get validationContext() {
        return this._validationContext;
    }
    /**
     * Use this method to execute a concrete action. A concrete action must implement
     * the [processAction] and the [validateActionResult] functions to be a valid
     * action.
     */
    execute() {
        this.processActionPipeline();
    }
    /**
     * Use this method to process the action pipeline methods.
     */
    processActionPipeline() {
        this.startAction();
        if (this.allowExecution) {
            this.processAction();
        }
        this.finishAction();
    }
    /**
     * Use this method to call the pipeline methods for the [start] or beginning
     * process of the action pipeline.
     */
    startAction() {
        this.start();
        this.audit();
        this.preValidateAction();
        this.evaluateRules();
        this.postValidateAction();
        this.preExecuteAction();
    }
    /**
     * Use this method to execute the methods at the end of the action pipeline.
     */
    finishAction() {
        this.postExecuteAction();
        this.validateActionResult();
        this.finish();
    }
    /**
     * Use this method to process the action. This will only be called if the action's
     * validation context is in a valid state (no rule violations).
     *
     * All concrete actions are required to provide an implementation of the [performAction]
     * method that is called for this part of the action pipeline.
     */
    processAction() {
        this.performAction();
    }
    /**
     * Use this function to implement the execution of the validation and business rules. This
     * function is called after [preValidateAction].
     */
    evaluateRules() {
        const context = this.validateAction();
        if (context.isValid) {
            this.allowExecution = true;
            this.validationContext.state = ValidationContextState.Success;
        }
        else {
            this.allowExecution = false;
            this.validationContext.state = ValidationContextState.Failure;
        }
    }
    /**
     * Implement this function to perform validation of business rules and data.
     */
    validateAction() {
        return this.validationContext;
    }
}
//# sourceMappingURL=Action.js.map