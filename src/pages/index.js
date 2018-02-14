import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header';
import ProjectTile from '../components/ProjectTile/ProjectTile';
import Tools from '../components/Tools/Tools';

const IndexPage = () => (
  <div>
    <Header />
    <section className="section is-medium">
      <div className="container needs-air has-text-centered">
        <h1 className="title">Chris Eckert</h1>
        <p className="subtitle">Webudvikler, Designer, UI/UX og meget mere</p>
      </div>
    </section>
    <div className="needs-air">
      <ProjectTile
        featuredTitle="Fremhævede Projekter"
        link1="/exam/"
        link2="/brand/"
        link3="/lions/"
        link4="/ui/"
        p1="exam"
        p2="brand"
        p3="lions"
        p4="ui"
        projectOneTitle="Eksamensprojekt"
        projectTwoTitle="Personal Brand"
        projectThreeTitle="Lions Club"
        projectFourTitle="UI/UX"
        projectTwoContent="Portfolio website"
        projectThreeContent="Content Management System"
        projectFourContent="Design"
      />
    </div>
    <Tools />
  </div>
)

export default IndexPage
