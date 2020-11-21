const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgSpriteConfig = {
  mode: {
    symbol: {
      dest: 'svg-output',
      sprite: 'svg-sprite.svg'
    }
  }
}
gulp.src('img/svg-src/*.svg')
  .pipe(svgSprite(svgSpriteConfig))
  .pipe(gulp.dest('img/'));
