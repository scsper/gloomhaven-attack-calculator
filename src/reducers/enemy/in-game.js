import { ENEMY_ADDED_TO_GAME } from '../../consts/actions'
import { getEnemyData } from '../../enemies'

export default function inGame(state = [], action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      const { level, enemyName, enemyType } = action

      return state.concat(getEnemyData(enemyName, level, enemyType))
    default:
      return state
  }
}
