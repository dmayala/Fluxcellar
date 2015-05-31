import gulp from 'gulp';
import sass from 'gulp-sass';
import handleErrors from '../util/handleErrors';

gulp.task('sass', () => {
  gulp.src('./client/src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./client/dist/css'));
});
