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
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('css', function () {
   gulp.src('./src/css/main.css')
       .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function () {
   gulp.src('./src/js/main.js')
       .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch', ['browsersync'], function () 
{
  gulp.watch(['./src/**/*.html'], reload)
});

// Gulp default task
gulp.task('build', ['html','images','css','js']);

gulp.task('default', ['watch']);

