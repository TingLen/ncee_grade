import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'

function SchoolePage() {
  const onSubmit = value => {
    console.log(value)
  }
  return (
    <div className="school">
      <WhiteSpace />
      <SearchBar onSubmit={value => onSubmit(value)} placeholder="输入院校名" />
    </div>
  )
}

export default SchoolePage
