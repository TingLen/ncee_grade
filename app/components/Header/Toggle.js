import React, { Component } from 'react'
import { Icon } from 'antd'
import ToggleWrapper from './ToggleWrapper'
import ToggleItem from './ToggleItem'
import ToggleSpan from './ToggleSpan'

class Toggle extends Component {
    render() {
        return (
            <ToggleWrapper>
                <ToggleItem>
                    <ToggleSpan>广西</ToggleSpan>
                </ToggleItem>
                <ToggleItem>
                    <Icon type="down" />
                </ToggleItem>
            </ToggleWrapper>
        )
    }
}

export default Toggle