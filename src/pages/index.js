import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header';
import ProjectTile from '../components/ProjectTile/ProjectTile';
import Tools from '../components/Tools/Tools';

const IndexPage = () => (
  <div>
    <Header />
    <div className="container needs-air has-text-centered">
      <h1>Chris Eckert</h1>
      <p>Webudvikler, Designer, UI/UX og meget mere</p>
    </div>
    <div className="needs-air">
      <ProjectTile
      featuredTitle="Fremhævede Projekter"
      link1="/hello-world/"
      link2=""
      link3=""
      link4=""
      p1="exam"
      p2="brand"
      p3="misc"
      p4="ui"
      projectOneTitle="Eksamensprojekt"
      projectTwoTitle="Personal Brand"
      projectThreeTitle="Diverse Projekter"
      projectFourTitle="UI/UX"
      projectTwoContent="Portfolio website"
      projectThreeContent="Webdevelopment"
      projectFourContent="Design"
      />
    </div>
    <Tools />
  </div>
)

export default IndexPage
