// Пока вручную каждый файл, но эффект огромный, так что того стоит

// const gulp = require('gulp');
// const gutil = require('gulp-util');
// const critical = require('critical').stream;
//
// gulp.task('critical', function () {
//   return gulp.src('dist/*.html')
//       .pipe(critical({base: 'dist/', inline: true, css: 'dist/css/styles.css'}))
//       .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
//       .pipe(gulp.dest('dist'));
// });