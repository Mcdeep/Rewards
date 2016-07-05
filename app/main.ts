// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {NS_ROUTER_DIRECTIVES,NS_ROUTER_PROVIDERS} from  "nativescript-angular/router-deprecated/ns-router-deprecated";
import {AppComponent} from "./app.component";

import {registerElement} from "nativescript-angular/element-registry";
registerElement("DropDown", ()=> require("nativescript-drop-down/drop-down").DropDown);

nativeScriptBootstrap(AppComponent, [NS_ROUTER_PROVIDERS]);