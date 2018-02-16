var gulp = require("gulp"),
    paths = require('./paths'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('vendors', () => {
    gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
            'node_modules/inputmask/dist/inputmask/inputmask.js',
            'node_modules/ion-rangeslider/js/ion.rangeSlider.min.js'
        ])
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest(paths.vendors.dist()));
});