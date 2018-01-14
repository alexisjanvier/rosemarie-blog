import React from 'react';
import Link from 'gatsby-link';
import slugify from 'slugify';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello</h1>
    <p>Bienvenue sur mon site de couture.</p>
    <h4>{data.allMarkdownRemark.totalCount} travail en stock</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={`/${slugify(node.frontmatter.title, {
                  replacement: '-',
                  lower: true          // result in lower case
              })}`}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>{node.frontmatter.description}</p>
          <img src={`/images/${node.frontmatter.picture}`} />
        </div>
      ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            picture
          }
          excerpt
        }
      }
    }
  }
`;
