var gulp = require('gulp')
var gls = require('gulp-live-server')

gulp.task('LapApp', function() {
  //1. serve with default settings
  var server = gls.static('public',9090);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['public/**/*.css', 'public/**/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });

  gulp.watch('public/**/*..js', server.start.bind(server)); //restart my server

  // Note: try wrapping in a function if getting an error like `TypeError: Bad argument at TypeError (native) at ChildProcess.spawn`
  gulp.watch('public/**/*..js', function() {
    server.start.bind(server)()
  });
})

gulp.task('default', function() {
  // place code for your default task here
  console.log('Init gulp proccess... XD')
})
