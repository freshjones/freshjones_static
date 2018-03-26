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

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
   gulp.src('./src/css/main.css')
       .pipe(gulp.dest('./dist/css'))
});


gulp.task('watch', ['browsersync'], function () 
{
  gulp.watch(['./**/*.html'], reload)
});

// Gulp default task
gulp.task('build', ['html','css']);

gulp.task('default', []);

