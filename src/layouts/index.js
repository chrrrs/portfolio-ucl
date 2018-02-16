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
        {href: "https://i.imgur.com/h3c8vRR.png", rel: 'icon'}
      ]}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      script={[{src: "https://use.fontawesome.com/releases/v5.0.6/js/all.js"}]}
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
