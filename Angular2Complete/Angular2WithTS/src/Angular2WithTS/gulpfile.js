/// <binding AfterBuild='copy' Clean='clean' />

var gulp = require("gulp"),
  rimraf = require("gulp-rimraf"),
  typescript= require("gulp-tsc"),
  fs = require("fs");
var stripDebug = require('gulp-strip-debug');

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
  bower: "./bower_components/",
  lib: "./" + project.webroot + "/lib/",
  publicApp: "./" + project.webroot + "/app/",
  mainapp:"./app/"
};

gulp.task('default', function () {
    return gulp.src('src/app.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('dist'));
});

gulp.task("clean", function () {
    gulp.src(paths.lib).pipe(rimraf());
    gulp.src(paths.publicApp).pipe(rimraf());
});

gulp.task("compile:typescript", function () {
    var a= gulp.src([paths.mainapp + "**/*.{js}"])
        .pipe(typescript({
            module : "amd",
            emitError : true,
            sourceMap : true,
            declaration : true,
            target : "ES5"
        }))
        .pipe(gulp.dest(paths.publicApp));

    a.on('data', function (chunk) {
        var contents = chunk.contents.toString().trim();
        var bufLength = process.stdout.columns;
        var hr = '\n\n' + Array(bufLength).join("_") + '\n\n'
        if (contents.length > 1) {
            process.stdout.write(chunk.path + '\n' + contents + '\n');
            process.stdout.write(chunk.path + hr);
        }
    });
});

gulp.task("copy", ["clean", "compile:typescript"], function () {
    var bower = {
        "bootstrap" : "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "bootstrap-touch-carousel" : "bootstrap-touch-carousel/dist/**/*.{js,css}",
        "hammer.js" : "hammer.js/hammer*.{js,map}",
        "jquery" : "jquery/jquery*.{js,map}",
        "jquery-validation" : "jquery-validation/jquery.validate.js",
        "jquery-validation-unobtrusive" : "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js"
    }

    //Copy Scripts files 
    for (var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
            .pipe(gulp.dest(paths.lib + destinationDir));
    }

    //Copy app files 
    gulp.src([paths.mainapp + "**/*.{js,html}"]).pipe(gulp.dest(paths.publicApp));

});
