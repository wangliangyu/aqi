var request = require('request');

exports.getAqi = function (callback) {
  var uri = 'http://www.pm25.in/api/querys/pm10.json?city=nanjing&token=5j1znBVAsnSf5xQyNQyq';
  request(uri, {json: true},function (error, response, body) {
    if(error || !body){
      callback('request failed');
    }
    callback(body);
  });
};