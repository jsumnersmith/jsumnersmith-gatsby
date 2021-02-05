/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import PropTypes from "prop-types"
import BackLink from "../gatsby-theme-blog/components/backLink"

import Layout from "components/layout"
import styles from "../gatsby-plugin-theme-ui/styles"
import "components/letters.css"

const Post = ({data}) => {
  const post = data.wordpressPost
  const H2 = Styled.h2;

  return (
    <Layout>
      <BackLink 
        title={"Letters"}
        to={"/letters"} 
      />
      <H2
        sx={{
          mb: 4,
          lineHeight: 1.4,
          ...styles.title
        }}
        dangerouslySetInnerHTML={{__html: post.title}}
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`