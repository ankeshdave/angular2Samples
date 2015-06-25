if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', "angular2/angular2", "app/components/component"], function (require, exports, angular2_1, angular2_2, Component1) {
    var App = (function () {
        function App() {
            this.name = "Ankesh";
            this.titles = ["Title1", "Title2"];
        }
        App = __decorate([
            angular2_1.Component({
                selector: "my-app"
            }),
            angular2_1.View({
                templateUrl: "./app/app.html",
                directives: [angular2_2.NgFor, Component1.Child]
            })
        ], App);
        return App;
    })();
    angular2_1.bootstrap(App);
});
//# sourceMappingURL=app.js.map