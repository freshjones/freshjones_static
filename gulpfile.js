'use strict';

var gulp              = require('gulp');
var sass              = require('gulp-sass');
var sourcemaps        = require('gulp-sourcemaps');
var fileinclude       = require('gulp-file-include');
var rename            = require("gulp-rename");
var browserSync       = require('browser-sync').create();
var reload            = browserSync.reload;
var del               = require('del');

gulp.task('browsersync', function() {
    browserSync.init({
      open:false,
      proxy: "localhost:5000",
    });
});

gulp.task('clean', function () {
    del.sync(['./dist/**', '!./dist']);
});

gulp.task('html', function() {
    gulp.src('./src/**/*.tpl.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@root'
        }))
        .pipe(rename({
          extname: ""
        }))
        .pipe(rename({
          extname: ".html"
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('css', function () {
   gulp.src('./src/css/styles.css')
       .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function () {
   gulp.src('./src/js/main.js')
       .pipe(gulp.dest('./dist/js'))
});

gulp.task('scss', function () 
{
  gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('watch', ['scss','browsersync'], function () 
{
  gulp.watch(['./src/**/*.html'], ['html']).on('change', reload);
  gulp.watch(['./src/scss/**/*.scss'], ['scss']);
});

// Gulp default task
gulp.task('build', ['clean', 'html','images','css','js']);

gulp.task('default', ['watch']);

