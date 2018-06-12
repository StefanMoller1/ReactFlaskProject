export const FLASKSERVER = 'http://localhost:5000'
export const EXPRESSSERVER = 'http://localhost:5001'

export function api(server, location, type, params){
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open(type, server + location, true);
        req.send(JSON.stringify(params));
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
        
    });
}

export function server(server, location, params){
    var data = {};
    if (params){
        data = {method: 'post',
                headers: {'Accept': 'application/json, text/plain, */*',
                          'Content-Type': 'application/json'},
                body: JSON.stringify(params)}
    }
    return new Promise((resolve, reject) => {
        fetch(server+location, data).then(response => {
            if (response.ok) {
                try {
                    resolve(response.json())
                }
                catch (error) {
                    reject(Error(response));
                }
            }
        }, error => {
        reject(new Error(error.message))
        })
    })
}