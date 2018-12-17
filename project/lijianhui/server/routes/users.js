var express = require('express');
var router = express.Router();
const db = require('../model/database')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Content-Type','text/plain; charset="utf-8"')
  const sql = 'select * from class';
  db.query(sql,(err,result)=>{
    res.send(JSON.stringify({
	status:'200',
	data:result
 }));
})
})

//router.post();


module.exports = router;
