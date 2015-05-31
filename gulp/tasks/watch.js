import gulp from 'gulp';

gulp.task('watch', ['setWatch', 'browserSync'], () => {
  gulp.watch('client/src/css/**', ['sass']);  
});
