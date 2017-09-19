import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class App extends Component {

    render() {
        return (
           <div>Hello World</div>
        );
    }
}

export default  withRouter(connect()(App));
