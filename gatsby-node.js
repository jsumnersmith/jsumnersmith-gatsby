// const path = require(`path`)
// // const { slash } = require(`gatsby-core-utils`)

// // // exports.createPages = async ({ graphql, actions }) => {
// // //   const { createPage } = actions

// // //   const result = await graphql(`
// // //     {
// // //       allMdx {
// // //         edges {
// // //           node {
// // //             id
// // //             frontmatter {
// // //               slug
// // //             }
// // //           }
// // //         }
// // //       }
// // //     }
// // //   `)

// // //   // Check for any errors
// // //   if (result.errors) {
// // //     console.error(result.errors)
// // //   }

// // //   // Access query results via object destructuring
// // //   const { allMdx } = result.data

// // //   const postTemplate = path.resolve(`./src/templates/post-wp.js`)
  
// // //   // allWordpressPost.edges.forEach(edge => {
// // //   //   createPage({
// // //   //     path: `/letters/${edge.node.slug}/`,
// // //   //     component: slash(postTemplate),
// // //   //     context: {
// // //   //       id: edge.node.id,
// // //   //     },
// // //   //   })
// // //   // })

// // //   const mediumTemplate = path.resolve(`./src/templates/post-medium.js`)

// // //   allMdx.edges.forEach(({ node }) => {
// // //     if(!node.frontmatter.slug) return;
// // //     createPage({
// // //       path: node.frontmatter.slug,
// // //       component: mediumTemplate,
// // //       context: {
// // //         slug: node.frontmatter.slug,
// // //       },
// // //     })
// // //   })

// // }
