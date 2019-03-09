import React from 'react'
import styled from 'styled-components'
import img from 'images/icon-512x512.png'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Name = styled.p`
  text-align: center;
  color: #000;
`

const Address = styled.span`
  background-color: #52c41a;
  color: #fff;
  text-align: center;
`

function SchoolName(props) {
  return (
    <Wrapper>
      <Left>
        <Img src={img} />
      </Left>
      <Right>
        <Name>{props.name}</Name>
        <Address>{props.address}</Address>
      </Right>
    </Wrapper>
  )
}

SchoolName.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
}

export default SchoolName
