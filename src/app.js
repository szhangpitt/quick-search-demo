'use strict';

var $ = require('jquery');
var service = require('./service');

var $target = $('#target');

// $target.html('something');

service.search('zhang')
.then(function (res) {
    console.log('res', res);
});
