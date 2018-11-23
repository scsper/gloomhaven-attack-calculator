export function getTopCard(state) {
  const { enemy } = state
  const { attackModifierDeck } = enemy

  return attackModifierDeck.cards[attackModifierDeck.index]
}

export function getLevel(state) {
  return state.enemy.level
}

export function getActiveEnemies(state) {
  return state.enemy.activeEnemies
}

export function getEnemy(state, enemyName) {
  return state.enemy.enemies[enemyName]
}
