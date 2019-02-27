import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const Span = styled.span`
  color: #000;
`

function ButtonName(props) {
  const { name } = props
  return <Span>{name}</Span>
}

ButtonName.propTypes = {
  name: PropType.string,
}

export default ButtonName
