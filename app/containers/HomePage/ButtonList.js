import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`

class ButtonList extends Component {
    render() {
        return (
            <Wrapper>
                <Button />
                <Button />
                <Button />
            </Wrapper>
        )
    }
}


export default ButtonList