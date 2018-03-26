'use strict';

var gulp              = require('gulp');

var browserSync       = require('browser-sync').create();
var reload            = browserSync.reload;

gulp.task('browsersync', function() {
    browserSync.init({
      open:false,
      proxy: "localhost:5000",
    });
});

gulp.task('watch', ['browsersync'], function () 
{
  gulp.watch(['./**/*.html'], reload)
});

gulp.task('default', []);

