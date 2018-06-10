import React, { Component } from 'react';
import api from '../Api/GeneralApi';

class PageWrapper extends Component {
  	componentDidMount() {
        //TEST GET API

  		api.apiTest1().then(e => {
            console.log('TEST GET API')
            console.log(e)
        })
        //TEST POST API
  		var params = {name:'stefan'}
  		api.apiTest2(params).then(e => {
            console.log('TEST POST API')
            console.log(e)
        })
        //TEST ERROR API
  		api.apiTest3().then(e => {
            console.log('TEST ERROR API')
            console.log(e)
        })
  	}
  	render() {

	    return (
	           <div>BODY</div>
	    );
  	}
}

export default PageWrapper;
