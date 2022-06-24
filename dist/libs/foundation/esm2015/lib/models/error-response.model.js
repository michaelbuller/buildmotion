import { ServiceResponse } from './service-response.model';
export class ErrorResponse extends ServiceResponse {
    constructor() {
        super();
        this.IsSuccess = false;
    }
}
//# sourceMappingURL=error-response.model.js.map