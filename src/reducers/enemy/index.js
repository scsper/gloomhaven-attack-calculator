import { combineReducers } from 'redux'
import level from './level'
import turn from './turn'
import attackModifierDeck from './attack-modifier-deck'
import inGame from './in-game'

export default combineReducers({
  level,
  turn,
  attackModifierDeck,
  inGame
})
