const STATION = require('../dto/station');
const stationArr = require('../dao/all_cities.json');
const logger = require('../common/logger').logger;

let cityArr = [];
let cityObj = {};
let newArr = [];
let newObj = {
	area:'',
	stations:newArr
};

let newStationArr = stationArr.sort(function (stationA, stationB) {
	return stationA.area.localeCompare(stationB.area);
});
console.log('newStationArr', newStationArr);
newStationArr.forEach(function(station){
	if(!cityObj[station.area]){
		cityArr.push(newObj);
		cityObj[station.area] = station.area;

		newArr = [];
		newObj = {
			area:'',
			stations:newArr
		};

		newObj.area = [station.area];
		newArr.push(station.position_name);

	}else{
		/**
		 * 两种情况
		 * 1. 城市按顺序排列
		 * 2. 城市不按顺序排列
		 */
		newArr.push(station.position_name);
		newObj = {
			area: station.area,
			stations: newArr
		}
	}
});
cityArr.shift();
console.log('cityArr', cityArr, cityArr.length);

STATION.insertMany(cityArr, (err, res) => {
	if (err) {
		logger.error('insert into stations failed', err);
		return;
	}
	logger.info('insert data into stations success');
});