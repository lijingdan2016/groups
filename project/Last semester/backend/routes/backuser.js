var express = require('express');
var router = express.Router();
const db = require('../model/database');

/* GET users listing. */


router.get('/tiezi',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"')
    const sql = 'select * from tiezi';
db.query(sql,(err,result)=>{
  res.send(result);

})

})
//删除用户的操作
router.post('/del',function(req,res){
	var user_id=req.body.a.user_id;
	 res.header('Access-Control-Allow-Origin','*');
	 res.header('Content-Type','text/plain; charset="utf-8"')
   	 const sql = 'delete from tiezi where user_id=?';
	db.query(sql,[user_id],(err,result)=>{
		  res.send(result);
})

})



module.exports = router;
