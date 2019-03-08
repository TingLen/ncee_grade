import { fromJS } from 'immutable'
import { SET_SCHOOL_COUNT } from './constans'

const initialState = fromJS({
  count: 12,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHOOL_COUNT:
      return state.set('count', action.count)

    default:
      return state
  }
}

export default reducer
