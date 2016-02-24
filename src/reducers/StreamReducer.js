

module.exports = function(streams = [], action) {
  function streamExists() {
    if (streams.filter(stream => {return stream._id === action.id}).length > 0) {
      return true
    }
    return false
  }
  switch(action.type) {
    case 'ADD_STREAM': {
      if (streamExists()) {
        return streams;
      }
      return [
        action.stream,
        ...streams
      ]
    }
    case 'REMOVE_STREAM': {
      return streams.filter(stream => {
        return stream._id !== action.id
      })
    }
    default: {
      return streams;
    }
  }
}
