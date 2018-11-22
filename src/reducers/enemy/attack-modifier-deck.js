import { END_TURN } from '../../consts/actions'
import { combineReducers } from 'redux'

const initialCards = [
  { attack: 0, type: 'attack' },
  { attack: 0, type: 'attack' },
  { attack: 0, type: 'attack' },
  { attack: 0, type: 'attack' },
  { attack: 0, type: 'attack' },
  { attack: 0, type: 'attack' },
  { attack: 1, type: 'attack' },
  { attack: 1, type: 'attack' },
  { attack: 1, type: 'attack' },
  { attack: 1, type: 'attack' },
  { attack: 1, type: 'attack' },
  { attack: -1, type: 'attack' },
  { attack: -1, type: 'attack' },
  { attack: -1, type: 'attack' },
  { attack: -1, type: 'attack' },
  { attack: -1, type: 'attack' },
  { attack: 2, type: 'attack' },
  { attack: -2, type: 'attack' },
  { attack: 0, type: 'null' },
  { attack: 0, type: '2x' }
]

export default combineReducers({
  index,
  cards
})

function index(state = 0, action) {
  switch (action.type) {
    case END_TURN:
      return state + 1
    default:
      return state
  }
}

function cards(state = initialCards, action) {
  switch (action.type) {
    default:
      return state
  }
}
