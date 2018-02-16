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
            <a title="Download CV" href="http://ekkato.dk/cv.pdf" className="file-cta is-danger" download>
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
        rightTitle="Hvem er Chris Eckert?"
        rightContent="
        Mit navn er Chris Eckert og jeg er 23 år, og studerer Multimediedesigner ved Erhvervsakademiet Lillebælt. Jeg er Webudvikler med passion og nyder at bruge tid på at skabe forbløffende såvel som interaktive webapplikationer.

        Udover min store passion for webudvikling, er jeg også en erfaren project manager og udfordringer tilgårs med en logisk tankegang. Hvis der er et værktøj eller sprog jeg ikke forstår, så lærer jeg det.

        Som designer og UI/UX udvikler tager jeg en ære i at udvikle designs og elementer specifikt og baseret på research til den enkelte klient, dermed får de noget helt unikt der er specialiseret til netop deres virksomhed og målgruppe.

        Jeg holder mig konstant opdateret med teknologier i branchen for at tilbyde den nyeste rådgivning og produkter til klienter.


        En af mine store interesser er at skabe modulert design og lærer i øjeblikket ReactJS, da dette Framework giver mig muligheden for at lave UI, som er genbrugeligt og dynamisk alt efter hvordan jeg arbejder med det."
      />
      <Tools />
    </div>
  )
}

export default AboutPage
