/// <binding />
var gulp = require("gulp")

var paths = {
    webroot : "./www/"
}

gulp.task("default",["cp.ng2"], function(){

})



gulp.task("cp.ng2", function () {
    return gulp.src([
            "node_modules/@angular/common/**/*",
            "node_modules/@angular/compiler/**/*",
            "node_modules/@angular/core/**/*",
            "node_modules/@angular/http/**/*",
            "node_modules/@angular/platform-browser/**/*",
            "node_modules/@angular/platform-browser-dynamic/**/*",
            "node_modules/@angular/router/**/*",
            "node_modules/@angular/router-deprecated/**/*",
            "node_modules/@angular/upgrade/**/*",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/rxjs/**/*",
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js"
        ],
        { base: "node_modules" })
        .pipe(gulp.dest(paths.webroot + "Angular/lib"))
})

gulp.task("bundle", function() {
    var path = require("path")
    var Builder = require("systemjs-builder")
    var builder = new Builder('./', 'bundle.config.js' )
    
    builder
      .bundle('app/**/*.js - [app/**/*]', 'www/scripts/ng2rc.js')
      .then(function(){console.log("bundle complete")})
      .catch(function(err){console.log(err)})
})