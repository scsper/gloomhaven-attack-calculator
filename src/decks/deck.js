export default class Deck {
  constructor () {
    this.cards = []
    this.index = 0
  }

  // Taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle () {
    let j, x, i

    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = x
    }

    return this.cards
  }

  draw () {
    this.index++
    return this.cards[this.index]
  }

  peek () {
    return this.cards[this.index]
  }
}
