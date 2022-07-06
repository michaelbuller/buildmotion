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
        this.actionName = actionName ?? '';
    }
    start() {
        // this.loggingService?.log(
        //   this.actionName,
        //   Severity.Information,
        //   `Preparing to [start] action.`
        // );
    }
    audit() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to [audit] action.`);
    }
    createUnknownResponse() {
        const response = new ApiResponse();
        return of(response);
    }
    preExecuteAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to [preExecuteAction] action.`);
    }
    performAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to perform [${this.actionName}].`);
    }
    preValidateAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to preValidateAction [${this.actionName}].`);
    }
    finish() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to [finish] action.`);
    }
    /**
     * This is a required implementation if you want to render/execute the rules that
     * are associated to the specified action.
     */
    validateAction() {
        return this.validationContext.renderRules();
    }
    postValidateAction() {
        this.loggingService?.log(this.actionName, Severity.Information, `Preparing to determine if the action contains validation errors in ${this.actionName}`);
        if (this.validationContext.hasRuleViolations()) {
            this.loggingService?.log(this.actionName, Severity.Information, `The target contains validation errors in ${this.actionName}`);
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
                if (e.MessageType === MessageType.Error) {
                    this.loggingService?.log(this.actionName, Severity.Error, e.toString());
                }
            });
        }
    }
    /**
     * All concrete actions must override and implement this method. It is defined in the [Action] framework class.
     */
    validateActionResult() {
        this.loggingService?.log(this.actionName, Severity.Information, `Running [validateActionResult] for ${this.actionName}.`);
        // determine the status of the action based on any rule violations;
        if (this.validationContext.hasRuleViolations()) {
            this.loggingService?.log(this.actionName, Severity.Error, `The ${this.actionName} contains rule violations.`);
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
        const serviceMessage = new ServiceMessage(ruleResult.rulePolicy.name, ruleResult.rulePolicy.message, MessageType.Error);
        serviceMessage.DisplayToUser = ruleResult.rulePolicy.isDisplayable;
        serviceMessage.Source = this.actionName;
        this.serviceContext.Messages.push(serviceMessage);
        this.loggingService?.log(this.actionName, Severity.Error, `${serviceMessage.toString()}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhc2UuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9mb3VuZGF0aW9uL3NyYy9saWIvYWN0aW9uLWJhc2UuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUUsT0FBTyxFQUFFLFFBQVEsRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFpQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3pGLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILE1BQU0sT0FBTyxVQUFjLFNBQVEsTUFBTTtJQU12QyxZQUFZLFVBQW1CO1FBQzdCLEtBQUssRUFBRSxDQUFDO1FBTlYsbUJBQWMsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUN0RCxhQUFRLEdBQXdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBTTNELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSztRQUNILDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyxLQUFLO0lBQ1AsQ0FB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QUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsVUFBc0I7UUFDdEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hILGNBQWMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbkUsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXhDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVzdWx0IH0gZnJvbSAnQGJ1aWxkbW90aW9uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQXBpTWVzc2FnZSwgQXBpTWVzc2FnZVR5cGUsIEFwaVJlc3BvbnNlIH0gZnJvbSAnQGJ1aWxkbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgU2V2ZXJpdHksIElMb2dnaW5nU2VydmljZSB9IGZyb20gJ0BidWlsZG1vdGlvbi9sb2dnaW5nJztcbmltcG9ydCB7IENvbXBvc2l0ZVJ1bGUsIFJ1bGVSZXN1bHQsIFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSAnQGJ1aWxkbW90aW9uL3J1bGVzLWVuZ2luZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXJyb3JSZXNwb25zZSB9IGZyb20gJy4vbW9kZWxzL2Vycm9yLXJlc3BvbnNlLm1vZGVsJztcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi9tb2RlbHMvTWVzc2FnZVR5cGUnO1xuaW1wb3J0IHsgU2VydmljZUNvbnRleHQgfSBmcm9tICcuL21vZGVscy9TZXJ2aWNlQ29udGV4dCc7XG5pbXBvcnQgeyBTZXJ2aWNlTWVzc2FnZSB9IGZyb20gJy4vbW9kZWxzL1NlcnZpY2VNZXNzYWdlJztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhcHBsaWNhdGlvbidzIGJhc2UgQWN0aW9uIGNsYXNzIHRoYXQgcHJvdmlkZXMgaW1wbGVtZW50YXRpb24gb2YgcGlwZWxpbmUgbWV0aG9kcyAtIHByZS9wb3N0XG4gKiBleGVjdXRpb24gbWV0aG9kcy5cbiAqXG4gKiBUaGUgcHJlLWV4ZWN1dGUgbWV0aG9kcyB0aGF0IGNhbiBiZSBpbXBsZW1lbnRlZCBhcmU6XG4gKlx0XHQxLiBzdGFydCgpO1xuICpcdFx0Mi4gYXVkaXQoKTtcbiAqXHRcdDMuIHByZVZhbGlkYXRlQWN0aW9uKCk7XG4gKlx0XHQ0LiBldmFsdWF0ZVJ1bGVzKCk7XG4gKlx0XHQ1LiBwb3N0VmFsaWRhdGVBY3Rpb24oKTtcbiAqXHRcdDYuIHByZUV4ZWN1dGVBY3Rpb24oKTtcbiAqXG4gKklmIHRoZSBzdGF0dXMgb2YgYWN0aW9uIGlzIGdvb2QsIHRoZSBidXNpbmVzcyBsb2dpYyB3aWxsIGJlIGV4ZWN1dGVkIHVzaW5nIHRoZTpcbiAqXHRcdDEuIHByb2Nlc3NBY3Rpb24oKTtcbiAqXG4gKiBUaGUgcG9zdC1leGVjdXRpb24gbWV0aG9kcyB0aGF0IGNhbiBiZSBpbXBsZW1lbnRlZCBhcmU6XG4gKlx0XHQxLiBwb3N0RXhlY3V0ZUFjdGlvbigpO1xuICpcdFx0Mi4gdmFsaWRhdGVBY3Rpb25SZXN1bHQoKTtcbiAqXHRcdDMuIGZpbmlzaCgpO1xuICovXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFzZTxUPiBleHRlbmRzIEFjdGlvbiB7XG4gIHNlcnZpY2VDb250ZXh0OiBTZXJ2aWNlQ29udGV4dCA9IG5ldyBTZXJ2aWNlQ29udGV4dCgpO1xuICByZXNwb25zZTogT2JzZXJ2YWJsZTxUPiB8IGFueSA9IHRoaXMuY3JlYXRlVW5rbm93blJlc3BvbnNlKCk7XG4gIGxvZ2dpbmdTZXJ2aWNlITogSUxvZ2dpbmdTZXJ2aWNlO1xuICBvdmVycmlkZSBhY3Rpb25OYW1lITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFjdGlvbk5hbWU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWUgPz8gJyc7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyB0aGlzLmxvZ2dpbmdTZXJ2aWNlPy5sb2coXG4gICAgLy8gICB0aGlzLmFjdGlvbk5hbWUsXG4gICAgLy8gICBTZXZlcml0eS5JbmZvcm1hdGlvbixcbiAgICAvLyAgIGBQcmVwYXJpbmcgdG8gW3N0YXJ0XSBhY3Rpb24uYFxuICAgIC8vICk7XG4gIH1cblxuICBhdWRpdCgpIHtcbiAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlPy5sb2codGhpcy5hY3Rpb25OYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFByZXBhcmluZyB0byBbYXVkaXRdIGFjdGlvbi5gKTtcbiAgfVxuXG4gIGNyZWF0ZVVua25vd25SZXNwb25zZSgpOiBPYnNlcnZhYmxlPGFueT4gfCBhbnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IEFwaVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHByZUV4ZWN1dGVBY3Rpb24oKSB7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZT8ubG9nKHRoaXMuYWN0aW9uTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gW3ByZUV4ZWN1dGVBY3Rpb25dIGFjdGlvbi5gKTtcbiAgfVxuXG4gIHBlcmZvcm1BY3Rpb24oKSB7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZT8ubG9nKHRoaXMuYWN0aW9uTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gcGVyZm9ybSBbJHt0aGlzLmFjdGlvbk5hbWV9XS5gKTtcbiAgfVxuXG4gIHByZVZhbGlkYXRlQWN0aW9uKCkge1xuICAgIHRoaXMubG9nZ2luZ1NlcnZpY2U/LmxvZyh0aGlzLmFjdGlvbk5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUHJlcGFyaW5nIHRvIHByZVZhbGlkYXRlQWN0aW9uIFske3RoaXMuYWN0aW9uTmFtZX1dLmApO1xuICB9XG5cbiAgZmluaXNoKCkge1xuICAgIHRoaXMubG9nZ2luZ1NlcnZpY2U/LmxvZyh0aGlzLmFjdGlvbk5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUHJlcGFyaW5nIHRvIFtmaW5pc2hdIGFjdGlvbi5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcmVxdWlyZWQgaW1wbGVtZW50YXRpb24gaWYgeW91IHdhbnQgdG8gcmVuZGVyL2V4ZWN1dGUgdGhlIHJ1bGVzIHRoYXRcbiAgICogYXJlIGFzc29jaWF0ZWQgdG8gdGhlIHNwZWNpZmllZCBhY3Rpb24uXG4gICAqL1xuICBvdmVycmlkZSB2YWxpZGF0ZUFjdGlvbigpOiBWYWxpZGF0aW9uQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbkNvbnRleHQucmVuZGVyUnVsZXMoKTtcbiAgfVxuXG4gIHBvc3RWYWxpZGF0ZUFjdGlvbigpIHtcbiAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlPy5sb2codGhpcy5hY3Rpb25OYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFByZXBhcmluZyB0byBkZXRlcm1pbmUgaWYgdGhlIGFjdGlvbiBjb250YWlucyB2YWxpZGF0aW9uIGVycm9ycyBpbiAke3RoaXMuYWN0aW9uTmFtZX1gKTtcblxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25Db250ZXh0Lmhhc1J1bGVWaW9sYXRpb25zKCkpIHtcbiAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2U/LmxvZyh0aGlzLmFjdGlvbk5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgVGhlIHRhcmdldCBjb250YWlucyB2YWxpZGF0aW9uIGVycm9ycyBpbiAke3RoaXMuYWN0aW9uTmFtZX1gKTtcblxuICAgICAgLy8gTG9hZCB0aGUgZXJyb3IvcnVsZSB2aW9sYXRpb25zIGludG8gdGhlIFNlcnZpY2VDb250ZXh0IHNvIHRoYXQgdGhlIGluZm9ybWF0aW9uIGJ1YmJsZXMgdXAgdG8gdGhlIGNhbGxlciBvZiB0aGUgc2VydmljZTtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRleHQucmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNWYWxpZCkge1xuICAgICAgICAgIHRoaXMucHVibGlzaFJ1bGVSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLnJldHJpZXZlUnVsZURldGFpbHMocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVzcG9uc2UgPSB0aGlzLmNyZWF0ZUZhaWxSZXNwb25zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUZhaWxSZXNwb25zZSgpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBuZXcgQXBpUmVzcG9uc2U8VD4oKTtcbiAgICBhcGlSZXNwb25zZS5pc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICBhcGlSZXNwb25zZS5tZXNzYWdlID0gYFJlcXVlc3QgZmFpbGVkLmA7XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IG5ldyBBcnJheTxBcGlNZXNzYWdlPigpO1xuICAgIGlmICh0aGlzLnNlcnZpY2VDb250ZXh0Lmhhc0Vycm9ycygpICYmIHRoaXMuc2VydmljZUNvbnRleHQuTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlQ29udGV4dC5NZXNzYWdlcy5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgQXBpTWVzc2FnZSgpO1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gbS5NZXNzYWdlO1xuICAgICAgICBlcnJvci5tZXNzYWdlVHlwZSA9IEFwaU1lc3NhZ2VUeXBlLkVycm9yO1xuICAgICAgICBlcnJvci5jb2RlID0gbS5OYW1lO1xuXG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGFwaVJlc3BvbnNlLm1lc3NhZ2VzID0gbWVzc2FnZXMubGVuZ3RoID4gMCA/IG1lc3NhZ2VzIDogW107XG4gICAgcmV0dXJuIG9mKGFwaVJlc3BvbnNlKTtcbiAgfVxuXG4gIHBvc3RFeGVjdXRlQWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFjdGlvblJlc3VsdCA9PT0gQWN0aW9uUmVzdWx0LkZhaWwpIHtcbiAgICAgIHRoaXMuc2VydmljZUNvbnRleHQuTWVzc2FnZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5NZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRXJyb3IpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlPy5sb2codGhpcy5hY3Rpb25OYW1lLCBTZXZlcml0eS5FcnJvciwgZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBjb25jcmV0ZSBhY3Rpb25zIG11c3Qgb3ZlcnJpZGUgYW5kIGltcGxlbWVudCB0aGlzIG1ldGhvZC4gSXQgaXMgZGVmaW5lZCBpbiB0aGUgW0FjdGlvbl0gZnJhbWV3b3JrIGNsYXNzLlxuICAgKi9cbiAgdmFsaWRhdGVBY3Rpb25SZXN1bHQoKTogQWN0aW9uUmVzdWx0IHtcbiAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlPy5sb2codGhpcy5hY3Rpb25OYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFJ1bm5pbmcgW3ZhbGlkYXRlQWN0aW9uUmVzdWx0XSBmb3IgJHt0aGlzLmFjdGlvbk5hbWV9LmApO1xuICAgIC8vIGRldGVybWluZSB0aGUgc3RhdHVzIG9mIHRoZSBhY3Rpb24gYmFzZWQgb24gYW55IHJ1bGUgdmlvbGF0aW9ucztcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uQ29udGV4dC5oYXNSdWxlVmlvbGF0aW9ucygpKSB7XG4gICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlPy5sb2codGhpcy5hY3Rpb25OYW1lLCBTZXZlcml0eS5FcnJvciwgYFRoZSAke3RoaXMuYWN0aW9uTmFtZX0gY29udGFpbnMgcnVsZSB2aW9sYXRpb25zLmApO1xuICAgICAgdGhpcy5hY3Rpb25SZXN1bHQgPSBBY3Rpb25SZXN1bHQuRmFpbDtcblxuICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IG5ldyBFcnJvclJlc3BvbnNlKCk7XG4gICAgICBlcnJvclJlc3BvbnNlLklzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgZXJyb3JSZXNwb25zZS5NZXNzYWdlID0gYFZhbGlkYXRpb24gZXJyb3JzIGV4aXN0LmA7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gdGhyb3dFcnJvcihlcnJvclJlc3BvbnNlKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpb25SZXN1bHQgPSB0aGlzLnNlcnZpY2VDb250ZXh0LmlzR29vZCgpID8gQWN0aW9uUmVzdWx0LlN1Y2Nlc3MgOiBBY3Rpb25SZXN1bHQuRmFpbDtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25SZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHByb2Nlc3MgcnVsZSByZXN1bHRzIGZvciBjb21wb3NpdGUgcnVsZXMuIE5vdGUsIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyByZWN1cnNpdmVcbiAgICogYW5kIHdpbGwgcHJvY2VzcyBhbGwgY29tcG9zaXRlIHJ1bGVzIGluIHRoZSBydWxlIHNldCBjb250YWluZWQgaW4gdGhlIFZhbGlkYXRpb25Db250ZXh0LlxuICAgKiBAcGFyYW0gcnVsZVJlc3VsdCBUaGUgcmVzdWx0IG9mIGEgcmVuZGVyZWQgcnVsZS5cbiAgICovXG4gIHJldHJpZXZlUnVsZURldGFpbHMocnVsZVJlc3VsdDogUnVsZVJlc3VsdCkge1xuICAgIGlmIChydWxlUmVzdWx0LnJ1bGVQb2xpY3kgaW5zdGFuY2VvZiBDb21wb3NpdGVSdWxlKSB7XG4gICAgICBjb25zdCBjb21wb3NpdGUgPSBydWxlUmVzdWx0LnJ1bGVQb2xpY3kgYXMgQ29tcG9zaXRlUnVsZTtcbiAgICAgIGlmIChjb21wb3NpdGUgJiYgY29tcG9zaXRlLmhhc0Vycm9ycykge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBjb21wb3NpdGUucmVzdWx0cy5maWx0ZXIoKHJlc3VsdCkgPT4gIXJlc3VsdC5pc1ZhbGlkICYmIHJlc3VsdC5ydWxlUG9saWN5ICYmIHJlc3VsdC5ydWxlUG9saWN5LmlzRGlzcGxheWFibGUpO1xuXG4gICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnJvclJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMucHVibGlzaFJ1bGVSZXN1bHQoZXJyb3JSZXN1bHQpO1xuXG4gICAgICAgICAgaWYgKGVycm9yUmVzdWx0LnJ1bGVQb2xpY3kgaW5zdGFuY2VvZiBDb21wb3NpdGVSdWxlKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlUnVsZURldGFpbHMoZXJyb3JSZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIHB1Ymxpc2ggYSBuZXcgW1NlcnZpY2VNZXNzYWdlXSB0byB0aGUgW1NlcnZpY2VDb250ZXh0Lk1lc3NhZ2VzXSBsaXN0LlxuICAgKiBAcGFyYW0gcnVsZVJlc3VsdFxuICAgKi9cbiAgcHVibGlzaFJ1bGVSZXN1bHQocnVsZVJlc3VsdDogUnVsZVJlc3VsdCkge1xuICAgIGNvbnN0IHNlcnZpY2VNZXNzYWdlID0gbmV3IFNlcnZpY2VNZXNzYWdlKHJ1bGVSZXN1bHQucnVsZVBvbGljeS5uYW1lLCBydWxlUmVzdWx0LnJ1bGVQb2xpY3kubWVzc2FnZSwgTWVzc2FnZVR5cGUuRXJyb3IpO1xuICAgIHNlcnZpY2VNZXNzYWdlLkRpc3BsYXlUb1VzZXIgPSBydWxlUmVzdWx0LnJ1bGVQb2xpY3kuaXNEaXNwbGF5YWJsZTtcbiAgICBzZXJ2aWNlTWVzc2FnZS5Tb3VyY2UgPSB0aGlzLmFjdGlvbk5hbWU7XG5cbiAgICB0aGlzLnNlcnZpY2VDb250ZXh0Lk1lc3NhZ2VzLnB1c2goc2VydmljZU1lc3NhZ2UpO1xuICAgIHRoaXMubG9nZ2luZ1NlcnZpY2U/LmxvZyh0aGlzLmFjdGlvbk5hbWUsIFNldmVyaXR5LkVycm9yLCBgJHtzZXJ2aWNlTWVzc2FnZS50b1N0cmluZygpfWApO1xuICB9XG59XG4iXX0=