import React from 'react'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Pagination } from 'antd-mobile'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  makeSelectSchoolCount,
  makeSelectSchoolListCurrentPage,
} from 'containers/App/selectors'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import PropTypes from 'prop-types'
import SchoolList from '../SchoolList'
import SchoolListHead from '../SchoolListHead'
import SchoolCount from '../SchoolCount'
import StudentInfo from '../StudentInfo'
import reducer from './reducer'
import { setSchoolListCurrentPage } from './action'

const Wrapper = styled.div``

const pageSize = 10

function SchoolListPage(props) {
  return (
    <Wrapper>
      {/* 顶部考生信息 */}
      <WhiteSpace />
      <StudentInfo />
      {/* 匹配到的学校数量 */}
      <WhiteSpace />
      <WingBlank>
        <SchoolCount
          pageSize={pageSize}
          count={props.count}
          current={props.current}
        />
      </WingBlank>

      {/* list */}
      <WhiteSpace />
      <SchoolListHead />
      <SchoolList />
      {/* pagenation */}
      <WhiteSpace />
      <Pagination
        total={Math.ceil(props.count / pageSize)}
        current={1}
        onChange={value => props.setCurrentPage(value)}
      />
    </Wrapper>
  )
}

SchoolListPage.propTypes = {
  count: PropTypes.number,
  current: PropTypes.number,
  setCurrentPage: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  count: makeSelectSchoolCount(),
  current: makeSelectSchoolListCurrentPage(),
})

const mapDispatchToProps = dispatch => ({
  setCurrentPage: current => dispatch(setSchoolListCurrentPage(current)),
})

const withReducer = injectReducer({ key: 'schoolList', reducer })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withReducer,
  withConnect,
)(SchoolListPage)
