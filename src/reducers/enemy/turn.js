import { END_TURN } from '../../consts/actions'

export default function turn(state = 0, action) {
  switch (action.type) {
    case END_TURN:
      // TODO: Check to see that we do not set turn to be greater than the number of enemies in the game.
      return state + 1
    default:
      return state
  }
}
