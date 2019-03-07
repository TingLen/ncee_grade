import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'
import Form from './Form'

function SchoolePage() {
  const onSubmit = value => {
    console.log(value)
  }
  return (
    <div className="school">
      {/* 搜索框 */}
      <WhiteSpace />
      <SearchBar onSubmit={value => onSubmit(value)} placeholder="输入院校名" />
      {/* form表单 */}
      <WhiteSpace />
      <Form />
    </div>
  )
}

export default SchoolePage
