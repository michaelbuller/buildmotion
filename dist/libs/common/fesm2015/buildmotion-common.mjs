import * as i0 from '@angular/core';
import { Directive, HostListener, forwardRef, Renderer2, ElementRef, Inject, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';
import { CommonModule as CommonModule$1 } from '@angular/common';

/* eslint-disable @typescript-eslint/no-explicit-any */
class DigitOnlyDirective {
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
DigitOnlyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DigitOnlyDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
DigitOnlyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: DigitOnlyDirective, selector: "[buildmotionDigitalOnly]", host: { listeners: { "keydown": "onKeyDown($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: DigitOnlyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[buildmotionDigitalOnly]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });

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
class TrimValueAccessorDirective {
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
TrimValueAccessorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TrimValueAccessorDirective, deps: [{ token: Renderer2 }, { token: ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
TrimValueAccessorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: TrimValueAccessorDirective, selector: "\n    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControlName],\n    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControl],\n    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[ngModel],\n    textarea:not([readonly]):not(.ng-trim-ignore)[formControlName],\n    textarea:not([readonly]):not(.ng-trim-ignore)[formControl],\n    textarea:not([readonly]):not(.ng-trim-ignore)[ngModel],\n    :not([readonly]):not(.ng-trim-ignore)[ngDefaultControl]\n  ", host: { listeners: { "input": "ngOnChange($event.target.value)", "blur": "ngOnBlur($event.target.value)" } }, providers: [TRIM_VALUE_ACCESSOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TrimValueAccessorDirective, decorators: [{
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
        }], ctorParameters: function () {
        return [{ type: i0.Renderer2, decorators: [{
                        type: Inject,
                        args: [Renderer2]
                    }] }, { type: i0.ElementRef, decorators: [{
                        type: Inject,
                        args: [ElementRef]
                    }] }];
    }, propDecorators: { ngOnChange: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], ngOnBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }] } });

const MODULES = [
    DigitOnlyDirective,
    TrimValueAccessorDirective,
];
class CommonModule {
}
CommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, declarations: [DigitOnlyDirective,
        TrimValueAccessorDirective], imports: [CommonModule$1], exports: [DigitOnlyDirective,
        TrimValueAccessorDirective] });
CommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, imports: [CommonModule$1] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule$1],
                    declarations: [...MODULES],
                    exports: [...MODULES],
                }]
        }] });

function removeSubscriptions(subscriptions) {
    if (subscriptions) {
        subscriptions.forEach((subscription) => {
            if (subscription != null) {
                subscription.unsubscribe();
            }
        });
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { CommonModule, DigitOnlyDirective, TrimValueAccessorDirective as TrimValueAccessor, removeSubscriptions };
//# sourceMappingURL=buildmotion-common.mjs.map
