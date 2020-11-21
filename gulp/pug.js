 
const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
    return gulp.src('pug/*.pug')
    .pipe(pug({
      // Your options in here.
      pretty: true,
    }))
    .pipe(gulp.dest('./'));
});