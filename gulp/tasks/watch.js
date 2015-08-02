import gulp from 'gulp';

gulp.task('watch', ['setWatch', 'browserSync'], () => {
  gulp.watch('app/stylesheets/**', ['sass']);  
});
