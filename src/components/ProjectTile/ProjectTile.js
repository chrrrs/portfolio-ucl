import React from 'react';
import Link from 'gatsby-link';

const projectTile = (props) => {

  return(
    <section>
      <div className="container">
        <p className="title has-text-centered">{props.featuredTitle}</p>
        <div className="tile is-ancestorLink">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <Link to={props.link1} className="tile is-parent">
                <article className="tile is-child box is-purple" id={props.p1}>
                  <p className="title has-text-white">{props.projectOneTitle}</p>
                  <p className="subtitle has-text-white">{props.projectOneContent}</p>
                </article>
              </Link>
              <Link to={props.link2} className="tile is-parent ">
                <article className="tile is-child box is-purple" id={props.p2}>
                  <p className="title has-text-white">{props.projectTwoTitle}</p>
                  <p className="subtitle has-text-white">{props.projectTwoContent}</p>
                  <div></div>
                </article>
              </Link>
            </div>
            <Link to={props.link3} className="tile is-parent">
              <article className="tile is-child box is-purple" id={props.p3}>
                <p className="title has-text-white">{props.projectThreeTitle}</p>
                <p className="subtitle has-text-white">{props.projectThreeContent}</p>
              </article>
            </Link>
          </div>
          <Link to={props.link4} className="tile is-parent">
            <article className="tile is-child box is-purple" id={props.p4}>
              <div className="content">
                <p className="title has-text-white">{props.projectFourTitle}</p>
                <p className="subtitle has-text-white">{props.projectFourContent}</p>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default projectTile;
