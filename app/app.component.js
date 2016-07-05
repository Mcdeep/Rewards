"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var ns_router_deprecated_1 = require("nativescript-angular/router-deprecated/ns-router-deprecated");
var welcome_component_1 = require("./pages/welcome/welcome.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "reward-app",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, ns_router_deprecated_1.NS_ROUTER_DIRECTIVES],
            providers: [ns_router_deprecated_1.NS_ROUTER_PROVIDERS],
            template: "<router-outlet></router-outlet>",
        }),
        router_deprecated_1.RouteConfig([
            { path: "/welcome", component: welcome_component_1.WelcomePage, name: "Welcome", useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map