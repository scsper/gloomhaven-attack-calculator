import { ENEMY_ADDED_TO_GAME, ENEMY_REMOVED_FROM_GAME } from '../../consts/actions'

export default function activeEnemies(state = [], action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return state.concat(action.enemyName)
    case ENEMY_REMOVED_FROM_GAME:
      const newState = []

      state.forEach(enemyName => {
        if (enemyName !== action.enemyName) {
          newState.push(enemyName)
        }
      })

      return newState
    default:
      return state
  }
}
