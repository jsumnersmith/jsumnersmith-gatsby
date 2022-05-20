import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeLink from "../components/largelink"
import Book from "../components/book-image"
import Notes from "../components/notes-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LargeLink 
      to={'/notes'}
      title={"Notes"}
      description={"Synthetic thoughts from reading and experience about product, strategy, and technology."}
      Image={()=><Notes width={100}/>}
    />
    <LargeLink 
      to={'/letters'}
      title={"Letters"}
      description={"Marginalia and exposition on literary and human themes."}
      Image={()=><Book width={100}/>}
    />
  </Layout>
)

export default IndexPage
