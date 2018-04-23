var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var uname = toString(req.userId);
  res.send(uname);
});

module.exports = router;
