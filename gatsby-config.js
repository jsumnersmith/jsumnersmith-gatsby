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
        basePath: `/blog`,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `mediumblue`,
        display: `minimal-ui`,
        icon: `src/images/mug-favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
