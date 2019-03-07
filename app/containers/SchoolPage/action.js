import {
  ADD_FORM_SCORE,
  ADD_FORM_SEARCHWAY,
  ADD_FORM_SUBJECT,
} from './constans'

export const addFormScore = score => ({
  type: ADD_FORM_SCORE,
  score,
})
export const addFormSubject = subject => ({
  type: ADD_FORM_SUBJECT,
  subject,
})
export const addFormSearchWay = way => ({
  type: ADD_FORM_SEARCHWAY,
  way,
})
