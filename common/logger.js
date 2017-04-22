var log4js = require('log4js');

log4js.configure({

    appenders: [
        {
            type: 'console',
            category: "console"
        }, //控制台输出
        {
            type: "file",
            filename: 'logs/access.log',
            pattern: "_yyyy-MM-dd",
            maxLogSize: 20480,
            backups: 3,
            category: 'dateFileLog'

        }//日期文件格式
    ],
    replaceConsole: true,   //替换console.log
    levels:{
        dateFileLog: 'debug',
        console: 'debug'
    }
});


var dateFileLog = log4js.getLogger('dateFileLog');
var consoleLog = log4js.getLogger('console');
exports.logger = dateFileLog;


exports.use = function(app) {
    app.use(log4js.connectLogger(consoleLog, {level:'INFO', format:':method :url'}));
};