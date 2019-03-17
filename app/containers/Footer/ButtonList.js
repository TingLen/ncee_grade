import React from 'react'
import styled from 'styled-components'
import icon from 'images/icon-512x512.png'

import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ButtonListData = [
  {
    icon,
    name: '回到主页',
    router: '/',
  },
  {
    icon,
    name: '院校查询',
    router: '/school',
  },
  {
    icon,
    name: '历年分数线',
    router: '/scoreline',
  },
]

function ButtonList() {
  return (
    <Wrapper>
      {ButtonListData.map(item => (
        <Button
          icon={item.icon}
          name={item.name}
          router={item.router}
          key={item.name}
        />
      ))}
    </Wrapper>
  )
}

export default ButtonList
