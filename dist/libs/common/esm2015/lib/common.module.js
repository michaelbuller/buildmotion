import { DigitOnlyDirective } from './directives/digit-only.directive';
import { NgModule } from '@angular/core';
import { TrimValueAccessorDirective } from './directives/trim-value-accessor';
import { CommonModule as NgCommonModule } from '@angular/common';
import * as i0 from "@angular/core";
const MODULES = [
    DigitOnlyDirective,
    TrimValueAccessorDirective,
];
export class CommonModule {
}
CommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CommonModule, declarations: [DigitOnlyDirective,
        TrimValueAccessorDirective], imports: [NgCommonModule], exports: [DigitOnlyDirective,
        TrimValueAccessorDirective] });
CommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CommonModule, imports: [[NgCommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NgCommonModule],
                    declarations: [...MODULES],
                    exports: [...MODULES],
                }]
        }] });
//# sourceMappingURL=common.module.js.map