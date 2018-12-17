import { AttackModifierTypes } from '../../consts'
import { isRoundStarted } from '../round'

export function getAttackModifierCard(state) {
  const { enemy } = state
  const { attackModifierDeck } = enemy

  if (attackModifierDeck.index === -1 || !attackModifierDeck.isShown) {
    return null
  }

  return attackModifierDeck.cards[attackModifierDeck.index]
}

export function areAttackModifierCardsShown(state) {
  const { enemy } = state
  const { attackModifierDeck } = enemy

  return attackModifierDeck.isShown
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
  const attackModifierCard = getAttackModifierCard(state)
  const hasRoundStarted = isRoundStarted(state)

  if (!hasRoundStarted) {
    return enemy.attack
  }

  if (!abilityCard.hasOwnProperty('attack')) {
    return '0 (no attack specified on card)'
  }

  let attack = enemy.attack + abilityCard.attack

  if (!attackModifierCard) {
    return attack
  }

  if (attackModifierCard.type === AttackModifierTypes.NULL) {
    return '0 (attack modifier card was null)'
  } else if (attackModifierCard.type === AttackModifierTypes.DOUBLE_DAMAGE) {
    attack *= 2
    return `${attack} ((${enemy.attack} + ${abilityCard.attack}) * 2)`
  } else {
    attack += attackModifierCard.attack
    return `${attack} (${enemy.attack} + ${abilityCard.attack} + ${attackModifierCard.attack})`
  }
}

export function getMovement(state, enemyName) {
  const enemy = getEnemy(state, enemyName)
  const abilityCard = getAbilityCard(state, enemyName)
  const hasRoundStarted = isRoundStarted(state)

  if (!hasRoundStarted) {
    return enemy.move
  }

  if (!abilityCard.hasOwnProperty('move')) {
    return '0 (no movement specified on card)'
  }

  const move = enemy.move + abilityCard.move

  return `${move} (${enemy.move} + ${abilityCard.move})`
}

export function getRange(state, enemyName) {
  const enemy = getEnemy(state, enemyName)
  const abilityCard = getAbilityCard(state, enemyName)
  const hasRoundStarted = isRoundStarted(state)

  if (!hasRoundStarted) {
    return enemy.range
  }

  if (abilityCard.hasOwnProperty('range')) {
    return `${abilityCard.range} (taken from ability card)`
  }

  return enemy.range
}
