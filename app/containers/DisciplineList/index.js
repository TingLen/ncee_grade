import React from 'react'
import styled from 'styled-components'
import { WhiteSpace } from 'antd-mobile'
import PropTypes from 'prop-types'
import Head from './Head'
import List from './List'
import Count from './Count'

const Wrapper = styled.div``

function DisciplineList(props) {
  return (
    <Wrapper>
      <WhiteSpace />
      <Head />

      <WhiteSpace />
      <List />

      <WhiteSpace />
      <Count count={props.count} pageSize={props.pageSize} />
    </Wrapper>
  )
}

DisciplineList.propTypes = {
  count: PropTypes.number,
  pageSize: PropTypes.number,
}

export default DisciplineList
