var gulp = require('gulp');
var browserSync = require('browser-sync');
gulp.task('default', ['server']);
gulp.task('reload', function () {
    browserSync.reload();

});

gulp.task('server', function () {
    browserSync({
        server: 'src'
    });

    gulp.watch('src/*.html', ['reload']);
    gulp.watch('src/*.css', ['reload'])
});


