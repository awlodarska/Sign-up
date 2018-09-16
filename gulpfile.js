// var gulp = require('gulp');
// var browserSync = require('browser-sync');
// var sass = require('gulp-sass');
// var pug = require('gulp-pug');
//
// gulp.task('reload', function() {
//   browserSync.reload();
// });
//
// gulp.task('serve', ['sass', 'pug'], function() {
//     browserSync({
//       server: 'src',
//       index: 'html/index.html',
//     });
//
//     gulp.watch('src/html/*.html', ['reload']);
//     gulp.watch('src/css/*.css', ['reload']);
//     gulp.watch('src/pug/**/*.pug', ['pug']);
//     gulp.watch('src/sass/**/*.sass', ['sass']);
// });
//
// gulp.task('sass', function() {
//   return gulp.src('src/sass/**/*.sass')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(gulp.dest('src/css'))
//   .pipe(browserSync.stream());
// })
//
// gulp.task('pug', function buildHTML() {
//   return gulp.src('src/pug/*.pug')
//   .pipe(pug({
//   }))
//   .pipe(gulp.dest('src/html'))
//   .pipe(browserSync.stream());
// });
//
// gulp.task('default', ['serve']);

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['sass', 'views'], function() {
    browserSync.init({
      server: 'src',
      index: 'index.html',
    });

    gulp.watch('dist/html/*.html', ['reload']);
    gulp.watch('dist/css/*.css', ['reload']);
    gulp.watch('src/pug/**/*.pug', ['views']);
    gulp.watch('src/sass/**/*.sass', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
})

gulp.task('views', function buildHTML() {
  return gulp.src('src/pug/**/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest('dist/html'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
