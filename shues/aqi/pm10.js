var mongodb = require('../../common/mongodb');
var Schema = mongodb.Schema;

var PM10_Schema = new Schema({
    aqi: Number,
    area: String,
    pm10: Number,
    pm10_24h: Number,
    position_name: String,
    primary_pollutant: String,
    quality: String,
    station_code: String,
    time_point: String
});

module.exports = mongodb.model('Student', PM10_Schema);