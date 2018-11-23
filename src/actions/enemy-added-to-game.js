import { ENEMY_ADDED_TO_GAME } from '../consts/actions'
import { getLevel } from '../selectors/enemy'

export function enemyAddedToGame(enemyName, enemyType) {
  return (dispatch, getState) => {
    const state = getState()

    dispatch({
      type: ENEMY_ADDED_TO_GAME,
      enemyName,
      enemyType,
      level: getLevel(state)
    })
  }
}
