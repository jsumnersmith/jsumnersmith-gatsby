
import React from "react"
import PropTypes from "prop-types"
import { Box, css } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./reset.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)
  const {title} = data.site.siteMetadata;

  return (
    <>
      <div>
        <Header siteTitle={title} />
      </div>
      <main style={{maxWidth: 600}}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
