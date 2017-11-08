const aqi = require('./index');
const PM10 = require('../dto/pm10');
const logger = require('../common/logger').logger;

function aqiGetter() {
    setInterval(function () {
        logger.info('start insert data...');
        aqi.getAqi().then(function (data) {
            data.forEach(function (station) {
                new PM10(station).save(function(err, res) {
                    if(err){
                        return logger.error('insert into mongodb failed', err);
                    }
                    logger.info('insert into mongodb succeed', res);
                });
            });
        }).catch(function (err) {
            res.json(err);
        });
    }, 3600*1000);//时间间隔写到配置文件中
}

exports.aqiGetter = aqiGetter;
