var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload,
		paths = require('./paths');

gulp.task('favicon', function() {
	return gulp.src(paths.html.srcDir() + 'favicon.ico')
			.pipe(gulp.dest(paths.base.dist))
			.pipe(reload({ stream: true }));
});