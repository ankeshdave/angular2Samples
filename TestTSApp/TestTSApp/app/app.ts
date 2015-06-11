/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {NgFor} from "angular2/angular2"
import Zippy = require("app/components/Zippy/zippy");
import Tabs = require("app/components/tabs/tabs");

@Component({
    selector: "my-app"
})

@View({
        templateUrl: "./app/my-app.html",
        directives:[Zippy.Zippy,Tabs.Tabs,NgFor]
})

//my-app Component Controller
class MyAppComponent {
    name: string;
    title:string;
    constructor(){
        this.name = "Ankesh";
        this.title = "Awesome title from Heaven";
    }
}

bootstrap(MyAppComponent);