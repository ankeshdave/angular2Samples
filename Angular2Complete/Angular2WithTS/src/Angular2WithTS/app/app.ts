/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap,coreDirectives} from 'angular2/angular2';
import Component1 = require("components/child");
import LoginComponent = require("components/loginComponent/login");

@Component({
    selector : "my-app"
})

@View({
    templateUrl: "./app/app.html",
    directives:[Component1.Child,coreDirectives,LoginComponent]
})


class App {
    name: string;
    titles: Array<String> = ["Title1", "Title2"];
    constructor(){
        this.name = "Ankesh";
    }
}

bootstrap(App);