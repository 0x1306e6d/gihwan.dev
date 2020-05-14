import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledArticleLink = styled(props => <Link {...props} />)`
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #ffd55e;
`

const StyledArticleDate = styled.span`
  margin-right: 1rem;
  font-size: 1rem;
`

const ArticleLink = ({ article }) => (
  <div>
    <h2>
      <StyledArticleDate>{article.frontmatter.date}</StyledArticleDate>
      <StyledArticleLink to={article.frontmatter.slug}>
        {article.frontmatter.title}
      </StyledArticleLink>
    </h2>
    <p>{article.excerpt}</p>
  </div>
)

ArticleLink.propTypes = {
  article: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  })
}

export default ArticleLink
