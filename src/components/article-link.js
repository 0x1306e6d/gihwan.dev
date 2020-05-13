import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ArticleLink = ({ article }) => (
  <div>
    <Link to={article.frontmatter.slug}>
      <h2>{article.frontmatter.title}</h2>
    </Link>
  </div>
)

ArticleLink.propTypes = {
  article: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  })
}

export default ArticleLink
