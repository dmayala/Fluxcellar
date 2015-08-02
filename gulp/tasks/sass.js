import gulp from 'gulp';
import sass from 'gulp-sass';
import handleErrors from '../util/handleErrors';

gulp.task('sass', () => {
  gulp.src('./app/stylesheets/*.scss')
    .pipe(sass({
      includePaths: [
        './node_modules/bootstrap-sass/assets/stylesheets'
      ]
    }))
    .pipe(gulp.dest('./public/css'));
});
