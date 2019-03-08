import React from 'react'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'
import { makeSlectSchoolCount } from 'containers/App/selectors'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import PropTypes from 'prop-types'
import reducer from './reducer'

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
  const count = props.count.get('count')

  return (
    <Wrapper>
      <Span>{`共匹配到${count}所学校`}</Span>
      <Span>{`第1/${Math.ceil(count / 10)}页`}</Span>
    </Wrapper>
  )
}

SchoolCount.propTypes = {
  count: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  count: makeSlectSchoolCount(),
})

const withReducer = injectReducer({ key: 'schoolCount', reducer })

const withConnect = connect(mapStateToProps)

export default compose(
  withReducer,
  withConnect,
)(SchoolCount)
