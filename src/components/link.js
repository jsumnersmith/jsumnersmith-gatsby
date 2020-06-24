/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"

export default ({children, to, ...props}) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <Link
        to={to}
        {...props}
        sx={{
          textDecoration: `underline`,
          textDecorationColor: theme => `${theme.colors.primary}`,
          textDecorationStyle: `wavy`,
          textUnderlinePosition: `under`,
          color: `text`,
          '&:hover': {
            color: `primary`
          }
        }}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a
        href={to}
        {...props}
        sx={{
          textDecoration: `underline`,
          textDecorationColor: theme => `${theme.colors.primary}`,
          textDecorationStyle: `wavy`,
          textUnderlinePosition: `under`,
          color: `text`,
          '&:hover': {
            color: `primary`
          }
        }}
      >
        {children}
      </a>
    )
  }
}