import {Component} from '@angular/core';


@Component({
    selector:'app',
    template: `
<home></home>
`
})
export class AppComponent{}

/**
 * 
 * Inside of our app component, we now have access to the home component. This home matches the home component selector. You can see between these two components, home and app component, in app we're just using that home selector, in home, now we've created that selector, and created a template for it.
 * 
 * * */