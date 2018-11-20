export default class Level {
  constructor (health, movement, attack, range, specialAbilities, specialAttributes) {
    // Normal attributes
    this.health = health
    this.movement = movement
    this.attack = attack
    this.range = range

    // Special abilities
    this.target = specialAbilities.target || 1
    this.shield = specialAbilities.shield || 0

    // Special attributes
    this.poison = false
  }
}
