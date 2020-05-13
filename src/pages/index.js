import React from "react"
import { graphql } from "gatsby"

import ArticleLink from "../components/article-link"
import DefaultLayout from "../layouts/default"

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const articles = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <ArticleLink key={edge.node.id} article={edge.node} />)

  return (
    <DefaultLayout>
      <h1>Hello World!</h1>
      {articles}
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
            date(formatString: "YYYY MMMM DD")
            slug
            title
          }
        }
      }
    }
  }
`
