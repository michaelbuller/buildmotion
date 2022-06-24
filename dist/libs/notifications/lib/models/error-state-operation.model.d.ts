/**
 * Use to define error state mappings for a specific API operation.
 */
export declare class ErrorStateOperation {
    domain: string;
    operation: string;
    errors: Map<string, boolean>;
    constructor(operation: string, domain: string);
}
