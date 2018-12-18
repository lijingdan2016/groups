const express = require('express');
var router = express.Router();
const db = require('../model/database');

//查询数据库表格里面内容
router.post('/data',function(req,res){
  var account=req.body.name;
  var password=req.body.password;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"')
  const sql = 'select * from login where account=? and password=?';
  db.query(sql,[account,password],(err,result)=>{
        if(err){
                        console.error('Error:',err);
                        return ;
                        process.exit();
                }

	res.send(result);
        console.log(result);
});
	console.log(account,password);
});


//注册时插入数据库
router.post('/registe',function(req,res){
   var account=req.body.name;
   var password=req.body.password;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"')
  const sql='insert into login(account,password) values(?,?)'; 
  if(account && password){
     db.query(sql,[account,password],(err,result)=>{
        if(err){
          console.error("Error:",err);
          process.exit();
        }
        console.log(result);
	//res.send('ok')
     });
	//console.log(req.body);
	//console.log(req.body.name);
	//console.log(req.body.password);
}




}
);

//删除user___未成功
router.post('/del',function(req,res){
	var account=req.body.name;
  	res.header('Access-Control-Allow-Origin','*');
  	res.header('Content-Type','text/plain; charset="utf-8"')
  	const sql='delete from login where account= ?';
     		db.query(sql,[account],(err,result)=>{
        if(err){
          console.error("Error:",err);
          process.exit();
        }
        console.log(result);
     });


});



module.exports = router;
