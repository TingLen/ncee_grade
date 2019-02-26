import React from 'react'
import { Icon } from 'antd-mobile'
import PropTypes from 'prop-types'
import ToggleWrapper from './ToggleWrapper'
import ToggleItem from './ToggleItem'
import ToggleSpan from './ToggleSpan'

function Toggle(props) {
  return (
    <ToggleWrapper>
      <ToggleItem>
        <ToggleSpan>{props.city}</ToggleSpan>
      </ToggleItem>
      <ToggleItem>
        <Icon type="down" size="md" color="#fff" />
      </ToggleItem>
    </ToggleWrapper>
  )
}

Toggle.propTypes = {
  city: PropTypes.string,
}

export default Toggle
