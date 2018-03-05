import React from 'react';
import Helmet from 'react-helmet';

import ScrollTop from '../components/ScrollTop/ScrollTop';

export default function Template({data}) {
  const post = data.markdownRemark;
  return (
    <div className="container needs-air is-fullheight hero">
     <Helmet title={`Chris Eckert - ${post.frontmatter.title}`} />
     <span id="top"></span>
      <div className="blog-post content needs-air">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content image"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <ScrollTop />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
