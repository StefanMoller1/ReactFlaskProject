var express = require('express');
var methods = require('../method/methods')
var router = express.Router({mergeParams: true});

router.all('*', function(req, res, next) {
	var call = {
					method:req.params.method, 
					results:{}, 
					params:req.body
				};
  	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	
  	try {
		call.results = methods[req.params.method](call.params);
        res.json(call.results);
    }
    catch (error) {
        res.json({method:call.method, error:true});
    }
})

module.exports = router;