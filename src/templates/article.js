import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/default"

const Article = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <DefaultLayout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DefaultLayout>
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
    }
  }
`
