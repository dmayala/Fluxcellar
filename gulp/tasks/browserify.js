/*
 *  browserify task 
 *  ----------------
 *  Bundle javascript things with browserify!
 *
 *  If the watch task is running, this uses watchify instead
 *  of browserify for faster bundling using caching.
 */

import browserify from 'browserify';
import babelify from 'babelify';
import debowerify from 'debowerify';
import watchify from 'watchify';
import bundleLogger from '../util/bundleLogger';
import gulp from 'gulp';
import handleErrors from '../util/handleErrors';
import source from 'vinyl-source-stream';

gulp.task('browserify', () => {
  let bundler = browserify({
    // required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // specify app entry point
    entries: [ './client/src/js/app.js' ],
    // file extensions
    extensions: [ '.js', '.jsx' ],
    // Enable source maps
    debug: true
  })
    .transform(babelify.configure({ stage: 0, optional: ['runtime'] }))
    .transform(debowerify);

  var bundle = function () {
    // log when bundling starts
    bundleLogger.start();
    bundler
      .bundle()
      // report compile error
      .on('error', handleErrors)
      // make stream gulp compatible -specify output name
      .pipe(source('app.js'))
      // specify output destination
      .pipe(gulp.dest('./client/dist/js'))
      // log when bundling completes
      .on('end', bundleLogger.end);
  }

  if (global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});

