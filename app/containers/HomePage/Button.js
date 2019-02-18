import React, { Component } from 'react'
import styled from 'styled-components'
import ButtonIcon from './ButtonIcon'
import ButtonName from './ButtonName'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 5rem;
`

class Button extends Component {
    render() {
        return (
            <Wrapper>
                <ButtonIcon />
                <ButtonName />
            </Wrapper>
        )
    }
}

export default Button