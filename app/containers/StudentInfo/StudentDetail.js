import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Span = styled.span`
  color: #000;
`

function StudentDetail(props) {
  const details = []
  const titles = ['考生信息', '考生分数', '分类']
  const values = [
    props.city,
    props.searchForm.get('score'),
    props.searchForm.get('subject'),
  ]
  for (let i = 0; i < titles.length; i += 1) {
    details.push({
      key: i,
      title: titles[i],
      value: values[i],
    })
  }
  return (
    <Wrapper>
      {details.map(item => (
        <div key={item.key}>
          <Span>{item.title}:</Span>
          <Span>{item.value}</Span>
        </div>
      ))}
    </Wrapper>
  )
}

StudentDetail.propTypes = {
  city: PropTypes.string,
  searchForm: PropTypes.object,
}

export default StudentDetail
