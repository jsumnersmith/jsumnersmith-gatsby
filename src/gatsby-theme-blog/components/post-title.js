/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styles from "../../gatsby-plugin-theme-ui/styles"

const PostTitle = (props) => (
  <Styled.h2 
    {...props}
    sx={{
      mb: 4,
      ...styles.title
    }} 
  />
)

export default PostTitle
