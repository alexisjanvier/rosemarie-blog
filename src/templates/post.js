import React from "react";
import Helmet from 'react-helmet'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
        <Helmet
        title={`Koumoiça - ${post.frontmatter.title}`}
        />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
