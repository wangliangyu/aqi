const express = require('express');
const router = express.Router();
const PM10 = require('../dto/pm10');

router.get('/pm10', function(req, res) {
    let condition = {"position_name":"仙林大学城"};
    let fields = "aqi pm10 position_name time_point";
    PM10.find(condition, fields, function (err, result) {
        if(err){
            return res.json(err);
        }
        res.json(result);
    });
});

module.exports = router;