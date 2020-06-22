import React from "react"
import PropTypes from "prop-types"

import { Box, Flex, Heading, Link, Text } from "rebass"

const ArticleListItem = ({ article }) => (
  <Box mb={4}>
    <Box mb={2}>
      <Heading>
        <Link
          href={article.frontmatter.path}
          sx={{
            color: "inherit",
            textDecoration: "none",
            ":hover, :focus": {
              color: "primary",
              textDecoration: "underline"
            }
          }}
        >
          {article.frontmatter.title}
        </Link>
      </Heading>
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
