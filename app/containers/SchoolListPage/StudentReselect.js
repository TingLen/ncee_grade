import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd-mobile'
import { withRouter } from 'react-router'

function StudentReselect(props) {
  const gotoSchoolPage = () => {
    props.history.push('/school')
  }
  return (
    <Button type="primary" size="small" onClick={gotoSchoolPage}>
      重选
    </Button>
  )
}

StudentReselect.propTypes = {
  history: PropTypes.func,
}

export default withRouter(StudentReselect)
