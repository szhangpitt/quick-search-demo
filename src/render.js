'use strict';

// '<tbody>' +
//     '<tr>'
//         '<td>shaopeng</td>'
//         '<td>sz</td>'
//     '</tr>'
// '</tbody>'

function tr (item) {
    var tds = Object.keys(item).reduce(function (html, key) {
        var htmlNow = html;

        var tdHtml = wrapTd(item[key]);

        htmlNow = htmlNow + tdHtml;

        return htmlNow;
    }, '');

    return '<tr>' + tds + '</tr>';
}

function tbody (items) {
    return '<tbody>' +

    items.map(tr).join('') +

    '</tbody>';
}

function thead (items) {
    return wrap('thead',
        Object.keys(items[0]).map(wrapTd).join('')
    );
}

function wrap (tag, content) {
    return '<' + tag + '>' +
        content +
    '</' + tag + '>';
}

function wrapTd (content) {
    return wrap('td', content);
}

module.exports = tbody;
module.exports.thead = thead;
