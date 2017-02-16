'use strict';
const merge = require('merge-stream');

// ------------------------------------------------
//   Task: Copy all deployment files to Dist folder
// ------------------------------------------------

module.exports = function(gulp) {
  return function() {
    var index = gulp.src(['public/index.html']).pipe(gulp.dest('./dist/public/max'));
    var index_styles = gulp.src(['public/index-inline-styles.html']).pipe(gulp.dest('./dist/public/max'));
    var px_theme_styles = gulp.src(['public/bower_components/px-theme/px-theme-styles.html']).pipe(gulp.dest('./dist/public/max/common'));
    var polymer = gulp.src(['public/bower_components/polymer/polymer.html']).pipe(gulp.dest('./dist/public/max'));
    
    var demo_data = gulp.src(['public/bower_components/px-demo-data/demo-data/aviation/*.json']).pipe(gulp.dest('./dist/public/max/demo-data/aviation'));
    var sample_data = gulp.src(['server/sample-data/**/*']).pipe(gulp.dest('./dist/public/max/sample-data'));
    var fonts1 = gulp.src(['public/bower_components/font-awesome/fonts/*']).pipe(gulp.dest('./dist/public/max/font-awesome/fonts'));
    var fonts2 = gulp.src(['public/bower_components/font-awesome/fonts/*']).pipe(gulp.dest('./dist/public/max/elements/font-awesome/fonts'));

    var server = gulp.src(['server/**/*.*']).pipe(gulp.dest('./dist/server'))
    var packageFile = gulp.src(['package.json']).pipe(gulp.dest('dist'));

    return merge(index, index_styles, px_theme_styles, polymer,demo_data, sample_data, fonts1,fonts2, server, packageFile);
  };
};
