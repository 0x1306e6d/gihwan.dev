import React from "react"
import { graphql } from "gatsby"

import { Box, Heading } from "rebass"

import ArticleList from "../components/article-list"

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const articles = edges.map(edge => edge.node)

  return (
    <>
      <Box mb={4}>
        <Heading variant="display">All Articles</Heading>
      </Box>
      <ArticleList articles={articles} />
    </>
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
          timeToRead
        }
      }
    }
  }
`
