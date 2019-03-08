import React from 'react'
import styled from 'styled-components'
import { WhiteSpace, WingBlank } from 'antd-mobile'
import StudentInfo from './StudentInfo'
import SchoolCount from '../SchoolCount'
const Wrapper = styled.div``

function SchoolListPage() {
  return (
    <Wrapper>
      {/* 顶部考生信息 */}
      <WhiteSpace />
      <StudentInfo />
      {/* 匹配到的学校数量 */}
      <WhiteSpace />
      <WingBlank>
        <SchoolCount />
      </WingBlank>
    </Wrapper>
  )
}

export default SchoolListPage
