import React from "react"
import PropTypes from "prop-types"

import ArticleLink from "./article-link"

const ArticleList = ({ articles }) => (
  <div>
    {articles.map(article => (
      <ArticleLink key={article.id} article={article} />
    ))}
  </div>
)

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    })
  ).isRequired
}

export default ArticleList
