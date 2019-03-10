import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 30%;
`

function Category(props) {
  return <Wrapper>{props.category}</Wrapper>
}

Category.propTypes = {
  category: PropTypes.string,
}

export default Category
