import React from 'react';
import Link from 'gatsby-link'

const navbar = () => {
  return(
    <nav className="navbar is-fixed-top is-transparent">
      <div className="container">
        <div className="navbar-brand">
            <div className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"/>
            </div>
            <button className="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item is-size-7" to="/">Projects</Link>
              <Link className="navbar-item is-size-7" to="/index/">About</Link>
              <Link className="navbar-item is-size-7" to="/page-2/">Contact</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
