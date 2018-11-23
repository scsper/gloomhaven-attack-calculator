import { ENEMY_ADDED_TO_GAME, ENEMY_REMOVED_FROM_GAME, ROUND_STARTED } from '../../consts/actions'

export default function activeEnemies(state = [], action) {
  switch (action.type) {
    case ROUND_STARTED: {
      const newState = state.slice()

      newState.sort((a, b) => action.initiatives[a] - action.initiatives[b])

      return newState
    }
    case ENEMY_ADDED_TO_GAME: {
      const found = state.some(enemyName => enemyName === action.enemyName)

      if (found) {
        return state
      }

      return state.concat(action.enemyName)
    }
    case ENEMY_REMOVED_FROM_GAME: {
      const newState = []

      state.forEach(enemyName => {
        if (enemyName !== action.enemyName) {
          newState.push(enemyName)
        }
      })

      return newState
    }
    default:
      return state
  }
}
