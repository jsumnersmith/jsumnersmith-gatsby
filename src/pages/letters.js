/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import { BookOpen } from 'react-feather';

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Letters" />
    <PageTitle 
      title={"Letters"}
      description={"Marginalia and exposition on literary and human themes."}
      Icon={()=><BookOpen size={48}/>}
    />
    <Text>Content coming soon.</Text>
  </Layout>
)