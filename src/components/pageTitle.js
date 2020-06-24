/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text } from 'theme-ui'

export default ({title, description, Icon}) => {

  return (
    <Flex>
      <Flex sx={{minWidth: 120, justifyContent: `center`, alignItems: `center`}}>
        <Icon fontSize={24}/>
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

