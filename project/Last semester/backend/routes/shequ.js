const express = require('express');
var router = express.Router();
const db = require('../model/database.js');


router.post('/sq',function(req,res){
  var user_id = req.body.uid;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset = "utf-8"');
  const sql = 'select * from tiezi where user_id = ' + user_id;
  //if(user_id){
    db.query(sql,(err,result) => {
      if(err){
        console.error("Error:",err);
        process.exit();
      }
      res.send(JSON.stringify({
        data:result
      }));
    });
    console.log(req.body);
  //}
})

router.post('/es',function(req,res){
  var tiezi_id = req.body.tzid;

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset = "utf-8"');
  const sql = 'select * from tiezi where tiezi_id = ' + tiezi_id;
  db.query(sql,[tiezi_id],(err,result) => {
    if(err){
      console.error("Error:",err);
      process.exit();
    }
    res.send(JSON.stringify({
      data:result
    }));
  });
})



router.post('/sqtuijian',function(req,res){

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset = "utf-8"');
  const sql = 'select * from tiezi';
  db.query(sql,(err,result) => {
    if(err){
      console.error("Error:",err);
      process.exit();
    }
    res.end(JSON.stringify({
      data:result
    }));
  });
  console.log(req.body);
 })



module.exports = router;
