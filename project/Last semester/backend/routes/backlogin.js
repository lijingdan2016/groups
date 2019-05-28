const express = require('express');
var router = express.Router();
const db = require('../model/database');

//查询数据库表格里的内容
router.post('/search',function(req,res){
  var account=req.body.name;
  var password=req.body.password;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql =  "select * from admin where name = '"+ account +"'and password = '"+password+"' ";
  db.query(sql,(err,result)=>{
    if(err){
      res.send('查询失败：'+err);
    }else{
      res.send(result);

    }

})
    
});
module.exports = router;