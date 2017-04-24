var path = require('path');
var _ = require('lodash');

var root = path.normalize(__dirname + '/..');
console.log('PROJECT_PATH: ', root);

function requireProcessEnv(name) {
    if(!process.env[name]){
        throw new Error('you must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

var all = {
    env: process.env.NODE_ENV,
    root: root,
    port: process.env.PORT || 3000,
    ip: process.env.IP || '127.0.0.1'
};

var envFile = './' + requireProcessEnv('NODE_ENV') + '.js';
console.log('env load file path: ', envFile);
module.exports = _.merge(all, require(envFile) || {});