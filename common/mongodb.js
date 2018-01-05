const mongoose = require("mongoose");
const logger = require('./logger').logger;
const config = require('../config');

mongoose.connect(config.mongodb, {
	useMongoClient: true,
	poolSize: 10
});

mongoose.Promise = global.Promise;
/*调试模式，查看mongoose模块对mongodb操作的日志*/
mongoose.set('debug', true);

mongoose.connection.on("error", function (error) {
	logger.error("数据库连接失败：" + error);
});

mongoose.connection.on("connected", function () {
	logger.info('Mongoose connected');
});

mongoose.connection.on('disconnected', function () {
	logger.error('Mongoose disconnected');
});

module.exports = mongoose;