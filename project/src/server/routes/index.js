var express = require('express');
var router = express.Router();
//var mysql=require('../`mysql.js');
//var pool = mysql.createPool(mysql.mysql);

/* GET users listing*/


let showup=[
	{
		id:2016011494,
		name:'li',
		showtime:100
	},
	{
		id:2016011495,
		name:'wang',
		showtime:90
	}
];
router.get('/api/kaoqin',function(req,res,next){
	let lists=[];
	lists=showup;
	res.json(lists);
})
router.get('/api',(req,res)=>{
//	res.render('index',{title:'hello'})
	res.json(a);
});
var a=['1','2'];
router.get('/api/courses/1',(req,res)=>{
	res.json([1,2,3]);
});
router.get('/',(req,res)=>{
	console.log(req.headers);
	res.json({
        type:req.baseUrl
    })

});
 
module.exports = router;

