var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/player1',function(req,res){
  res.sendFile(path.join(__dirname+'/player1.html'));
});

router.get('/player2',function(req,res){
  res.sendFile(path.join(__dirname+'/player2.html'));
});

module.exports = router;
