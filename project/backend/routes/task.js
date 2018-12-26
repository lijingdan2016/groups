const express = require('express');
var router = express.Router();
const db = require('../model/database');

//查看已发布作业内容并导出
router.post('/check',function(req,res){
	var user_id=req.body.userid;
        res.header('Access-Control-Allow-Origin','*');
        res.header('Content-Type','text/plain; charset="utf-8"');
        const sql = 'select * from (task,user) where task.user_id=user.user_id and task.user_id=?';
 db.query(sql,[user_id],(err,result)=>{
	console.log(result);
      res.send(result);
	
})

});


//插入作业内容
router.post('/record',function(req,res){
     var date=req.body.date;
     var content=req.body.text;
     var uid=req.body.uid;
     var class_id=req.body.class_id;
          res.header('Access-Control-Allow-Origin','*');
          res.header('Content-Type','text/plain; charset="utf-8"');
    const sql='insert into task(user_id,task_content,task_data,class_id) values(?,?,?,?)'; 
if(uid&&date&&content&&class_id){
  db.query(sql,[uid,content,date,class_id],(err,result)=>{
    if(err){
                console.error("Error:",err);
                          process.exit();
                                  
    }
            console.log(result);

                 
  });
}

}
);

//家长查看
router.post('/parent',function(req,res){
	var uid=req.body.user_id;
	console.log(uid);
	 res.header('Access-Control-Allow-Origin','*');
         res.header('Content-Type','text/plain; charset="utf-8"');
	 const sql='select * from (task,join_class) where task.class_id=join_class.class_id and join_class.user_id=?';
	db.query(sql,[uid],(err,result)=>{
		if(err){
			console.error('Error:',err);
		}
		console.log(result);
		res.send(result);
	})	

})



module.exports = router;


