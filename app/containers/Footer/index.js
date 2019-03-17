import React, { Component } from 'react'
import styled from 'styled-components'

import ButtonList from './ButtonList'

const Wrapper = styled.footer`
  background-color: #52c41a;
  position: fixed;
  height: 3rem;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window
    if (scrollY - this.state.scrollY > 0) {
      const footer = document.querySelector('.footer')
      footer.classList.remove('slideInUp')
      footer.classList.add('animated', 'slideOutDown')
      this.setState({
        scrollY,
      })
    } else {
      const footer = document.querySelector('.footer')
      footer.classList.remove('slideOutDown')
      footer.classList.add('slideInUp')
      this.setState({
        scrollY,
      })
    }
  }

  render() {
    return (
      <Wrapper className="footer">
        <ButtonList />
      </Wrapper>
    )
  }
}

export default Footer
