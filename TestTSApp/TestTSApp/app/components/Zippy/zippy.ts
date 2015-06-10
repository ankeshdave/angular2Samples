import {Component, View} from "angular2/angular2"

@Component({
    selector: "zippy",
    properties:["title"]
})

@View({
    templateUrl: "./app/components/Zippy/zippy.html"
})

export class Zippy {
    visible: boolean;
    constructor(){
        this.visible = true;
    }

    toggle(){
        this.visible = !this.visible;
    }
}