import React from 'react'
import { Icon } from 'antd-mobile'
import ToggleWrapper from './ToggleWrapper'
import ToggleItem from './ToggleItem'
import ToggleSpan from './ToggleSpan'

function Toggle() {
  return (
    <ToggleWrapper>
      <ToggleItem>
        <ToggleSpan>广西</ToggleSpan>
      </ToggleItem>
      <ToggleItem>
        <Icon type="down" size="md" color="#fff" />
      </ToggleItem>
    </ToggleWrapper>
  )
}

export default Toggle
