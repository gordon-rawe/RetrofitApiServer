var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send({name:'gordon',friends:[{name:'nicole'},{name:'lily'}],email:'gordon.tongji@hotmail.com'});
});

var server = app.listen(process.env.PORT || 1128,function(){
	console.log('API Server started on port %d',server.address().port);
});
