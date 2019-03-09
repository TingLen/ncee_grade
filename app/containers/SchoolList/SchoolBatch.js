import React from 'react'
import styled from 'styled-components'

const Batch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function SchoolBatch() {
  return <Batch>本科第一批</Batch>
}

export default SchoolBatch
