import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'antd-mobile'
import Toggle from 'components/Toggle'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { makeSelectCity } from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import Wrapper from './Wrapper'

import { changeCity } from './action'

const data = [
  {
    label: '北京',
    value: '北京',
  },
  {
    label: '天津',
    value: '天津',
  },
]

const CustomChildren = props => (
  <div onClick={props.onClick} role="presentation">
    <Toggle city={props.city} />
  </div>
)

CustomChildren.propTypes = {
  onClick: PropTypes.func,
  city: PropTypes.string,
}

function Header(props) {
  return (
    <Wrapper>
      <Picker
        data={data}
        cols={1}
        onOk={value => {
          props.onCityChange(value[0])
        }}
      >
        <CustomChildren city={props.city} />
      </Picker>
    </Wrapper>
  )
}

Header.propTypes = {
  city: PropTypes.string,
  onCityChange: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  city: makeSelectCity(),
})

export function mapDispatchToProps(dispatch) {
  return {
    onCityChange: city => dispatch(changeCity(city)),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'header', reducer })

export default compose(
  withReducer,
  withConnect,
)(Header)
