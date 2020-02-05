import { combineReducers } from 'redux'
import moveReducer from './moveReducer'

export default combineReducers ({
  game: moveReducer
})
