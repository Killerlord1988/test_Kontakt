const gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence('clean', ['html', 'scss', 'svg', 'png-sprites', 'vendors', 'webpack', 'fonts', 'mock'],
      'images',
		  'favicon',
      'browserSync',
      'watch',
      callback
  );
});