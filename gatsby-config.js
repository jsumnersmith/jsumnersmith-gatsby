module.exports = {
  siteMetadata: {
    title: `Joel Sumner Smith`,
    description: `Product Manager for Gatsby focused on developer experience. Analogical thinker in an analytical world.`,
    author: `@jsumnersmith`,
  },
  plugins: [
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/notes`,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://medium.com/feed/@jsumnersmith`,
        name: `MediumPosts`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `jsumner.wordpress.com/`,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false,
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
    `gatsby-plugin-sharp`,
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
    }
  ],
}
