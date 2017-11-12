var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kat',function(req,res){
  res.sendFile(path.join(__dirname+'/kat.html'));
});

module.exports = router;
