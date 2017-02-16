'use strict';

// -------------------------------------------
//   Task: Compile: Vulcanize seed-app element
// -------------------------------------------

const vulcanize = require('gulp-vulcanize');

module.exports = function(gulp) {
  return function () {
    return gulp.src([
      'public/elements/common/common.html',
      ], { base: 'public/elements/' })
      .pipe(vulcanize({
        abspath: '',
        excludes: [
        ],
        stripComments: true,
        inlineCss: true,
        inlineScripts: true
      }))
      .pipe(gulp.dest('dist/public/max/elements/'));
  };
};
