import React from 'react'
import styled from 'styled-components'
import { SearchBar, WhiteSpace, WingBlank, Pagination } from 'antd-mobile'
import PropTypes from 'prop-types'
import injectReducer from 'utils/injectReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { makeSelectDisciplineListCount } from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect'
import reducer from './reducer'
import DisciplineList from '../DisciplineList'
import { setCurrentPage } from './action'

const Wrapper = styled.div``

const pageSize = 10

function DisciplinePage(props) {
  return (
    <Wrapper>
      <WingBlank>
        <WhiteSpace />
        <SearchBar placeholder="输入要查询的专业名" />

        <WhiteSpace />
        <DisciplineList count={props.count} pageSize={pageSize} />

        <WhiteSpace />
        <Pagination
          total={Math.ceil(props.count / pageSize)}
          current={props.current}
          onChange={value => props.setCurrentPage(value)}
        />
      </WingBlank>
    </Wrapper>
  )
}

DisciplinePage.propTypes = {
  count: PropTypes.number,
  current: PropTypes.number,
  setCurrentPage: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  count: makeSelectDisciplineListCount(),
})

const mapDispatchToProps = dispatch => ({
  setCurrentPage: current => dispatch(setCurrentPage(current)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'disciplineList', reducer })

export default compose(
  withReducer,
  withConnect,
)(DisciplinePage)
