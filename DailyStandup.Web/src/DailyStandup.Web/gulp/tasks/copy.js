var gulp = require('gulp'),
    paths = require('../config.js').paths;
    
gulp.task("copyDependencies", function () {
    var bower = {
        //bower is currently copying direct to wwwroot/lib
        //"jquery": "jquery/dist/jquery*.{js,map}",
        //"jquery-validation": "jquery-validation/jquery.validate.js",
        //"jquery-validation-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js",
        //"jquery-ui":"jquery-ui/ui/minified/**/*.{js,css}",
        //"react": "react/*.js",
        //"reflux":"reflux/dist/reflux*{js}",
        //"materialize":"materialize/dist/**/*.*"
    }

    for (var destinationDir in bower) {
        gulp.src(paths.source.bower + bower[destinationDir])
          .pipe(gulp.dest(paths.destination.lib + destinationDir));
    }
});

gulp.task('copyImageAssets', function () {
    return gulp.src(paths.source.images + '**/*.{jpg,png,gif}')
        .pipe(gulp.dest(paths.destination.images));
});

gulp.task('copyHtml', function() {
    return gulp.src(paths.source.react + "index.html")
        .pipe(gulp.dest(paths.destination.root));
});

