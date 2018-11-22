import { combineReducers } from 'redux'
import enemy from './enemy'
import roundCount from './round-count'

export default combineReducers({
  enemy,
  roundCount
})
