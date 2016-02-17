import { combineReducers } from 'redux'
import streamerReducer from './streamerReducer'

const reducer = combineReducers({
  streamers: streamerReducer
})

export default reducer
