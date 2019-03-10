import React from 'react'
import styled from 'styled-components'
import HeadItem from './HeadItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const HeadItems = ['专业名称', '专业类别', '专业热度']

function Head() {
  return (
    <Wrapper>
      {HeadItems.map(item => (
        <HeadItem item={item} key={item} />
      ))}
    </Wrapper>
  )
}

export default Head
