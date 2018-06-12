import {FLASKSERVER, EXPRESSSERVER} from './ApiHelper';
import {api, server} from './ApiHelper';

var AdminApi = {
    // API's on the FLASK SERVER
    apiTest1: function(params){
        return api(FLASKSERVER, "/api/server1/test1", "GET");
    },
    apiTest2: function(params){
        return api(FLASKSERVER, "/api/server1/test2", "POST", params);
    },
    apiTest3: function(params){
        return api(FLASKSERVER, "/api/server1/test3", "GET");
    },

    // API's on the EXPRESS SERVER
    apiTest4: function(params){
        return server(EXPRESSSERVER, "/api/server1/test1");
    },
    apiTest5: function(params){
        return server(EXPRESSSERVER, "/api/server1/test2", params);
    },
    apiTest6: function(params){
        return server(EXPRESSSERVER, "/api/server1/test3");
    },

}
export default AdminApi;
