const express = require('express');
var router = express.Router();
const db = require('../model/database');

//利用家长的id获取学生的id
router.post('/data',function(req,res){
  var parentid=req.body.parentid;
    res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','text/plain; charset="utf-8"');
    const sql = 'select stu_id from user where user_id=?';
 db.query(sql,[parentid],(err,result)=>{
      res.send(result);

})

});


//通过学号查看表现内容
router.post('/registe',function(req,res){
     var stu=req.body.stu;
          res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"');
   const sql='select * from behave where stu_id=?'; 
if(stu){
  db.query(sql,[stu],(err,result)=>{
    if(err){
                console.error("Error:",err);
                process.exit();
                                  
    }
            console.log(result);
            res.send(result);
                 
  });


}





}
);


router.post('/del',function(req,res){
    var stu=req.body.stu;
    var text=req.body.text;
        res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"')
      const sql='delete from behave where stu='+stu;
     db.query(sql,(err,result)=>{
     if(err){
              console.error("Error:",err);
                        process.exit();
                                
      }
          console.log(result);
               
    });




});



module.exports = router;


