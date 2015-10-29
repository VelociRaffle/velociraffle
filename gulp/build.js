var gulp  = require('gulp'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  assetsPath = './client/assets',
  jsPaths = assetsPath + '/js/**/*.js',
  scssPaths   = assetsPath + '/scss/**/*.scss',
  publicPath = './client/public';

gulp.task('sass:prod', function compileSass() {
  return gulp.src(scssPaths)
    .pipe(sass())
    .pipe(gulp.dest(publicPath + '/css'));
});

gulp.task('js-concat', function concatenateJS() {
  return gulp.src(jsPaths)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(publicPath + '/js'));
});

gulp.task('build', ['sass:prod', 'js-concat']);
