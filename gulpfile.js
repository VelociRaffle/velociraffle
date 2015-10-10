var gulp  = require('gulp'),
  jshint  = require('gulp-jshint'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  uglify  = require('gulp-uglify'),
  rename  = require('gulp-rename'),
  assetsPath = './client/assets',
  publicPath = './client/public';

gulp.task('lint', function lint() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function compileSass() {
  return gulp.src([assetsPath + '/scss/*/*.scss', assetsPath + '/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest(publicPath + '/css'));
});

gulp.task('scripts-dev', function concatenateJS() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(publicPath + '/js'));
});

gulp.task('scripts-prod', function concatenateAndMinifyJS() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(publicPath + '/js'))
    .pipe(uglify())
    .pipe(gulp.dest(publicPath + '/js'));
});

gulp.task('watch', function watchForChanges() {
  gulp.watch(assetsPath + '/js/*.js', ['lint', 'scripts-dev']);
  gulp.watch(assetsPath + '/scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts-dev', 'watch']);

gulp.task('serve', ['lint', 'sass', 'scripts-dev', 'watch']);
gulp.task('serve:prod', ['sass', 'scripts-prod']);
