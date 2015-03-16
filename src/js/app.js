// @file app.js
(function () {
    'use strict';

    var Hello = require('./components/hello');

    var hello = new Hello();

    document.write(hello.message);
})();
