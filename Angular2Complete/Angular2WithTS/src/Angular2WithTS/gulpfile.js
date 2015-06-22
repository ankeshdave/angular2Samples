/// <binding Clean='clean' />

var gulp = require("gulp"),
  rimraf = require("gulp-rimraf"),
  fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
  bower: "./bower_components/",
  lib: "./" + project.webroot + "/lib/",
  app: "./" + project.webroot + "/app/",
  mainapp:"./app/"
};

gulp.task("clean", function () {
    gulp.src(paths.lib).pipe(rimraf());
    gulp.src(paths.app).pipe(rimraf());
});

gulp.task("copy", ["clean"], function () {
  var bower = {
    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
    "bootstrap-touch-carousel": "bootstrap-touch-carousel/dist/**/*.{js,css}",
    "hammer.js": "hammer.js/hammer*.{js,map}",
    "jquery": "jquery/jquery*.{js,map}",
    "jquery-validation": "jquery-validation/jquery.validate.js",
    "jquery-validation-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js"
  }

    var mainAppfiles = {
        "mainApp-jsFiles" : "*.js"
    }

  for (var destinationDir in bower) {
    gulp.src(paths.bower + bower[destinationDir])
      .pipe(gulp.dest(paths.lib + destinationDir));
  }

    for (var destinationfile in mainAppfiles) {
        gulp.src(paths.mainapp + mainAppfiles[destinationfile])
            .pipe(gulp.dest(paths.app));
    }

});
