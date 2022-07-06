import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DigitOnlyDirective {
    el: ElementRef;
    private navigationKeys;
    inputElement: HTMLElement;
    constructor(el: ElementRef);
    onKeyDown(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DigitOnlyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DigitOnlyDirective, "[buildmotionDigitalOnly]", never, {}, {}, never, never, false>;
}
