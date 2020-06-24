/** @jsx jsx */
import { jsx, Text, Heading } from 'theme-ui'

import Logo from './logo'
import Link from "./link"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => (
  <header sx={{mb: 4, p: 2, maxWidth: '90%', ml: `auto`, mr: `auto`}}>
    
    <Logo sx={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}/>
    <Heading as="h1" sx={{fontSize: 2, mb: 4, textAlign: 'center'}}>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </Heading>
    <Text sx={{mb: 2}}>Product Manager <Link to="https://gatsbyjs.com" target="blank">@Gatsby</Link> focused on developer experience.</Text>
    <Text>Analogical thinker in an analytical world.</Text>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
