var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: '/home/panchen/workspace/aqi/uploads/' });
var wechat = require('wechat');
var request = require('request');

/* GET wechat listing. */
router.use('/', wechat('pc565390523').text(function (message, req, res, next) {
    console.log('text message', message);
    var data = {
        json:{
            key: "19fa5069e6084a47b2c22dfade3bba1c",
            info: message.Content,
            // loc:"北京市中关村",
            "userid":message.FromUserName
        }
    };
    request.post('http://www.tuling123.com/openapi/api',data,function (err, resp, body) {
        console.log('err',err,'body',body);
        if(err){
            return res.reply('路人甲故障中。。。');
        }
        res.reply(body.text);
    });
}).image(function (message, req, res, next) {
    console.log('image message', message);
    res.reply('大兄弟，图片功能还没开放呢，过两天再来');
}).voice(function (message, req, res, next) {
    console.log('voice message', message);
    res.reply('大兄弟，语音功能还没开放呢，过两天再来');
}).video(function (message, req, res, next) {
    console.log('video message', message);
    res.reply('大兄弟，视频功能还没开放呢，过两天再来');
}).location(function (message, req, res, next) {
    console.log('location message', message);
    res.reply('大兄弟，定位功能还没开放呢，过两天再来');
}).link(function (message, req, res, next) {
    console.log('link message', message);
    res.reply('大兄弟，链接功能还没开放呢，过两天再来');
}).event(function (message, req, res, next) {
    console.log('event message', message);
    res.reply('大兄弟，事件功能还没开放呢，过两天再来');
}).device_text(function (message, req, res, next) {
    console.log('device_text message', message);
    res.reply('大兄弟，设备文本功能还没开放呢，过两天再来');
}).device_event(function (message, req, res, next) {
    console.log('device_event message', message);
    res.reply('大兄弟，设备事件功能还没开放呢，过两天再来');
}).middlewarify());

router.post('/profile', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log('file', req.file);
    console.log('body', req.body);
    res.end('1233');
});

module.exports = router;
