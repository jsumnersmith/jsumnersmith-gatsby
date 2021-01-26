module.exports = {
  siteMetadata: {
    title: `Joel Sumner Smith`,
    description: `Product Manager for Gatsby focused on developer experience. Analogical thinker in an analytical world.`,
    author: `@jsumnersmith`,
  },
  plugins: [
    {
      resolve: "gatsby-alias-imports",
      options: {
        components: "src/components",
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/notes`,
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `jsumner.wordpress.com/`,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false,
        includedRoutes: ["**/posts"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `letters`,
        path: `${__dirname}/src/letters`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jsumnersmith`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `mediumblue`,
        display: `minimal-ui`,
        icon: `src/images/mug-favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-functions`,
      options: {
        path: `${__dirname}/src/api`,
      },
    },
  ],
}
