function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask

// inject bower components
gulp.task('wiredep', () => {
    // gulp.src('app/styles/*.scss')
    //   .pipe($.filter(file => file.stat && file.stat.size))
    //   .pipe(wiredep({
    //     ignorePath: /^(\.\.\/)+/
    //   }))
    //   .pipe(gulp.dest('app/styles'));
  
    gulp.src('app/**/index.html')
      .pipe(wiredep({
        exclude: ['bootstrap'],
        ignorePath: /^(\.\.\/)*\.\./
      }))
      .pipe(gulp.dest('app'));
  });