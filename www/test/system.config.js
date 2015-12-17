System.config({
  meta: {
      'angular2/angular2':{
          format: 'register'
      }
  }
});

require('es6-promise').polyfill();
throw 'hello';
var es6Promise = require('es6-promise').Promise;

// es6-promise asap should schedule microtasks via zone.scheduleMicrotask so that any
// user defined hooks are triggered
es6Promise._setAsap(function(fn, arg) {
  global.zone.scheduleMicrotask(function() {
    fn(arg);
  });
});
