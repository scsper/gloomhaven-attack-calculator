import { ROUND_ENDED } from '../consts/actions'

export function endRound() {
  return {
    type: ROUND_ENDED
  }
}
