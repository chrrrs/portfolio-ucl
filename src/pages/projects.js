import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header';
import ProjectTile from '../components/ProjectTile/ProjectTile';
import Tools from '../components/Tools/Tools';

const IndexPage = () => (
  <div className="needs-air">
    <ProjectTile
      link1=""
      link2="/brand/"
      link3="/exam/"
      link4=""
      p1="placeholder1"
      p2="brand"
      p3="exam"
      p4="placeholder2"
      projectOneTitle=""
      projectTwoTitle="Personal Brand "
      projectThreeTitle="Examsprojekt"
      projectFourTitle=""
      projectOneContent=""
      projectTwoContent="Portfolio website"
      projectThreeContent=""
      projectFourContent=""
      />
    <ProjectTile
      link1="/lions/"
      link2=""
      link3="/ui/"
      link4="/flex/"
      p1="lions"
      p2="placeholder3"
      p3="ui"
      p4="misc"
      projectOneTitle="Lions Club"
      projectTwoTitle=""
      projectThreeTitle="UI/UX"
      projectFourTitle="Flexbox"
      projectOneContent="Content Management System"
      projectTwoContent=""
      projectThreeContent="Design"
      projectFourContent="Responsivt design"
      />
  </div>
)

export default IndexPage
