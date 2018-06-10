export const FLASKSERVER = 'http://localhost:5000'
export const TORNADOSERVER = 'http://localhost:5001'
export const EXPRESSSERVER = 'http://localhost:5002'

export function api(server, location, type, params){
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        
        req.open(type, server + location);
       
        req.onload = function(){
            if (req.status === 200) {
                try {
                    var result = JSON.parse(req.response);
                    resolve(result)
                }
                catch (error) {
                    reject(Error(req.statusText));
                }
            }
        };
        req.send(JSON.stringify(params));
    });
}