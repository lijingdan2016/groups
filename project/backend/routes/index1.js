const express = require('express');
var router = express.Router();
const db = require('../model/database');

router.get('/',function(req, res, next) {
    res.send('respond with a resource');

});
//router.get('/data',function(req,res){
    
    //res.header('Access-Control-Allow-Origin','*');
    // res.header('Content-Type','text/plain;charset="utf-8"');
       // const sql ='select * from kech';
       // db.query(sql,(err,result)=>{
            // res.send(result);
             // console.log(result);
                      
  // });
//})


router.post('/search',function(req,res){
  console.log(111);
  var stu_id= req.body.userid;
  console.log(stu_id);
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain;charset="utf-8"');
  const sql = 'select * from kech where stu_id ='+stu_id;
  db.query(sql,[stu_id],(err,result)=>{
    if(err){
        res.send('查询失败：'+err);
    }else{
        res.send(result);
        console.log(result);
    }
  })
});

module.exports = router;
