const express = require('express');
const router = express.Router();
const RANK = require('../dto/aqi_ranking');

router.get('/rank', function (req, res) {
	let condition = {time_point: '2017-11-30T16:00:00Z'};
	let fields = "aqi pm2_5 position_name time_point";
	RANK.find(condition, fields, function (err, result) {
		if (err) {
			return res.json(err);
		}
		res.json(result);
	});
});

const data = require('../dao/nanjing.json');
router.get('/nanjing', function (req, res, next) {
	res.json(data);
});

module.exports = router;