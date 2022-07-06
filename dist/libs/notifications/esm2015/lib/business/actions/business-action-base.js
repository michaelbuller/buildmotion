import { ActionBase } from '@buildmotion/foundation';
/**
 * A helper class to provide the action with required dependencies and
 * starting the execution of the action life-cycle pipeline.
 */
export class BusinessActionBase extends ActionBase {
    constructor(actionName) {
        super();
        this.showRuleMessages = true;
        this.hideRuleMessages = false;
        this.actionName = actionName;
    }
    /**
     * Use the [Do] method to perform the action. Also uses [inversion of control]
     * and provides the action the same instance of the [service context] and
     * [logging service].
     */
    Do(businessProvider) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;
        this.execute();
        return this.response;
    }
}
//# sourceMappingURL=business-action-base.js.map