import React from "react"
import { graphql } from "gatsby"

import ArticleList from "../components/article-list"
import DefaultLayout from "../layouts/default"

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const articles = edges.map(edge => edge.node)

  return (
    <DefaultLayout>
      <h1>All Articles</h1>
      <ArticleList articles={articles} />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`
