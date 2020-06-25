/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text } from 'theme-ui'

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
          textDecoration: `underline`,
          textDecorationColor: theme => `${theme.colors.primary}`,
          textDecorationStyle: `wavy`,
          textUnderlinePosition: `under`,
          color: `text`,
        }}>{title}</Heading>
        <Text>{description}</Text>
      </Box>
    </Flex>
  )
}

