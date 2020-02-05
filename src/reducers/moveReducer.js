import {
  PLAYER_MOVE,
  BOARD,
  TURN,
  BOT_MOVE,
  RESET,
  CHANGE_SIDE,
  MOVELIST
} from '../actions/types'

const INITIAL_STATE = {
  move: [],
  board: [4, 2, 3, 5, 6, 3, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 10, 8, 9, 11, 12, 9, 8, 10],
  turn: 'Your move...',
  turncounter: 0,
  side: 'w',
  movelist: []
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case PLAYER_MOVE:
      return {...state, board: action.payload[0], turncounter: action.payload[1], side: action.payload[2]};
    case BOARD:
      return {...state, board: action.payload};
    case BOT_MOVE:
      return {...state, board: action.payload[1], turn: 'Bot - ' + action.payload[0], side: action.payload[2]};
    case TURN:
      return {...state, turn: action.payload}
    case RESET:
      return {...state, board: action.payload[1], turn: 'Bot - ' + action.payload[0], side: action.payload[2]}
    case CHANGE_SIDE:
      return {...state, side: action.payload}
    case MOVELIST:
      return {...state, movelist: action.payload}
    default:
      return state
  }
}
