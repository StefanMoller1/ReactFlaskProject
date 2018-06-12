var methods = { };

methods.test1 = function(params){
    return {message: 'blah'};
}

methods.test2 = function(params){
    return params;
}

methods.test3 = function(params){
    var x = 10/0
    return x
}

module.exports = methods