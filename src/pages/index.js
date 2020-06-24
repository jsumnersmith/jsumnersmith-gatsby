import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeLink from "../components/largelink"
import { BookOpen, Layers} from 'react-feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LargeLink 
      to={'/blog'}
      title={"Notes"}
      description={"Synthetic thoughts from reading and experience about product, strategy, and technology."}
      Icon={()=><Layers size={48}/>}
    />
    <LargeLink 
      to={'/letters'}
      title={"Letters"}
      description={"Marginalia and exposition on literary and human themes."}
      Icon={()=><BookOpen size={48}/>}
    />
  </Layout>
)

export default IndexPage
