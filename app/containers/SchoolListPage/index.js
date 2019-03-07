import React from 'react'
import styled from 'styled-components'
import { WhiteSpace } from 'antd-mobile'
import StudentInfo from './StudentInfo'
const Wrapper = styled.div``

function SchoolListPage() {
  return (
    <Wrapper>
      <WhiteSpace />
      <StudentInfo />
    </Wrapper>
  )
}

export default SchoolListPage
