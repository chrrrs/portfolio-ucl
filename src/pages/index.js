import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header/Header';

const IndexPage = () => (
  <div>
    <Header />
    <div className="container needs-air">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
