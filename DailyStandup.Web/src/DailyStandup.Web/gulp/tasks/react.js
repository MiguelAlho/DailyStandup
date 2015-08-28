var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    paths = require('../config.js').paths;

gulp.task('jsxTransform', function () {
    var sourcefiles = ["./assets/js/components/**/*.jsx"];
    return gulp.src(sourcefiles)
        .pipe(concat("app.js"))
        .pipe(react())
        .pipe(gulp.dest(paths.destination.app));
});

