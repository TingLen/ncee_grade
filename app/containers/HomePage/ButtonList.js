import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`

function ButtonList() {
  const buttons = [
    {
      icon: '',
      name: '院校查询',
    },
    {
      icon: '',
      name: '专业查询',
    },
    {
      icon: '',
      name: '分数线查询',
    },
  ]
  return (
    <Wrapper>
      <Button button={buttons[0]} />
      <Button button={buttons[1]} />
      <Button button={buttons[2]} />
    </Wrapper>
  )
}

export default ButtonList
