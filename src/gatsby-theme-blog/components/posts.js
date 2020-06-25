import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"
import PageTitle from "components/pageTitle"
import Notes from "components/notes-image"


const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
   
    <main>
      <PageTitle 
        title={"Notes"}
        description={"Synthetic thoughts from reading and experience about product, strategy, and technology."}
        Image={()=><Notes />}
      />
      <PostList posts={posts} />
    </main>
  </Layout>
)

export default Posts
