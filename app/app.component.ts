import {Component}              from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES}            from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router-deprecated/ns-router-deprecated";
import {WelcomePage}            from "./pages/welcome/welcome.component";
import {RegistrationPage}       from "./pages/registration/registration.component";
import {MainPage}               from "./pages/main/main.component";  

@Component({
    selector: "reward-app",
    directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    template: `<router-outlet></router-outlet>`,
})
@RouteConfig([
    { path: "/welcome", component: WelcomePage, name: "Welcome", useAsDefault: true}
])
export class AppComponent {}
