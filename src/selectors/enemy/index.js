export function getTopCard(state) {
  const { enemy } = state
  const { attackModifierDeck } = enemy

  return attackModifierDeck.cards[attackModifierDeck.index]
}

export function getLevel(state) {
  return state.enemy.level
}
