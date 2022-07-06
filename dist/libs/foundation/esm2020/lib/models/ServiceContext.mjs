import { MessageType } from './MessageType';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Use this class to manage the context of a single service call. This
 * class will contain a list of any service messages added during the processing
 * of a service request.
 */
export class ServiceContext {
    constructor() {
        /**
         * A list of service messages added by the application during the processing of the
         * specified service request.
         */
        this.Messages = new Array();
    }
    /**
     * Use this method to add a new message to the [ServiceContext].
     */
    addMessage(message) {
        this.Messages.push(message);
    }
    /**
     * Use to determine if the current [ServiceContext] contains any messages with type of [Error].
     */
    hasErrors() {
        if (this.Messages && this.Messages.length > 0) {
            const errorMessages = this.Messages.filter((f) => f.MessageType === MessageType.Error);
            if (errorMessages.length > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Use to determine if the current [ServiceContext] does not contain any errors.
     */
    isGood() {
        if (this.Messages && this.Messages.length > 0) {
            const errorMessages = this.Messages.filter((f) => f.MessageType === MessageType.Error);
            if (errorMessages.length > 0) {
                return false;
            }
        }
        return true;
    }
}
ServiceContext.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ServiceContext, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ServiceContext.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ServiceContext, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ServiceContext, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUNvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2ZvdW5kYXRpb24vc3JjL2xpYi9tb2RlbHMvU2VydmljZUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLGNBQWM7SUFIM0I7UUFJRTs7O1dBR0c7UUFDSCxhQUFRLEdBQTBCLElBQUksS0FBSyxFQUFrQixDQUFDO0tBa0MvRDtJQWhDQzs7T0FFRztJQUNILFVBQVUsQ0FBQyxPQUF1QjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkYsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkYsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzsyR0F0Q1UsY0FBYzsrR0FBZCxjQUFjLGNBRmIsTUFBTTsyRkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2VNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlTWVzc2FnZSc7XG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJy4vTWVzc2FnZVR5cGUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFVzZSB0aGlzIGNsYXNzIHRvIG1hbmFnZSB0aGUgY29udGV4dCBvZiBhIHNpbmdsZSBzZXJ2aWNlIGNhbGwuIFRoaXNcbiAqIGNsYXNzIHdpbGwgY29udGFpbiBhIGxpc3Qgb2YgYW55IHNlcnZpY2UgbWVzc2FnZXMgYWRkZWQgZHVyaW5nIHRoZSBwcm9jZXNzaW5nXG4gKiBvZiBhIHNlcnZpY2UgcmVxdWVzdC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBzZXJ2aWNlIG1lc3NhZ2VzIGFkZGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiBkdXJpbmcgdGhlIHByb2Nlc3Npbmcgb2YgdGhlXG4gICAqIHNwZWNpZmllZCBzZXJ2aWNlIHJlcXVlc3QuXG4gICAqL1xuICBNZXNzYWdlczogQXJyYXk8U2VydmljZU1lc3NhZ2U+ID0gbmV3IEFycmF5PFNlcnZpY2VNZXNzYWdlPigpO1xuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gYWRkIGEgbmV3IG1lc3NhZ2UgdG8gdGhlIFtTZXJ2aWNlQ29udGV4dF0uXG4gICAqL1xuICBhZGRNZXNzYWdlKG1lc3NhZ2U6IFNlcnZpY2VNZXNzYWdlKSB7XG4gICAgdGhpcy5NZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgW1NlcnZpY2VDb250ZXh0XSBjb250YWlucyBhbnkgbWVzc2FnZXMgd2l0aCB0eXBlIG9mIFtFcnJvcl0uXG4gICAqL1xuICBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuTWVzc2FnZXMgJiYgdGhpcy5NZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gdGhpcy5NZXNzYWdlcy5maWx0ZXIoKGYpID0+IGYuTWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkVycm9yKTtcbiAgICAgIGlmIChlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IFtTZXJ2aWNlQ29udGV4dF0gZG9lcyBub3QgY29udGFpbiBhbnkgZXJyb3JzLlxuICAgKi9cbiAgaXNHb29kKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLk1lc3NhZ2VzICYmIHRoaXMuTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHRoaXMuTWVzc2FnZXMuZmlsdGVyKChmKSA9PiBmLk1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5FcnJvcik7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==