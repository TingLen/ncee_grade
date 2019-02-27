import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'
import iconSrc from 'images/icon-512x512.png'
import Wrapper from './Wrapper'
import ButtonList from '../../components/ButtonList'
import Footer from './Footer'

function HomePage() {
  const buttons = [
    {
      key: 0,
      icon: iconSrc,
      name: '院校查询',
      path: '/school',
    },
    {
      key: 1,
      icon: iconSrc,
      name: '专业查询',
    },
    {
      key: 2,
      icon: iconSrc,
      name: '分数线查询',
    },
  ]
  return (
    <Wrapper>
      {/* 输入分数查询推荐结果 */}
      <WhiteSpace />
      <SearchBar
        placeholder="输入您的成绩"
        maxLength={8}
        style={{ width: '100%' }}
      />
      {/* 各功能界面入口按钮 */}
      <ButtonList buttons={buttons} />
      {/* footer提示 */}
      <Footer />
    </Wrapper>
  )
}

export default HomePage
