import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div``

function Count(props) {
  return (
    <Wrapper>
      {`共${props.count}条记录，共${Math.ceil(props.count / props.pageSize)}页`}
    </Wrapper>
  )
}

Count.propTypes = {
  count: PropTypes.number,
  pageSize: PropTypes.number,
}

export default Count
