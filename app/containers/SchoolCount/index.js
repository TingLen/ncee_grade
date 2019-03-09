import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  padding: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Span = styled.span`
  color: #000;
  padding: 0 1rem;
`

function SchoolCount(props) {
  return (
    <Wrapper>
      <Span>{`共匹配到${props.count}所学校`}</Span>
      <Span>{`第${props.current}/${Math.ceil(
        props.count / props.pageSize,
      )}页`}</Span>
    </Wrapper>
  )
}

SchoolCount.propTypes = {
  count: PropTypes.number,
  pageSize: PropTypes.number,
  current: PropTypes.number,
}

export default SchoolCount
