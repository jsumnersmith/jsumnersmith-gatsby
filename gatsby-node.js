const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
          }
        }
      }
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPost, allMdx } = result.data

  const postTemplate = path.resolve(`./src/templates/post-wp.js`)
  
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/letters/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const mediumTemplate = path.resolve(`./src/templates/post-medium.js`)

  allMdx.edges.forEach(({ node }) => {
    if(!node.frontmatter.slug) return;
    createPage({
      path: node.frontmatter.slug,
      component: mediumTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  createRedirect({
    fromPath: `/literature/*`,
    toPath: `/letters/*`,
    isPermanent: true,
    force: true,
    ignoreCase: true,
  })

  createRedirect({
    fromPath: `/other/letters/test`,
    toPath: `/letters/`,
    isPermanent: true,
    force: true,
    ignoreCase: true,
  })

  createRedirect({
    fromPath: `/other/cool/*`,
    toPath: `/letters/`,
    isPermanent: true,
    force: true,
    ignoreCase: true,
  })

  createRedirect({
    fromPath: `/google`,
    toPath: `https://google.com`,
    isPermanent: true,
    force: true
  })

  createRedirect({
    fromPath: `/browser-google`,
    toPath: `https://google.com`,
    isPermanent: true,
    redirectInBrowser: true,
    force: true
  })

}
