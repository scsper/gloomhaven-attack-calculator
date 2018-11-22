// Taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export default function shuffle(cards) {
  const newCards = cards.slice()
  let j, x, i

  for (i = newCards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = newCards[i]
    newCards[i] = newCards[j]
    newCards[j] = x
  }

  return newCards
}
