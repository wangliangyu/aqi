const log4js = require('log4js');

log4js.configure({
    appenders: {
        out: { type: 'console' },
        cheese: {
            type: 'dateFile',
            filename: 'logs/cheese.log',
            pattern: '-yyyy-MM-dd',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'debug'
        },
        cheese: {
            appenders: ['cheese'],
            level: 'info'
        }
    }
});

exports.logger = log4js.getLogger('cheese');