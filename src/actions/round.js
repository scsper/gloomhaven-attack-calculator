import { ROUND_STARTED, ROUND_ENDED } from '../consts/actions'
import { getInitiativesOfActiveEnemies } from '../selectors/enemy'

export function roundStarted(initiatives) {
  return {
    type: ROUND_STARTED,
    initiatives
  }
}

export function roundEnded() {
  return {
    type: ROUND_ENDED
  }
}

export function endRound() {
  return function(dispatch, getState) {
    dispatch(roundEnded())
  }
}

export function startRound() {
  return function(dispatch, getState) {
    const state = getState()
    const initiatives = getInitiativesOfActiveEnemies(state)

    dispatch(roundStarted(initiatives))
  }
}
