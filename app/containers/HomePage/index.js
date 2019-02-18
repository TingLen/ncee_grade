import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'
import Wrapper from './Wrapper'
import ButtonList from './ButtonList'
import Footer from './Footer'

function HomePage() {
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
      <ButtonList />
      {/* footer提示 */}
      <Footer />
    </Wrapper>
  )
}

export default HomePage
