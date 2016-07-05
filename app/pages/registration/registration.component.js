"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var RegistrationPage = (function () {
    function RegistrationPage(page) {
        this.page = page;
        this.secondPage = false;
        this.secondPage = false;
        this.user = new user_1.User();
    }
    RegistrationPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    RegistrationPage.prototype.next = function () {
        this.secondPage = true;
    };
    RegistrationPage.prototype.register = function () {
    };
    RegistrationPage = __decorate([
        core_1.Component({
            selector: "welcome-register",
            templateUrl: "pages/registration/registration.html",
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], RegistrationPage);
    return RegistrationPage;
}());
exports.RegistrationPage = RegistrationPage;
//# sourceMappingURL=registration.component.js.map