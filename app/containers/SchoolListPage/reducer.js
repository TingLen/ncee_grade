import { fromJS } from 'immutable'
import { SET_SCHOOL_COUNT, SET_SCHOOL_LIST_CURRENT_PAGE } from './constans'

const initialState = fromJS({
  count: 12,
  current: 1,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHOOL_COUNT:
      return state.set('count', action.count)
    case SET_SCHOOL_LIST_CURRENT_PAGE:
      return state.set('current', action.current)
    default:
      return state
  }
}

export default reducer
