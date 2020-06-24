/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

const PostDate = (props) => (
  <Styled.p
    sx={{
      fontSize: 0,
      mb: 2,
      color: `soft`
    }}
    {...props}
  />
)

export default PostDate
