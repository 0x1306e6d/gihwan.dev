import React from "react"

import { Box } from "rebass"

import Container from "../components/container"
import Header from "../components/header"

export default ({ children }) => (
  <Box
    sx={{
      color: "text",
      bg: "background",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }}
  >
    <Header />
    <Box px={4} py={[1, 3]}>
      <Container>{children}</Container>
    </Box>
  </Box>
)
