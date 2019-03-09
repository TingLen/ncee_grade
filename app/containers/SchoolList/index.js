import React from 'react'
import styled from 'styled-components'
import Record from './Record'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
`

function SchoolList() {
  return (
    <Wrapper>
      <Record />
    </Wrapper>
  )
}

export default SchoolList
