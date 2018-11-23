import { END_TURN } from '../../consts/actions'
import { combineReducers } from 'redux'
import shuffle from '../../utils/shuffle'
import { AttackModifierTypes } from '../../consts'

const initialCards = shuffle([
  { attack: 0, type: AttackModifierTypes.ATTACK },
  { attack: 0, type: AttackModifierTypes.ATTACK },
  { attack: 0, type: AttackModifierTypes.ATTACK },
  { attack: 0, type: AttackModifierTypes.ATTACK },
  { attack: 0, type: AttackModifierTypes.ATTACK },
  { attack: 0, type: AttackModifierTypes.ATTACK },
  { attack: 1, type: AttackModifierTypes.ATTACK },
  { attack: 1, type: AttackModifierTypes.ATTACK },
  { attack: 1, type: AttackModifierTypes.ATTACK },
  { attack: 1, type: AttackModifierTypes.ATTACK },
  { attack: 1, type: AttackModifierTypes.ATTACK },
  { attack: -1, type: AttackModifierTypes.ATTACK },
  { attack: -1, type: AttackModifierTypes.ATTACK },
  { attack: -1, type: AttackModifierTypes.ATTACK },
  { attack: -1, type: AttackModifierTypes.ATTACK },
  { attack: -1, type: AttackModifierTypes.ATTACK },
  { attack: 2, type: AttackModifierTypes.ATTACK },
  { attack: -2, type: AttackModifierTypes.ATTACK },
  { attack: 0, type: AttackModifierTypes.NULL },
  { attack: 0, type: AttackModifierTypes.DOUBLE_DAMAGE }
])

export default combineReducers({
  index,
  cards
})

function index(state = 0, action) {
  switch (action.type) {
    case END_TURN:
      if (shouldShuffle(action.card)) {
        return 0
      }

      return state + 1
    default:
      return state
  }
}

function cards(state = initialCards, action) {
  switch (action.type) {
    case END_TURN:
      if (shouldShuffle(action.card)) {
        return shuffle(state)
      }

      return state
    default:
      return state
  }
}

// TODO: Look up reshuffle rules.
function shouldShuffle(card) {
  return card.type === AttackModifierTypes.NULL || card.type === AttackModifierTypes.DOUBLE_DAMAGE
}
