import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header';
import Tools from '../components/Tools/Tools';
import Content from '../components/Content/Content';

const AboutPage = () => {

  const element = document.querySelector('.file-label');

  window.onload = () => {
    const element = document.querySelector('.file-label');


    if(window.innerWidth < 500) {
      element.innerHTML = "";
    }

  }

    window.addEventListener('resize', (e) => {

      const element = document.querySelector('.file-label');

      if(element) {
        if(window.innerWidth < 500) {
          element.innerHTML = "";
        } else {
          element.innerHTML = "Download CV"
        }
      }
    })

  return(
    <div className="needs-air">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-12 is-vertical is-parent">
            <div className="tile is-child box text-child-bottom image" id="aboutMe">
            <span className="text-is-bottom">
              <p className="title">Chris Eckert</p>
              <p className="subtitle">Webudvikler</p>
            </span>
            <span id="cv">
            <a title="Download CV" href="https://i.imgur.com/DiC1JU3.png" className="file-cta is-danger" download>
            <span className="file-icon">
            <i className="fas fa-download"></i>
            </span>
            <span className="file-label">
              Download CV
            </span>
            </a>
            </span>
            </div>
          </div>
        </div>
      </div>
      <Content
        leftContainer="aboutIllu"
        rightContainer="meContent"
        rightTitle="Min passion"
        rightContent="blablabdafbmdab jeg er chris jeg kan godt lide modulert design, derfor bruger jeg ReactJS da dette MVC Framework giver mig muligheden for at lave UI, som er genbrugeligt og dynamisk alt efter hvordan jeg arbejder med det."
      />
      <Tools />
    </div>
  )
}

export default AboutPage
