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
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
}
