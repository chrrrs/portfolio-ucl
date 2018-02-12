import React from 'react';
import Link from 'gatsby-link'

const navbar = () => {
  return(
    <nav className="navbar is-fixed-top is-purple">
      <div className="container">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <div id="brand-logo"></div>
              <h1 className="is-size-5">Chris Eckert</h1>
            </Link>
            <button className="button navbar-burger" >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="navbar-menu">
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

export default navbar;
