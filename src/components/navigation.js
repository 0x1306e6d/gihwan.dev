import React from "react"
import styled from "styled-components"

import { faBars } from "@fortawesome/free-solid-svg-icons"

import IconButton from "./icon-button"

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`

const StyledNavigationStart = styled.div`
  flex: 0 0 auto;
`

const StyledNavigationEnd = styled.div`
  margin-left: auto;
`

const Navigation = () => (
  <StyledNavigation>
    <StyledNavigationStart>
      <h1>Gihwan's Blog</h1>
    </StyledNavigationStart>
    <StyledNavigationEnd>
      <IconButton icon={faBars} />
    </StyledNavigationEnd>
  </StyledNavigation>
)

export default Navigation
