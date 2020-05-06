import React from "react"
import PropTypes from "prop-types"

import Container from "../components/container"
import GlobalStyle from "../components/global-style"
import Navigation from "../components/navigation"

const DefaultLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>
      <Navigation />
      {children}
    </Container>
  </>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
