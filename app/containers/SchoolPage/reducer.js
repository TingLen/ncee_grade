import { fromJS } from 'immutable'
import {
  ADD_FORM_SCORE,
  ADD_FORM_SEARCHWAY,
  ADD_FORM_SUBJECT,
} from './constans'

const initialState = fromJS({
  score: 0,
  way: '',
  subject: '',
})

const schoolSearchFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_SCORE:
      return state.set('score', action.score)
    case ADD_FORM_SEARCHWAY:
      return state.set('way', action.way)
    case ADD_FORM_SUBJECT:
      return state.set('subject', action.subject)

    default:
      return state
  }
}

export default schoolSearchFormReducer
