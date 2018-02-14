import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  const post = data.markdownRemark;
  return (
    <div className="container needs-air is-fullheight hero">
     <Helmet title={`Chris Eckert - ${post.frontmatter.title}`} />
      <div className="blog-post content">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
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
