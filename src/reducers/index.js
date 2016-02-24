import { combineReducers } from 'redux'
import streamReducer from './StreamReducer'
import channelReducer from './ChannelReducer'
import embedReducer from './EmbedReducer'
const reducer = combineReducers({
  streams: streamReducer,
  channels: channelReducer,
  featured: embedReducer
})

export default reducer
