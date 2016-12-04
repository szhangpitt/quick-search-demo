'use strict';

var axios = require('axios');

var service = axios.create({
    baseURL: 'https://api.github.com',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

function search (userQ) {
    var options = {
        method: 'GET',
        url: '/search/users',
        params: {
            q: userQ
        }
    };

    return service(options);
}

module.exports.search = search;
