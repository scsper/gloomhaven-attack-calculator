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

export function getAbilityCard(state, enemyName) {
  const deck = state.enemy.enemies[enemyName].deck

  return deck.cards[deck.index]
}

export function getInitiativesOfActiveEnemies(state) {
  const activeEnemyNames = getActiveEnemies(state)
  const initiatives = {}

  activeEnemyNames.forEach(enemyName => {
    const initiative = getAbilityCard(state, enemyName).initiative
    initiatives[enemyName] = initiative
  })

  return initiatives
}

export function getAttack(state, enemyName) {
  const enemy = getEnemy(state, enemyName)
  const abilityCard = getAbilityCard(state, enemyName)
}

export function getMovement(state, enemyName) {}
