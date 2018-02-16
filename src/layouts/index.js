import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

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
      script={[{src: "/static/font-awesome/js/fontawesome-all.min.js"}]}
    />
    <Navbar />
    <div>
      { children() }
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
