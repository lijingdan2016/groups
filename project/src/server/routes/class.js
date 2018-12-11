const express = require('express');
var router = express.Router();
const db = require('../model/database');

//查询数据库班级表格里面是否有搜索班级
router.post('/search',function(req,res){
	var class_id=req.body.classid;
  	res.header('Access-Control-Allow-Origin','*');
  	res.header('Content-Type','text/plain; charset="utf-8"')
	const sql='select * from class where class_id ='+class_id;
	db.query(sql,[class_id],(err,result)=>{
		if(err){
			console.error('Error:',err);
			process.exit();
		}
		if(result.length==0){
			res.send({status:0,msg:'not exist'})
		}
		console.log(result);
	}
		
	)
})


//创建班级时注册班级信息并插入数据库
router.post('/begin',function(req,res){
   var user_id=req.body.pname;
   var class_id=req.body.cid;
   var class_name=req.body.cname;
   var class_people=req.body.cnum;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"')
  const sql='insert into class(class_id,class_name,class_people,user_id) values(?,?,?,?)';
  if(class_id&&class_name&&class_people&&user_id){
     db.query(sql,[class_id,class_name,class_people,user_id],(err,result)=>{
        if(err){
          console.error("Error:",err);
          process.exit();
        }
        console.log(result);
        //res.send('ok')
     });
	console.log(req.body);
  console.log(req.body.name);
}

})
//注册时插入数据库
/*router.post('/registe',function(req,res){
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
);*/

//删除user___未成功
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

