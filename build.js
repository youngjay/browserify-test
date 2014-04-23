var browserify = require('browserify');
var fs = require('fs');
var through = require('through');


(function() {
    var b = browserify({
        basedir: './src'
    });

    b.require('./robot')

    b.bundle({
    }).pipe(fs.createWriteStream('./src/static/common.js'));
})();


(function() {
    var b = browserify({
    });

    b.require('events')

    b.bundle({
    }).pipe(fs.createWriteStream('./src/static/es.js'));
})();

(function() {
    var b = browserify({
        basedir: './src'
    });

    b.require('./beep', {
        entry: true
    });

    b.require('./robot', {
        external: true
    });

    b.require('event-stream', {
        external: true
    })

    b.bundle({
    }).pipe(fs.createWriteStream('./src/static/beep.js'));
})();

