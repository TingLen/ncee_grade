import { SET_SCHOOL_COUNT, SET_SCHOOL_LIST_CURRENT_PAGE } from './constans'

export const setSchoolCount = count => ({
  type: SET_SCHOOL_COUNT,
  count,
})

export const setSchoolListCurrentPage = current => ({
  type: SET_SCHOOL_LIST_CURRENT_PAGE,
  current,
})
