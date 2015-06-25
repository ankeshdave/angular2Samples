/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {NgFor} from "angular2/angular2";
import Component1 = require("app/components/component");

@Component({
    selector : "my-app"
})

@View({
    templateUrl: "./app/app.html",
    directives:[NgFor,Component1.Child]
})

class App {
    name: string;
    titles : Array<String>;
    constructor(){
        this.name = "Ankesh";
        this.titles = ["Title1", "Title2"];
    }
}

bootstrap(App);