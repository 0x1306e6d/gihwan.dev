import React from "react"
import { graphql } from "gatsby"

import { Flex, Heading, Text } from "rebass"

const Article = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark

  return (
    <>
      <Heading variant="display">{frontmatter.title}</Heading>
      <Flex mb={2}>
        <Text mr={2}>{frontmatter.date}</Text>
        <Text>{timeToRead} min read</Text>
      </Flex>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default Article

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        date
        title
      }
      timeToRead
    }
  }
`
