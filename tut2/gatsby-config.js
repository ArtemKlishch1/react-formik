/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
    },
  ],
}
