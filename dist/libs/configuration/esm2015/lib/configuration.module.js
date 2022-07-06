import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationContext } from './configuration-context';
import * as i0 from "@angular/core";
export class ConfigurationModule {
    static forRoot(configContext) {
        return {
            ngModule: ConfigurationModule,
            providers: [
                {
                    provide: ConfigurationContext,
                    useValue: configContext,
                },
            ],
        };
    }
}
ConfigurationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConfigurationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationModule, imports: [CommonModule] });
ConfigurationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ConfigurationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=configuration.module.js.map