const express = require('express');
var router = express.Router();
const db = require('../model/database.js');

//发布帖子时插入数据库
router.post('/tz',function(req,res){
  var tz_id = req.body.tzid;
  var user_id = req.body.uid;
  var tz_content = req.body.content;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = 'insert into tiezi values(?,?,?)';
  if(tz_id && user_id && tz_content){
      db.query(sql,[tz_id,user_id,tz_content],(err,result)=>{
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


//获取帖子总数
router.get('/ttzz',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset = "utf-8"');
  const shu = 'select count(*) from tiezi';
  console.log('23142353');
  db.query(shu,(err,result) => {
    if(err){
      console.error("Error:",err);
      process.exit();
    }
    res.send({
      data:result
    });
  });
  console.log(req.body);
})


module.exports = router;
