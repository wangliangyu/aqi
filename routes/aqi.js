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
	let city = req.query.city;
	let station = req.query.station;
	let startDate = req.query.startDate;
	let endDate = req.query.endDate;

	if(!city || !station || !startDate || !endDate){
		return res.json({err: '参数异常'});
	}

	let conditions = {
		area: city,
		position_name: station,
		time_point:{
			$gte: startDate,
			$lte: endDate
		}
	};

	ALL.find(conditions, function (err, result) {
		if(err){
			return res.end('query aqi failed', err);
		}

		res.json(result);
	});

});

module.exports = router;