/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostTitle = (props) => (
  <Styled.h2 
    {...props}
    sx={{
      mb: 4,
      textDecoration: `underline`,
      textDecorationColor: theme => `${theme.colors.primary}`,
      textDecorationStyle: `wavy`,
      textUnderlinePosition: `under`,
      color: `text`,
    }} 
  />
)

export default PostTitle
