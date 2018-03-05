import React from 'react';
import Link from 'gatsby-link';

const header = () => {
  return(
    <section className="hero is-fullheight">
      <div className="hero-body" id="me">
        <div className="container">
          <img className="image" src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdBAAAAJGUwNGI5YTMwLTJjNWUtNDRmMS1iMDdiLTJiYjE4YWY3MzNlZA.jpg" alt="Chris Eckert" id="mePic"/>
          <div id="heroText">
            <h1 className="title has-text-white">
              Hej, mit navn er Chris Eckert
            </h1>
            <h2 className="subtitle has-text-white">
              Multimediedesign studerende med en passion for Webudvikling.
            </h2>
            <div className="container level">
            <a href="https://github.com/iamchrisjp" target="_blank" className="level-item has-text-white is-size-4"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/chris-eckert-812a76135" target="_blank" className="level-item has-text-white is-size-4"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.behance.net/chrisecker3eab" target="_blank" className="level-item has-text-white is-size-4"><i className="fab fa-behance-square"></i></a>
            <a href="https://dribbble.com/Eckert" target="_blank" className="level-item has-text-white is-size-4"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
        </div>
        <span className="scroll-btn">
        	<a href="#">
        		<span className="mouse">
        			<span>
        			</span>
        		</span>
        	</a>
        </span>
      </div>
    </section>
  )
}

export default header;
