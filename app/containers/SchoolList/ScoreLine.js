import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Score = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function ScoreLine(props) {
  return <Score>{props.line}</Score>
}

ScoreLine.propTypes = {
  line: PropTypes.number,
}

export default ScoreLine
