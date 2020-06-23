import React from "react"

import { Box, Flex, Link, Text } from "rebass"

export default () => (
  <Flex mt="auto" p={4}>
    <Box mx="auto">
      <Text variant="caps">
        Made by{" "}
        <Link
          href="https://gihwankim.com"
          sx={{
            color: "inherit",
            textDecoration: "none"
          }}
        >
          Gihwan Kim
        </Link>
      </Text>
    </Box>
  </Flex>
)
