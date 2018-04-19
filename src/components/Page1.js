import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../css/Page1.css";
import $ from 'jquery';

class PhoneModel extends Component {

    render() {
        return (
            <div className="PhoneModel">
                <button class="btn btn-default">{this.props.children}</button>
            </div>
        );
    }
}

class Page1 extends Component {

    state = {
        iphones:["X", "8 Plus", "8", "7 Plus", "7", "SE", "6S Plus", "6S", "6 Plus", "6"]
    };

    render() {
        return (
            <div className="Page1">
                <div>
                    {this.state.iphones.map((model, index) => {return <PhoneModel>{`iPhone ${model}`}</PhoneModel>})}
                </div>
            </div>
        );
    }
}

export default Page1;
