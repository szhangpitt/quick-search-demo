'use strict';

var service = require('./service');
var render = require('./render');
var mapper = require('./mapper');


var ui = require('./ui');
var uiInput = ui.getInput();
var uiSearch = ui.getSearch();
var uiForm = ui.getForm();

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
        ui.setTbody(tbody);

        var thead = render.thead(items);
        ui.setThead(thead);
    });
}
