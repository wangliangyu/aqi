const mongodb = require('../common/mongodb');
const Schema = mongodb.Schema;

const PM10_Schema = new Schema({
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

module.exports = mongodb.model('PM10', PM10_Schema);