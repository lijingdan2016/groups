const express = require('express');
var router = express.Router();
const db = require('../model/database');


router.post('/data',function(req,res){
  var uid=req.body.uid;
    res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
    const sql = 'select signature,nickname,user_id from user where user_id =? ';
 db.query(sql,[uid],(err,result)=>{
      res.send(result);

})

});



router.post('/registe',function(req,res){
 // console.log('22');
     var gxqm=req.body.text;
     var userid=req.body.userid;
     var nc=req.body.text1;
          res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"');
    const sql='update user set signature=?,nickname=? where user_id=?'; 
if(gxqm && userid && nc){
  //console.log('hah');
  db.query(sql,[gxqm,nc,userid],(err,result)=>{
    if(err){
                console.error("Error:",err);
                          process.exit();
                                  
    }
            console.log(result);

                 
  });


}





}
);


router.post('/message',function(req,res){
    var userid=req.body.userid;
        res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"')
      const sql='select nickname,signature from user where user_id=?';
     db.query(sql,[userid],(err,result)=>{
     if(err){
              console.error("Error:",err);
                        process.exit();
                                
      }
          console.log(result);
               
    });




});



module.exports = router;


