var gulp  = require('gulp'),
  sass    = require('gulp-sass'),
  concat  = require('gulp-concat'),
  assetsPath = './client/assets',
  publicPath = './client/public';

gulp.task('sass', function compileSass() {
  return gulp.src([assetsPath + '/scss/*/*.scss', assetsPath + '/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest(publicPath + '/css'));
});

gulp.task('js-concat', function concatenateJS() {
  return gulp.src(assetsPath + '/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(publicPath + '/js'));
});

gulp.task('build', ['sass', 'js-concat']);
