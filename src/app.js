'use strict';

var $ = require('jquery');
var service = require('./service');
var render = require('./render');
var $target = $('#target');

// $target.html('something');

// service.search('zhang')
// .then(function (res) {
//     console.log('res', res);
// });

console.log(
    render([
        { name: 'Shaopneg', url: 'sz' },
        { name: 'Jaret',    url: 'jf' },
        { name: 'Sunil',    url: 'sr' },
        ]))