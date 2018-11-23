import { combineReducers } from 'redux'
import { ROUND_STARTED, ROUND_ENDED } from '../../consts/actions'

export default combineReducers({
  count,
  isStarted
})

function count(state = 0, action) {
  switch (action.type) {
    case ROUND_STARTED:
      return state + 1
    default:
      return state
  }
}

function isStarted(state = false, action) {
  switch (action.type) {
    case ROUND_STARTED:
      return true
    case ROUND_ENDED:
      return false
    default:
      return state
  }
}
