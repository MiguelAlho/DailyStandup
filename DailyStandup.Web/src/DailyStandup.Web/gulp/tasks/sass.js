var gulp = require("gulp"),
    sass = require("gulp-sass"),
    paths = require('../config.js').paths;

gulp.task('preProcessStylesheetsWithSass', function () {
    return gulp.src(paths.source.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.destination.css));
});
