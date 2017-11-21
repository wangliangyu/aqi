const aqi = require('./index');
const ALL = require('../dto/all_cities');
const RANK = require('../dto/aqi_ranking');
const config = require('../config');
const logger = require('../common/logger').logger;
const aqiMap = {
    all_cities: ALL,
    aqi_ranking: RANK
};

/**
 * 获取数据的主程序
 * @param dataName
 */
let getData = function(dataName){
    setTimeout(function() {
        logger.info('start insert data into ' + dataName + '...');
        aqi.getAqi(dataName).then(function (data) {
            data.forEach(function (station) {
                let Schema = aqiMap[dataName];
                new Schema(station).save(function (err, result) {
                    if (err) {
                        return logger.error('insert into '+ dataName +'  failed', err);
                    }
                    // logger.info('insert into ' + dataName + ' succeed', result);
                });
            });
        }).catch(function (e) {
            logger.error('get ' + dataName + ' data failed', e);
        });
        setTimeout(arguments.callee, config.timeInterval);
    }, config.timeInterval);
};

getData('all_cities');
getData('aqi_ranking');
