import React from 'react';

const tools = () => {
  return(
    <div className="container needs-air">
      <div className="columns container is-size-3 has-text-centered">
        <a href="https://w3c.github.io/html/" className="column">
          <i className="fab fa-html5"></i>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="column">
          <i className="fab fa-css3-alt"></i>
        </a>
        <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" className="column">
          <i className="fab fa-js"></i>
        </a>
        <a href="https://reactjs.org/" className="column">
          <i className="fab fa-react"></i>
        </a>
        <a href="https://nodejs.org/en/" className="column">
          <i className="fab fa-node-js"></i>
        </a>
        <a href="https://www.npmjs.com/" className="column">
          <i className="fab fa-npm"></i>
        </a>
        <a href="https://github.com/" className="column">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://git-scm.com/" className="column">
          <i className="fab fa-git-square"></i>
        </a>
        <a href="http://php.net/" className="column">
          <i className="fab fa-php"></i>
        </a>
        <a href="https://sass-lang.com/" className="column">
          <i className="fab fa-sass"></i>
        </a>
      </div>
    </div>
  )
}

export default tools;
