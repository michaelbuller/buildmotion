/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class DigitOnlyDirective {
    constructor(el) {
        this.el = el;
        this.navigationKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];
        this.inputElement = el.nativeElement;
    }
    onKeyDown(e) {
        if (e instanceof KeyboardEvent &&
            this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (isNaN(Number(e.key))) {
            e.preventDefault();
        }
    }
}
DigitOnlyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DigitOnlyDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
DigitOnlyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DigitOnlyDirective, selector: "[buildmotionDigitalOnly]", host: { listeners: { "keydown": "onKeyDown($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DigitOnlyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[buildmotionDigitalOnly]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=digit-only.directive.js.map