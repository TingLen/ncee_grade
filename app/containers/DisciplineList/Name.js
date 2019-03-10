import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 40%;
`

function Name(props) {
  return <Wrapper>{props.name}</Wrapper>
}

Name.propTypes = {
  name: PropTypes.string,
}

export default Name
