const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/public/styles'));
});

gulp.task('default',function() {
    gulp.watch('src/sass/**.scss',['styles']);
});
