import { combineReducers } from 'redux'
import level from './level'
import attackModifierDeck from './attack-modifier-deck'
import activeEnemies from './active-enemies'
import enemies from './enemies'

export default combineReducers({
  level,
  attackModifierDeck,
  activeEnemies,
  enemies
})
