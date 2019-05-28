const express = require('express');
var router = express.Router();
const db = require('../model/database.js');

//发布帖子时插入数据库
router.post('/tz',function(req,res){
  var user_id = req.body.uid;
  var tiezi_content = req.body.content;
  var tiezi_date = req.body.date;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = 'insert into tiezi(user_id,tiezi_content,tiezi_date) values(?,?,?)';
  if(user_id && tiezi_content && tiezi_date){
      db.query(sql,[user_id,tiezi_content,tiezi_date],(err,result)=>{
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
router.get('/tzlength',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"')
    const sql = 'select tiezi_id from tiezi';
db.query(sql,(err,result)=>{
  res.send(result);
})
})





module.exports = router;
