import enemyStats from './stats.json'
import enemyAbilityCards from './ability-cards.json'
import { EnemyTypes } from '../consts'

const enemyList = [...Object.keys(enemyStats.monsters), ...Object.keys(enemyStats.bosses)]

export function getEnemyData(name, level, type = EnemyTypes.NORMAL) {
  if (enemyStats.monsters.hasOwnProperty(name)) {
    return enemyStats.monsters[name].level[level][type]
  } else if (enemyStats.bosses.hasOwnProperty(name)) {
    return enemyStats.bosses[name].level[level][type]
  } else {
    throw new Error(`Unable to find enemy ${name} listed in the enemy stats.`)
  }
}

export function getEnemyList() {
  return enemyList
}

export function getEnemyAbilityCards(name) {
  if (enemyAbilityCards.monsters[name]) {
    return enemyAbilityCards.monsters[name]
  } else if (enemyAbilityCards.bosses[name]) {
    return enemyAbilityCards.bosses[name]
  } else {
    throw new Error(`Unable to find enemy ${name} listed in the enemy stats.`)
  }
}
