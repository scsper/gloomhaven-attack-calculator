import enemyStats from './stats.json'
import { EnemyTypes } from '../consts'

export function getEnemyData(name, level, type = EnemyTypes.NORMAL) {
  if (enemyStats.monsters.hasOwnProperty(name)) {
    return enemyStats.monsters[name][level][type]
  } else if (enemyStats.bosses.hasOwnProperty(name)) {
    return enemyStats.bosses[name][level][type]
  } else {
    throw new Error(`Unable to find enemy ${name} listed in the enemy stats.`)
  }
}
