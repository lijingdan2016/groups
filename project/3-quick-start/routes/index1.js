
const express = require('express');
var router = express.Router();
const db = require('../model/database');


router.post('/begin',function(req,res){
  console.log(111)
     var empid=req.body.pname;
     var lastname=req.body.cid;
     var firstname=req.body.cname;
     res.header('Access-Control-Allow-Origin','*');
     res.header('Content-Type','text/plain; charset="utf-8"')
    const sql='insert into employees(empid,lastname,firstname) values(?,?,?)';
    if(empid&&lastname&&firstname){
       db.query(sql,[empid,lastname,firstname],(err,result)=>{
        if(err){
                console.error("Error:",err);
               process.exit();
                                  
         }
         console.log(result);
        //res.send('ok')
        //     
  });
    console.log(req.body);
    console.log(req.body.name);

}


})

router.get('/data1',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain;charset="utf-8"');
  const sql ='select * from employees';
  
  db.query(sql,(err,result)=>{
    res.send(JSON.stringify({
        status:'200',
        data:result
    }));
})
})
module.exports = router;


