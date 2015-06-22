var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var Tab = require("app/components/tabs/tab");
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
        var title = this.tabTitle;
        var tab = new Tab.Tab();
        tab.title = "Awesome";
        this.tabs.push(tab);
    }
    Tabs.prototype.addTabs = function (tabName) {
        var tab = new Tab.Tab();
        tab.title = this.tabTitle;
        alert(this.tabTitle);
        this.tabs.push(tab);
    };
    Tabs = __decorate([
        angular2_1.Component({
            selector: "tabs",
            properties: ["tabTitle: tabTitle"]
        }),
        angular2_1.View({
            templateUrl: "./app/components/tabs/tabs.html",
            directives: [Tab.Tab, angular2_1.NgFor]
        })
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map