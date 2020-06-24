import React from "react"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"
import { SkipNavContent } from "@reach/skip-nav"
import LayoutWrapper from "../../components/layout"

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <LayoutWrapper {...props}>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
        <SkipNavContent />
        {children}
    </LayoutWrapper>
  )
}

export default Layout
