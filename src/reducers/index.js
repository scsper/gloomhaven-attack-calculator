import { combineReducers } from 'redux'
import enemy from './enemy'
import round from './round'
import { LEVEL_CHANGED } from '../consts/actions'

export default combineReducers({
  enemy,
  round,
  level
})

function level(state = 0, action) {
  switch (action.type) {
    case LEVEL_CHANGED:
      return action.level
    default:
      return state
  }
}
