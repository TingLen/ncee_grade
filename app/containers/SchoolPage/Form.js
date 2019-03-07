import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Picker, InputItem, List, WhiteSpace } from 'antd-mobile'
import { createForm } from 'rc-form'
import injectReducer from 'utils/injectReducer'
import { makeSelectSchoolSearchForm } from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { addFormSearchWay, addFormSubject, addFormScore } from './action'
import reducer from './reducer'

const searchWays = [
  {
    label: '按照分数查询',
    value: '按照分数查询',
  },
  {
    label: '按照位次查询',
    value: '按照位次查询',
  },
]

const subjects = [
  {
    label: '文科',
    value: '文科',
  },
  {
    label: '理科',
    value: '理科',
  },
]

class Form extends Component {
  gotoList = () => this.props.history.push('school/list')

  render() {
    return (
      <List>
        <Picker
          cols={1}
          title="选择查询方式"
          data={searchWays}
          extra="请选择"
          value={[this.props.searchForm.get('way')]}
          onOk={value => this.props.onWayChange(value[0])}
        >
          <List.Item>查询方式</List.Item>
        </Picker>

        <WhiteSpace />
        <InputItem
          placeholder="输入分数"
          onChange={value => this.props.onScoreChange(value)}
        >
          高考分数
        </InputItem>

        <WhiteSpace />
        <Picker
          cols={1}
          title="选择文理科"
          data={subjects}
          extra="请选择"
          value={[this.props.searchForm.get('subject')]}
          onOk={value => this.props.onSubjectChange(value[0])}
        >
          <List.Item>选择文理科</List.Item>
        </Picker>

        <WhiteSpace />
        <Button type="primary" onClick={this.gotoList}>
          找大学
        </Button>
      </List>
    )
  }
}

Form.propTypes = {
  searchForm: PropTypes.object,
  history: PropTypes.object,
  onScoreChange: PropTypes.func,
  onWayChange: PropTypes.func,
  onSubjectChange: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  searchForm: makeSelectSchoolSearchForm(),
})

const mapDispatchToProps = dispatch => ({
  onSubjectChange: subject => dispatch(addFormSubject(subject)),
  onScoreChange: score => dispatch(addFormScore(score)),
  onWayChange: way => dispatch(addFormSearchWay(way)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'schoolSearchForm', reducer })

export default compose(
  withRouter,
  withReducer,
  withConnect,
  createForm(),
)(Form)
