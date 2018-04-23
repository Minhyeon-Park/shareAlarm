var express = require('express');
var router = express.Router();
var mysql_dbc = require('../bin/db-con')();
var connection = mysql_dbc.init();
/* GET users listing. */
//shareAlarm://alarmAdd?uuid=sjklfelijfklsjflasf alarm link rule
//
// router.post('/',function(req,res,next){
//     var params = {};
//     params = req.body; //추가 모듈에서 처리 하는 body parser 를 사용
//     console.log(params.title);
//     res.send('good');
//
// });
router.all('/',function(req,res,next){
    var params = {};
    if(req.method==='GET'){ // req.query 에서 꺼낸다
        params = req.query;
    }else if (req.method ==='POST'){
        params = req.body; //추가 모듈에서 처리 하는 body parser 를 사용
        var alarmInit = { "alarm_uuid"   : params.alarm_uuid ,
                          "repeat_cd"    : params.repeat_cd,
                          "time"         : params.time,
                          "date"         : params.date,
                          "repeat_day"   : params.repeat_day,
                          "alarm_type"   : params.alarm_type,
                          "alarm_music"   : params.alarm_music,
                          "alarm_volume" : params.alarm_volume
                        }

        connection.connect();
        connection.query('insert into alarm set ? ', alarmInit,function(err,result){
            if(!err)
                res.json({shareUrl : 'happyjoy1234.iptime.org:8999/alarms?uuid='+params.alarm_uuid});
            else
                throw err;
        });
        connection.end();


    }

});
module.exports = router;
