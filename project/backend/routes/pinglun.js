const express = require('express');
var router = express.Router();
const db = require('../model/database.js');

//发布帖子时插入数据库
router.post('/pl',function(req,res){
  var tiezi_id = req.body.tzid;
  var user_id = req.body.uid;
  var pinglun_content = req.body.content;
  var date = req.body.date;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = 'insert into pinglun(tiezi_id,user_id,pinglun_content,date) values(?,?,?,?)';
  if(user_id && pinglun_content && date){
      db.query(sql,[tiezi_id,user_id,pinglun_content,date],(err,result)=>{
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

router.post('/nr',function(req,res){
  var tiezi_id = req.body.tzid;

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');

  const plnr = 'select * from pinglun where tiezi_id = ' + tiezi_id;

  db.query(plnr,[tiezi_id],(err,result) => {
    if(err){
      console.error("Error:",err);
      process.exit();
    }
    res.send(JSON.stringify({
      data:result
    }))
  });
})




module.exports = router;
