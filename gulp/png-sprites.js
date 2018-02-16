const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const buffer = require('vinyl-buffer');
const csso = require('gulp-csso');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');

gulp.task('png-sprites', function () {
  const spriteData = gulp.src('src/images/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm: 'top-down'
  }));

  const imgStream = spriteData.img
      .pipe(buffer())
      .pipe(imagemin())
      .pipe(gulp.dest('src/scss/components/icons/'));

  const imgDoubling = imgStream
      .pipe(gulp.dest('dist/css/'));

  const cssStream = spriteData.css
      .pipe(csso())
      .pipe(gulp.dest('src/scss/'));

  return merge(imgStream, cssStream, imgDoubling);
});