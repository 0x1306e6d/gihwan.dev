import React from "react"
import PropTypes from "prop-types"

import { Box } from "rebass"

const Container = ({ children }) => (
  <Box
    sx={{
      mx: "auto",
      px: 3
    }}
  >
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.node
}

export default Container
