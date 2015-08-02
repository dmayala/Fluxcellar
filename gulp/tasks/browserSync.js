import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('browserSync', ['nodemon', 'build'], () => {
  browserSync({
    proxy: 'localhost:3000',
    port: 3001,
    files: [
      './public'
    ]
  });
});
