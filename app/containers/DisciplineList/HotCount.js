import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 30%;
`

function HotCount(props) {
  return <Wrapper>{props.hotCount}</Wrapper>
}

HotCount.propTypes = {
  hotCount: PropTypes.number,
}

export default HotCount
