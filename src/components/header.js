import React from "react"

import { Box, Flex, Link } from "rebass"

export default () => {
  return (
    <Flex
      alignItems="center"
      as="header"
      px={[2, 3]}
      py={2}
      sx={{ borderBottomStyle: "dashed", borderBottomWidth: 1 }}
    >
      <Link href="/" variant="nav">
        Gihwan's Blog
      </Link>
      <Box mx="auto" />
      <Link href="https://github.com/ghkim3221/gihwan.dev" variant="nav">
        GitHub
      </Link>
    </Flex>
  )
}
