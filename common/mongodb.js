var mongoose = require("mongoose");
var logger = require('./logger').logger;
var mongodb = mongoose.connect('mongodb://localhost:27017/aqi');

mongoose.Promise = global.Promise;
/*调试模式，查看mongoose模块对mongodb操作的日志*/
mongoose.set('debug', true);

mongodb.connection.on("error", function (error) {
    logger.error("数据库连接失败：" + error);
});

mongodb.connection.on("connected", function () {
    console.log('Mongoose connected');
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

module.exports = mongoose;