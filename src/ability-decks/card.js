export default class Card {
  constructor (name, initiative, modifiers, descriptors = '') {
    this.name = name
    this.initiative = initiative

    this.movement = modifiers.movement || 0
    this.attack = modifiers.attack || 0
    this.heal = modifiers.heal || 0
    this.shield = modifiers.shield || 0

    this.reshuffle = modifiers.reshuffle || false

    // Special description of some card feature that is not easily converted to an attribute
    // e.g. "Target one enemy with all attacks" for Living Bones
    this.descriptors = descriptors
  }

}
