import { Action, ActionResult } from '@buildmotion/actions';
import { ApiMessage, ApiMessageType, ApiResponse } from '@buildmotion/core';
import { Severity } from '@buildmotion/logging';
import { CompositeRule } from '@buildmotion/rules-engine';
import { of, throwError } from 'rxjs';
import { ErrorResponse } from './models/error-response.model';
import { MessageType } from './models/MessageType';
import { ServiceContext } from './models/ServiceContext';
import { ServiceMessage } from './models/ServiceMessage';
/**
 * This is the application's base Action class that provides implementation of pipeline methods - pre/post
 * execution methods.
 *
 * The pre-execute methods that can be implemented are:
 *		1. start();
 *		2. audit();
 *		3. preValidateAction();
 *		4. evaluateRules();
 *		5. postValidateAction();
 *		6. preExecuteAction();
 *
 *If the status of action is good, the business logic will be executed using the:
 *		1. processAction();
 *
 * The post-execution methods that can be implemented are:
 *		1. postExecuteAction();
 *		2. validateActionResult();
 *		3. finish();
 */
export class ActionBase extends Action {
    constructor(actionName) {
        super();
        this.serviceContext = new ServiceContext();
        this.response = this.createUnknownResponse();
        this.actionName = actionName !== null && actionName !== void 0 ? actionName : '';
    }
    start() {
        // this.loggingService?.log(
        //   this.actionName,
        //   Severity.Information,
        //   `Preparing to [start] action.`
        // );
    }
    audit() {
        var _a;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Preparing to [audit] action.`);
    }
    createUnknownResponse() {
        const response = new ApiResponse();
        return of(response);
    }
    preExecuteAction() {
        var _a;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Preparing to [preExecuteAction] action.`);
    }
    performAction() {
        var _a;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Preparing to perform [${this.actionName}].`);
    }
    preValidateAction() {
        var _a;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Preparing to preValidateAction [${this.actionName}].`);
    }
    finish() {
        var _a;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Preparing to [finish] action.`);
    }
    /**
     * This is a required implementation if you want to render/execute the rules that
     * are associated to the specified action.
     */
    validateAction() {
        return this.validationContext.renderRules();
    }
    postValidateAction() {
        var _a, _b;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Preparing to determine if the action contains validation errors in ${this.actionName}`);
        if (this.validationContext.hasRuleViolations()) {
            (_b = this.loggingService) === null || _b === void 0 ? void 0 : _b.log(this.actionName, Severity.Information, `The target contains validation errors in ${this.actionName}`);
            // Load the error/rule violations into the ServiceContext so that the information bubbles up to the caller of the service;
            this.validationContext.results.forEach((result) => {
                if (!result.isValid) {
                    this.publishRuleResult(result);
                    this.retrieveRuleDetails(result);
                }
            });
            this.response = this.createFailResponse();
        }
    }
    createFailResponse() {
        const apiResponse = new ApiResponse();
        apiResponse.isSuccess = false;
        apiResponse.message = `Request failed.`;
        const messages = new Array();
        if (this.serviceContext.hasErrors() && this.serviceContext.Messages.length > 0) {
            this.serviceContext.Messages.map((m) => {
                const error = new ApiMessage();
                error.message = m.Message;
                error.messageType = ApiMessageType.Error;
                error.code = m.Name;
                messages.push(error);
            });
        }
        apiResponse.messages = messages.length > 0 ? messages : [];
        return of(apiResponse);
    }
    postExecuteAction() {
        if (this.actionResult === ActionResult.Fail) {
            this.serviceContext.Messages.forEach((e) => {
                var _a;
                if (e.MessageType === MessageType.Error) {
                    (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Error, e.toString());
                }
            });
        }
    }
    /**
     * All concrete actions must override and implement this method. It is defined in the [Action] framework class.
     */
    validateActionResult() {
        var _a, _b;
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Information, `Running [validateActionResult] for ${this.actionName}.`);
        // determine the status of the action based on any rule violations;
        if (this.validationContext.hasRuleViolations()) {
            (_b = this.loggingService) === null || _b === void 0 ? void 0 : _b.log(this.actionName, Severity.Error, `The ${this.actionName} contains rule violations.`);
            this.actionResult = ActionResult.Fail;
            const errorResponse = new ErrorResponse();
            errorResponse.IsSuccess = false;
            errorResponse.Message = `Validation errors exist.`;
            this.response = throwError(errorResponse);
        }
        this.actionResult = this.serviceContext.isGood() ? ActionResult.Success : ActionResult.Fail;
        return this.actionResult;
    }
    /**
     * Use to process rule results for composite rules. Note, that this function is recursive
     * and will process all composite rules in the rule set contained in the ValidationContext.
     * @param ruleResult The result of a rendered rule.
     */
    retrieveRuleDetails(ruleResult) {
        if (ruleResult.rulePolicy instanceof CompositeRule) {
            const composite = ruleResult.rulePolicy;
            if (composite && composite.hasErrors) {
                const errors = composite.results.filter((result) => !result.isValid && result.rulePolicy && result.rulePolicy.isDisplayable);
                errors.forEach((errorResult) => {
                    this.publishRuleResult(errorResult);
                    if (errorResult.rulePolicy instanceof CompositeRule) {
                        this.retrieveRuleDetails(errorResult);
                    }
                });
            }
        }
    }
    /**
     * A helper function to publish a new [ServiceMessage] to the [ServiceContext.Messages] list.
     * @param ruleResult
     */
    publishRuleResult(ruleResult) {
        var _a;
        const serviceMessage = new ServiceMessage(ruleResult.rulePolicy.name, ruleResult.rulePolicy.message, MessageType.Error);
        serviceMessage.DisplayToUser = ruleResult.rulePolicy.isDisplayable;
        serviceMessage.Source = this.actionName;
        this.serviceContext.Messages.push(serviceMessage);
        (_a = this.loggingService) === null || _a === void 0 ? void 0 : _a.log(this.actionName, Severity.Error, `${serviceMessage.toString()}`);
    }
}
//# sourceMappingURL=action-base.action.js.map