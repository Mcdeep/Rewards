import {Component, OnInit, OnChanges} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router/ns-router";
import {Page} from "ui/page";
import {User} from "../../shared/user/user";
import {ObservableArray} from "data/observable-array";
import {AnimationCurve} from "ui/enums";
import animationModule = require("ui/animation");

@Component({
    selector: "welcome",
    directives: [NS_ROUTER_DIRECTIVES],
    templateUrl: 'pages/welcome/welcome.html',
    styleUrls: ["pages/welcome/welcome-common.css", "pages/welcome/welcome.css"]
})
export class WelcomePage implements OnInit {

    public user: User;
    public registration: boolean = false;
    public secondPage: boolean = false;
    public continueText: string = 'Continue';

    public selectedIndex = 1;
    public items: Array<string>;

    constructor(private page: Page) {
        this.user = new User();
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("Data item " + i);
        }
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public onchange(selectedi) {
        console.log('Selected index : ' + selectedi);
    }

    getStarted() {
        // this._router.navigate(['Main']);
        var definition = new Array<animationModule.AnimationDefinition>();

        var logo = this.page.getViewById("welcome-screen");
        var a1: animationModule.AnimationDefinition = {
            target: logo,
            translate: { x: 0, y: -70 },
            duration: 500,
            curve: AnimationCurve.easeOut
        };
        definition.push(a1);
        var a2: animationModule.AnimationDefinition = {
            target: logo,
            opacity: 0,
            duration: 300,
            curve: AnimationCurve.easeInOut
        };
        definition.push(a2);

        var animationSet = new animationModule.Animation(definition);

        animationSet.play().then(() => {
            this.registration = true;
        });
    }

    continue() {
        if (this.secondPage) {

        } else {
            this.continueText = 'Register';
            this.secondPage = true;
        }
    }
}
