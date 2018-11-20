import Deck from '../deck'
import Card from './card';

export default class LivingBoneDeck extends Deck {
  constructor () {
    super()

    const name = 'Living Bones'

    this.cards = [
      new Card(name, 12, { shield: 1, heal: 2, reshuffle: true }, 'The heal applies to Self.'),
      new Card(name, 20, { movement: -2, attack: 0, heal: 2, reshuffle: true }, 'The heal applies to Self.'),
      new Card(name, 25, { movement: 1, attack: -1 }),
      new Card(name, 45, { movement: 0, attack: 0 }),
      new Card(name, 45, { movement: 0, attack: 0 }),
      new Card(name, 64, { movement: -1, attack: 1 }),
      new Card(name, 74, { movement: 0, attack: 0 }, 'Target one enemy with all attacks'),
      new Card(name, 81, { attack: 2 }),
    ]

    this.shuffle()
  }
}
