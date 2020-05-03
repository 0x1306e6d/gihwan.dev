import React from "react"
import PropTypes from "prop-types"

import Container from "../components/container"
import Navigation from "../components/navigation"

const DefaultLayout = ({ children }) => (
  <Container>
    <Navigation />
    {children}
  </Container>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
