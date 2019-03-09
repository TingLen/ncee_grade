import React from 'react'
import styled from 'styled-components'
import SchoolName from './SchoolName'
import ScoreLine from './ScoreLine'
import SchoolBatch from './SchoolBatch'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

function Record() {
  return (
    <Wrapper>
      <SchoolName />
      <SchoolBatch />
      <ScoreLine />
    </Wrapper>
  )
}

export default Record
