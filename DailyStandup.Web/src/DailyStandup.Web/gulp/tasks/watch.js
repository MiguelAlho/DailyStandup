var gulp = require("gulp"),
  watch = require("gulp-watch"),
  paths = require('../config.js').paths;

gulp.task('watch-sass', function(){
    var watchFiles = [paths.source.sass + '**/*.scss'];
    gulp.watch(watchFiles, ['precompileSass']);
});

gulp.task('watch-react', function () {
    var watchFiles = [paths.source.react + "components/**/*.jsx"];
    gulp.watch(watchFiles, ['jsxTransform']);
});
