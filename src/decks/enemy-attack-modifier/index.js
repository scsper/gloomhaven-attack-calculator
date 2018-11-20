import Deck from '../deck'
import Card from './card'

export default class EnemyAttackModifierDeck extends Deck {
  constructor () {
    super()

    this.cards = [
      new Card(0),
      new Card(0),
      new Card(0),
      new Card(0),
      new Card(0),
      new Card(0),
      new Card(1),
      new Card(1),
      new Card(1),
      new Card(1),
      new Card(1),
      new Card(-1),
      new Card(-1),
      new Card(-1),
      new Card(-1),
      new Card(-1),
      new Card(-2),
      new Card(2),
      // TODO: Double check this.
      new Card(0, { isNull: true, reshuffle: true }),
      new Card(0, { is2x: true, reshuffle: true })
    ]
  }
}
