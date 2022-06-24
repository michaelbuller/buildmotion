import { ApiMessage } from './api-message';
export declare class ApiResponse<T> {
    /** A boolean indicator of success for the response. */
    isSuccess: boolean;
    /**
     * A message from the application API. Should not be used for general user notifications.
     */
    message: string;
    /**
     * A list of [ApiMessage] items.
     */
    messages: ApiMessage[];
    /**
     * Use to retrieve the data/payload for the specified request. The
     * API will provide for requests marked as [IsSuccessful=true].
     */
    data?: T;
    /**
     * Use to provide the CorrelationId for the specified response.
     */
    id: string;
    /**
     * Use to provide the timestamp the response was processed by the API.
     */
    timestamp: Date;
}
