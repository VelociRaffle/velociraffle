var gulp  = require('gulp'),
  jshint  = require('gulp-jshint'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  uglify  = require('gulp-uglify'),
  rename  = require('gulp-rename');

gulp.task('lint', function lint() {
  return gulp.src('./public/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function compileSass() {
  return gulp.src('./public/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('scripts', function concatenateAndMinifyJS() {
  return gulp.src('./public/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function watchForChanges() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('./public/assets/scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
