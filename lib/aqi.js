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
let getData = function (dataName) {
	setTimeout(function () {
		aqi.getAqi(dataName).then(function (arrayData) {
			logger.info('start insert data into ' + dataName + '...', arrayData.length);
			let Schema = aqiMap[dataName];
			Schema.insertMany(arrayData, (err, result) => {
				if (err) {
					logger.error('insert into ' + dataName + '  failed', err);
				}
			});
		}).catch(function (e) {
			logger.error('get ' + dataName + ' data failed', e);
		});
		setTimeout(arguments.callee, config.timeInterval);
	}, config.timeInterval);
};

getData('all_cities');
getData('aqi_ranking');
