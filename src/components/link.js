import React from 'react';
import { Link } from "gatsby"

// import styles from "../gatsby-plugin-theme-ui/styles"

export default ({children, to, ...props}) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <Link
        to={to}
        {...props}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a
        href={to}
        {...props}
      >
        {children}
      </a>
    )
  }
}