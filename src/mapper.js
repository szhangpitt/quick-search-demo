'use strict';

var pick = require('lodash.pick');
var bind = require('lodash.bind');

module.exports = function map (items) {
    return items.map(bind(pick, null, bind.placeholder, ['login', 'id', 'html_url']));
};
