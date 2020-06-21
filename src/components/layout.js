import React from "react"

import { Box } from "rebass"

import Container from "../components/container"
import Header from "../components/header"

export default ({ children }) => (
  <Box
    sx={{
      p: 4,
      color: "text",
      bg: "background",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }}
  >
    <Header />
    <Container>{children}</Container>
  </Box>
)
