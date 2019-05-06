module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log("Combined data ", data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
};