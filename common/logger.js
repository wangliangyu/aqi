const log4js = require('log4js');

log4js.configure({
	appenders: {
		out: {type: 'console'},
		aqi: {
			type: 'dateFile',
			filename: 'logs/aqi.log',
			pattern: '-yyyy-MM-dd',
			alwaysIncludePattern: true
		}
	},
	categories: {
		default: {
			appenders: ['out'],
			level: 'debug'
		},
		aqi: {
			appenders: ['aqi'],
			level: 'info'
		}
	}
});

exports.logger = log4js.getLogger('aqi');