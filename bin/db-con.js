var mysql = require('mysql');
var config = require('../conf/dbInfo');

// module.exports= function(){
//
//         console.log(config().real.host);
//
// }
// ;

module.exports= function(){
    return {
        init : function (){
            return mysql.createConnection(config().real)
        }
    }
};

