const express = require('express');
var router = express.Router();
const db = require('../model/database.js');

//点赞时插入数据库
router.post('/zan',function(req,res){
  var tiezi_id = req.body.tzid;
  var user_id = req.body.uid;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = 'insert into zan values(?,?)';
  if(tiezi_id && user_id){
      db.query(sql,[tiezi_id,user_id],(err,result)=>{
        if(err){
           console.error("Error:",err);
           process.exit();
         }
        console.log(result);
       });
      console.log(req.body);
      //console.log(req.body.name); 
    }
})

router.post('/zandata',function(req,res){
  var tiezi_id = req.body.tz_id;
  var zan = req.body.num;

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');

  const sum = 'update tiezi set zan = ' + zan + ' where tiezi_id = ' + tiezi_id;
  if(tiezi_id){
    db.query(sum,[zan,tiezi_id],(err,result) => {
      if(err){
        console.error("Error:",err);
        process.exit();
      }
      console.log(result);
    });
  }
})


//取消点赞
router.post('/del',function(req,res){
  var tiezi_id = req.body.tzid;
  var user_id = req.body.uid; 
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');

  const del = 'delete from zan where tiezi_id = '+ tiezi_id + ' and user_id = ' + user_id;
  if(tiezi_id){
    db.query(del,[tiezi_id,user_id],(err,result) => {
      if(err){
        console.error("Error:",err);
        process.exit();
      }
      console.log(result);
    });
    console.log(req.body);
  }
})




module.exports = router;
