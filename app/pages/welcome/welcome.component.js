"use strict";
var core_1 = require("@angular/core");
var ns_router_1 = require("nativescript-angular/router/ns-router");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var enums_1 = require("ui/enums");
var animationModule = require("ui/animation");
var WelcomePage = (function () {
    function WelcomePage(page) {
        this.page = page;
        this.registration = false;
        this.secondPage = false;
        this.continueText = 'Continue';
        this.selectedIndex = 1;
        this.user = new user_1.User();
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("Data item " + i);
        }
    }
    WelcomePage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    WelcomePage.prototype.onchange = function (selectedi) {
        console.log('Selected index : ' + selectedi);
    };
    WelcomePage.prototype.getStarted = function () {
        var _this = this;
        // this._router.navigate(['Main']);
        var definition = new Array();
        var logo = this.page.getViewById("welcome-screen");
        var a1 = {
            target: logo,
            translate: { x: 0, y: -70 },
            duration: 500,
            curve: enums_1.AnimationCurve.easeOut
        };
        definition.push(a1);
        var a2 = {
            target: logo,
            opacity: 0,
            duration: 300,
            curve: enums_1.AnimationCurve.easeInOut
        };
        definition.push(a2);
        var animationSet = new animationModule.Animation(definition);
        animationSet.play().then(function () {
            _this.registration = true;
        });
    };
    WelcomePage.prototype.continue = function () {
        if (this.secondPage) {
        }
        else {
            this.continueText = 'Register';
            this.secondPage = true;
        }
    };
    WelcomePage = __decorate([
        core_1.Component({
            selector: "welcome",
            directives: [ns_router_1.NS_ROUTER_DIRECTIVES],
            templateUrl: 'pages/welcome/welcome.html',
            styleUrls: ["pages/welcome/welcome-common.css", "pages/welcome/welcome.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], WelcomePage);
    return WelcomePage;
}());
exports.WelcomePage = WelcomePage;
//# sourceMappingURL=welcome.component.js.map