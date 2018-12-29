const express = require('express');
var router = express.Router();
const db = require('../model/database');

router.get('/',function(req, res, next) {
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
router.post('/score33',function(req,res){
  console.log(111);
  var score1= req.body.score1;
    var score2= req.body.score2;
    var score3= req.body.score3;

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain;charset="utf-8"');
  const sql='insert into score(chinese,math,english) values(?,?,?)'; 
  db.query(sql,[score1,score2,score3],(err,result)=>{
    if(err){
        res.send('��ѯʧ�ܣ�'+err);
    }else{
        res.send(result);
        console.log(result);
    }
  })
});

module.exports = router;
