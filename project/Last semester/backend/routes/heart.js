const express = require('express');
var router = express.Router();
const db = require('../model/database');


router.post('/data',function(req,res){
   console.log('来到了后台')
    res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"')
    const sql = 'select * from heart1';
db.query(sql,(err,result)=>{
      res.send(result);

});
});



router.post('/registe',function(req,res){
     var account=req.body.name;
        var password=req.body.password;
          res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"')
    const sql='insert into heart(pushid,content,ontime,title) values(?,?,?,?)'; 
if(account && password){
  db.query(sql,[account,password],(err,result)=>{
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
    var account=req.body.name;
        res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"')
      const sql='delete from login where account='+account;
db.query(sql,(err,result)=>{
  if(err){
              console.error("Error:",err);
                        process.exit();
                                
  }
          console.log(result);
               
});



});



module.exports = router;


