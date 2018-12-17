import { ENEMY_ADDED_TO_GAME } from '../consts/actions'
import { getLevel } from '../selectors/enemy'
import { getEnemyName } from '../utils/enemy'

export function enemyAddedToGame(enemyName, enemyType) {
  return (dispatch, getState) => {
    const state = getState()

    const myEnemyName = getEnemyName(enemyName)
    let deck = null

    if (state.enemy.enemies[myEnemyName]) {
      deck = state.enemy.enemies[myEnemyName].deck
    }

    dispatch({
      type: ENEMY_ADDED_TO_GAME,
      enemyName,
      enemyType,
      deck,
      level: getLevel(state)
    })
  }
}
