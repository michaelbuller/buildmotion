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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXQtb25seS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbW1vbi9zcmMvbGliL2RpcmVjdGl2ZXMvZGlnaXQtb25seS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLcEUsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZ6QixtQkFBYyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUc3SSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUdELFNBQVMsQ0FBQyxDQUFNO1FBQ2QsSUFBSSxDQUFDLFlBQVksYUFBYTtZQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUkseURBQXlEO1lBQ3BHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7WUFDekQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLGdCQUFnQjtZQUN6RCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCO1lBQ3pELENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7WUFDekQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLHFCQUFxQjtZQUM5RCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUkscUJBQXFCO1lBQzlELENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxxQkFBcUI7WUFDOUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLHFCQUFxQjtVQUMzRDtZQUNBLG1DQUFtQztZQUNuQyxPQUFPO1NBQ1I7UUFDRCxtREFBbUQ7UUFDbkQsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7OytHQTNCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3JDO2lHQVNDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnVpbGRtb3Rpb25EaWdpdGFsT25seV0nLFxufSlcbmV4cG9ydCBjbGFzcyBEaWdpdE9ubHlEaXJlY3RpdmUge1xuICBwcml2YXRlIG5hdmlnYXRpb25LZXlzID0gWydCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ1RhYicsICdFc2NhcGUnLCAnRW50ZXInLCAnSG9tZScsICdFbmQnLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQ2xlYXInLCAnQ29weScsICdQYXN0ZSddO1xuICBpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGU6IGFueSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJlxuICAgICAgdGhpcy5uYXZpZ2F0aW9uS2V5cy5pbmRleE9mKGUua2V5KSA+IC0xIHx8IC8vIEFsbG93OiBuYXZpZ2F0aW9uIGtleXM6IGJhY2tzcGFjZSwgZGVsZXRlLCBhcnJvd3MgZXRjLlxuICAgICAgKGUua2V5ID09PSAnYScgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAoZS5rZXkgPT09ICdjJyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcbiAgICAgIChlLmtleSA9PT0gJ3YnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrVlxuICAgICAgKGUua2V5ID09PSAneCcgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAoZS5rZXkgPT09ICdhJyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQrQSAoTWFjKVxuICAgICAgKGUua2V5ID09PSAnYycgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK0MgKE1hYylcbiAgICAgIChlLmtleSA9PT0gJ3YnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtWIChNYWMpXG4gICAgICAoZS5rZXkgPT09ICd4JyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIC8vIEFsbG93OiBDbWQrWCAoTWFjKVxuICAgICkge1xuICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXG4gICAgaWYgKGlzTmFOKE51bWJlcihlLmtleSkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=