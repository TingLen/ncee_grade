import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import ButtonIcon from './ButtonIcon'
import ButtonName from './ButtonName'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 5rem;
`
function Button(props) {
  const { icon, name } = props.button
  return (
    <Wrapper>
      <ButtonIcon icon={icon} />
      <ButtonName name={name} />
    </Wrapper>
  )
}

Button.propTypes = {
  button: PropType.object,
}

export default Button
