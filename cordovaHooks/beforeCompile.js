module.exports = function(ctx) {

    var del    = require('del');
    var config = require('../ionic.config');
    var path   = 'platforms/**/assets' + '/' + [config.paths.test.dest];

    console.log('Removing test build from assets before compilation: del(' + path + ')');
    return del(path);
};
