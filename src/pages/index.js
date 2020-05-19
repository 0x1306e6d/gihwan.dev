import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import ArticleList from "../components/article-list"
import DefaultLayout from "../layouts/default"

const Heading = styled.h1`
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em;
`

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const articles = edges.map(edge => edge.node)

  return (
    <DefaultLayout>
      <Heading>All Articles</Heading>
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
          timeToRead
        }
      }
    }
  }
`
