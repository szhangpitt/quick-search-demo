'use strict';

var service = require('./service');
var render = require('./render');
var mapper = require('./mapper');

service.search('zhang')
.then(function (res) {
    return res.data.items;
})
.then(mapper)
.then(function (items) {
    var tbody = render(items);
    document.querySelector('tbody').outerHTML = tbody;

    var thead = render.thead(items);
    document.querySelector('thead').outerHTML = thead;
});
