import { END_TURN } from '../consts/actions'

/**
 * @param {Object} card The attack modifier card that was drawn for that turn
 */
export function endTurn(card) {
  return {
    card,
    type: END_TURN
  }
}
