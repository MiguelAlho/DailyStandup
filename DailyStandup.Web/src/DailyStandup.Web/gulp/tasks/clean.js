var gulp = require('gulp'),
    del = require('del'),
    paths = require('../config.js').paths;

gulp.task('cleanEverything', function (cb) {
    del([
      paths.destination.images,
      paths.destination.lib,
      paths.destination.css,
      paths.destination.app
    ], cb);
});