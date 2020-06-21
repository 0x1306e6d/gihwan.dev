import React from "react"

import { ThemeProvider } from "theme-ui"
import theme from "@rebass/preset"

import Layout from "./components/layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
