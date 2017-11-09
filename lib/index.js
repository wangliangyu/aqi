const request = require('request');
const config = require('../config');

function getAqi(dataName) {
    let uri = 'http://www.pm25.in/api/querys/' + dataName + '.json';
    let data = {
        qs: {
            // city: 'nanjing',
            token: config.aqiToken
        },
        json: true
    };
    let promise = new Promise(function (resolve, reject) {
        request(uri, data, function (error, response, body) {
            if (error || !body) {
                //设置一个重试次数，作为参数传进来
                return getAqi();
            }
            if (Array.isArray(body)) {
                resolve(body);
            } else {
                reject(body);
            }

        });
    });
    return promise;
}

exports.getAqi = getAqi;