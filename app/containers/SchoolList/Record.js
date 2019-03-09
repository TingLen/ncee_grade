import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SchoolName from './SchoolName'
import ScoreLine from './ScoreLine'
import SchoolBatch from './SchoolBatch'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

function Record(props) {
  const { name, batch, line, adress } = props.record
  return (
    <Wrapper>
      <SchoolName name={name} adress={adress} />
      <SchoolBatch batch={batch} />
      <ScoreLine line={line} />
    </Wrapper>
  )
}

Record.propTypes = {
  record: PropTypes.object,
}

export default Record
