'use strict';

var gulp              = require('gulp');
var concat            = require("gulp-concat");
var uglify            = require('gulp-uglify');
var nunjucksRender    = require('gulp-nunjucks-render');
var htmlmin           = require('gulp-htmlmin');
var sass              = require('gulp-sass');
var sourcemaps        = require('gulp-sourcemaps');

var postcss           = require('gulp-postcss');
var autoprefixer      = require('autoprefixer');
var cssnano           = require('cssnano');
var postcssimport     = require('postcss-easy-import');

var browserSync       = require('browser-sync').create();
var reload            = browserSync.reload;

var processors = [autoprefixer];

gulp.task('browsersync', function() {
    browserSync.init({
      open:false,
      proxy: "localhost:5000",
      reloadDelay: 500
    });
});

var nunjucksEnv = function(env) {
  env.addGlobal('showNotes', false)
}

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./src/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./src/templates'],
      manageEnv: nunjucksEnv
    }))
  // output files in app folder
  .pipe(gulp.dest('./dist'))
});

gulp.task('scss', function () 
{
  gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded' }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('js', function () 
{
  gulp.src('./src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream({match: '**/*.js'}));
});

gulp.task('js-vendor', function () 
{
  gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify', function() {
  return gulp.src('./dist/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function () 
{
  gulp.src('./dist/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['minify', 'uglify']);

gulp.task('watch', ['nunjucks', 'images', 'scss', 'js', 'browsersync'], function () 
{
  gulp.watch(['./src/**/*.+(html|nunjucks)'], ['nunjucks','images']).on('change', reload);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./src/scss/**/*.scss'], ['scss']);
});

gulp.task('default', ['watch']);
