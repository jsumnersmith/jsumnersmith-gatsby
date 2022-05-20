/** @jsx jsx */
import { jsx, Text, Heading } from "theme-ui"

import Logo from "./logo"
import Link from "./link"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => (
  <header>
    
    <Logo style={{width: 200, marginLeft: `auto`, marginRight: `auto`}}/>
    <h1 style={{fontSize: 16, marginBottom: 20, textAlign: `center`}}>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
    <p sx={{mb: 2}}>Director of Product <Link to="https://gatsbyjs.com" target="blank">@Gatsby</Link></p>
    <p>Analogical thinker in an analytical world.</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
