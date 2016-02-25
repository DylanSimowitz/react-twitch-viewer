module.exports = function(channels = [], action) {
  function channelExists() {
    if (channels.filter(channel => {return channel._id === action.id}).length > 0) {
      return true
    }
    return false
  }
  switch(action.type) {
    case 'ADD_CHANNEL': {
      if (channelExists()) {
        return channels;
      }
      return [
        action.channel,
        ...channels
      ]
    }
    case 'REMOVE_CHANNEL': {
      return channels.filter(channel => {
        return channel._id !== action.id
      })
    }
    case 'UPDATE_CHANNELS': {
      return action.channels
    }
    default: {
      return channels;
    }
  }
}
