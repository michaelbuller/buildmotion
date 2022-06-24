import { Observable } from 'rxjs';
import { IConfiguration } from './i-configuration';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
export declare class ConfigurationService implements IConfigurationService {
    config: IConfiguration;
    private settingsSubject;
    readonly settings$: Observable<IConfiguration>;
    constructor(context: ConfigurationContext);
    set settings(value: IConfiguration);
    get settings(): IConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigurationService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigurationService>;
}
export interface IConfigurationService {
    readonly settings$: Observable<IConfiguration>;
}
