/**
 * Use to define error state mappings for a specific API operation.
 */
export class ErrorStateOperation {
    constructor(operation, domain) {
        this.errors = new Map();
        this.operation = operation;
        this.domain = domain;
    }
}
//# sourceMappingURL=error-state-operation.model.js.map