import { __decorate, __metadata } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService, Severity } from '@buildmotion/logging';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { AlertNotification } from './models/alert-notification.model';
import { AlertTypes } from './models/alert-types.constants';
import { ErrorResponse } from './models/error-response.model';
import { MessageType } from './models/MessageType';
let ComponentBase = class ComponentBase {
    constructor(componentName, loggingService, router) {
        this.loggingService = loggingService;
        this.router = router;
        this.navSubscription = new Subscription();
        this.id = Guid.create();
        this.subscriptions = [];
        this.componentName = componentName;
        this.alertNotification = new AlertNotification('', '');
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to load [${this.componentName}] component.`, [`ComponentId:${this.id}`]);
    }
    /**
     * Add a subscription to the component
     * @param subscription
     */
    subscribe(subscription) {
        this.subscriptions.push(subscription);
    }
    /**
     * Unsubscribe to any registered subscriptions
     */
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            if (sub && typeof sub.unsubscribe === 'function') {
                sub.unsubscribe();
            }
        });
    }
    /**
     * Use to set the URLs for when navigation ends. Provides the values
     * for the current and previous URL paths.
     * @param event Is a [NavigationEnd] type.
     */
    updateUrls(event) {
        if (event.urlAfterRedirects) {
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.urlAfterRedirects;
        }
    }
    /**
     * Use to send an analytic event to [Google Analytics].
     * @param category A category is a name that you supply as a way to group objects that you want to track. Typically,
     * you will use the same category name multiple times over related UI elements that you want to group under a given category.
     * @param action Use the action parameter to name the type of event or interaction you want to track for a particular
     * web object (i.e., play, stop, pause, download). A unique event is determined by a unique action name. You can use
     * duplicate action names across categories, but this can affect how unique events are calculated. See the suggestions
     * below and the Implicit Count section for more details.
     * @param label Provide additional information for events that you want to track, such as the movie title in the
     * video examples above, or the name of a file when tracking downloads. All labels are listed independently from
     * their parent categories and actions. This provides you with another useful way to segment the event data for
     * your reports. All labels are listed independently from their parent categories and actions. This provides you
     * with another useful way to segment the event data for your reports.
     * @param value Any numeric value indicating a [value] that will be summarized for the analytic item(s).
     *
     * More information at: https://support.google.com/analytics/answer/1033068
     * or https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    googleAnalyticsSendEvent(category, action, label, value) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    createErrorResponse(message) {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to create error response for component.`);
        const errorResponse = new ErrorResponse();
        errorResponse.Message = message;
        return errorResponse;
    }
    /**
     * Use to handle service errors. These are error response [See: ErrorResponse] from
     * the application business layers (Action(s) or Http) that will bubble up to the
     * caller (i.e., a component) in a specified format:
     *
     * IsSuccess = false; // default for ErrorResponse
     * Message: string;
     * Errors: Array<ServiceError> = new Array<ServiceError>();
     * Exception: any;
     */
    handleServiceErrors(errorResponse, serviceContext) {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to handle service errors for component.`);
        if (serviceContext && serviceContext.hasErrors()) {
            this.loggingService.log(this.componentName, Severity.Information, `Retrieving error messages from the ServiceContext/ValidationContext;`);
            const messages = this.retrieveServiceContextErrorMessages(serviceContext);
            this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
        }
        else {
            if (errorResponse && errorResponse.Message) {
                this.loggingService.log(this.componentName, Severity.Information, `Retrieving error messages from the [ErrorResponse].`);
                const errors = this.retrieveResponseErrorMessages(errorResponse);
                this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                this.loggingService.log(this.componentName, Severity.Error, `Error: ${errorResponse.Message}`);
            }
        }
    }
    /**
     * Use to mark the form as touched; includes all form controls;
     */
    markFormAsTouched(form) {
        form.markAsTouched({ onlySelf: false });
        Object.values(form.controls).forEach((control) => {
            control.markAsTouched();
        });
    }
    /**
     * Use to log an unexpected error.
     */
    logError(error, message) {
        if (error instanceof Error) {
            this.loggingService.log(this.componentName, Severity.Error, message, [`${error.stack}`]);
        }
        else {
            this.loggingService.log(this.componentName, Severity.Error, message);
        }
    }
    /**
     * Use to retrieve the error messages from the specified [ServiceContext].
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    retrieveServiceContextErrorMessages(serviceContext) {
        const messages = Array();
        serviceContext.Messages.forEach((e) => {
            if (e.MessageType === MessageType.Error && e.DisplayToUser) {
                messages.push(e.Message);
            }
        });
        return messages;
    }
    /**
     * Use to retrieve the error messages from the specified Web API response.
     */
    retrieveResponseErrorMessages(errorResponse) {
        const errors = new Array();
        if (errorResponse && errorResponse.Errors) {
            errorResponse.Errors.forEach((e) => {
                if (e.DisplayToUser) {
                    errors.push(e.Message);
                }
            });
        }
        return errors;
    }
    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    resetAlertNotifications() {
        this.alertNotification = new AlertNotification('', '');
    }
    /**
     * Use to navigate to the specified route.
     * @parm routeName The name of the target route.
     */
    routeTo(routeName) {
        try {
            this.router.navigate([routeName]);
        }
        catch (error) {
            this.loggingService.log(this.componentName, Severity.Error, `Error while attempting to navigate to [${routeName}] route from ${this.componentName}. Error: ${error.message.toString()}`);
        }
    }
    /**
     * Use to retrieve and show any response error messages.
     */
    showResponseErrors(response) {
        this.handleServiceErrors(response, undefined);
    }
    finishRequest(message) {
        this.loggingService.log(this.componentName, Severity.Information, `${this.componentName}: ${message}`);
    }
    showAlertMessage(message) {
        alert(message);
    }
};
ComponentBase = __decorate([
    Inject({}),
    __metadata("design:paramtypes", [String, LoggingService, Router])
], ComponentBase);
export { ComponentBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9mb3VuZGF0aW9uL3NyYy9saWIvY29tcG9uZW50LWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPbkQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVN4QixZQUFZLGFBQXFCLEVBQVMsY0FBOEIsRUFBUyxNQUFjO1FBQXJELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOL0Ysb0JBQWUsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUduRCxPQUFFLEdBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQXdCLEVBQUUsQ0FBQztRQUd0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUs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SUFFRDs7T0FFRztJQUNILGtCQUFrQixDQUFDLFFBQXVCO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRVMsZ0JBQWdCLENBQUMsT0FBZTtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUE7QUExTVksYUFBYTtJQUR6QixNQUFNLENBQUMsRUFBRSxDQUFDOzZDQVVpRCxjQUFjLEVBQWlCLE1BQU07R0FUcEYsYUFBYSxDQTBNekI7U0ExTVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSwgU2V2ZXJpdHkgfSBmcm9tICdAYnVpbGRtb3Rpb24vbG9nZ2luZyc7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSAnZ3VpZC10eXBlc2NyaXB0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWxlcnROb3RpZmljYXRpb24gfSBmcm9tICcuL21vZGVscy9hbGVydC1ub3RpZmljYXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgQWxlcnRUeXBlcyB9IGZyb20gJy4vbW9kZWxzL2FsZXJ0LXR5cGVzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbHMvZXJyb3ItcmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuL21vZGVscy9NZXNzYWdlVHlwZSc7XG5pbXBvcnQgeyBTZXJ2aWNlQ29udGV4dCB9IGZyb20gJy4vbW9kZWxzL1NlcnZpY2VDb250ZXh0JztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgX3BhcTogYW55OyB9XG59XG5ASW5qZWN0KHt9KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEJhc2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb21wb25lbnROYW1lOiBzdHJpbmc7XG4gIGFsZXJ0Tm90aWZpY2F0aW9uOiBBbGVydE5vdGlmaWNhdGlvbjtcbiAgbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGN1cnJlbnRVcmwhOiBzdHJpbmc7XG4gIHByZXZpb3VzVXJsITogc3RyaW5nO1xuICBpZDogR3VpZCA9IEd1aWQuY3JlYXRlKCk7XG4gIHN1YnNjcmlwdGlvbnM6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb21wb25lbnROYW1lOiBzdHJpbmcsIHB1YmxpYyBsb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWU7XG4gICAgdGhpcy5hbGVydE5vdGlmaWNhdGlvbiA9IG5ldyBBbGVydE5vdGlmaWNhdGlvbignJywgJycpO1xuXG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5jb21wb25lbnROYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFByZXBhcmluZyB0byBsb2FkIFske3RoaXMuY29tcG9uZW50TmFtZX1dIGNvbXBvbmVudC5gLCBbYENvbXBvbmVudElkOiR7dGhpcy5pZH1gXSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgc3Vic2NyaXB0aW9uIHRvIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgc3Vic2NyaWJlKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRvIGFueSByZWdpc3RlcmVkIHN1YnNjcmlwdGlvbnNcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWIpID0+IHtcbiAgICAgIGlmIChzdWIgJiYgdHlwZW9mIHN1Yi51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gc2V0IHRoZSBVUkxzIGZvciB3aGVuIG5hdmlnYXRpb24gZW5kcy4gUHJvdmlkZXMgdGhlIHZhbHVlc1xuICAgKiBmb3IgdGhlIGN1cnJlbnQgYW5kIHByZXZpb3VzIFVSTCBwYXRocy5cbiAgICogQHBhcmFtIGV2ZW50IElzIGEgW05hdmlnYXRpb25FbmRdIHR5cGUuXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVVybHMoZXZlbnQ6IE5hdmlnYXRpb25FbmQpIHtcbiAgICBpZiAoZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpIHtcbiAgICAgIHRoaXMucHJldmlvdXNVcmwgPSB0aGlzLmN1cnJlbnRVcmw7XG4gICAgICB0aGlzLmN1cnJlbnRVcmwgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHNlbmQgYW4gYW5hbHl0aWMgZXZlbnQgdG8gW0dvb2dsZSBBbmFseXRpY3NdLlxuICAgKiBAcGFyYW0gY2F0ZWdvcnkgQSBjYXRlZ29yeSBpcyBhIG5hbWUgdGhhdCB5b3Ugc3VwcGx5IGFzIGEgd2F5IHRvIGdyb3VwIG9iamVjdHMgdGhhdCB5b3Ugd2FudCB0byB0cmFjay4gVHlwaWNhbGx5LFxuICAgKiB5b3Ugd2lsbCB1c2UgdGhlIHNhbWUgY2F0ZWdvcnkgbmFtZSBtdWx0aXBsZSB0aW1lcyBvdmVyIHJlbGF0ZWQgVUkgZWxlbWVudHMgdGhhdCB5b3Ugd2FudCB0byBncm91cCB1bmRlciBhIGdpdmVuIGNhdGVnb3J5LlxuICAgKiBAcGFyYW0gYWN0aW9uIFVzZSB0aGUgYWN0aW9uIHBhcmFtZXRlciB0byBuYW1lIHRoZSB0eXBlIG9mIGV2ZW50IG9yIGludGVyYWN0aW9uIHlvdSB3YW50IHRvIHRyYWNrIGZvciBhIHBhcnRpY3VsYXJcbiAgICogd2ViIG9iamVjdCAoaS5lLiwgcGxheSwgc3RvcCwgcGF1c2UsIGRvd25sb2FkKS4gQSB1bmlxdWUgZXZlbnQgaXMgZGV0ZXJtaW5lZCBieSBhIHVuaXF1ZSBhY3Rpb24gbmFtZS4gWW91IGNhbiB1c2VcbiAgICogZHVwbGljYXRlIGFjdGlvbiBuYW1lcyBhY3Jvc3MgY2F0ZWdvcmllcywgYnV0IHRoaXMgY2FuIGFmZmVjdCBob3cgdW5pcXVlIGV2ZW50cyBhcmUgY2FsY3VsYXRlZC4gU2VlIHRoZSBzdWdnZXN0aW9uc1xuICAgKiBiZWxvdyBhbmQgdGhlIEltcGxpY2l0IENvdW50IHNlY3Rpb24gZm9yIG1vcmUgZGV0YWlscy5cbiAgICogQHBhcmFtIGxhYmVsIFByb3ZpZGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBmb3IgZXZlbnRzIHRoYXQgeW91IHdhbnQgdG8gdHJhY2ssIHN1Y2ggYXMgdGhlIG1vdmllIHRpdGxlIGluIHRoZVxuICAgKiB2aWRlbyBleGFtcGxlcyBhYm92ZSwgb3IgdGhlIG5hbWUgb2YgYSBmaWxlIHdoZW4gdHJhY2tpbmcgZG93bmxvYWRzLiBBbGwgbGFiZWxzIGFyZSBsaXN0ZWQgaW5kZXBlbmRlbnRseSBmcm9tXG4gICAqIHRoZWlyIHBhcmVudCBjYXRlZ29yaWVzIGFuZCBhY3Rpb25zLiBUaGlzIHByb3ZpZGVzIHlvdSB3aXRoIGFub3RoZXIgdXNlZnVsIHdheSB0byBzZWdtZW50IHRoZSBldmVudCBkYXRhIGZvclxuICAgKiB5b3VyIHJlcG9ydHMuIEFsbCBsYWJlbHMgYXJlIGxpc3RlZCBpbmRlcGVuZGVudGx5IGZyb20gdGhlaXIgcGFyZW50IGNhdGVnb3JpZXMgYW5kIGFjdGlvbnMuIFRoaXMgcHJvdmlkZXMgeW91XG4gICAqIHdpdGggYW5vdGhlciB1c2VmdWwgd2F5IHRvIHNlZ21lbnQgdGhlIGV2ZW50IGRhdGEgZm9yIHlvdXIgcmVwb3J0cy5cbiAgICogQHBhcmFtIHZhbHVlIEFueSBudW1lcmljIHZhbHVlIGluZGljYXRpbmcgYSBbdmFsdWVdIHRoYXQgd2lsbCBiZSBzdW1tYXJpemVkIGZvciB0aGUgYW5hbHl0aWMgaXRlbShzKS5cbiAgICpcbiAgICogTW9yZSBpbmZvcm1hdGlvbiBhdDogaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYW5hbHl0aWNzL2Fuc3dlci8xMDMzMDY4XG4gICAqIG9yIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9ldmVudHNcbiAgICovXG4gIHB1YmxpYyBnb29nbGVBbmFseXRpY3NTZW5kRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAoPGFueT53aW5kb3cpLmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIFVzZSB0byBjcmVhdGUgYSBzaW1wbGUgW0Vycm9yUmVzcG9uc2VdIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IHRvIHRoZSB1c2VyLlxuICAgKi9cbiAgY3JlYXRlRXJyb3JSZXNwb25zZShtZXNzYWdlOiBzdHJpbmcpOiBFcnJvclJlc3BvbnNlIHtcbiAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLmNvbXBvbmVudE5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUHJlcGFyaW5nIHRvIGNyZWF0ZSBlcnJvciByZXNwb25zZSBmb3IgY29tcG9uZW50LmApO1xuICAgIGNvbnN0IGVycm9yUmVzcG9uc2U6IEVycm9yUmVzcG9uc2UgPSBuZXcgRXJyb3JSZXNwb25zZSgpO1xuICAgIGVycm9yUmVzcG9uc2UuTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgcmV0dXJuIGVycm9yUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIGhhbmRsZSBzZXJ2aWNlIGVycm9ycy4gVGhlc2UgYXJlIGVycm9yIHJlc3BvbnNlIFtTZWU6IEVycm9yUmVzcG9uc2VdIGZyb21cbiAgICogdGhlIGFwcGxpY2F0aW9uIGJ1c2luZXNzIGxheWVycyAoQWN0aW9uKHMpIG9yIEh0dHApIHRoYXQgd2lsbCBidWJibGUgdXAgdG8gdGhlXG4gICAqIGNhbGxlciAoaS5lLiwgYSBjb21wb25lbnQpIGluIGEgc3BlY2lmaWVkIGZvcm1hdDpcbiAgICpcbiAgICogSXNTdWNjZXNzID0gZmFsc2U7IC8vIGRlZmF1bHQgZm9yIEVycm9yUmVzcG9uc2VcbiAgICogTWVzc2FnZTogc3RyaW5nO1xuICAgKiBFcnJvcnM6IEFycmF5PFNlcnZpY2VFcnJvcj4gPSBuZXcgQXJyYXk8U2VydmljZUVycm9yPigpO1xuICAgKiBFeGNlcHRpb246IGFueTtcbiAgICovXG4gIGhhbmRsZVNlcnZpY2VFcnJvcnMoZXJyb3JSZXNwb25zZTogRXJyb3JSZXNwb25zZSwgc2VydmljZUNvbnRleHQ/OiBTZXJ2aWNlQ29udGV4dCkge1xuICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKHRoaXMuY29tcG9uZW50TmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIGBQcmVwYXJpbmcgdG8gaGFuZGxlIHNlcnZpY2UgZXJyb3JzIGZvciBjb21wb25lbnQuYCk7XG4gICAgaWYgKHNlcnZpY2VDb250ZXh0ICYmIHNlcnZpY2VDb250ZXh0Lmhhc0Vycm9ycygpKSB7XG4gICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLmNvbXBvbmVudE5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUmV0cmlldmluZyBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBTZXJ2aWNlQ29udGV4dC9WYWxpZGF0aW9uQ29udGV4dDtgKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5yZXRyaWV2ZVNlcnZpY2VDb250ZXh0RXJyb3JNZXNzYWdlcyhzZXJ2aWNlQ29udGV4dCk7XG4gICAgICB0aGlzLmFsZXJ0Tm90aWZpY2F0aW9uID0gbmV3IEFsZXJ0Tm90aWZpY2F0aW9uKCdFcnJvcnMnLCBlcnJvclJlc3BvbnNlLk1lc3NhZ2UsIG1lc3NhZ2VzLCBBbGVydFR5cGVzLldhcm5pbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXJyb3JSZXNwb25zZSAmJiBlcnJvclJlc3BvbnNlLk1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5jb21wb25lbnROYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFJldHJpZXZpbmcgZXJyb3IgbWVzc2FnZXMgZnJvbSB0aGUgW0Vycm9yUmVzcG9uc2VdLmApO1xuICAgICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJldHJpZXZlUmVzcG9uc2VFcnJvck1lc3NhZ2VzKGVycm9yUmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmFsZXJ0Tm90aWZpY2F0aW9uID0gbmV3IEFsZXJ0Tm90aWZpY2F0aW9uKCdFcnJvcicsIGVycm9yUmVzcG9uc2UuTWVzc2FnZSwgZXJyb3JzLCBBbGVydFR5cGVzLldhcm5pbmcpO1xuICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmxvZyh0aGlzLmNvbXBvbmVudE5hbWUsIFNldmVyaXR5LkVycm9yLCBgRXJyb3I6ICR7ZXJyb3JSZXNwb25zZS5NZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gbWFyayB0aGUgZm9ybSBhcyB0b3VjaGVkOyBpbmNsdWRlcyBhbGwgZm9ybSBjb250cm9scztcbiAgICovXG4gIHByb3RlY3RlZCBtYXJrRm9ybUFzVG91Y2hlZChmb3JtOiBGb3JtR3JvdXApIHtcbiAgICBmb3JtLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogZmFsc2UgfSk7XG5cbiAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBsb2cgYW4gdW5leHBlY3RlZCBlcnJvci5cbiAgICovXG4gIHByb3RlY3RlZCBsb2dFcnJvcihlcnJvcjogYW55LCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5jb21wb25lbnROYW1lLCBTZXZlcml0eS5FcnJvciwgbWVzc2FnZSwgW2Ake2Vycm9yLnN0YWNrfWBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5jb21wb25lbnROYW1lLCBTZXZlcml0eS5FcnJvciwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byByZXRyaWV2ZSB0aGUgZXJyb3IgbWVzc2FnZXMgZnJvbSB0aGUgc3BlY2lmaWVkIFtTZXJ2aWNlQ29udGV4dF0uXG4gICAqXG4gICAqIEBwYXJtOiBzZXJ2aWNlQ29udGV4dDogQSBjb250ZXh0IG9iamVjdCBjb250YWluaW5nIG1lc3NhZ2VzIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqL1xuICByZXRyaWV2ZVNlcnZpY2VDb250ZXh0RXJyb3JNZXNzYWdlcyhzZXJ2aWNlQ29udGV4dDogU2VydmljZUNvbnRleHQpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IEFycmF5PHN0cmluZz4oKTtcbiAgICBzZXJ2aWNlQ29udGV4dC5NZXNzYWdlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZS5NZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRXJyb3IgJiYgZS5EaXNwbGF5VG9Vc2VyKSB7XG4gICAgICAgIG1lc3NhZ2VzLnB1c2goZS5NZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHJldHJpZXZlIHRoZSBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBzcGVjaWZpZWQgV2ViIEFQSSByZXNwb25zZS5cbiAgICovXG4gIHJldHJpZXZlUmVzcG9uc2VFcnJvck1lc3NhZ2VzKGVycm9yUmVzcG9uc2U6IEVycm9yUmVzcG9uc2UpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGlmIChlcnJvclJlc3BvbnNlICYmIGVycm9yUmVzcG9uc2UuRXJyb3JzKSB7XG4gICAgICBlcnJvclJlc3BvbnNlLkVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLkRpc3BsYXlUb1VzZXIpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChlLk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gcmVzZXQgdGhlIFtBbGVydE5vdGlmaWNhdGlvbl0gdG8gdGhlIGluaXRpYWwgc3RhdGUuIFJlbW92ZXNcbiAgICogZXhpc3RpbmcgbWVzc2FnZXMgYW5kIGhpZGVzIHRoZSBBbGVydENvbXBvbmVudC5cbiAgICovXG4gIHJlc2V0QWxlcnROb3RpZmljYXRpb25zKCkge1xuICAgIHRoaXMuYWxlcnROb3RpZmljYXRpb24gPSBuZXcgQWxlcnROb3RpZmljYXRpb24oJycsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gbmF2aWdhdGUgdG8gdGhlIHNwZWNpZmllZCByb3V0ZS5cbiAgICogQHBhcm0gcm91dGVOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YXJnZXQgcm91dGUuXG4gICAqL1xuICBwdWJsaWMgcm91dGVUbyhyb3V0ZU5hbWU6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGVOYW1lXSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2coXG4gICAgICAgIHRoaXMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgU2V2ZXJpdHkuRXJyb3IsXG4gICAgICAgIGBFcnJvciB3aGlsZSBhdHRlbXB0aW5nIHRvIG5hdmlnYXRlIHRvIFske3JvdXRlTmFtZX1dIHJvdXRlIGZyb20gJHt0aGlzLmNvbXBvbmVudE5hbWV9LiBFcnJvcjogJHtlcnJvci5tZXNzYWdlLnRvU3RyaW5nKCl9YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHJldHJpZXZlIGFuZCBzaG93IGFueSByZXNwb25zZSBlcnJvciBtZXNzYWdlcy5cbiAgICovXG4gIHNob3dSZXNwb25zZUVycm9ycyhyZXNwb25zZTogRXJyb3JSZXNwb25zZSkge1xuICAgIHRoaXMuaGFuZGxlU2VydmljZUVycm9ycyhyZXNwb25zZSwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIGZpbmlzaFJlcXVlc3QobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5jb21wb25lbnROYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYCR7dGhpcy5jb21wb25lbnROYW1lfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3dBbGVydE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgYWxlcnQobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==