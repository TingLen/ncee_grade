import React from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import ButtonIcon from './ButtonIcon'
import ButtonName from './ButtonName'

function Button(props) {
  const { icon, name, path } = props.button

  return (
    <Link
      to={path || '/'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '6rem',
        width: '6rem',
        margin: '1rem 0rem',
      }}
    >
      <ButtonIcon icon={icon} />
      <ButtonName name={name} />
    </Link>
  )
}

Button.propTypes = {
  button: PropType.object,
}

export default Button
