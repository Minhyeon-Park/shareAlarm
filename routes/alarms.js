var express = require('express');
var router = express.Router();
var mysql_dbc = require('../bin/db-con')();
var connection = mysql_dbc.init();

router.all('/',function(req,res,next){
    var result = '';
    var params = {};
    if(req.method==='GET'){ // req.query 에서 꺼낸다
        params = req.query;
        var stmt =   'select alarm_uuid,'+
            'repeat_cd,'+
            'time,' +
            'date,' +
            'repeat_day,' +
            'alarm_type,' +
            'alarm_music,' +
            'alarm_volume' +
            ' from alarm where alarm_uuid = ' +
            +params.uuid;
        connection.connect();
        connection.query(stmt,function(err,row,next){
            if(!err){
                res.json(row);
                // console.log(result);
                // console.log(row);
            }
            else
                throw err;
        });
        connection.end();
    }else if (req.method ==='POST'){
        ;
    }

});
module.exports = router;
