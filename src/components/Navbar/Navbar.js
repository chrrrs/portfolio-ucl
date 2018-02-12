import React, { Component } from 'react';
import Link from 'gatsby-link'

class navbar extends Component {

  burgerNav = () => {
    const element = document.querySelector('.navbar-burger');
    const navMenu = document.querySelector('#navMenu');

    if(window.innerWidth < 1024) {
      element.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
      navMenu.classList.toggle('is-pulp');
    }
  }

  render() {
    return(
      <nav className="navbar is-fixed-top is-purple">
      <div className="container">
      <div className="navbar-brand">
      <Link className="navbar-item" to="/">
      <div id="brand-logo"></div>
      <h1 className="is-size-5">Chris Eckert</h1>
      </Link>
      <button className="button navbar-burger" data-target="navMenu" onClick={this.burgerNav}>
      <span></span>
      <span></span>
      <span></span>
      </button>
      </div>
      <div className="navbar-menu" id="navMenu">
      <div className="navbar-end">
      <Link className="navbar-item is-size-5" to="/">Hjem</Link>
      <Link className="navbar-item is-size-5" to="/page-2/">Om mig</Link>
      <Link className="navbar-item is-size-5" to="/404/">Projekter</Link>
      <Link className="navbar-item is-size-5" to="/page-2/">Kontakt</Link>
      </div>
      </div>
      </div>
      </nav>
    );
  }
}

export default navbar;
