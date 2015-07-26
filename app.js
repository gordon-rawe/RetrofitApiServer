var express = require('express');
var app = express();

var data = {beijing:[{name:"changcheng"},{name:"gugong"},{name:"sanlitun"},{name:"yiheyuan"}],
	shanghai:[{name:"yuyuan"},{name:"waitan"},{name:"dongwuyuan"},{name:"jichang"}],
	shenzhen:[{name:"huaqiangbei"},{name:"dameisha"},{name:"xiaomeisha"}]};

// var data = {
// 	cities:[{name:"beijing",places:[{name:"changcheng"},{name:"gugong"},{name:"sanlitun"},{name:"yiheyuan"}]},
// 	{name:"shanghai",places:[{name:"yuyuan"},{name:"waitan"},{name:"dongwuyuan"},{name:"jichang"}]},
// 	{name:"shenzhen",places:[{name:"huaqiangbei"},{name:"dameisha"},{name:"xiaomeisha"}]}]
// }


app.get('/cities',function(req,res){
	res.send({cities:Object.keys(data)});
});

app.get('/cities/:city_name',function(req,res){
	var city = req.params.city_name;
	res.send({places:data[city]});
});

app.get('/',function(req,res){
	res.send({name:'gordon',friends:[{name:'nicole'},{name:'lily'}],email:'gordon.tongji@hotmail.com'});
});

var server = app.listen(process.env.PORT || 1128,function(){
	console.log('API Server started on port %d',server.address().port);
});