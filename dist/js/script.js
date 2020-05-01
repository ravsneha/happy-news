"use strict";

var url = 'http://newsapi.org/v2/everything?' + 'q=Apple&' + 'from=2020-04-30&' + 'sortBy=popularity&' + 'apiKey=abb657dbf02941289a4e3c844b2f644c';
var req = new Request(url);
fetch(req).then(function (response) {
  console.log(response.json());
});