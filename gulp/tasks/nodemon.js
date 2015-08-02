import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';

gulp.task('nodemon', () => {
  nodemon({
    script: './server',
    exec: 'babel-node --stage 0 --optional runtime',
    ignore: [ 'node_modules/*' ]
  }).on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false });
    }, 2000);
  });
});
