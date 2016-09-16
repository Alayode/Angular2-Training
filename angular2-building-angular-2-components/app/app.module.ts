import {AppComponent} from './app.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

//newest module imported
import {HomeModule} from "./home/home.module";


@NgModule({
    imports:[BrowserModule,HomeModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}


//WE HAVE A NEW MODULE NOW TO ADD THE HomeModule 
//Don't forget to IMPORT it on the top!

//LASTLY,
/***In the app component, you're referencing this home selector, which is available because in app module, you're importing the home module. This home selector is available because in app module, you are importing home module. */