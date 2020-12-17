/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui"
import {Link} from "gatsby"
import { ChevronLeft } from "react-feather"
import styles from "../../gatsby-plugin-theme-ui/styles"

export default ({ to, title }) => {

  return (
    <Link to={to} sx={{display: `block`, mb: 3, color: `text`, textDecoration: `none`}}>  
      <Flex>
        <Flex sx={{minWidth: 60, mb: 2, justifyContent: `center`, alignItems: `center`}}>
          <ChevronLeft size={36}/>
        </Flex>
        <Box sx={{p: 2, pl: 0}}>
          <Heading as="h2" sx={{
            fontSize: 2,
            mb: 3,
            ...styles.link
          }}>{title} </Heading>
        </Box>
      </Flex>
    </Link>
  )
}

