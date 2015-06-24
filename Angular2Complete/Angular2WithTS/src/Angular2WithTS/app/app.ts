/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {NgFor} from "angular2/angular2";

@
Component({
    selector : "my-app"
})

@View({
    templateUrl: "./app/app.html",
    directives:[NgFor]
})

class App {
    name: string;
    constructor(){
        this.name = "Ankesh";
    }
}

bootstrap(App);