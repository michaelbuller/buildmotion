import { Directive, HostListener, forwardRef, Inject, Renderer2, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';
import * as i0 from "@angular/core";
const TRIM_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TrimValueAccessorDirective),
    multi: true,
};
/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
// tslint:disable-next-line: directive-class-suffix
export class TrimValueAccessorDirective {
    constructor(renderer, elementRef) {
        this.ngOnChange = (val) => {
            this.onChange(val != null ? val.trim() : val);
        };
        this.ngOnBlur = (val) => {
            this.writeValue(val != null ? val.trim() : val);
            this.onTouched();
        };
        this.onChange = (_) => {
            noop();
        };
        this.onTouched = () => {
            noop();
        };
        this._sourceRenderer = renderer;
        this._sourceElementRef = elementRef;
    }
    writeValue(value) {
        if (typeof value === 'string') {
            this._value = value != null ? value.trim() : value;
            this._sourceRenderer.setProperty(this._sourceElementRef.nativeElement, 'value', this._value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._sourceRenderer.setProperty(this._sourceElementRef.nativeElement, 'disabled', isDisabled);
    }
}
TrimValueAccessorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TrimValueAccessorDirective, deps: [{ token: Renderer2 }, { token: ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
TrimValueAccessorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: TrimValueAccessorDirective, selector: "\n    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControlName],\n    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControl],\n    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[ngModel],\n    textarea:not([readonly]):not(.ng-trim-ignore)[formControlName],\n    textarea:not([readonly]):not(.ng-trim-ignore)[formControl],\n    textarea:not([readonly]):not(.ng-trim-ignore)[ngModel],\n    :not([readonly]):not(.ng-trim-ignore)[ngDefaultControl]\n  ", host: { listeners: { "input": "ngOnChange($event.target.value)", "blur": "ngOnBlur($event.target.value)" } }, providers: [TRIM_VALUE_ACCESSOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TrimValueAccessorDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint:disable-next-line: directive-selector
                    selector: `
    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControlName],
    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControl],
    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[ngModel],
    textarea:not([readonly]):not(.ng-trim-ignore)[formControlName],
    textarea:not([readonly]):not(.ng-trim-ignore)[formControl],
    textarea:not([readonly]):not(.ng-trim-ignore)[ngModel],
    :not([readonly]):not(.ng-trim-ignore)[ngDefaultControl]
  `,
                    providers: [TRIM_VALUE_ACCESSOR],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }]; }, propDecorators: { ngOnChange: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], ngOnBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }] } });
//# sourceMappingURL=trim-value-accessor.js.map