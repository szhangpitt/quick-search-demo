'use strict';

var $ = require('jquery');
var service = require('./service');
var render = require('./render');
var mapper = require('./mapper');
var $target = $('#target');

// $target.html('something');

service.search('zhang')
.then(function (res) {
    return res.data.items;
})
.then(mapper)
.then(function (items) {
    var tbody = render(items);
    $target.find('tbody').replaceWith(tbody);

    var thead = render.thead(items);
    $target.find('thead').replaceWith(thead);
});
