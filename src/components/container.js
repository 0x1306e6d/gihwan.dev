import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 100%;
  max-width: 414px;

  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 992px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

Container.propTypes = {
  children: PropTypes.node
}

export default Container
