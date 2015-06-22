import {Component, View} from  "angular2/angular2"

@Component({
    selector: "tab"
})

@View({
    templateUrl: "./app/components/tabs/tab.html"
})

export class Tab {
    title: String;
}