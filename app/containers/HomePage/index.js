import React, { Component } from 'react'
import { Input,Button } from 'antd'
import Wrapper from './Wrapper'
import ButtonList from './ButtonList'
import Footer from './Footer'

const Search = Input.Search

class index extends Component {
    render() {
        return (
            <Wrapper>
                {/* 输入分数查询推荐结果 */}
                <Search
                    placeholder="请输入分数"
                    enterButton="搜索"
                    size="large"
                    onSearch={value => console.log(value)}
                />

                {/* 各功能界面入口按钮 */}
                <ButtonList />

                {/* footer提示 */}
                <Footer />
            </Wrapper>
        )
    }
}

export default index