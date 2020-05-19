import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledArticleListItem = styled.article`
  margin-bottom: 64px;
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;

  font-size: 2.125rem;
  font-weight: 500;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #ffd55e;
`

const Metadata = styled.div`
  display: flex;

  flex: 1;
  flex-direction: row;
`

const ArticleDate = styled.time`
  margin-top: 0;
  margin-bottom: 16px;

  font-size: 1rem;
  font-weight: 300;
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
  font-weight: 300;
  line-height: 1.75rem;
  letter-spacing: 0.009375em;
`

const Excerpt = styled.p`
  margin-top: 0;
  margin-bottom: 32px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em;
`

const ArticleListItem = ({ article }) => (
  <StyledArticleListItem>
    <Title>
      <StyledLink to={article.frontmatter.slug}>
        {article.frontmatter.title}
      </StyledLink>
    </Title>
    <Metadata>
      <ArticleDate>{article.frontmatter.date}</ArticleDate>
      <Separator />
      <TimeToRead>{article.timeToRead} min read</TimeToRead>
    </Metadata>
    <Excerpt>{article.excerpt}</Excerpt>
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
      }),
      timeToRead: PropTypes.number.isRequired
    })
  ).isRequired
}

export default ArticleList
