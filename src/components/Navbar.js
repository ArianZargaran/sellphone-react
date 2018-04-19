import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../css/Navbar.css"


//NavbarItem - li inside navbar
class NavbarItem extends Component {
    render() {
      return (
          <Link to={`/${this.props.children}`}>
              <div className="NavbarItem">
                      <li className="nav-item">
                          <a className="nav-link">{this.props.children}</a>
                      </li>
              </div>
          </Link>
      );
    }
  }
  
//actual navbar
class Navbar extends Component {
    state = {
        nav: ["Home", "About", "Reviews", "Tracking", "Support", "Contact"]
      };

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./">HAWKER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div>
                {this.state.nav.map((navItem, index) => {return <NavbarItem>{navItem}</NavbarItem>})}
            </div>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
