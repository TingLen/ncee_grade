import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0;
`

function ButtonList(props) {
  return (
    <Wrapper>
      {props.buttons.map(button => (
        <Button button={button} />
      ))}
    </Wrapper>
  )
}

ButtonList.propTypes = {
  buttons: PropTypes.object,
}

export default ButtonList
