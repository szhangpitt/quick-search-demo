'use strict';

var expect = require('chai').expect;
var render = require('../src/render');

describe('render', function () {
    var items;

    beforeEach(function () {
        items = [
            { a: 1, b: 2 },
            { a: 3, b: 4 },
        ]
    })
    it('default tbody(items) --> <tbody>...</tbody>', function () {
        expect(render(items)).to.equal('<tbody><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></tbody>');
    });

    it('.thead(items) --> <thead>...</thead>', function () {
        expect(render.thead(items)).to.equal('<thead><td>a</td><td>b</td></thead>');
    });
});
