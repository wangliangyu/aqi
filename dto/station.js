const mongodb = require('../common/mongodb');
const Schema = mongodb.Schema;

const Station_Schema = new Schema({
	area: String,
	stations: Array
});

module.exports = mongodb.model('STATION', Station_Schema);