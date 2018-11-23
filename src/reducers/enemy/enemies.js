import { ENEMY_ADDED_TO_GAME } from '../../consts/actions'
import { combineReducers } from 'redux'
import { getEnemyData, getEnemyAbilityCards } from '../../enemies'
import shuffle from '../../utils/shuffle'

const enemy = combineReducers({
  name,
  type,
  health,
  move,
  attack,
  range,
  attributes,
  cards,
  index
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
    default:
      return state
  }
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
      return getEnemyData(action.enemyName, action.level, action.enemyType).health
    default:
      return state
  }
}

function move(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return getEnemyData(action.enemyName, action.level, action.enemyType).move
    default:
      return state
  }
}

function attack(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return getEnemyData(action.enemyName, action.level, action.enemyType).attack
    default:
      return state
  }
}

function range(state = 0, action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return getEnemyData(action.enemyName, action.level, action.enemyType).range
    default:
      return state
  }
}

function attributes(state = [], action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return getEnemyData(action.enemyName, action.level, action.enemyType).attributes
    default:
      return state
  }
}

function cards(state = [], action) {
  switch (action.type) {
    case ENEMY_ADDED_TO_GAME:
      return shuffle(getEnemyAbilityCards(action.enemyName))
    default:
      return state
  }
}

function index(state = 0, action) {
  switch (action.type) {
    default:
      return state
  }
}
