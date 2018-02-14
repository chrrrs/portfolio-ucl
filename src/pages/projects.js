import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header';
import ProjectTile from '../components/ProjectTile/ProjectTile';
import Tools from '../components/Tools/Tools';

const IndexPage = () => (
  <div className="needs-air">
    <ProjectTile
      link1="/hello-world/"
      link2=""
      link3=""
      link4=""
      p1=""
      p2="brand"
      p3="exam"
      p4=""
      projectOneTitle=""
      projectTwoTitle="Personal Brand "
      projectThreeTitle="Examsprojekt"
      projectFourTitle="Here is a title"
      projectOneContent=""
      projectTwoContent="Portfolio website"
      projectThreeContent="it is content"
      projectFourContent="it is content"
      />
    <ProjectTile
      link1=""
      link2=""
      link3=""
      link4=""
      p1=""
      p2=""
      p3="ui"
      p4="misc"
      projectOneTitle=""
      projectTwoTitle="Here is a title"
      projectThreeTitle="UI/UX"
      projectFourTitle="Diverse Projekter"
      projectOneContent="it is content"
      projectTwoContent="it is content"
      projectThreeContent="Design"
      projectFourContent="Webdevelopment"
      />
  </div>
)

export default IndexPage
