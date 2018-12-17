import { ROUND_STARTED, ROUND_ENDED } from '../consts/actions'
import { getInitiativesOfActiveEnemies } from '../selectors/enemy'
import shuffle from '../utils/shuffle'
import { getEnemyAbilityCards } from '../enemies'
import { getEnemyName } from '../utils/enemy'

export function roundStarted(initiatives) {
  return {
    type: ROUND_STARTED,
    initiatives
  }
}

export function roundEnded() {
  return function(dispatch, getState) {
    const state = getState()

    const deckMap = {}

    Object.keys(state.enemy.enemies).forEach(enemyName => {
      const myEnemyName = getEnemyName(enemyName)
      const deck = { ...state.enemy.enemies[enemyName].deck }

      if (deckMap[myEnemyName]) {
        return
      }

      if (deck.cards[deck.index].reshuffle) {
        deck.cards = shuffle(getEnemyAbilityCards(enemyName))
      }

      deckMap[myEnemyName] = deck
    })

    dispatch({
      type: ROUND_ENDED,
      deckMap
    })
  }
}

export function endRound() {
  return function(dispatch, getState) {
    dispatch(roundEnded())
  }
}

export function startRound() {
  return function(dispatch, getState) {
    const state = getState()
    const initiatives = getInitiativesOfActiveEnemies(state)

    dispatch(roundStarted(initiatives))
  }
}
