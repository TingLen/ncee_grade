import React from 'react'
import styled from 'styled-components'
import ListItem from './Listitem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const disciplines = [
  {
    name: '材料成型及控制工程',
    category: '材料科学与工程',
    hotCount: 382925,
  },
  {
    name: '计算机技术与科学',
    category: '计算机科学',
    hotCount: 49182325,
  },
  {
    name: '信息通信与科学',
    category: '工学类',
    hotCount: 4823732,
  },
  {
    name: '经济学',
    category: '经济学类',
    hotCount: 94824,
  },
]

function List() {
  return (
    <Wrapper>
      {disciplines.map(item => (
        <ListItem discipline={item} key={item.name} />
      ))}
    </Wrapper>
  )
}

export default List
