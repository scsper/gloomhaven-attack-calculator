import enemyStats from './stats.json'
import enemyAbilityCards from './ability-cards.json'
import { getEnemyName, getEnemyType } from '../utils/enemy'

const enemyList = [
  ...Object.keys(enemyStats.monsters),
  ...Object.keys(enemyStats.monsters).map(name => name + ' (elite)'),
  ...Object.keys(enemyStats.bosses)
]

export function getEnemyData(name, level) {
  let enemyType = getEnemyType(name)
  let enemyName = getEnemyName(name)

  if (enemyStats.monsters.hasOwnProperty(enemyName)) {
    return enemyStats.monsters[enemyName].level[level][enemyType]
  } else if (enemyStats.bosses.hasOwnProperty(enemyName)) {
    return enemyStats.bosses[enemyName].level[level]
  } else {
    throw new Error(`Unable to find enemy ${enemyName} listed in the enemy stats.`)
  }
}

export function getEnemyList() {
  return enemyList
}

export function getEnemyAbilityCards(name) {
  const enemyName = getEnemyName(name)

  if (enemyAbilityCards.monsters[enemyName]) {
    return enemyAbilityCards.monsters[enemyName]
  } else if (enemyAbilityCards.bosses[enemyName]) {
    return enemyAbilityCards.bosses[enemyName]
  } else {
    throw new Error(`Unable to find enemy ${enemyName} listed in the enemy ability cards.`)
  }
}
