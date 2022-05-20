module.exports = {
  siteMetadata: {
    title: `Joel Sumner Smith`,
    description: `Director of Product at Gatsby. Analogical thinker in an analytical world.`,
    author: `@jsumnersmith`,
    siteUrl: 'https://jsumnersmith.com'
  },
  plugins: [

    // {
    //   resolve: `gatsby-theme-blog`,
    //   options: {
    //     basePath: `/notes`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `jsumner.wordpress.com/`,
    //     protocol: `https`,
    //     hostingWPCOM: true,
    //     useACF: false,
    //     includedRoutes: ["**/posts"],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `letters`,
        path: `${__dirname}/src/letters`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          letters: require.resolve("./src/templates/post-medium.js"),
        },
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    //"gatsby-plugin-sharp",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `jsumnersmith`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `mediumblue`,
    //     display: `minimal-ui`,
    //     icon: `src/images/mug-favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // "gatsby-transformer-json",
    // "gatsby-plugin-gatsby-cloud"
  ],
}
