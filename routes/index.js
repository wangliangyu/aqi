var express = require('express');
var router = express.Router();
var Student = require('../shues/db_aqi');
var logger = require('../common/logger').logger;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('hello world!');
});

router.get('/1234', function(req, res, next) {

    var sam = new Student({
        name: "sam10086",
        id: 1234,
        phone: "44418706888888"
    });

    sam.save(function(err, resp) {
        if(err){
            console.error('e',e);
        }
        res.send('1008611111');
    });
});

module.exports = router;
