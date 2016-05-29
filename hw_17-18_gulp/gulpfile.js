var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('default', function() {
  return gulp.src('js/*.js')
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('default', function() {
  return gulp.src('css/*.css')
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('default', function() {
  return gulp.src('dist/concat.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/concat.min.js'));
});
gulp.task('default', function() {
  return gulp.src('dist/concat.css')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});
gulp.task('default', function () {
  gulp.src('dist/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/'));
});
