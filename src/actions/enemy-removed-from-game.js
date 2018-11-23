import { ENEMY_REMOVED_FROM_GAME } from '../consts/actions'

export function enemyRemovedFromGame(enemyName) {
  return {
    type: ENEMY_REMOVED_FROM_GAME,
    enemyName
  }
}
