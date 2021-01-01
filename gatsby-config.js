require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `The Lucid Chisel`,
    description: `Buy my stuff at thelucidchisel.com.`,
    author: `stephen@harrison.org`,
  },
  plugins: [
    {
      resolve: "gatsby-source-etsy",
      options: {
        api_key: process.env.ETSY_API_KEY,
        shop_id: process.env.ETSY_SHOP_NAME,
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
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
