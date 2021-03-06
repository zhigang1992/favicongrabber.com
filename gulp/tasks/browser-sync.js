const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync:reload', (done) => {
  browserSync.reload();
  return done();
});

gulp.task('browser-sync:init', (done) => {
  browserSync.init({
    server: {
      baseDir: 'build/',
      index: 'home.html',
      serveStaticOptions: { extensions: ['html'] },
    },
    open: true,
    ui: false,
    notify: false,
  }, done);

  gulp.watch('build/**/*', gulp.series('browser-sync:reload'));
});
