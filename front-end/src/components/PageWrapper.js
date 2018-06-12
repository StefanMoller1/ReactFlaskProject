import React, { Component } from 'react';
import api from '../Api/GeneralApi';

class PageWrapper extends Component {
    componentDidMount() {
        var params = {name:'stefan'};
        // TEST GET FLASK
        api.apiTest1().then(e => {
            console.log('TEST GET FLASK');
            console.log(e);
        });
        // TEST POST FLASK
        api.apiTest2(params).then(e => {
            console.log('TEST POST FLASK');
            console.log(e);
        });
        // TEST ERROR FLASK
        api.apiTest3().then(e => {
            console.log('TEST ERROR FLASK');
            console.log(e);
        });
        // TEST GET EXPRESS
        api.apiTest4()
        .then(e => {
            console.log('TEST GET EXPRESS');
            console.log(e);
        });
        // TEST POST EXPRESS
        api.apiTest5(params).then(e => {
            console.log('TEST POST EXPRESS');
            console.log(e);
        });
        // // TEST ERROR EXPRESS
        api.apiTest6().then(e => {
            console.log('TEST ERROR EXPRESS');
            console.log(e);
        });
    }
    render() {
        return (
            <div>
                <img src='images/img.jpg' alt='' />
            </div>
        );
    }
}

export default PageWrapper;
