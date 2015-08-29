var gulp = require("gulp"),
    sass = require("gulp-sass"),
    paths = require('../config.js').paths;

gulp.task('precompileSass', function () {
    return gulp.src(paths.source.sass + "*.scss")
        .pipe(sass())
        .pipe(gulp.dest(paths.destination.css));
});
