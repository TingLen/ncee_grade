import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'
import iconSrc from 'images/icon-512x512.png'
import ButtonList from '../../components/ButtonList'

function SchoolePage() {
  const onSubmit = value => {
    alert(value)
  }
  const buttons = [
    {
      key: 0,
      icon: iconSrc,
      name: '按地域查找',
      path: '/school',
    },
    {
      key: 1,
      icon: iconSrc,
      name: '按专业查找',
    },
    {
      key: 2,
      icon: iconSrc,
      name: '按类别查找',
    },
    {
      key: 3,
      icon: iconSrc,
      name: '211高校',
    },
    {
      key: 4,
      icon: iconSrc,
      name: '985高校',
    },
  ]
  return (
    <div className="school">
      {/* 搜索框 */}
      <WhiteSpace />
      <SearchBar onSubmit={value => onSubmit(value)} placeholder="输入院校名" />
      {/* 页面按钮 */}
      <WhiteSpace />
      <ButtonList buttons={buttons} />
    </div>
  )
}

export default SchoolePage
