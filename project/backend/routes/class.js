const express = require('express');
var router = express.Router();
const db = require('../model/database');

//查询数据库班级表格里面是否有搜索班级
router.post('/search',function(req,res){
    var class_id=req.body.classid;
    res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','text/plain; charset="utf-8"')
    const sql='select * from class where class_id = ?';
db.query(sql,[class_id],(err,result)=>{
  if(err){
          console.error('Error:',err);
          return;
          process.exit();
                          
  }
      
      console.log(result);
          res.send(result);
            
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
            res.send({static:200,msg:'ok'});
                         
  });
    console.log(req.body);
    console.log(req.body.name);

}


})

//添加朋友，搜索数据库是否有该用户名
router.post('/friends',function(req,res){
          var account=req.body.userid;
          res.header('Access-Control-Allow-Origin','*');
          res.header('Content-Type','text/plain; charset="utf-8"')
          const sql='select * from user where username = ?';
db.query(sql,[account],(err,result)=>{
  if(err){
                            console.error('Error:',err);
                                  return ;
                            process.exit();
                                                                          
  }
                  console.log(result);
                      res.send(result);
                              
})
  console.log(account);

})






module.exports = router;


