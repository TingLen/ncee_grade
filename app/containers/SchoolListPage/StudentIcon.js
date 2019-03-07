import React from 'react'
import styled from 'styled-components'
import icon from '../../images/icon-512x512.png'

const Img = styled.img`
  height: 3rem;
  width: 3rem;
`

function StudentIcon() {
  return <Img alt="student_icon" src={icon} />
}

export default StudentIcon
