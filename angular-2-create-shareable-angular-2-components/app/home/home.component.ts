import { Component } from '@angular/core';

@Component ({
    selector: 'home',
    template: `
        <div>I'm a Home Component</div>
        <widget-one></widget-one>
        <widget-two></widget-two>
    `
})
export class HomeComponent{

}


//Don't Forget....
/***

Everything in home module is available to this, but the only thing we're exporting for now is just the home component. Home component has a selector of home, and a template of, "I am a home component," which lands here as, "I'm a home component." */