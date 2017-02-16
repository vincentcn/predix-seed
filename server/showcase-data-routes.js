var glob = require("glob");
var path = require("path");
var _ = require("lodash");

var getRoutes = function() {
  var files = ['record-data', 'record-layout'];
  var routes = {};
  _.each(files, function(file) {
    var filePath = './sample-data/showcase-data/' + file + '.json';
    routes[file] = require(path.resolve(__dirname, filePath));;
  });

  return routes;
};

// export the routes to be used in express/json-server in app.js
module.exports = function() {
  return getRoutes();
};
