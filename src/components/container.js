import React from "react"
import PropTypes from "prop-types"

import { Box } from "rebass"

const Container = ({ children }) => (
  <Box
    sx={{
      maxWidth: 1024,
      mx: "auto"
    }}
  >
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.node
}

export default Container
