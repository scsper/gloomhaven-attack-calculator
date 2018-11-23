import { TURN_ENDED } from '../consts/actions'
import { getTopCard } from '../selectors/enemy'

export function endTurn() {
  return (dispatch, getState) => {
    const state = getState()
    const card = getTopCard(state)

    dispatch({
      card,
      type: TURN_ENDED
    })
  }
}
