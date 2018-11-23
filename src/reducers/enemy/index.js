import { combineReducers } from 'redux'
import level from './level'
import turn from './turn'
import attackModifierDeck from './attack-modifier-deck'
import activeEnemies from './active-enemies'
import enemies from './enemies'

export default combineReducers({
  level,
  turn,
  attackModifierDeck,
  activeEnemies,
  enemies
})
