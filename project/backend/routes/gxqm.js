const express = require('express');
var router = express.Router();
const db = require('../model/database');


router.get('/data',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
    const sql = 'select * from gxqm';
 db.query(sql,(err,result)=>{
      res.send(result);

})

});



router.post('/registe',function(req,res){
  console.log('22');
     var gxqm=req.body.text;
          res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"');
    const sql='insert into gxqm(content) values(?)'; 
if(gxqm){
  console.log('hah');
  db.query(sql,[gxqm],(err,result)=>{
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
    var gxqm=req.body.name;
        res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"')
      const sql='delete from gxqm where gxqm='+gxqm;
     db.query(sql,(err,result)=>{
     if(err){
              console.error("Error:",err);
                        process.exit();
                                
      }
          console.log(result);
               
    });




});



module.exports = router;


