import { fromJS } from 'immutable'
import { CHANGE_CITY } from './constans'

export const initialState = fromJS({
  city: '北京',
})

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return state.set('city', action.city)
    default:
      return state
  }
}

export default headerReducer
