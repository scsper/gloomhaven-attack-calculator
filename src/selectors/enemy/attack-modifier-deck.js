export function getTopCard(state) {
  const { enemy } = state
  const { attackModifierDeck } = enemy

  return attackModifierDeck.cards[attackModifierDeck.index]
}
