import React from "react"

import { Box, Flex } from "rebass"

import Container from "../components/container"
import Footer from "../components/footer"
import Header from "../components/header"

export default ({ children }) => (
  <Flex
    flexDirection="column"
    sx={{
      color: "text",
      bg: "background",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      minHeight: "100vh"
    }}
  >
    <Header />
    <Box px={4} py={[1, 3]}>
      <Container>{children}</Container>
    </Box>
    <Footer />
  </Flex>
)
