var express = require('express');
var router = express.Router();

/* GET users listing. */
//shareAlarm://alarmAdd?uuid=sjklfelijfklsjflasf alarm link rule
//
router.post('/',function(req,res,next){
    var params = {};
    params = req.body; //추가 모듈에서 처리 하는 body parser 를 사용
    console.log(params.title);
    res.send('good');

});
router.all('/',function(req,res,next){
    var params = {};
    if(req.method==='GET'){ // req.query 에서 꺼낸다
        params = req.query;
    }else if (req.method ==='POST'){
        params = req.body; //추가 모듈에서 처리 하는 body parser 를 사용
        res.send(params.title);
    }

});
module.exports = router;
