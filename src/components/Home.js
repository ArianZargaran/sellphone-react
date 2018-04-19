import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import "../css/Home.css";
import $ from 'jquery';
import Page1 from "./Page1"
import Page2 from "./Page2"
import About from "./About"
import Reviews from "./Reviews"
import Tracking from "./Tracking"
import Support from "./Support"
import Contact from "./Contact"

class Home extends Component {

    render() {
        return (
            <div>
                <Route exact={true} path="/" component={Page1}/>
                <Route path='/Home' component={Page1}/>              
                <Route path='/About' component={About}/>
                <Route path='/Reviews' component={Reviews}/>
                <Route path='/Tracking' component={Tracking}/>
                <Route path='/Support' component={Support}/>
                <Route path='/Contact' component={Contact}/>
            </div>
        );
    }

}

export default Home;
