import { Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
export declare class TrimValueAccessorDirective implements ControlValueAccessor {
    private _sourceRenderer;
    private _sourceElementRef;
    private _value;
    ngOnChange: (val: string) => void;
    ngOnBlur: (val: string) => void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    writeValue(value: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrimValueAccessorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TrimValueAccessorDirective, "    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControlName],    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[formControl],    input:not([type=checkbox]):not([type=radio]):not([type=password]):not([readonly]):not(.ng-trim-ignore)[ngModel],    textarea:not([readonly]):not(.ng-trim-ignore)[formControlName],    textarea:not([readonly]):not(.ng-trim-ignore)[formControl],    textarea:not([readonly]):not(.ng-trim-ignore)[ngModel],    :not([readonly]):not(.ng-trim-ignore)[ngDefaultControl]  ", never, {}, {}, never, never, false>;
}
