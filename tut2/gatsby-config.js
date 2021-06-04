/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@johndow",
    person: { name: "John", age: 32 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "John", age: 32 },
      { name: "Bob", age: 32 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    }, // plugin for graphql
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7l5oyrigwa9t`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFULL_API_KEY,
      }, // plugin for contentfull
    },
  ],
}
