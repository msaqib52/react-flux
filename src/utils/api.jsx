var React = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '17f38663c4fe5c7';

module.exports = {
  get: function(path) {
    return fetch(rootUrl + path, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    })
  }
}
