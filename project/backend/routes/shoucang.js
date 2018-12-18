const express = require('express');
var router = express.Router();
const db = require('../model/database.js');

//收藏时插入数据库
router.post('/sc',function(req,res){
  var tz_id = req.body.tzid;
  var click_user = req.body.uid;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = 'insert into shoucang values(?,?)';
  if(tz_id && click_user){
      db.query(sql,[tz_id,click_user],(err,result)=>{
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

router.post('/del',function(req,res){
  var tz_id = req.body.tzid;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset = "utf-8"');
  const del = 'delete from shoucang where tz_id = '+tz_id;
  if(tz_id){
    db.query(del,[tz_id],(err,result) => {
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
