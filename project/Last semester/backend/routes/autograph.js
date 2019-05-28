const express = require('express');
var router = express.Router();
const db = require('../model/database');

router.post('/gxqm',function(req,res){
     var gxqm = req.body.gxqm;
          res.header('Access-Control-Allow-Origin','*');
            res.header('Content-Type','text/plain; charset="utf-8"')
    const sql='insert into autograph(text) values(?)'; 
if(account){
  db.query(sql,[account],(err,result)=>{
    if(err){
                console.error("Error:",err);
                          process.exit();
                                  
    }
            console.log(result);
  })
}
})
 
module.exports = router;
