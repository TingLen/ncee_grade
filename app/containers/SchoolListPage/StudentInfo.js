import React from 'react'
import styled from 'styled-components'
import {
  makeSelectCity,
  makeSelectSchoolSearchForm,
} from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from './StudentIcon'
import Detail from './StudentDetail'
import ReselectButton from './StudentReselect'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
`

function StudentInfo(props) {
  return (
    <Wrapper>
      <Icon />
      <Detail city={props.city} searchForm={props.searchForm} />
      <ReselectButton />
    </Wrapper>
  )
}

StudentInfo.propTypes = {
  city: PropTypes.string,
  searchForm: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  city: makeSelectCity(),
  searchForm: makeSelectSchoolSearchForm(),
})

export default connect(mapStateToProps)(StudentInfo)
