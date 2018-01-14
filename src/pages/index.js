import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello</h1>
    <p>Bienvenue sur mon site de couture.</p>
    <h4>{data.allMarkdownRemark.totalCount} travail en stock</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
          </h3>
          <p>{node.frontmatter.description}</p>
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
          }
        }
      }
    }
  }
`;
