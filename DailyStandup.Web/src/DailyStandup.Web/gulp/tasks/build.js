var gulp = require("gulp"),
  runSequence = require('run-sequence'),
  paths = require('../config.js').paths;

gulp.task('fullBuild', function() {
    runSequence([
            'cleanEverything'],
        ['copyDependencies'], 
        ['copyImageAssets',
            'preProcessStylesheetsWithSass',
            'jsxTransform'
    ])});
