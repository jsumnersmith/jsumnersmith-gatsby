/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { jsx, useColorMode, Box} from "theme-ui"
import Img from "gatsby-image"

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

  const image = colorMode === "default" ? data.lightLogo : data.darkLogo;

  return <Box sx={{width: 100, margin: `0 auto`, mb: 3}}><Img fluid={image.childImageSharp.fluid} /></Box>
}

export default Image
