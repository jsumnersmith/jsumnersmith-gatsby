import React from 'react'
import { Link } from "gatsby"
// import PostDate from "../gatsby-theme-blog/components/post-date";

const PostLink = ({ title, slug, date, excerpt }) => (
  <article style={{mb: 4}}>
    <header>
      <h2
        style={{
          marginBottom: 10,
        }}
      >
        <Link
          style={{
            display: `block`,
            marginBottom: 15,
            lineHeight: 1.4,
          }}
          to={slug}
          dangerouslySetInnerHTML={{__html: title || slug}}
        />
      </h2>
      {/* <PostDate>{date}</PostDate> */}
    </header>
    <section>
      <p dangerouslySetInnerHTML={{__html: excerpt}} />
    </section>
  </article>
)

export default PostLink
