"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var ns_router_deprecated_1 = require("nativescript-angular/router-deprecated/ns-router-deprecated");
var app_component_1 = require("./app.component");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("DropDown", function () { return require("nativescript-drop-down/drop-down").DropDown; });
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [ns_router_deprecated_1.NS_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map