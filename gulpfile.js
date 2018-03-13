
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const imageminPngcrush = require('imagemin-pngcrush');


gulp.task('devjs', function () {
  gulp.src('src/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('devcss', function () {
  gulp.src('src/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(cleancss({ keepSpecialComments: 1 }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('devimgs', function () {
  gulp.src('src/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('dist/img/'));
});


gulp.task('default', ['devimgs', 'devcss', 'devjs']);