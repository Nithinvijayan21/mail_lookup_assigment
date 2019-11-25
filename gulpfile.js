const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
sass.compiler = require('node-sass'); 
function serve() {
    return browserSync.init({
      server: 'build',
      open: true,
      port: 3000,
      livereload: true,
    });
  }

gulp.task('buildAndServe', gulp.series(copy, serve));

function copy() {
    return gulp.src([
      'app/*.html',
      'app/assets/**/*.*',
    ])
    .pipe(gulp.dest('build'));
  }
gulp.task('copy', copy);

function stream() {
  return watch('app/*.html', { ignoreInitial: false })
      .pipe(gulp.dest('build')),browserSync.reload;
}

gulp.task('stream', gulp.series(stream, serve));

