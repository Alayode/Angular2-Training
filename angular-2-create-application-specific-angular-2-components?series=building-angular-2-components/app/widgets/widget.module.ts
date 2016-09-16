import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";
@NgModule({
    imports:[CommonModule],
    declarations:[WidgetOne, WidgetTwo],
    exports:[WidgetOne, WidgetTwo, CommonModule]
})
export class WidgetModule{}



// New Module

/***
 * 
 * The common module has everything you need to use those Angular 2 directive features. It's separate from that browser module because this can be used inside of the browser or any other platform.
 
 We'll want to import that as well as export it so that any other module using this would get that common module for free. Now I'll go ahead and hit save. You'll see that this works again. If I hop into widget 1, set this default, you'll see that 1 will go away because ngIf is false.
 * 
 *  */