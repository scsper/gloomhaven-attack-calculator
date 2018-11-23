import { TURN_ENDED } from '../../consts/actions'

export default function turn(state = 0, action) {
  switch (action.type) {
    case TURN_ENDED:
      // TODO: Check to see that we do not set turn to be greater than the number of enemies in the game.
      return state + 1
    default:
      return state
  }
}
