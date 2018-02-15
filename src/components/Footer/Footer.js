import React from 'react';
import Link from 'gatsby-link';

const footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="level">
          <div className="level-left has-text-centered">
            <h2>&copy; 2018 Chris Eckert</h2>
          </div>
          <div className="level-right has-text-centered">
            <a href="https://github.com/iamchrisjp" target="_blank" className="level-item"><i className="fab fa-github"></i></a>
            <a href="https://dribbble.com/Eckert" target="_blank" className="level-item"><i className="fab fa-dribbble"></i></a>
            <a href="https://www.linkedin.com/in/chris-eckert-812a76135" target="_blank" className="level-item"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.behance.net/chrisecker3eab" target="_blank" className="level-item"><i className="fab fa-behance"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
