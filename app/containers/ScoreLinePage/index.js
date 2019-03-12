import React from 'react'
import styled from 'styled-components'

import LineChart from './LineChart'
import LineTable from './LineTable'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 47rem;
`

function ScoreLinePage() {
  return (
    <Wrapper>
      <LineTable />
      <LineChart />
    </Wrapper>
  )
}

export default ScoreLinePage
