const log4js = require('log4js');

log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'logs/cheese.log',
            pattern: "-dd.log",
            alwaysIncludePattern:true
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'info'
        }
    }
});

exports.logger = log4js.getLogger('cheese');