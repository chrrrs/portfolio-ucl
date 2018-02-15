import React from 'react';

const content = (props) => {
  return(
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-centered has-text-centered">
          <div id={props.leftContainer} className="image">
            <h2 className="title">{props.leftTitle}</h2>
            <p className="content">{props.leftContent}</p>
          </div>
        </div>
        <div className="column is-centered">
          <div id={props.rightContainer}>
            <h2 className="title">{props.rightTitle}</h2>
            <p className="content">{props.rightContent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default content;
