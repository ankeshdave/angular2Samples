if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "angular2/angular2"], function (require, exports, angular2_1) {
    var Child = (function () {
        function Child() {
        }
        Child = __decorate([
            angular2_1.Component({
                selector: "child",
                properties: ["title"]
            }),
            angular2_1.View({
                template: "{{title}}"
            })
        ], Child);
        return Child;
    })();
    exports.Child = Child;
});
//# sourceMappingURL=component.js.map