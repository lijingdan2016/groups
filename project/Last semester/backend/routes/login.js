const express = require('express');
var router = express.Router();
const db = require('../model/database');

//查询数据库表格里的内容
router.post('/search',function(req,res){
  var account=req.body.name;
  var password=req.body.password;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql =  "select * from user where user_id = '"+ account +"'and password = '"+password+"' ";
  db.query(sql,(err,result)=>{
    if(err){
      res.send('查询失败：'+err);
    }else{
      res.send(result);

    }

})
    
});

//注册时插入数据
router.post('/registe',function(req,res){
     var account=req.body.name;
     var password=req.body.password;
     var email = req.body.email;
     res.header('Access-Control-Allow-Origin','*');
     res.header('Content-Type','text/plain; charset="utf-8"');
    const sql='insert into user(user_id,password,email) values(?,?,?)'; 
    if(account && password && email){
  db.query(sql,[account,password,email],(err,result)=>{
    if(err){
                console.error("Error:",err);
                          process.exit();
                                  
    }
            console.log(result);
               
  });
}

});

//选择身份
router.post('/identity',function(req,res){
  var account=req.body.name;
  var password=req.body.password;

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = "update user set identity = '老师' where user_id = '"+account+"' and password= '"+password+"'";
  if(account&&password){
    db.query(sql,(err,result)=>{
      if(err){
        console.error("error",err);
        process.exit
      }else{
        console.log(result);
      }
    })
  }
})
//选择家长身份
router.post('/secondidentity',function(req,res){
  var account=req.body.name;
  var password=req.body.password;

  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = "update user set identity = '家长' where user_id = '"+account+"' and password= '"+password+"'";
  if(account&&password){
    db.query(sql,(err,result)=>{
      if(err){
        console.error("error",err);
        process.exit
      }else{
        console.log(result);
      }
    })
  }
})

//输入学号
router.post('/stuid',function(req,res){
  var account=req.body.name;
  var password=req.body.password;
  var studentId = req.body.stu_id;
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"');
  const sql = "update user set stu_id = '"+studentId+"' where user_id = '"+account+"' and password= '"+password+"'";
  if(account&&password){
    db.query(sql,(err,result)=>{
      if(err){
        console.error("error",err);
        process.exit
      }else{
        console.log(result);
      }
    })
  }
})


router.post('/del',function(req,res){
    var account=req.body.name;
    res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','text/plain; charset="utf-8"')
      const sql='delete from user where account='+account;
      db.query(sql,(err,result)=>{
  if(err){
              console.error("Error:",err);
                        process.exit();
                                
  }
          console.log(result);
               
});



});



module.exports = router;

