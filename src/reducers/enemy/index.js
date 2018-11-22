import { combineReducers } from 'redux'
import level from './level'
import turn from './turn'
import attackModifierDeck from './attack-modifier-deck'

export default combineReducers({
  level,
  turn,
  attackModifierDeck
})
