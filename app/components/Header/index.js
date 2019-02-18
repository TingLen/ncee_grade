import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'antd-mobile'
import Wrapper from './Wrapper'
import Toggle from './Toggle'

const data = [
  {
    label: '北京',
    value: '北京',
  },
  {
    label: '天津',
    value: '天津',
  },
]

const CustomChildren = props => (
  <div onClick={props.onClick} role="presentation">
    <Toggle extra={props.extra} />
  </div>
)

CustomChildren.propTypes = {
  onClick: PropTypes.func,
  extra: PropTypes.string,
}

function Header() {
  return (
    <Wrapper>
      <Picker
        data={data}
        cols={1}
        onOk={value => {
          console.log(value)
        }}
      >
        <CustomChildren />
      </Picker>
    </Wrapper>
  )
}

export default Header
