import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
`

const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`

const Name = styled.span`
  padding: 0.1rem;
`

function Button(props) {
  return (
    <Wrapper onClick={() => props.history.push(props.router)}>
      <Icon src={props.icon} />
      <Name>{props.name}</Name>
    </Wrapper>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  router: PropTypes.string,
  history: PropTypes.object,
}

export default withRouter(Button)
