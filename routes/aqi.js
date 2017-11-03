const express = require('express');
const router = express.Router();
const aqi = require('../lib');

router.get('/pm10', function(req, res, next) {
    aqi.getAqi().then(function (data) {
        res.json(data);
    }).catch(function (err) {
        res.json(err);
    });
});

module.exports = router;