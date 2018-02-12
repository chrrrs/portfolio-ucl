import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar/Navbar';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Chris Eckert - Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar />
    <div id="body-content" className="container">
      { children() }
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
