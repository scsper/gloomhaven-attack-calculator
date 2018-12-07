import { ENEMY_ADDED_TO_GAME } from '../consts/actions'
import { getLevel } from '../selectors/enemy'

export function enemyAddedToGame(enemyName, enemyType) {
  return (dispatch, getState) => {
    const state = getState()

    console.log(enemyName)

    const myEnemyName = enemyName.split(/\(elite\)/)[0].trim()
    let deck = null

    if (state.enemy.enemies[myEnemyName]) {
      deck = state.enemy.enemies[myEnemyName]
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
