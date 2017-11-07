const aqi = require('./index');
const PM10 = require('../dto/pm10');

function aqiGetter() {
    setInterval(function () {
        console.log('---------------');
        aqi.getAqi().then(function (data) {
            data.forEach(function (station) {
                new PM10(station).save(function(err, res) {
                    if(err){
                        return console.error('insert into mongodb failed', err);
                    }
                    console.log('insert into mongodb succeed', res);
                });
            });
        }).catch(function (err) {
            res.json(err);
        });
    }, 3600*1000);//时间间隔写到配置文件中
}

exports.aqiGetter = aqiGetter;
