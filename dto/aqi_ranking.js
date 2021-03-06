const mongodb = require('../common/mongodb');
const Schema = mongodb.Schema;

const RANK_Schema = new Schema({
    aqi: Number,
    area: String,
    co: Number,
    co_24h: Number,
    no2: Number,
    no2_24h: Number,
    o3: Number,
    o3_24h: Number,
    o3_8h: Number,
    o3_8h_24h: Number,
    pm10: Number,
    pm10_24h: Number,
    pm2_5: Number,
    pm2_5_24h: Number,
    so2: Number,
    so2_24h: Number,
    level: String,
    primary_pollutant: String,
    quality: String,
    time_point: String
});

module.exports = mongodb.model('RANK', RANK_Schema);