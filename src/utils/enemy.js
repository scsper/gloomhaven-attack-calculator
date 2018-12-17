import { EnemyTypes } from '../consts'
const eliteRegex = /\(elite\)/

export function getEnemyName(name) {
  return name.split(eliteRegex)[0].trim()
}

export function getEnemyType(name) {
  return eliteRegex.test(name) ? EnemyTypes.ELITE : EnemyTypes.NORMAL
}
