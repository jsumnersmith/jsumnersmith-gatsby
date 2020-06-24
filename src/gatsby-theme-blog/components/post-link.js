/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import PostDate from "./post-date";

const PostLink = ({ title, slug, date, excerpt }) => (
  <article sx={{mb: 4}}>
    <header>
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            display: `block`,
            mb: 3,
            textDecoration: `underline`,
            textDecorationColor: theme => `${theme.colors.primary}`,
            textDecorationStyle: `wavy`,
            textUnderlinePosition: `under`,
            color: `text`,
            '&:hover': {
              color: `primary`
            }
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <PostDate>{date}</PostDate>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink
