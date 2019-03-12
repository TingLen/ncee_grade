import React from 'react'
import styled from 'styled-components'

import Table from 'rc-table'
import 'rc-table/assets/index.css'

const Wrapper = styled.div`
  height: 50%;
`
const columns = [
  { title: '年份', dataIndex: 'date', key: 'date', width: 200 },
  { title: '分数线', dataIndex: 'score', key: 'score', width: 200 },
]

const data = [
  {
    date: '2012',
    score: '522',
  },
  {
    date: '2013',
    score: '524',
  },
  {
    date: '2014',
    score: '512',
  },
  {
    date: '2015',
    score: '531',
  },
  {
    date: '2016',
    score: '516',
  },
  {
    date: '2017',
    score: '506',
  },
  {
    date: '2018',
    score: '511',
  },
]

function LineTable() {
  return (
    <Wrapper>
      <Table columns={columns} data={data} />
    </Wrapper>
  )
}

export default LineTable
