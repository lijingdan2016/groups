
var express = require('express');
var router = express.Router();
const db = require('../model/database.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/data2',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain;charset="utf-8"');
  const sql ='select * from score';
  db.query(sql,(err,result)=>{
    res.send(result);
    console.log(result);
    });
})

module.exports = router;
