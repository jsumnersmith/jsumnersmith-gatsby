/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { jsx, useColorMode, Box} from 'theme-ui'
import Img from "gatsby-image"

const Image = ({width = 100}) => {
  const data = useStaticQuery(graphql`
    query {
      lightImage: file(relativePath: { eq: "light-book.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darkImage: file(relativePath: { eq: "dark-book.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [colorMode] = useColorMode();

  const image = colorMode === 'default' ? data.lightImage : data.darkImage;

  return  <Box sx={{width}}><Img fluid={image.childImageSharp.fluid} /></Box>
}

export default Image
