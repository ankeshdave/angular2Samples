/// <reference path="../../typings/tsd.d.ts" />
import {Component, View,Attribute,coreDirectives} from "angular2/angular2";

@Component({
    selector: "child",
    properties:["title"]
})

@View({
        templateUrl:"app/components/child.html"
})

export class Child {
    title: string;

    constructor(@Attribute("title") title:string) {
        this.title=title;
    }
} 