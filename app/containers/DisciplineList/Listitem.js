import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import Name from './Name'
import Category from './Category'
import HotCount from './HotCount'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
`

function ListItem(props) {
  const { name, category, hotCount } = props.discipline
  return (
    <Wrapper>
      <Name name={name} />
      <Category category={category} />
      <HotCount hotCount={hotCount} />
    </Wrapper>
  )
}

ListItem.propTypes = {
  discipline: PropTypes.object,
}

export default ListItem
