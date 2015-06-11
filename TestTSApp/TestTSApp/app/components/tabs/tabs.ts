import {Component, View} from "angular2/angular2"
import Tab = require("tab"); 
@Component({
    selector: "tabs"
})

@View({
        templateUrl: "./app/components/tabs/tabs.html"
})

export class Tabs {
    tabs: Tab.Tab[];

    constructor(tabs: Tabs){
        tabs.tabs.push(this);
    }

    addTabs(tab: Tab.Tab){
        this.tabs.push(tab);
    }
}