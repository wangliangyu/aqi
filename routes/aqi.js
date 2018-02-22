const express = require('express');
const router = express.Router();
const RANK = require('../dto/aqi_ranking');
const ALL = require('../dto/all_cities');
const STATION = require('../dto/station');

router.get('/station', function (req, res) {
	let city = req.query.city;

	STATION.find({area: city}, function (err, result) {
		if(err){
			return res.end('query stations failed', err);
		}
		if(!Object.is(0, result.length)){
			res.json(result[0].stations);
		}else{
			res.json(result);
		}
	});
});

router.get('/', function (req, res) {
	let data = req.query;

	let city = data.city;
	let station = data.station;
	let dateRange = data.dateRange;
	let index = data.index;

	if(!city || !station || !dateRange || !index){
		return res.json({err: '参数异常'});
	}

	let conditions = {
		area: city,
		position_name: station,
		time_point:{
			$gte: dateRange[0] + 'T00:00:00Z',
			$lte: dateRange[1] + 'T24:00:00Z'
		}
	};

	let projection = ['area', 'position_name',"time_point", index];

	ALL.find(conditions, projection, function (err, result) {
		if(err){
			return res.end('query aqi failed', err);
		}

		res.json(result);
	});

});

module.exports = router;