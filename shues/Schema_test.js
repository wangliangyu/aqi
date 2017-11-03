var mongodb = require('../common/mongodb');
var Schema = mongodb.Schema;

var Student_Schema = new Schema({
    name: String,
    id: Number,
    phone: String
});

module.exports = mongodb.model('Student', Student_Schema);