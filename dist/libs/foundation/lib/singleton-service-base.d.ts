import { Type } from '@angular/core';
import { ServiceBase } from './service-base';
import { LoggingService } from '@buildmotion/logging';
import { ServiceContext } from './models/ServiceContext';
export declare class SingletonServiceBase extends ServiceBase {
    constructor(type: Type<any>, loggingService: LoggingService, serviceName: string, serviceContext: ServiceContext);
}
