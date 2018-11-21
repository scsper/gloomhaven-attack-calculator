export default class Card {
  constructor (attack, { isNull, is2x, reshuffle } = {}) {
    this.attack = attack
    this.isNull = isNull || false
    this.is2x = is2x || false
    this.reshuffle = reshuffle || false
  }
}
