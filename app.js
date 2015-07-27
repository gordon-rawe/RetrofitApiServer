var express = require('express');
var app = express();
var landscape = require('./landscape');

// var data = {beijing:[{name:"changcheng"},{name:"gugong"},{name:"sanlitun"},{name:"yiheyuan"}],
// 	shanghai:[{name:"yuyuan"},{name:"waitan"},{name:"dongwuyuan"},{name:"jichang"}],
// 	shenzhen:[{name:"huaqiangbei"},{name:"dameisha"},{name:"xiaomeisha"}]};

// app.get('/cities',function(req,res){
// 	res.send({cities:Object.keys(data)});
// });

// app.get('/cities/:city_name',function(req,res){
// 	var city = req.params.city_name;
// 	res.send({places:data[city]});
// });

var geology = landscape.Landscape;

app.get('/provinces',function(req,res){
	res.send({provinces:Object.keys(geology)});
});

app.get('/cities/:province_name',function(req,res){
	var province_name = req.params.province_name;
	res.send({cities:Object.keys(geology[province_name])});
});

app.get('/counties/:province_name/:city_name',function(req,res){
	var province_name = req.params.province_name;
	var city_name = req.params.city_name;
	res.send({cities:geology[province_name][city_name]});
});

app.get('/',function(req,res){
	res.send({name:'gordon',friends:[{name:'nicole'},{name:'lily'}],email:'gordon.tongji@hotmail.com'});
});

var server = app.listen(process.env.PORT || 1128,function(){
	console.log('API Server started on port %d',server.address().port);
});