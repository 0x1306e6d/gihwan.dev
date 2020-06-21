import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "theme-ui"
import theme from "@rebass/preset"
import { Box } from "rebass"

import Container from "../components/container"
import Header from "../components/header"

const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
