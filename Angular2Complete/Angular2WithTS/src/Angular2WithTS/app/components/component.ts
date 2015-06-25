/// <reference path="../../typings/tsd.d.ts" />
import {Component, View} from "angular2/angular2";

@Component({
    selector: "child",
    properties:["title"]
})

@View({
    template : `{{title}}`
})

export class Child {
    title: String;
} 