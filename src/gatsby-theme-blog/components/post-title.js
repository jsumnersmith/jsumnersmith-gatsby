/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styles from "../../gatsby-plugin-theme-ui/styles"

const H2 = Styled.h2;

const PostTitle = (props) => (
  <H2 
    {...props}
    sx={{
      mb: 4,
      ...styles.title
    }} 
  />
)

export default PostTitle
