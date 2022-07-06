import { ActionBase } from '@buildmotion/foundation';
import { ILoggingService } from '@buildmotion/logging';
import { BusinessProviderService } from './../business-provider.service';
/**
 * A helper class to provide the action with required dependencies and
 * starting the execution of the action life-cycle pipeline.
 */
export declare abstract class BusinessActionBase<T> extends ActionBase<T> {
    showRuleMessages: boolean;
    hideRuleMessages: boolean;
    businessProvider: BusinessProviderService;
    loggingService: ILoggingService;
    actionName: string;
    constructor(actionName: string);
    /**
     * Use the [Do] method to perform the action. Also uses [inversion of control]
     * and provides the action the same instance of the [service context] and
     * [logging service].
     */
    Do(businessProvider: BusinessProviderService): any;
}
