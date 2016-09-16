import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {WidgetModule} from '../widgets/widget.module';

@NgModule({
    imports:[WidgetModule],
    declarations:[HomeComponent],
    exports:[HomeComponent]
})
export class HomeModule{}



/**
 *Why we declare the HomeComponent TWICE 
 The reason you're declaring this twice inside of exports and inside of declarations is because you could be importing this home component from somewhere else.

You either declare it or import it inside of the imports where you import other modules. Because this is living inside of this module, we just declare it, and then re-export it. Now inside of our app module, we can import the home module. * /