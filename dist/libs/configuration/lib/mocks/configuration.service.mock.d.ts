import { Observable } from 'rxjs';
import { IConfiguration } from '../i-configuration';
import { IConfigurationService } from '../configuration.service';
import { ConfigurationContext } from '../configuration-context';
import * as i0 from "@angular/core";
export declare class ConfigurationServiceMock implements IConfigurationService {
    private settingsSubject;
    readonly settings$: Observable<IConfiguration>;
    config: IConfiguration;
    constructor(context: ConfigurationContext);
    set settings(value: IConfiguration);
    get settings(): IConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigurationServiceMock, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigurationServiceMock>;
}
