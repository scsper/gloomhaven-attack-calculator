import { LEVEL_CHANGED } from '../consts/actions'

export function changeLevel(level) {
  return {
    type: LEVEL_CHANGED,
    level
  }
}
