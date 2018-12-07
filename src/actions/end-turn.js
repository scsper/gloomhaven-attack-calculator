import { ENEMY_ATTACK_MODIFIER_CARD_DRAWN } from '../consts/actions'
import { getAttackModifierCard } from '../selectors/enemy'

export function drawEnemyAttackModifierCard() {
  return (dispatch, getState) => {
    const state = getState()
    const card = getAttackModifierCard(state)

    dispatch({
      card,
      type: ENEMY_ATTACK_MODIFIER_CARD_DRAWN
    })
  }
}
