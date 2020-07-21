/** @jsx jsx */
import { jsx } from "theme-ui"
import sanitize from "sanitize-html"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Book from "components/book-image"
import PostLink from "../gatsby-theme-blog/components/post-link"

export default ({data}) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Letters" />
      <PageTitle 
        title={"Letters"}
        description={"Marginalia and exposition on literary and human themes."}
        Image={()=><Book />}
      />
      {data.allMdx.edges.map(({ node }) => (
        <PostLink 
          key={node.slug} 
          {...node.frontmatter} 
        />
        ))}
      {data.allWordpressPost.edges.map(({ node }) => (
          <PostLink 
            key={node.slug} 
            title={sanitize(node.title)} 
            excerpt={sanitize(node.excerpt)} 
            {...node} 
          />
        ))}
      
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
    allMdx (filter: {frontmatter: {slug: {ne: null}}} sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            slug
            excerpt
          }
        }
      }
    }
  }
`