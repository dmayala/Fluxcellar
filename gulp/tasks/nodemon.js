import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';

gulp.task('nodemon', () => {
  nodemon({
    script: './bin/www',
    ext: 'js html',
    ignore: [ 'client/*', 'node_modules/*']
  }).on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false });
    }, 1000);
  });
});
