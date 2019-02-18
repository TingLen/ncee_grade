import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.p``

class Footer extends Component {
    render() {
        return (
            <footer>
                <Text>1.输入框输入您的高考成绩可查看系统智能推荐的院校专业。</Text>
                <Text>2.点击对应按钮，进入对应功能页面。</Text>
            </footer>
        )
    }
}

export default Footer