/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text } from 'theme-ui'
import {Link} from 'gatsby'
import styles from '../gatsby-plugin-theme-ui/styles'

export default ({to, title, description, Image}) => {

  return (
    <Link to={to} sx={{display: `block`, mb: 3, color: `text`, textDecoration: `none`, border: theme => `1px solid  ${theme.colors.muted}`, borderRadius: 3}}>  
      <Flex>
        <Flex sx={{minWidth: 170, padding: 37, justifyContent: `center`, alignItems: `center`}}>
          <Image />
        </Flex>
        <Box sx={{p: 4, pl: 0}}>
          <Heading as="h2" sx={{
            fontSize: 3,
            mb: 3,
            ...styles.link
          }}>{title}</Heading>
          <Text sx={{color: `text`}}>{description}</Text>
        </Box>
      </Flex>
    </Link>
  )
}

