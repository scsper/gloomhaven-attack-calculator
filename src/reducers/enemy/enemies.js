import { ENEMY_ADDED_TO_GAME, ROUND_ENDED, LEVEL_CHANGED } from '../../consts/actions'
import { combineReducers } from 'redux'
import { getEnemyData, getEnemyAbilityCards } from '../../enemies'
import shuffle from '../../utils/shuffle'
import { getEnemyName } from '../../utils/enemy'

let uuid = 1

function assignId() {
  return uuid++
}

const enemy = combineReducers({
  id,
  name,
  type,
  health,
  move,
  attack,
  range,
  attributes,
  deck
})

export default function enemies(state = {}, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      if (state[action.enemyName]) {
        return state
      }

      return {
        ...state,
        [action.enemyName]: enemy({}, action)
      }

    case LEVEL_CHANGED:
    case ROUND_ENDED:
      const newState = {}

      Object.keys(state).forEach(enemyName => {
        newState[enemyName] = enemy(state[enemyName], { ...action, enemyName })
      })

      return newState
    default:
      return state
  }
}

function id(state = '', action) {
  if (!state) {
    return assignId()
  }

  return state
}

function name(state = '', action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return action.enemyName
    default:
      return state
  }
}

function type(state = '', action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return action.enemyType
    default:
      return state
  }
}

function health(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
    case LEVEL_CHANGED:
      return getEnemyData(action.enemyName, action.level, action.enemyType).health
    default:
      return state
  }
}

function move(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
    case LEVEL_CHANGED:
      return getEnemyData(action.enemyName, action.level, action.enemyType).move
    default:
      return state
  }
}

function attack(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
    case LEVEL_CHANGED:
      return getEnemyData(action.enemyName, action.level, action.enemyType).attack
    default:
      return state
  }
}

function range(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
    case LEVEL_CHANGED:
      return getEnemyData(action.enemyName, action.level, action.enemyType).range
    default:
      return state
  }
}

function attributes(state = [], action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
    case LEVEL_CHANGED:
      return getEnemyData(action.enemyName, action.level, action.enemyType).attributes || state
    default:
      return state
  }
}

function deck(state = { cards: [], index: 0 }, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      if (action.deck) {
        return { ...action.deck }
      }

      return {
        cards: shuffle(getEnemyAbilityCards(action.enemyName)),
        index: state.index || 0
      }

    case ROUND_ENDED: {
      const myEnemyName = getEnemyName(action.enemyName)
      const reshuffle = state.cards[state.index].reshuffle

      if (reshuffle) {
        return {
          cards: action.deckMap[myEnemyName].cards,
          index: 0
        }
      }

      return {
        cards: state.cards,
        index: state.index + 1
      }
    }

    default:
      return state
  }
}
