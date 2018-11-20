export default class Enemy {
  constructor () {
    this.name = ''
    this.levels = {}
    this.eliteLevels = {}
  }

  getName () {
    return this.name
  }

  addLevel (levelId, level) {
    this.levels[levelId] = level
  }

  addEliteLevel (levelId, level) {
    this.eliteLevels[levelId] = level
  }

  getLevel (levelId) {
    return this.levels[levelId]
  }

  getEliteLevel (levelId) {
    return this.levels[levelId]
  }
}
