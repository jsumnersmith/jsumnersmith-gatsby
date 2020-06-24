/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Cell } from "styled-css-grid"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./reset.css"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  grid-column-gap: 0;
  grid-row-template: 1fr 1fr 1fr;
  max-width: 960px;
  margin:0 auto;
  padding: 30px 0;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

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
    <Grid>
      <Cell height={2} middle>
        <Header siteTitle={title}/>
      </Cell>
      <Cell  height={4} style={{padding: 25, paddingTop: 0}}><main style={{maxWidth: 600}}>{children}</main></Cell>
      <Cell top={3} height={1}><Footer /></Cell>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
