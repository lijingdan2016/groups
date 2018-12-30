const express = require('express');
var router = express.Router();
const db = require('../model/database');

router.get('/',function(req, res, next) {
    res.send('respond with a resource');

});

router.get('/data2',function(req,res){
   var stu=req.body.stuid;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain;charset="utf-8"');
   
  const sql ='select chinese,math,english from score where stu_id=?';
  db.query(sql,[stu],(err,result)=>{
    res.send(result);
    console.log(result);
    });
})
router.post('/luru',function(req,res){
  console.log(111);
  var score1= req.body.chinese;
    var score2= req.body.math;
    var score3= req.body.english;
    var user=req.body.userid;
       var stu=req.body.stu;
     var time=req.body.time1;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain;charset="utf-8"');
  const sql='insert into score(user_id,chinese,math,english,stu_id,exam_data) values(?,?,?,?,?,?)'; 
 if(score1 && score2 && score3 && user && stu){
  db.query(sql,[user,score1,score2,score3,stu,time1],(err,result)=>{
    if(err){
                console.error("Error:",err);
                          process.exit();
                                  
    }
            console.log(result);
               
  });
});

module.exports = router;
