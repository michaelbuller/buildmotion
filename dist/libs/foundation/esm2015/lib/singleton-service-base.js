import { inject, InjectFlags } from '@angular/core';
import { ServiceBase } from './service-base';
export class SingletonServiceBase extends ServiceBase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(type, loggingService, serviceName, serviceContext) {
        super(serviceName, loggingService, serviceContext);
        // eslint-disable-next-line no-bitwise
        const parent = inject(type, InjectFlags.Optional | InjectFlags.SkipSelf);
        if (parent) {
            throw Error(`Cannot create multiple instances of provider: [${type}]`);
        }
    }
}
//# sourceMappingURL=singleton-service-base.js.map