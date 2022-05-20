import React from 'react';
import {Link} from "gatsby"
import styles from "../gatsby-plugin-theme-ui/styles"

export default ({to, title, description, Image}) => {

  return (
    <Link to={to} style={{display: `block`, marginBottom: 30, textDecoration: `none`, border: `1px solid  #ccc`, borderRadius: 3}}>  
      <div style={{ display: 'flex' }}>
        <div style={{display: 'flex', minWidth: 170, padding: 37, justifyContent: `center`, alignItems: `center`}}>
          <Image />
        </div>
        <div sx={{p: 4, pl: 0}}>
          <h2 style={{
            fontSize: 18,
            margin: 15,
          }}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

