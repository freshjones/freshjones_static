'use strict';

var gulp              = require('gulp');
var nunjucksRender    = require('gulp-nunjucks-render');
var htmlmin           = require('gulp-htmlmin');
var sass              = require('gulp-sass');
var sourcemaps        = require('gulp-sourcemaps');
var browserSync       = require('browser-sync').create();
var reload            = browserSync.reload;

gulp.task('browsersync', function() {
    browserSync.init({
      open:false,
      proxy: "localhost:5000",
    });
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./src/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./src/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('./dist'))
});

gulp.task('scss', function () 
{
  gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('minify', function() {
  return gulp.src('./dist/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['nunjucks', 'images', 'scss', 'browsersync'], function () 
{
  gulp.watch(['./src/**/*.+(html|nunjucks)'], ['nunjucks','images']).on('change', reload);
  gulp.watch(['./src/scss/**/*.scss'], ['scss']);
});

gulp.task('default', ['watch']);
