'use strict';

function get (selector, $) {
    var sel = $ || document.querySelector.bind(document);
    var ele = sel(selector);
    return ele;
}

module.exports.getInput  = get.bind(null, '#ui-input');
module.exports.getForm   = get.bind(null, '#ui-form');
module.exports.getSearch = get.bind(null, '#ui-search');
module.exports.getTbody  = get.bind(null, 'tbody');
module.exports.getThead  = get.bind(null, 'thead');

module.exports.setTbody  = function (outerHTML) {
    module.exports.getTbody().outerHTML = outerHTML;
};

module.exports.setThead  = function (outerHTML) {
    module.exports.getThead().outerHTML = outerHTML;
};
