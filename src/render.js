'use strict';

// '<tbody>' +
//     '<tr>'
//         '<td>shaopeng</td>'
//         '<td>sz</td>'
//     '</tr>'
// '</tbody>'

function td (text) {
    return '<td>' + text + '</td>';
}

function tr (item) {
    var tds = Object.keys(item).reduce(function (html, key) {
        var htmlNow = html;

        var tdHtml = td(item[key]);

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

module.exports = tbody;
