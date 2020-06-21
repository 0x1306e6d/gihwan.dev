import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Box, Flex, Heading, Text } from "rebass"

const ArticleListItem = ({ article }) => (
  <Box mb={4}>
    <Box mb={2}>
      <Link to={article.frontmatter.slug}>
        <Heading>{article.frontmatter.title}</Heading>
      </Link>
    </Box>
    <Flex mb={2}>
      <Text mr={2}>{article.frontmatter.date}</Text>
      <Text>{article.timeToRead} min read</Text>
    </Flex>
    <Text>{article.excerpt}</Text>
  </Box>
)

const ArticleList = ({ articles }) => (
  <Box>
    {articles.map(article => (
      <ArticleListItem key={article.id} article={article} />
    ))}
  </Box>
)

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }),
      timeToRead: PropTypes.number.isRequired
    })
  ).isRequired
}

export default ArticleList
