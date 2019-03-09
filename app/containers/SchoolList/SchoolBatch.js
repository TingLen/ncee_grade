import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Batch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function SchoolBatch(props) {
  return <Batch>{props.batch}</Batch>
}

SchoolBatch.propTypes = {
  batch: PropTypes.string,
}

export default SchoolBatch
