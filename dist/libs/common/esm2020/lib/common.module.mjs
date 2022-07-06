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
CommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, declarations: [DigitOnlyDirective,
        TrimValueAccessorDirective], imports: [NgCommonModule], exports: [DigitOnlyDirective,
        TrimValueAccessorDirective] });
CommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, imports: [NgCommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NgCommonModule],
                    declarations: [...MODULES],
                    exports: [...MODULES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvY29tbW9uL3NyYy9saWIvY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLElBQUksY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRWpFLE1BQU0sT0FBTyxHQUFHO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUMzQixDQUFDO0FBT0YsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkFUdkIsa0JBQWtCO1FBQ2xCLDBCQUEwQixhQUloQixjQUFjLGFBTHhCLGtCQUFrQjtRQUNsQiwwQkFBMEI7MEdBUWYsWUFBWSxZQUpiLGNBQWM7MkZBSWIsWUFBWTtrQkFMeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQ3pCLFlBQVksRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWdpdE9ubHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlnaXQtb25seS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyaW1WYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyaW0tdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIGFzIE5nQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgRGlnaXRPbmx5RGlyZWN0aXZlLFxuICBUcmltVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOZ0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLk1PRFVMRVNdLFxuICBleHBvcnRzOiBbLi4uTU9EVUxFU10sXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZHVsZSB7IH1cbiJdfQ==