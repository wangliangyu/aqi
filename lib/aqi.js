const aqi = require('./index');
var PM10 = require('../dto/pm10');

setInterval(function () {
    aqi.getAqi().then(function (data) {
        data.forEach(function (station) {
            new PM10(station).save(function(err, resp) {
                if(err){
                    console.error('e', e);
                }
            });
        });
    }).catch(function (err) {
        res.json(err);
    });
},3600*1000);//事件写到配置文件中
