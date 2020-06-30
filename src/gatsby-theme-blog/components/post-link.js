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
            lineHeight: 1.4,
          }}
          to={slug}
          dangerouslySetInnerHTML={{__html: title || slug}}
        />
      </Styled.h2>
      <PostDate>{date}</PostDate>
    </header>
    <section>
      <Styled.p dangerouslySetInnerHTML={{__html: excerpt}} />
    </section>
  </article>
)

export default PostLink
