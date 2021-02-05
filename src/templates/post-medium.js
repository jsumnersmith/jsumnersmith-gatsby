/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql } from "gatsby"
import PropTypes from "prop-types"
import BackLink from "../gatsby-theme-blog/components/backLink"

import Layout from "components/layout"
import styles from "../gatsby-plugin-theme-ui/styles"



const Post = ({data}) => {

  const post = data.mdx;


  return (
    <Layout>
      <BackLink 
        title={"Letters"}
        to={"/letters"} 
      />
      <Styled.h2 
        sx={{
          mb: 4,
          lineHeight: 1.4,
          ...styles.title
        }}
        dangerouslySetInnerHTML={{__html: post.frontmatter.title}}
      />
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
      }
    }
  }
`