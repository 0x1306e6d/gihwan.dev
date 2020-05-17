import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledArticleListItem = styled.article`
  margin-bottom: 64px;

  display: flex;
  flex: 1;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`

const StyledArticleDate = styled.span`
  width: 100%;
  @media only screen and (min-width: 992px) {
    width: 33.33333%;
  }

  display: flex;
  flex: none;

  font-size: 1rem;
`

const StyledArticleListItemContent = styled.div`
  width: 100%;
  @media only screen and (min-width: 992px) {
    width: 66.66666%;
  }

  display: flex;
  flex: 1;
  flex-direction: column;
`

const StyledArticleLink = styled(props => <Link {...props} />)`
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #ffd55e;
`

const ArticleListItem = ({ article }) => (
  <StyledArticleListItem>
    <StyledArticleDate>{article.frontmatter.date}</StyledArticleDate>
    <StyledArticleListItemContent>
      <h2>
        <StyledArticleLink to={article.frontmatter.slug}>
          {article.frontmatter.title}
        </StyledArticleLink>
      </h2>
      <p>{article.excerpt}</p>
    </StyledArticleListItemContent>
  </StyledArticleListItem>
)

const ArticleList = ({ articles }) => (
  <div>
    {articles.map(article => (
      <ArticleListItem key={article.id} article={article} />
    ))}
  </div>
)

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    })
  ).isRequired
}

export default ArticleList
