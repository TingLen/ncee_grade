import React from 'react'
import styled from 'styled-components'
import { WhiteSpace } from 'antd-mobile'
import Record from './Record'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
`

const records = [
  {
    key: 0,
    name: '中北大学',
    batch: '本科第一批',
    line: 522,
    adress: '山西',
  },
  {
    key: 1,
    name: '北京大学',
    batch: '本科第一批',
    line: 666,
    adress: '北京',
  },
  {
    key: 2,
    name: '中北大学',
    batch: '本科第一批',
    line: 522,
    adress: '山西',
  },
  {
    key: 3,
    name: '北京大学',
    batch: '本科第一批',
    line: 666,
    adress: '北京',
  },
  {
    key: 0,
    name: '中北大学',
    batch: '本科第一批',
    line: 522,
    adress: '山西',
  },
  {
    key: 1,
    name: '北京大学',
    batch: '本科第一批',
    line: 666,
    adress: '北京',
  },
  {
    key: 2,
    name: '中北大学',
    batch: '本科第一批',
    line: 522,
    adress: '山西',
  },
  {
    key: 3,
    name: '北京大学',
    batch: '本科第一批',
    line: 666,
    adress: '北京',
  },
  {
    key: 0,
    name: '中北大学',
    batch: '本科第一批',
    line: 522,
    adress: '山西',
  },
  {
    key: 1,
    name: '北京大学',
    batch: '本科第一批',
    line: 666,
    adress: '北京',
  },
  {
    key: 2,
    name: '中北大学',
    batch: '本科第一批',
    line: 522,
    adress: '山西',
  },
  {
    key: 3,
    name: '北京大学',
    batch: '本科第一批',
    line: 666,
    adress: '北京',
  },
]

function SchoolList() {
  return (
    <Wrapper>
      {records.map(item => (
        <div>
          <WhiteSpace />
          <Record record={item} key={item.key} />
        </div>
      ))}
    </Wrapper>
  )
}

export default SchoolList
