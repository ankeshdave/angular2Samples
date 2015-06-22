var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var angular2_2 = require("angular2/angular2");
var Zippy = require("app/components/Zippy/zippy");
var Tabs = require("app/components/tabs/tabs");
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = "Ankesh";
        this.title = "Awesome title from Heaven";
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: "my-app"
        }),
        angular2_1.View({
            templateUrl: "./app/my-app.html",
            directives: [Zippy.Zippy, Tabs.Tabs, angular2_2.NgFor]
        })
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
//# sourceMappingURL=app.js.map