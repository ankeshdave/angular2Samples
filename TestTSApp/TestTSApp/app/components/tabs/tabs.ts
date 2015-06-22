import {Component, View,NgFor} from "angular2/angular2"
import Tab = require("app/components/tabs/tab"); 
@Component({
    selector: "tabs",
    properties: ["tabTitle: tabTitle"]
})

@View({
        templateUrl: "./app/components/tabs/tabs.html",
        directives:[Tab.Tab,NgFor]
})

export class Tabs {
    tabTitle:String;
    tabs:Array<Tab.Tab>=[];
    constructor(){
        var title = this.tabTitle;
        var tab = new Tab.Tab();
        tab.title = "Awesome";
        this.tabs.push(tab);
    }

    addTabs(tabName: String): void{

        var tab = new Tab.Tab();
        tab.title = this.tabTitle;
        alert(this.tabTitle);
        this.tabs.push(tab);
    }
}