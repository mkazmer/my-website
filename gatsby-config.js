module.exports = {
  siteMetadata: {
    title: `Mike Kazmer`,
    description: `My personal site!`,
    author: `@webbasser`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/webbasser.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/bands`,
        name: "bands",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-portal",
  ],
}
