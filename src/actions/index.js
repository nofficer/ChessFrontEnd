import { BOARD, PLAYER_MOVE, BOT_MOVE,TURN, RESET, CHANGE_SIDE} from './types'
import chess from '../apis/chess'

export const resetGame = (resetList) => {
  return async (dispatch) => {
    const response = await chess.post('/reset', resetList)
    dispatch({type:RESET, payload: response.data})
  }
}

export const makeMove = (move) => {
    return async (dispatch) => {
      const response = await chess.post('/board/move', move)
      dispatch({type:PLAYER_MOVE, payload: response.data})
    }
  }

export const changeSide = (side) => {
  return ({type:CHANGE_SIDE, payload: side})
}


export const getBoard = () => {
  return async (dispatch) => {
    const response = await chess.get('/board')
    dispatch({type:BOARD, payload: response.data})
  }}

export const botMove = (boardfen) => {
  return async (dispatch) => {
    const response = await chess.post('/bot_move', boardfen)
    dispatch({type:BOT_MOVE, payload: response.data})
  }
}

export const makeTurn = (turn) => {
  return ({type: TURN, payload: turn})
}
