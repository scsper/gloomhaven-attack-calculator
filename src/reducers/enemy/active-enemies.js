import { ENEMY_ADDED_TO_GAME } from '../../consts/actions'

export default function activeEnemies(state = [], action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return state.concat(action.enemyName)
    default:
      return state
  }
}
