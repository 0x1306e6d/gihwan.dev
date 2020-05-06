import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 12px;
  text-decoration: none;
`

const IconButton = ({ href, icon }) => {
  const component = href ? "a" : "button"

  return (
    <StyledIconButton as={component} href={href}>
      <FontAwesomeIcon icon={icon} />
    </StyledIconButton>
  )
}

IconButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired
}

export default IconButton
