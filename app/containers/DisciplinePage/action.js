import { SET_DISCIPLINE_COUNT, SET_CURRENT_PAGE } from './constans'

export const setDisiplineCount = count => ({
  type: SET_DISCIPLINE_COUNT,
  count,
})

export const setCurrentPage = current => ({
  type: SET_CURRENT_PAGE,
  current,
})
