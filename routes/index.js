const express = require('express');
const router = express.Router();
const data = require('../dao/nanjing.json');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.json('10086');
});

module.exports = router;