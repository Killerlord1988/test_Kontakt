var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    imagemin = require('gulp-imagemin'),
    paths = require('./paths');

gulp.task('images', function() {
    return gulp.src(paths.images.src())
        .pipe(imagemin({
          progressive: true,
          optimizationLevel: 5
        }))
        .pipe(gulp.dest(paths.images.dist()))
        .pipe(reload({ stream: true }));
});