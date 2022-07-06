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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tbW9uL3NyYy9saWIvZGlyZWN0aXZlcy90cmltLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFNUIsTUFBTSxtQkFBbUIsR0FBUTtJQUMvQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDekQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7Ozs7R0FJRztBQWNILG1EQUFtRDtBQUNuRCxNQUFNLE9BQU8sMEJBQTBCO0lBaUJyQyxZQUErQixRQUFtQixFQUFzQixVQUFzQjtRQVY5RixlQUFVLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBR0YsYUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFjRixhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNwQixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQztRQWpCQSxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RjtJQUNILENBQUM7SUFVRCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakcsQ0FBQzs7dUhBOUNVLDBCQUEwQixrQkFpQmpCLFNBQVMsYUFBK0IsVUFBVTsyR0FqQjNELDBCQUEwQiwydkJBSDFCLENBQUMsbUJBQW1CLENBQUM7MkZBR3JCLDBCQUEwQjtrQkFkdEMsU0FBUzttQkFBQztvQkFDVCwrQ0FBK0M7b0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OzBCQW1CYyxNQUFNOzJCQUFDLFNBQVM7OzBCQUF3QixNQUFNOzJCQUFDLFVBQVU7NENBVnRFLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFNOUMsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIGZvcndhcmRSZWYsIEluamVjdCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFRSSU1fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRyaW1WYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG4vKipcbiAqIFRoZSB0cmltIGFjY2Vzc29yIGZvciB3cml0aW5nIHRyaW1tZWQgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXNcbiAqIHVzZWQgYnkgdGhlIHtAbGluayBOZ01vZGVsfSwge0BsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kXG4gKiB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IGBcbiAgICBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpub3QoW3R5cGU9cmFkaW9dKTpub3QoW3R5cGU9cGFzc3dvcmRdKTpub3QoW3JlYWRvbmx5XSk6bm90KC5uZy10cmltLWlnbm9yZSlbZm9ybUNvbnRyb2xOYW1lXSxcbiAgICBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpub3QoW3R5cGU9cmFkaW9dKTpub3QoW3R5cGU9cGFzc3dvcmRdKTpub3QoW3JlYWRvbmx5XSk6bm90KC5uZy10cmltLWlnbm9yZSlbZm9ybUNvbnRyb2xdLFxuICAgIGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pOm5vdChbdHlwZT1yYWRpb10pOm5vdChbdHlwZT1wYXNzd29yZF0pOm5vdChbcmVhZG9ubHldKTpub3QoLm5nLXRyaW0taWdub3JlKVtuZ01vZGVsXSxcbiAgICB0ZXh0YXJlYTpub3QoW3JlYWRvbmx5XSk6bm90KC5uZy10cmltLWlnbm9yZSlbZm9ybUNvbnRyb2xOYW1lXSxcbiAgICB0ZXh0YXJlYTpub3QoW3JlYWRvbmx5XSk6bm90KC5uZy10cmltLWlnbm9yZSlbZm9ybUNvbnRyb2xdLFxuICAgIHRleHRhcmVhOm5vdChbcmVhZG9ubHldKTpub3QoLm5nLXRyaW0taWdub3JlKVtuZ01vZGVsXSxcbiAgICA6bm90KFtyZWFkb25seV0pOm5vdCgubmctdHJpbS1pZ25vcmUpW25nRGVmYXVsdENvbnRyb2xdXG4gIGAsXG4gIHByb3ZpZGVyczogW1RSSU1fVkFMVUVfQUNDRVNTT1JdLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIFRyaW1WYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvLyBTb3VyY2Ugc2VydmljZXMgdG8gbW9kaWZ5IGVsZW1lbnRzLlxuICBwcml2YXRlIF9zb3VyY2VSZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIF9zb3VyY2VFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF92YWx1ZSE6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxuICBuZ09uQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWwgIT0gbnVsbCA/IHZhbC50cmltKCkgOiB2YWwpO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcbiAgbmdPbkJsdXIgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLndyaXRlVmFsdWUodmFsICE9IG51bGwgPyB2YWwudHJpbSgpIDogdmFsKTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUmVuZGVyZXIyKSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KEVsZW1lbnRSZWYpIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9zb3VyY2VSZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX3NvdXJjZUVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgIT0gbnVsbCA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgICAgdGhpcy5fc291cmNlUmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fc291cmNlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gICAgbm9vcCgpO1xuICB9O1xuXG4gIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgICBub29wKCk7XG4gIH07XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zb3VyY2VSZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9zb3VyY2VFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG59XG4iXX0=