module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138964328-2"
      }
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-mdx"
  ]
}
