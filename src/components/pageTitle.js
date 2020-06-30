/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text } from "theme-ui"
import styles from "../gatsby-plugin-theme-ui/styles"

export default ({title, description, Image}) => {

  return (
    <Flex sx={{border: `1px solid transparent`}}>
      <Flex sx={{minWidth: 170, padding: 37, justifyContent: `center`, alignItems: `center`}}>
        <Image />
      </Flex>
      <Box sx={{p: 4, pl: 0}}>
        <Heading as="h2" sx={{
          fontSize: 3,
          mb: 3,
          ...styles.title
        }}>{title}</Heading>
        <Text>{description}</Text>
      </Box>
    </Flex>
  )
}

