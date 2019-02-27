import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
  width: 70%;
  height: 70%;
  overflow: hidden;
  border-radius: 50% 50%;
`

function ButtonIcon(props) {
  const { icon } = props
  return <Img src={icon} alt="image" />
}

ButtonIcon.propTypes = {
  icon: PropType.string,
}

export default ButtonIcon
