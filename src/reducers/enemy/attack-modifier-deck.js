import { ENEMY_ATTACK_MODIFIER_CARD_DRAWN, ROUND_ENDED } from '../../consts/actions'
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
  cards,
  isShown
})

function index(state = -1, action) {
  switch (action.type) {
    case ENEMY_ATTACK_MODIFIER_CARD_DRAWN:
      if (shouldShuffle(action.card)) {
        return -1
      }

      return state + 1
    default:
      return state
  }
}

function cards(state = initialCards, action) {
  switch (action.type) {
    case ENEMY_ATTACK_MODIFIER_CARD_DRAWN:
      if (shouldShuffle(action.card)) {
        return shuffle(state)
      }

      return state
    default:
      return state
  }
}

function isShown(state = false, action) {
  switch (action.type) {
    case ENEMY_ATTACK_MODIFIER_CARD_DRAWN:
      return true

    case ROUND_ENDED:
      return false

    default:
      return state
  }
}

// TODO: Look up reshuffle rules.
function shouldShuffle(card) {
  if (!card) {
    return false
  }

  return card.type === AttackModifierTypes.NULL || card.type === AttackModifierTypes.DOUBLE_DAMAGE
}
