export default class Enemy {
  constructor () {
    this.name = ''
    this.levels = {}
    this.eliteLevels = {}
    this.deck = null
    this.currentLevel = 0
  }

  getName () {
    return this.name
  }

  setLevel (level) {
    this.currentLevel = level
  }

  getBaseStats (isElite = false) {
    if (isElite) {
      return this.eliteLevels[this.currentLevel]
    }

    return this.levels[this.currentLevel]
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
