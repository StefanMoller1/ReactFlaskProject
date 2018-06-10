import {FLASKSERVER} from './ApiHelper';
import {api} from './ApiHelper';

var AdminApi = {
    apiTest1: function(params){
        return api(FLASKSERVER, "/api/server1/test1", "GET");
    },
    apiTest2: function(params){
        return api(FLASKSERVER, "/api/server1/test2", "POST", params);
    },
    apiTest3: function(params){
        return api(FLASKSERVER, "/api/server1/test3", "GET");
    },
}
export default AdminApi;
