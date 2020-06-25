/** @jsx jsx */
import { jsx, Text } from "theme-ui"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Book from "components/book-image"

export default () => (
  <Layout>
    <SEO title="Letters" />
    <PageTitle 
      title={"Letters"}
      description={"Marginalia and exposition on literary and human themes."}
      Image={()=><Book />}
    />
    <Text>Content coming soon.</Text>
  </Layout>
)