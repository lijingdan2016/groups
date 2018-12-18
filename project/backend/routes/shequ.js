const express = require('express');
var router = express.Router();
const db = require('../model/database.js');


router.get('/sq',function(req,res){
 // var user_id = req.body.userid;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset = "utf-8"');
  const sql = 'select * from tiezi where user_id = 100';
  //if(user_id){
    db.query(sql,(err,result) => {
      if(err){
        console.error("Error:",err);
        process.exit();
      }
      res.send(JSON.stringify({
        data:result
      }));
    });
    console.log(req.body);
  //}


})



module.exports = router;
