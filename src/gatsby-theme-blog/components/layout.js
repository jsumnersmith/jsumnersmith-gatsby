import React from "react"
import { Styled } from "theme-ui"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"
import { SkipNavContent } from "@reach/skip-nav"
import LayoutWrapper from "../../components/layout"

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <LayoutWrapper {...props}>
        <SkipNavContent />
        {children}
      </LayoutWrapper>
    </Styled.root>
  )
}

export default Layout
