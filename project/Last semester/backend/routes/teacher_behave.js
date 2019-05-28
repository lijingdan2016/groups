const express = require('express');
var router = express.Router();
const db = require('../model/database');


router.get('/data',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
    const sql = 'select * from behave';
 db.query(sql,(err,result)=>{
      res.send(result);

})

});



router.post('/registe',function(req,res){
     var stu=req.body.stu;
     var text=req.body.text;
     var uid=req.body.uid;
          res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"');
    const sql='insert into behave(user_id,behave_content,stu_id) values(?,?,?)'; 
if(uid&&stu&&text){
  db.query(sql,[uid,text,stu],(err,result)=>{
    if(err){
                console.error("Error:",err);
                          process.exit();
                                  
    }
            console.log(result);

                 
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


