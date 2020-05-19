import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/default"

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em;
`

const Metadata = styled.div`
  display: flex;

  flex: 1;
  flex-direction: row;
`

const Date = styled.time`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.009375em;
`

const Separator = styled.span`
  margin-left: 16px;
  margin-right: 16px;
`

const TimeToRead = styled.p`
  margin-top: 0;
  margin-bottom: 16px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.009375em;
`

const Article = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark

  return (
    <DefaultLayout>
      <Title>{frontmatter.title}</Title>
      <Metadata>
        <Date>{frontmatter.date}</Date>
        <Separator />
        <TimeToRead>{timeToRead} min read</TimeToRead>
      </Metadata>
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
      timeToRead
    }
  }
`
