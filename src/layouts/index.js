import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar/Navbar';
import './bulma.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Chris Eckert - Portfolio"
      link={[
        {href: "/static/favicon.ico", rel: 'icon'}
      ]}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar />
    <div>
      { children() }
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
