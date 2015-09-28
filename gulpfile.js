var gulp  = require('gulp'),
  jshint  = require('gulp-jshint'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  uglify  = require('gulp-uglify'),
  rename  = require('gulp-rename'),
  assetsPath = './public/assets';

gulp.task('lint', function lint() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function compileSass() {
  return gulp.src([assetsPath + '/scss/*/*.scss', assetsPath + '/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('scripts', function concatenateAndMinifyJS() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function watchForChanges() {
  gulp.watch(assetsPath + '/js/*.js', ['lint', 'scripts']);
  gulp.watch(assetsPath + '/scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
