'use strict';

var service = require('./service');
var render = require('./render');
var mapper = require('./mapper');

var uiInput = document.querySelector('#ui-input');
var uiSearch = document.querySelector('#ui-search');
var uiForm = document.querySelector('#ui-form');

uiForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var q = uiInput.value;
    return issueSearch(q);
});

function issueSearch (q) {
    return service.search(q)
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
}
