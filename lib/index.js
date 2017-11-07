const request = require('request');

function getAqi() {
    let uri = 'http://www.pm25.in/api/querys/pm10.json';//传参数
    let data = {
        qs:{
            city: 'nanjing',//传参数
            token:'5j1znBVAsnSf5xQyNQyq' //写到配置文件中
        },
        json: true
    };
    let promise = new Promise(function (resolve, reject) {
        request(uri, data, function (error, response, body) {
            if(error || !body){
                //设置一个重试次数，作为参数传进来
                return getAqi();
            }
            resolve(body);
        });
    });
    return promise;
}

exports.getAqi = getAqi;