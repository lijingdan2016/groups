var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
