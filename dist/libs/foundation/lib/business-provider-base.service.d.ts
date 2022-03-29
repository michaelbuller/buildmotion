import { LoggingService } from '@buildmotion/logging';
import { ServiceContext } from './models/ServiceContext';
/**
 * Use the business provider base class to access common elements of the business provider.
 *
 * serviceContext: This is initialized for each instance of a business provider - its purpose is to collect information during the processing of business logic.
 */
export declare class BusinessProviderBase {
    loggingService: LoggingService;
    providerName: string;
    serviceContext: ServiceContext;
    accessToken: string;
    constructor(providerName: string, loggingService: LoggingService);
    /**
     * Use to handle an unexpected error in the application. The error should implement
     * the specified interface. The method will add a new [ServiceMessage] to the
     * specified [ServiceContext].
     * @param error An unexpected application error that implements the [Error] interface.
     *
     * interface Error {
     *  name: string;
     *  message: string;
     *  stack?: string;
     * }
     */
    handleUnexpectedError(error: Error): void;
    finishRequest(sourceName: string): void;
}
