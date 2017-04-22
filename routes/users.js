var express = require('express');
var router = express.Router();
var shues = require('../shues');

/* GET users listing. */
router.get('/', function(req, res) {
  shues.getAqi(function (data) {
    res.json(data);
  });
});

module.exports = router;
