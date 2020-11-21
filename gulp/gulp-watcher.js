const gulp = require('gulp');

gulp.task('default', function() {
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('pug/*.pug', gulp.series('pug'));
});
