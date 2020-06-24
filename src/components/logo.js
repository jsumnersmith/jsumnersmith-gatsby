/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { jsx, useColorMode, Box} from 'theme-ui'
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      lightLogo: file(relativePath: { eq: "light-mug.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darkLogo: file(relativePath: { eq: "dark-mug.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [colorMode] = useColorMode();

  const image = colorMode === 'default' ? data.lightLogo : data.darkLogo;

  return <Box sx={{width: 100, margin: "0 auto ", mb: 3}}><Img fluid={image.childImageSharp.fluid} /></Box>
}

export default Image
