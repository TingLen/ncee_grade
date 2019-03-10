import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Span = styled.span`
  text-align: center;
  color: #000;
`

function HeadItem(props) {
  return <Span>{props.item}</Span>
}

HeadItem.propTypes = {
  item: PropTypes.string,
}

export default HeadItem
