import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/surveys" component={Dashboard}/>
                <Route exact path="/surveys/new" component={SurveyNew}/>
            </div>
        );
    }
}

export default  withRouter(connect()(App));
