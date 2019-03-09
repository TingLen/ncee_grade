import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Span = styled.span`
  color: #000;
  flex: 1;
  text-align: center;
`

function SchoolListHead() {
  return (
    <Wrapper>
      <Span>学校名称</Span>
      <Span>录取批次</Span>
      <Span>去年分数线</Span>
    </Wrapper>
  )
}

export default SchoolListHead
