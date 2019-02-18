import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 70%;
    height: 70%;
    overflow: hidden;
    border-radius: 50% 50%;
`

class ButtonIcon extends Component {
    render() {

        return (
            <Img src='/favicon.ico' alt='image' />
        )
    }
}

export default ButtonIcon